
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
      <section className="relative h-screen min-h-[850px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_30s_ease-in-out_infinite]"
          style={{ backgroundImage: `url('${baseUrl}Maison%20depuis%20la%20plage.jpg')` }}
        >
          {/* Darker overlay for better text contrast with new gold colors */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80"></div>
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 max-w-screen-2xl mx-auto pt-32">
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-6 duration-[1500ms]">
            <span className="text-white text-[11px] md:text-xs uppercase font-black tracking-[0.5em] inline-block text-shadow-subtle opacity-90">
              MORERÉ • BOIPEBA • BAHIA
            </span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-12 leading-none text-shadow-premium max-w-7xl animate-in fade-in slide-in-from-bottom-10 duration-[1500ms] delay-300 font-bold tracking-tightest">
            {t.hero.title}
          </h1>
          <p className="text-sand-100 text-xl md:text-3xl max-w-4xl mb-20 font-light leading-relaxed-extra text-shadow-subtle animate-in fade-in slide-in-from-bottom-12 duration-[1500ms] delay-500">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-8 animate-in fade-in zoom-in-95 duration-[1500ms] delay-700">
            <Link
              to="/booking"
              className="px-16 py-7 bg-white text-ocean-900 font-black text-[10px] uppercase tracking-luxury shadow-premium hover:bg-sand-50 transition-all duration-700 hover:-translate-y-2 hover:shadow-premium-hover"
            >
              {t.hero.cta1}
            </Link>
            <Link
              to="/house"
              className="px-16 py-7 bg-white/5 backdrop-blur-xl text-white font-black text-[10px] uppercase tracking-luxury hover:bg-white hover:text-ocean-900 transition-all duration-700 shadow-premium hover:-translate-y-2 hover:shadow-premium-hover"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-6 animate-bounce duration-[3000ms]">
          <span className="text-[9px] font-black uppercase tracking-[0.6em]">Explore</span>
          <div className="w-px h-24 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-ocean text-sand-50 py-40 relative z-10 shadow-premium">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-16">
            {[
              { icon: Waves, title: t.highlights.beachfront, desc: "The Atlantic at your door" },
              { icon: Users, title: t.highlights.capacity, desc: "Room for shared memories" },
              { icon: Sun, title: t.highlights.bedrooms, desc: "Eco-Architectural rest" },
              { icon: Wind, title: t.highlights.service, desc: "Personalized island care" }
            ].map((h, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-8 group">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/5 transition-all duration-700 group-hover:bg-white/10 group-hover:scale-110">
                  <h.icon className="w-8 h-8 text-sunlight transition-transform duration-700" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl mb-4 leading-tight font-medium tracking-tight text-white">{h.title}</h3>
                  <div className="h-px w-8 bg-sunlight/30 mx-auto mb-4 group-hover:w-16 transition-all duration-700"></div>
                  <p className="text-[10px] uppercase font-black tracking-luxury text-sand-200/60">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Story */}
      <section className="py-64 bg-offwhite overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-5 space-y-16 relative z-10">
            <div className="space-y-8">
              <span className="text-sunlight font-black text-[10px] uppercase tracking-[0.4em] block border-l-2 border-sunlight pl-6">The Essence</span>
              <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl text-ocean-900 leading-[0.9] font-black tracking-tightest">
                Where the <span className="italic font-normal text-sea font-serif">tide sets</span> the pace.
              </h2>
            </div>
            <div className="space-y-12 text-gray-600 leading-relaxed-extra text-xl font-light">
              <p>
                Casa Carolina Moreré is a sanctuary of wood and wind. Located in the quietest enclave of Boipeba, our home offers the ultimate luxury: absolute disconnect from the digital noise.
              </p>
              <p>
                Step out of your room directly onto the sand. Swim in coral-protected reefs. Live the true rhythm of Bahia.
              </p>
            </div>
            <div className="pt-8">
              <Link to="/house" className="inline-flex items-center gap-12 text-ocean-900 font-black text-[10px] uppercase tracking-luxury group border-b border-ocean/10 pb-8 hover:border-sunlight transition-all duration-700">
                Step inside the house
                <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-6 text-sunlight" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="aspect-[3/4] bg-sand-200 overflow-hidden shadow-premium relative z-10 group rounded-sm">
              <img src={`${baseUrl}maison%20sur%20la%20plage.JPG`} alt="House from beach" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-1000 group-hover:opacity-0"></div>
            </div>
            <div className="absolute -bottom-32 -left-32 w-full h-full bg-white z-0 hidden lg:block border border-gray-100/50"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
