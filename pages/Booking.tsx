
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLanguage } from '../App';
// Added ArrowRight to imports from lucide-react to fix the reference error on line 377
import { Calendar as CalendarIcon, Check, CheckCircle, AlertCircle, ChevronLeft, ChevronRight, Loader2, Info, X, Lock, CreditCard, ShieldCheck, MessageCircle, Mail, Sparkles, RefreshCw, Copy, ExternalLink, Settings, Download, ArrowRight } from 'lucide-react';
import {
  getCalendarGridDays,
  fetchBlockedDates,
  formatDate,
  isDateInRange,
  DayInfo
} from '../services/calendar';
import { sendConfirmationEmails } from '../services/email';
import { GOOGLE_CALENDAR_CONFIG } from '../constants';

// Stripe global declaration
declare global {
  interface Window {
    Stripe: any;
  }
}

const Booking: React.FC = () => {
  const { t } = useLanguage();
  const [step, setStep] = useState<'form' | 'processing' | 'payment' | 'success'>('form');
  const [showSync, setShowSync] = useState(false);
  const [processingStatus, setProcessingStatus] = useState('Syncing with the island...');

  // Calendar State
  const [currentDate, setCurrentDate] = useState(new Date());
  const [blockedDates, setBlockedDates] = useState<Set<string>>(new Set());
  const [loadingCalendar, setLoadingCalendar] = useState(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  // Selection State
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  // Focus management for keyboard navigation
  const dayRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    guests: '2',
    message: ''
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const loadAvailability = useCallback(async () => {
    setLoadingCalendar(true);
    const result = await fetchBlockedDates();
    setBlockedDates(result.dates);
    setLastSynced(result.lastSynced);
    setLoadingCalendar(false);
  }, []);

  useEffect(() => {
    loadAvailability();
  }, [currentDate, loadAvailability]);

  useEffect(() => {
    const handleFocus = () => loadAvailability();
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [loadAvailability]);

  const grid = getCalendarGridDays(currentDate.getFullYear(), currentDate.getMonth());
  const monthLabel = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  // Reset refs when month changes
  useEffect(() => {
    dayRefs.current = dayRefs.current.slice(0, grid.length);
  }, [grid]);

  const handleDayClick = (day: DayInfo) => {
    const isExternallyBlocked = blockedDates.has(day.dateString);
    if (isExternallyBlocked || day.isPast || loadingCalendar) return;

    setErrorMsg(null);
    if (startDate && endDate) { setStartDate(day.dateString); setEndDate(null); return; }
    if (!startDate) { setStartDate(day.dateString); return; }
    if (day.dateString === startDate) { setStartDate(null); return; }
    if (day.dateString < startDate) { setStartDate(day.dateString); return; }

    let valid = true;
    const start = new Date(startDate);
    const end = new Date(day.dateString);
    const tempDate = new Date(start);
    while (tempDate <= end) {
      if (blockedDates.has(formatDate(tempDate))) {
        valid = false;
        break;
      }
      tempDate.setDate(tempDate.getDate() + 1);
    }

    if (!valid) {
      setErrorMsg("Your selected range includes dates that are already reserved. Please choose another period.");
      return;
    }
    setEndDate(day.dateString);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const cols = 7;
    let nextIndex = index;

    switch (e.key) {
      case 'ArrowRight': nextIndex = Math.min(grid.length - 1, index + 1); break;
      case 'ArrowLeft': nextIndex = Math.max(0, index - 1); break;
      case 'ArrowDown': nextIndex = Math.min(grid.length - 1, index + cols); break;
      case 'ArrowUp': nextIndex = Math.max(0, index - cols); break;
      case 'Home': nextIndex = index - (index % cols); break;
      case 'End': nextIndex = index + (cols - 1 - (index % cols)); break;
      default: return;
    }

    e.preventDefault();
    dayRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) return;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.round((end.getTime() - start.getTime()) / (1000 * 3600 * 24));

    if (nights < GOOGLE_CALENDAR_CONFIG.MIN_NIGHTS) {
      setErrorMsg(`To maintain the tranquility of Moreré, we require a minimum stay of ${GOOGLE_CALENDAR_CONFIG.MIN_NIGHTS} nights.`);
      return;
    }

    setStep('processing');
    const stages = ["Confirming island availability...", "Securing your time slot...", "Preparing secure payment gateway..."];
    stages.forEach((msg, i) => setTimeout(() => setProcessingStatus(msg), i * 800));
    setTimeout(() => { setStep('payment'); window.scrollTo(0, 0); }, stages.length * 800);
  };

  const totalNights = calculateNights(startDate, endDate);
  const totalPrice = 2450 * totalNights;

  function calculateNights(start: string | null, end: string | null) {
    if (!start || !end) return 0;
    const s = new Date(start);
    const e = new Date(end);
    return Math.round((e.getTime() - s.getTime()) / (1000 * 3600 * 24));
  }

  const handleStripePayment = async () => {
    setStep('processing');
    setProcessingStatus("Creating secure checkout session...");

    try {
      // Call our serverless API to create a Stripe Checkout Session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nights: totalNights,
          totalPrice: totalPrice,
          checkIn: startDate,
          checkOut: endDate,
          guestName: formData.name,
          guestEmail: formData.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();

      setProcessingStatus("Redirecting to Stripe...");

      // Redirect to Stripe Checkout
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }

    } catch (err: any) {
      console.error('Payment Error:', err);
      setErrorMsg(err.message || "Payment process interrupted. Please contact support or try again.");
      setStep('payment');
    }
  };

  const getDayAriaLabel = (day: DayInfo) => {
    const isExternallyBlocked = blockedDates.has(day.dateString);
    const dateStr = day.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    let status = "Available";
    if (day.isPast) status = "Past date";
    else if (isExternallyBlocked) status = "Reserved";
    else if (day.dateString === startDate) status = "Selected arrival date";
    else if (day.dateString === endDate) status = "Selected departure date";
    else if (isDateInRange(day.dateString, startDate, endDate)) status = "Part of selected range";

    return `${dateStr}, ${status}`;
  };

  return (
    <div className="bg-offwhite min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

        {/* Left: Calendar Component */}
        <div className="lg:col-span-7">
          <div className="flex justify-between items-end mb-12">
            <div className={`${step !== 'form' ? 'opacity-30 transition-opacity' : ''}`}>
              <span className="text-sunlight font-black text-[10px] uppercase tracking-[0.4em] block mb-3 border-l-2 border-sunlight pl-4">Live Calendar</span>
              <h1 className="font-serif text-5xl text-ocean-900 leading-tight font-bold">{t.booking.title}</h1>
              <div className="flex items-center gap-2 mt-4" aria-live="polite" aria-atomic="true">
                <div className={`w-1.5 h-1.5 rounded-full ${loadingCalendar ? 'bg-sunlight animate-pulse' : 'bg-green-500'}`} aria-hidden="true"></div>
                <span className="text-[9px] uppercase font-black tracking-widest text-gray-400">
                  {loadingCalendar ? 'Syncing...' : `Last Updated: ${lastSynced || 'Checking...'}`}
                </span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowSync(!showSync)}
                aria-expanded={showSync}
                aria-label="Channel Sync Manager"
                className={`p-3 rounded-full transition-all border shadow-sm ${showSync ? 'bg-ocean text-white border-ocean' : 'bg-white text-gray-400 border-gray-100 hover:text-ocean'} focus:outline-none focus:ring-2 focus:ring-ocean`}
              >
                <Settings size={18} />
              </button>
              {(startDate || endDate) && step === 'form' && (
                <button
                  onClick={() => { setStartDate(null); setEndDate(null); setErrorMsg(null); }}
                  className="text-[10px] font-black uppercase tracking-luxury text-gray-400 hover:text-ocean flex items-center gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-offset-4"
                >
                  <X size={16} /> Reset Selection
                </button>
              )}
            </div>
          </div>

          <div className={`bg-white border border-gray-100 rounded-sm shadow-xl p-10 mb-8 relative overflow-hidden transition-all duration-700 ${step !== 'form' ? 'opacity-30 pointer-events-none grayscale' : ''}`}>
            {loadingCalendar && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-20 flex items-center justify-center" aria-hidden="true">
                <div className="text-center">
                  <Loader2 className="w-12 h-12 text-ocean animate-spin mb-4 mx-auto" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-ocean-900/60">Fetching Master Feed...</span>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mb-12">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
                aria-label="Previous Month"
                className="p-3 hover:bg-sand-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="text-center">
                <h3 className="font-serif text-3xl font-bold text-ocean-900 tracking-tight" aria-live="polite" aria-atomic="true">
                  {monthLabel}
                </h3>
              </div>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
                aria-label="Next Month"
                className="p-3 hover:bg-sand-50 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-ocean"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-y-2" role="grid" aria-label={`Calendar for ${monthLabel}`}>
              <div role="row" className="contents">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} role="columnheader" className="text-center text-[10px] font-black text-gray-400 py-4 uppercase tracking-widest">
                    {d.charAt(0)}
                  </div>
                ))}
              </div>
              <div role="row" className="contents">
                {grid.map((day, i) => {
                  const isStart = day.dateString === startDate;
                  const isEnd = day.dateString === endDate;
                  const inRange = isDateInRange(day.dateString, startDate, endDate);
                  const isExternallyBlocked = blockedDates.has(day.dateString);
                  const isBlocked = isExternallyBlocked || day.isPast;

                  const isFirstOfMonth = day.isCurrentMonth && day.date.getDate() === 1;
                  const tabIndex = isFirstOfMonth || (day.isToday && day.isCurrentMonth) ? 0 : -1;

                  return (
                    <button
                      key={`${day.dateString}-${i}`}
                      ref={el => dayRefs.current[i] = el}
                      onClick={() => handleDayClick(day)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      disabled={isBlocked || loadingCalendar}
                      aria-label={getDayAriaLabel(day)}
                      aria-pressed={isStart || isEnd || inRange}
                      aria-disabled={isBlocked}
                      aria-current={day.isToday ? 'date' : undefined}
                      tabIndex={tabIndex}
                      className={`aspect-square flex items-center justify-center text-sm relative transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ocean focus:ring-inset rounded-sm ${isBlocked ? 'bg-blocked-pattern cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <span className={`w-12 h-12 flex items-center justify-center rounded-sm z-10 text-[13px] transition-all duration-300 ${isStart || isEnd
                          ? 'bg-ocean text-white shadow-xl scale-110 font-bold'
                          : inRange
                            ? 'bg-ocean-100 text-ocean font-bold'
                            : isBlocked
                              ? 'text-gray-500 font-medium'
                              : 'text-ocean-900 font-medium hover:bg-ocean-50 hover:text-ocean hover:scale-110'
                        }`}>
                        {day.date.getDate()}
                      </span>
                      {isExternallyBlocked && (
                        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-sunlight/60 rounded-full" aria-hidden="true"></div>
                      )}
                      {day.isToday && (
                        <div className="absolute bottom-1 w-1 h-1 bg-ocean rounded-full" aria-hidden="true"></div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {errorMsg && (
            <div
              className="p-6 bg-red-50 text-red-700 rounded-sm text-xs font-bold uppercase tracking-widest flex items-center gap-4 animate-in fade-in slide-in-from-top-4 mb-10 border border-red-200 shadow-sm"
              role="alert"
            >
              <AlertCircle size={20} className="shrink-0" />
              <p className="leading-relaxed">{errorMsg}</p>
              <button onClick={() => setErrorMsg(null)} aria-label="Dismiss error" className="ml-auto text-red-400 hover:text-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400 p-1">
                <X size={16} />
              </button>
            </div>
          )}

          <div className="flex gap-8 opacity-60" aria-hidden="true">
            <div className="flex items-center gap-3"><div className="w-4 h-4 bg-ocean-100 border border-ocean/20"></div> <span className="text-[10px] uppercase font-black tracking-widest text-ocean-900">Available</span></div>
            <div className="flex items-center gap-3"><div className="w-4 h-4 bg-blocked-pattern border border-gray-200"></div> <span className="text-[10px] uppercase font-black tracking-widest text-sunlight">Reserved</span></div>
            <div className="flex items-center gap-3"><div className="w-4 h-4 bg-ocean rounded-sm"></div> <span className="text-[10px] uppercase font-black tracking-widest text-ocean">Selected</span></div>
          </div>
        </div>

        {/* Right: Interaction Sidebar */}
        <div className="lg:col-span-5">
          {step === 'form' && (
            <div className="bg-white p-12 rounded-sm shadow-2xl border-t-[12px] border-ocean sticky top-32 animate-in fade-in slide-in-from-right-8 duration-700">
              <h2 className="font-serif text-4xl text-ocean-900 mb-2 font-bold leading-tight">Your Sanctuary</h2>
              <p className="text-gray-500 text-xs uppercase tracking-luxury mb-10 font-bold opacity-60">Direct booking: Best rate guaranteed</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="full-name" className="text-[11px] font-bold uppercase tracking-premium text-ocean-900 block ml-1">Full Name</label>
                  <input id="full-name" type="text" placeholder="John Doe" required className="w-full p-4 bg-white border border-gray-300 rounded-sm text-base text-ocean-900 placeholder:text-gray-400 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none transition-all shadow-sm" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-premium text-ocean-900 block ml-1">Email Address</label>
                  <input id="email" type="email" placeholder="john@example.com" required className="w-full p-4 bg-white border border-gray-300 rounded-sm text-base text-ocean-900 placeholder:text-gray-400 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none transition-all shadow-sm" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-premium text-ocean-900 block ml-1">WhatsApp / Phone</label>
                  <input id="phone" type="tel" placeholder="+55 WhatsApp" required className="w-full p-4 bg-white border border-gray-300 rounded-sm text-base text-ocean-900 placeholder:text-gray-400 focus:border-ocean focus:ring-2 focus:ring-ocean/10 outline-none transition-all shadow-sm" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                </div>
                <button
                  type="submit"
                  disabled={!startDate || !endDate}
                  className="w-full py-6 bg-ocean text-white font-black uppercase tracking-luxury shadow-2xl disabled:bg-gray-100 disabled:text-gray-400 transition-all hover:bg-ocean-800 focus:outline-none focus:ring-4 focus:ring-ocean/20 flex items-center justify-center gap-3"
                >
                  Confirm Dates <ArrowRight size={16} />
                </button>
              </form>
            </div>
          )}

          {step === 'processing' && (
            <div className="bg-white p-16 rounded-sm shadow-2xl text-center sticky top-32 min-h-[500px] flex flex-col items-center justify-center" aria-live="assertive">
              <Loader2 className="w-16 h-16 text-ocean animate-spin mb-12" />
              <p className="text-ocean-900 text-[11px] font-black uppercase tracking-[0.4em] animate-pulse max-w-[250px] mx-auto">{processingStatus}</p>
            </div>
          )}

          {step === 'payment' && (
            <div className="bg-white p-12 rounded-sm shadow-2xl border-t-[12px] border-sunlight sticky top-32 animate-in fade-in slide-in-from-right-8 duration-700">
              <div className="flex items-center gap-3 mb-8">
                <CreditCard className="text-sunlight" size={24} />
                <h2 className="font-serif text-4xl text-ocean-900 font-bold">Booking Summary</h2>
              </div>

              <div className="mb-10 p-8 bg-offwhite rounded-sm space-y-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-black text-gray-400 block mb-1">Check-in</span>
                    <span className="text-sm font-bold text-ocean-900">{startDate}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-black text-gray-400 block mb-1">Check-out</span>
                    <span className="text-sm font-bold text-ocean-900">{endDate}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">Guests</span>
                  <span className="font-bold text-ocean-900">{formData.guests} Travellers</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-medium">Nights</span>
                  <span className="font-bold text-ocean-900">{totalNights} nights</span>
                </div>

                <div className="pt-6 border-t border-gray-200 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-ocean-900 opacity-40">Total Amount</span>
                    <span className="text-sm text-gray-400 italic">BRL (Brazilian Real)</span>
                  </div>
                  <span className="text-4xl font-serif text-ocean font-bold">R$ {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleStripePayment}
                  className="w-full py-6 bg-ocean text-white font-black uppercase tracking-luxury shadow-2xl hover:bg-black transition-all focus:outline-none focus:ring-4 focus:ring-ocean/20 flex items-center justify-center gap-4"
                >
                  <Lock size={16} /> Pay Securely with Stripe
                </button>
                <button
                  onClick={() => setStep('form')}
                  className="w-full py-4 text-[10px] font-black uppercase tracking-luxury text-gray-400 hover:text-ocean transition-colors"
                >
                  Go Back & Edit Details
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale">
                <ShieldCheck size={20} />
                <span className="text-[10px] uppercase font-black tracking-widest">SSL Encrypted Transaction</span>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="bg-white p-12 rounded-sm border-2 border-ocean shadow-2xl text-center sticky top-32 animate-in zoom-in-95 duration-1000" role="alert">
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-xl">
                <Sparkles className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="font-serif text-4xl text-ocean-900 mb-6 font-bold leading-tight">Moreré is Calling</h2>
              <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your payment was successful. We've sent the details to your email and our staff has been notified.
              </p>
              <button onClick={() => window.location.reload()} className="w-full py-5 border-2 border-ocean text-ocean font-black text-[10px] uppercase tracking-luxury hover:bg-ocean hover:text-white transition-all rounded-sm focus:outline-none focus:ring-2 focus:ring-ocean">
                Back to Website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
