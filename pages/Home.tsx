
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
        {/* Background with subtle zoom */}
        <div className="absolute inset-0">
          <img
            src={`${baseUrl}Maison%20depuis%20la%20plage.jpg`}
            alt="Casa Carolina Moreré"
            className="w-full h-full object-cover scale-105"
            style={{ animation: 'scale-in 20s ease-out forwards' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6 max-w-6xl mx-auto pt-24">
          <span className="text-white/80 text-[11px] uppercase font-semibold tracking-[0.5em] mb-8 animate-fade-in-up">
            Moreré • Boipeba • Bahia
          </span>

          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-none text-shadow-premium max-w-5xl font-medium tracking-tight animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            {t.hero.title}
          </h1>

          <p
            className="text-white/80 text-lg md:text-2xl max-w-3xl mb-16 font-light leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            {t.hero.subtitle}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-5 animate-fade-in-up"
            style={{ animationDelay: '600ms' }}
          >
            <Link
              to="/booking"
              className="px-10 py-5 bg-white text-ocean-900 font-semibold text-[11px] uppercase tracking-[0.15em] hover-lift shadow-premium rounded-sm"
            >
              {t.hero.cta1}
            </Link>
            <Link
              to="/house"
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-semibold text-[11px] uppercase tracking-[0.15em] border border-white/20 hover:bg-white hover:text-ocean-900 transition-all duration-500 hover-lift rounded-sm"
            >
              {t.hero.cta2}
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-float">
          <span className="text-white/50 text-[9px] uppercase tracking-[0.3em] font-medium">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-ocean text-white py-24 md:py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { icon: Waves, title: t.highlights.beachfront, desc: "The Atlantic at your door" },
              { icon: Users, title: t.highlights.capacity, desc: "Room for shared memories" },
              { icon: Sun, title: t.highlights.bedrooms, desc: "Eco-architectural rest" },
              { icon: Wind, title: t.highlights.service, desc: "Personalized island care" }
            ].map((h, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/5 mb-6 transition-all duration-500 group-hover:bg-white/10 group-hover:scale-110">
                  <h.icon className="w-6 h-6 text-sunlight" />
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-2 leading-snug font-medium">{h.title}</h3>
                <div className="w-6 h-px bg-sunlight/40 mb-3 group-hover:w-10 transition-all duration-500" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-medium">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Story */}
      <section className="py-32 md:py-48 bg-offwhite overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <span className="text-sunlight font-semibold text-[11px] uppercase tracking-[0.3em] border-l-2 border-sunlight pl-4">The Essence</span>
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-ocean-900 leading-none font-medium tracking-tight">
                Where the <span className="italic text-sea">tide sets</span> the pace
              </h2>
            </div>
            <div className="space-y-6 text-gray-600 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              <p>
                Casa Carolina Moreré is a sanctuary of wood and wind. Located in the quietest enclave of Boipeba, our home offers the ultimate luxury: absolute disconnect from the digital noise.
              </p>
              <p>
                Step out of your room directly onto the sand. Swim in coral-protected reefs. Live the true rhythm of Bahia.
              </p>
            </div>
            <Link
              to="/house"
              className="inline-flex items-center gap-4 text-ocean-900 font-semibold text-[11px] uppercase tracking-[0.15em] group underline-anim pb-2"
            >
              Step inside the house
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2 text-sunlight" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] image-reveal rounded-sm shadow-premium">
              <img
                src={`${baseUrl}maison%20sur%20la%20plage.JPG`}
                alt="House from beach"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-sunlight/20 rounded-sm hidden lg:block" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
