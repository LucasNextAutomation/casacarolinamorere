
import React from 'react';
import { useLanguage } from '../App';
import { Palmtree, Anchor, Utensils, Smile, Waves, Compass } from 'lucide-react';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const baseUrl = "https://casacarolinamorere-media.s3.fr-par.scw.cloud/";

  const journeys = [
    {
      title: "Bainema Beach",
      tag: "Wild Paradise",
      desc: "A 20-minute walk through palm groves leads to Bainema, a vast, desert beach protected by a barrier of corals. At low tide, mirrors of water reflect the clouds.",
      images: ["plagebeau.jpeg", "plagesympa.jpeg", "Bainema.jpg"]
    },
    {
      title: "Moreré Village",
      tag: "Slow Living",
      desc: "Moreré is a village of sand paths. No cars, just the sound of the wind and the warmth of the locals. Life moves as slow as the tides here.",
      images: ["IslandImage3662.jpg", "IslandImage3673.jpg", "IslandImage3754.jpg"]
    },
    {
      title: "Ocean Wonders",
      tag: "Marine Life",
      desc: "Explore the natural pools (Piscines Naturelles) teeming with tropical fish, or witness the majestic humpback whales that visit our coast during the winter months.",
      images: ["IslandImage4598.jpg", "IslandImage4790.jpg", "mangrove.jpg"]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          src={`${baseUrl}mer%20devant%20la%20maison.jpg`}
          className="absolute inset-0 w-full h-full object-cover"
          alt="Experience background"
        />
        <div className="relative z-20 text-center px-6">
          <span className="text-sunlight font-bold text-xs uppercase tracking-[0.3em] mb-4 block">The Island</span>
          <h1 className="font-serif text-5xl md:text-8xl text-white mb-6">Experience</h1>
        </div>
      </section>

      {/* Journeys */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-48">
        {journeys.map((journey, idx) => (
          <div key={idx} className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`lg:col-span-5 space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="space-y-4">
                <span className="text-sunlight font-bold text-xs uppercase tracking-luxury">{journey.tag}</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ocean leading-tight">{journey.title}</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                {journey.desc}
              </p>
              <div className="flex gap-4 pt-4">
                <div className="p-4 bg-offwhite rounded-full text-ocean"><Waves size={24} /></div>
                <div className="p-4 bg-offwhite rounded-full text-ocean"><Compass size={24} /></div>
              </div>
            </div>

            <div className={`lg:col-span-7 grid grid-cols-2 gap-4 h-[600px] ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="h-full overflow-hidden rounded-sm">
                <img
                  src={`${baseUrl}${journey.images[0]}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt={journey.title}
                />
              </div>
              <div className="space-y-4 h-full">
                <div className="h-[48%] overflow-hidden rounded-sm">
                  <img
                    src={`${baseUrl}${journey.images[1]}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    alt={journey.title}
                  />
                </div>
                <div className="h-[48%] overflow-hidden rounded-sm">
                  <img
                    src={`${baseUrl}${journey.images[2]}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    alt={journey.title}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Island Gallery Section */}
      <section className="py-32 bg-ocean-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <span className="text-sunlight font-black text-[11px] uppercase tracking-luxury block mb-6">Island Moments</span>
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-tighter font-bold">Captured in Time</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-8 px-6">
          {[
            "IslandImage0939.jpg",
            "IslandImage2956.jpg",
            "IslandImage3212.jpg",
            "IslandImage3606.jpg",
            "IslandImage4081.jpg",
            "IslandImage4598.jpg",
            "IslandImage4790.jpg",
            "IslandImage4852.jpg",
            "IslandImage4868.jpg",
            "IslandImage4881.jpg",
            "IslandImage4882.jpg",
            "IslandImage4901.jpg",
            "IslandImage6078.jpg",
            "IslandImage6636.jpg",
            "IslandImage6983.jpg",
            "IslandImage6986.jpg",
            "IslandImage7271.jpg",
            "IslandImage7273.jpg",
            "IslandImage7646.jpg",
            "IslandImage7647.jpg",
            "IslandImage9290.jpg"
          ].map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 h-96 md:w-96 md:h-[500px] overflow-hidden rounded-sm group relative"
            >
              <img
                src={`${baseUrl}${img}`}
                alt={`Island moment ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Staff Section Refined */}
      <section className="bg-offwhite py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="aspect-square bg-sand rounded-sm overflow-hidden shadow-2xl">
                <img src={`${baseUrl}cuisine.jpg`} className="w-full h-full object-cover opacity-90" alt="Local hospitality" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-ocean text-white p-8 rounded-sm shadow-xl max-w-xs">
                <p className="font-serif italic text-lg leading-relaxed mb-4">
                  "Our staff are the heart of Casa Carolina. Zil's Moqueca is legendary among our guests."
                </p>
                <span className="text-[10px] uppercase font-bold tracking-luxury text-sunlight">Hospitality with Soul</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="font-serif text-4xl text-ocean mb-8 leading-tight">Bahian Hospitality</h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
                Experience the true meaning of 'Bem-vindo'. Our caretaker Ronaldo ensures every detail of your arrival—from boat transfers to luggage assistance—is handled with care.
              </p>
              <div className="space-y-6">
                {[
                  "Daily housekeeping & breakfast setup",
                  "Personal coordination for island transfers",
                  "Chef services for local Bahian seafood dinners",
                  "Insider tips on the best coral reefs"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-gray-700">
                    <div className="w-2 h-2 bg-sunlight rounded-full"></div>
                    <span className="text-sm font-medium leading-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;