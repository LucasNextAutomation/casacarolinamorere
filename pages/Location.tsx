
import React from 'react';
import { useLanguage } from '../App';
import { Plane, Bus, Ship, MapPin } from 'lucide-react';

const Location: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white min-h-screen">
       <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-20">
            <span className="text-sunlight font-bold text-[11px] uppercase tracking-[0.5em] mb-4 block">Boipeba, Bahia</span>
            <h1 className="font-serif text-6xl md:text-8xl text-ocean-900 mb-4 leading-tightest font-bold tracking-tightest">{t.nav.location}</h1>
            <p className="text-gray-400 text-xs uppercase tracking-[0.3em]">Praia de Moreré, Ilha de Boipeba, Bahia, Brazil</p>
          </div>

          {/* Google Map Embed */}
          <div className="w-full h-[600px] bg-gray-100 rounded-sm mb-24 overflow-hidden shadow-2xl border border-gray-200 relative group">
             <iframe 
               width="100%" 
               height="100%" 
               frameBorder="0" 
               scrolling="no" 
               marginHeight={0} 
               marginWidth={0} 
               src="https://maps.google.com/maps?q=Praia%20de%20Morer%C3%A9%2C%20Ilha%20de%20Boipeba%2C%20Bahia&t=&z=15&ie=UTF8&iwloc=&output=embed"
               title="Casa Carolina Location"
               className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
             ></iframe>
             <div className="absolute bottom-8 right-8 bg-ocean text-white px-8 py-4 shadow-2xl rounded-sm text-xs font-bold uppercase tracking-widest pointer-events-none">
                Casa Carolina Moreré
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
             <div className="lg:col-span-7">
                <h2 className="font-serif text-5xl md:text-6xl text-ocean-900 mb-12 leading-tight font-bold tracking-tight">The Art of Getting Here</h2>
                <p className="text-gray-600 mb-16 leading-relaxed-extra text-xl md:text-2xl font-light">
                   Boipeba is an island with no cars and no bridge to the mainland. 
                   Getting here is part of the adventure. The logistics require a bit of planning, 
                   but the reward is absolute peace in the heart of Bahia.
                </p>

                <div className="space-y-12">
                   <div className="flex gap-8 group">
                      <div className="bg-offwhite p-5 h-fit rounded-full group-hover:bg-ocean group-hover:text-white transition-all duration-500"><Plane className="w-8 h-8 text-ocean group-hover:text-white" /></div>
                      <div>
                         <h3 className="text-xl font-bold text-ocean-900 mb-3 uppercase tracking-premium">By Airstreams</h3>
                         <p className="text-lg md:text-xl text-gray-600 leading-relaxed-extra font-light">
                            From Salvador (SSA) airport directly to Boipeba airstrip (~30 min). 
                            One of the most scenic flights in Brazil. Departures typically at 08:30, 12:30, and 15:30.
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-8 group">
                      <div className="bg-offwhite p-5 h-fit rounded-full group-hover:bg-ocean group-hover:text-white transition-all duration-500"><Ship className="w-8 h-8 text-ocean group-hover:text-white" /></div>
                      <div>
                         <h3 className="text-xl font-bold text-ocean-900 mb-3 uppercase tracking-premium">By Sea & Land</h3>
                         <p className="text-lg md:text-xl text-gray-600 leading-relaxed-extra font-light">
                            Catamaran from Salvador to Morro de São Paulo, then a 4x4 or private boat to the south tip, arriving at Boipeba village.
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-8 group">
                      <div className="bg-offwhite p-5 h-fit rounded-full group-hover:bg-ocean group-hover:text-white transition-all duration-500"><Bus className="w-8 h-8 text-ocean group-hover:text-white" /></div>
                      <div>
                         <h3 className="text-xl font-bold text-ocean-900 mb-3 uppercase tracking-premium">The Local Route</h3>
                         <p className="text-lg md:text-xl text-gray-600 leading-relaxed-extra font-light">
                            Ferry to Itaparica followed by a bus or private taxi to Valença, then a speedboat through the mangroves to Boipeba. 
                            (~4-5 hours).
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-5">
                <div className="bg-sand/20 p-12 rounded-sm h-fit sticky top-48 border border-sand/30 shadow-sm">
                   <h3 className="font-serif text-3xl text-ocean-900 mb-10 leading-tight font-bold tracking-tight">Essential Island Tips</h3>
                   <ul className="space-y-8">
                      <li className="flex flex-col gap-2">
                        <strong className="text-[11px] uppercase font-bold tracking-luxury text-sunlight">Groceries</strong>
                        <p className="text-lg text-gray-700 leading-relaxed font-light italic">The village mini-markets have the basics. For specialty items, Valença is your best bet before boarding.</p>
                      </li>
                      <li className="flex flex-col gap-2">
                        <strong className="text-[11px] uppercase font-bold tracking-luxury text-sunlight">Luggage</strong>
                        <p className="text-lg text-gray-700 leading-relaxed font-light italic">Leave the heavy rolling suitcases at home. Soft bags or backpacks are much easier on the sandy village paths.</p>
                      </li>
                      <li className="flex flex-col gap-2">
                        <strong className="text-[11px] uppercase font-bold tracking-luxury text-sunlight">Tides & Connectivity</strong>
                        <p className="text-lg text-gray-700 leading-relaxed font-light italic">Everything follows the tide here. Bring some cash (Reais) as card machine connectivity can be intermittent during storms.</p>
                      </li>
                   </ul>
                   <div className="mt-12 pt-10 border-t border-sand/40">
                      <p className="text-xs text-ocean-900/50 uppercase font-bold tracking-widest text-center">We will help you coordinate your arrival transfers personally.</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Location;
