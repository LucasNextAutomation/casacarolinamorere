
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { Wind, Users, Waves, Sun, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const baseUrl = "https://casacarolinamorere-media.s3.fr-par.scw.cloud/";

  return (
    <div className="-mt-32">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[750px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ backgroundImage: `url('${baseUrl}Maison%20depuis%20la%20plage.jpg')` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 max-w-7xl mx-auto pt-24">
          <div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="text-white text-[10px] md:text-xs uppercase font-black tracking-luxury text-shadow-subtle inline-block bg-white/10 backdrop-blur-md px-6 py-3 border border-white/20">
              MORERÉ • BOIPEBA • BAHIA
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white mb-10 leading-tightest text-shadow-premium max-w-6xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-black tracking-tightest">
            {t.hero.title}
          </h1>
          <p className="text-white/95 text-xl md:text-2xl max-w-3xl mb-16 font-light leading-relaxed-extra text-shadow-subtle animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <Link 
              to="/booking" 
              className="px-14 py-6 bg-white text-ocean font-black text-[11px] uppercase tracking-luxury hover:bg-sand-100 transition-all duration-500 shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              {t.hero.cta1}
            </Link>
            <Link 
              to="/house" 
              className="px-14 py-6 bg-white/10 backdrop-blur-md border border-white/30 text-white font-black text-[11px] uppercase tracking-luxury hover:bg-white hover:text-ocean transition-all duration-500 shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-4 animate-bounce">
          <span className="text-[9px] font-black uppercase tracking-[0.4em]">Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-ocean-900 text-white py-32 relative z-10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12">
            {[
              { icon: Waves, title: t.highlights.beachfront, desc: "The Atlantic at your door" },
              { icon: Users, title: t.highlights.capacity, desc: "Room for shared memories" },
              { icon: Sun, title: t.highlights.bedrooms, desc: "Eco-Architectural rest" },
              { icon: Wind, title: t.highlights.service, desc: "Personalized island care" }
            ].map((h, i) => (
              <div key={i} className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 group">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-sm border border-white/10 group-hover:border-sand group-hover:bg-white/10 transition-all duration-500">
                  <h.icon className="w-8 h-8 text-sand transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-tight font-bold tracking-tight">{h.title}</h3>
                  <p className="text-[9px] uppercase font-black tracking-luxury text-white/40 italic">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Story */}
      <section className="py-56 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6 space-y-14 relative z-10">
            <div className="space-y-6">
              <span className="text-sunlight font-black text-[11px] uppercase tracking-luxury block border-l-2 border-sunlight pl-5">The Essence</span>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ocean-900 leading-tightest font-black tracking-tightest">
                Where the <span className="italic font-normal text-sea">tide sets</span> the pace.
              </h2>
            </div>
            <div className="space-y-12 text-gray-700 leading-relaxed-extra text-xl md:text-2xl font-light max-w-xl">
              <p>
                Casa Carolina Moreré is a sanctuary of wood and wind. Located in the quietest enclave of Boipeba, our home offers the ultimate luxury: absolute disconnect from the digital noise.
              </p>
              <p>
                Step out of your room directly onto the sand. Swim in coral-protected reefs. Live the true rhythm of Bahia.
              </p>
            </div>
            <div className="pt-8">
              <Link to="/house" className="inline-flex items-center gap-10 text-ocean font-black text-[11px] uppercase tracking-luxury group border-b-2 border-ocean/10 pb-6 hover:border-ocean transition-all duration-500">
                Step inside the house
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-5 text-sunlight" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
             <div className="aspect-[4/5] bg-sand-50 overflow-hidden rounded-sm shadow-[0_80px_160px_-40px_rgba(0,0,0,0.25)] relative z-10 group">
                <img src={`${baseUrl}maison%20sur%20la%20plage.JPG`} alt="House from beach" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
             </div>
             <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-offwhite z-0 hidden lg:block border border-gray-100 shadow-sm"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
