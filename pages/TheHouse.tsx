
import React from 'react';
import { useLanguage } from '../App';
import { ArrowDown } from 'lucide-react';

// Translations for the House page
const houseTranslations = {
  en: {
    pageTitle: "The House",
    pageSubtitle: "The Property",
    sections: {
      social: { title: "Social Spaces", subtitle: "Living & Dining", desc: "The ground floor is a vast open-air pavilion connecting the kitchen and lounge to the beach deck." },
      suites: { title: "The Bedrooms", subtitle: "5 Private Rooms", desc: "Five sleeping areas crafted with local wood, catching the Atlantic trade winds." },
      bathrooms: { title: "The Bathrooms", subtitle: "Craftsmanship", desc: "Hand-finished wood, stone surfaces, and solar-heated water." },
      terraces: { title: "The Terraces", subtitle: "Views & Horizons", desc: "Multiple outdoor spaces with unique vantage points over the Moreré reef." }
    },
    cta: { tag: "Your Journey Starts Here", title: "Ready to experience Moreré?", desc: "The house is open year-round.", button: "Book your stay" }
  },
  pt: {
    pageTitle: "A Casa",
    pageSubtitle: "A Propriedade",
    sections: {
      social: { title: "Espaços Sociais", subtitle: "Sala & Jantar", desc: "O térreo conecta a cozinha e a sala ao deck da praia." },
      suites: { title: "Os Quartos", subtitle: "5 Quartos", desc: "Cinco áreas de descanso com madeira local e brisa do mar." },
      bathrooms: { title: "Os Banheiros", subtitle: "Artesanato", desc: "Madeira artesanal, pedra e água solar." },
      terraces: { title: "Os Terraços", subtitle: "Vistas", desc: "Espaços ao ar livre com vistas sobre o recife." }
    },
    cta: { tag: "Sua Jornada Começa Aqui", title: "Pronto para Moreré?", desc: "Aberta o ano todo.", button: "Reserve" }
  },
  fr: {
    pageTitle: "La Maison",
    pageSubtitle: "La Propriété",
    sections: {
      social: { title: "Espaces de Vie", subtitle: "Salon & Salle à Manger", desc: "Le rez-de-chaussée relie cuisine et salon à la terrasse." },
      suites: { title: "Les Chambres", subtitle: "5 Chambres", desc: "Cinq espaces de repos avec bois local et brise marine." },
      bathrooms: { title: "Les Salles de Bain", subtitle: "Artisanat", desc: "Bois artisanal, pierre et eau solaire." },
      terraces: { title: "Les Terrasses", subtitle: "Vues", desc: "Espaces extérieurs avec vues sur le récif." }
    },
    cta: { tag: "Votre Voyage Commence", title: "Prêt pour Moreré?", desc: "Ouverte toute l'année.", button: "Réserver" }
  },
  es: {
    pageTitle: "La Casa",
    pageSubtitle: "La Propiedad",
    sections: {
      social: { title: "Espacios Sociales", subtitle: "Sala & Comedor", desc: "La planta baja conecta cocina y sala con la terraza." },
      suites: { title: "Los Dormitorios", subtitle: "5 Habitaciones", desc: "Cinco áreas de descanso con madera local y brisa marina." },
      bathrooms: { title: "Los Baños", subtitle: "Artesanía", desc: "Madera artesanal, piedra y agua solar." },
      terraces: { title: "Las Terrazas", subtitle: "Vistas", desc: "Espacios al aire libre con vistas al arrecife." }
    },
    cta: { tag: "Tu Viaje Comienza", title: "¿Listo para Moreré?", desc: "Abierta todo el año.", button: "Reservar" }
  }
};

const TheHouse: React.FC = () => {
  const { language } = useLanguage();
  const t = houseTranslations[language as keyof typeof houseTranslations] || houseTranslations.en;
  const baseUrl = "https://casacarolinamorere-media.s3.fr-par.scw.cloud/";

  // Using EXACT filenames from the bucket
  const sections = [
    {
      id: "social",
      ...t.sections.social,
      images: [
        "salonprincipal.jpeg",
        "salon1.jpeg",
        "salon2.jpeg",
        "deuxiemesalon.jpeg",
        "salon (1).JPG",
        "salon 1.JPG",
        "Salon.jpg",
        "cuisine.jpg",
        "panorama rdc.jpg",
        "RDC de la maison.jpg"
      ]
    },
    {
      id: "suites",
      ...t.sections.suites,
      images: [
        "Chambre 1.jpg",
        "Chambre 2.JPG",
        "Chambre 3.JPG",
        "chambre 4.jpg",
        "chambre 5.JPG"
      ]
    },
    {
      id: "bathrooms",
      ...t.sections.bathrooms,
      images: [
        "SDB.jpg",
        "SDB 2.jpg",
        "sdb nous.jpg",
        "sddouche rdc.JPG"
      ]
    },
    {
      id: "terraces",
      ...t.sections.terraces,
      images: [
        "TerrasseEnBas.jpeg",
        "terrasse 1er etage.JPG",
        "terrasse.JPG",
        "terrasse morere.jpg",
        "Terrasse sur la mer.jpg",
        "Terrasse sur mer.jpg",
        "teraase sur mer.JPG",
        "maison sur la plage.JPG"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${baseUrl}Maison depuis la plage.jpg`}
            className="w-full h-full object-cover"
            alt="Casa Carolina"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-sunlight font-semibold text-[11px] uppercase tracking-[0.3em] mb-6 block animate-fade-in-up">{t.pageSubtitle}</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 text-shadow-premium leading-none font-medium tracking-tight animate-fade-in-up" style={{ animationDelay: '150ms' }}>{t.pageTitle}</h1>
          <ArrowDown className="w-5 h-5 text-white/50 mx-auto mt-16 animate-float" />
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-16 glass z-30 border-b border-gray-100/50 shadow-sm hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-center gap-12">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="text-[10px] uppercase font-semibold tracking-[0.2em] text-gray-500 hover:text-ocean transition-colors underline-anim pb-1">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section key={section.id} id={section.id} className={`py-20 md:py-28 ${idx % 2 === 1 ? 'bg-offwhite' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <span className="text-sunlight font-semibold text-[11px] uppercase tracking-[0.3em] mb-3 block">{section.subtitle}</span>
              <h2 className="font-serif text-3xl md:text-5xl text-ocean-900 leading-tight font-medium tracking-tight mb-4">{section.title}</h2>
              <p className="text-gray-500 text-base font-light leading-relaxed">{section.desc}</p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {section.images.map((img, iIdx) => (
                <div
                  key={iIdx}
                  className={`image-reveal rounded-sm shadow-premium overflow-hidden ${iIdx === 0 ? 'col-span-2 row-span-2' : ''
                    }`}
                >
                  <img
                    src={`${baseUrl}${encodeURIComponent(img).replace(/%20/g, ' ')}`}
                    alt={img.replace(/\.[^/.]+$/, '')}
                    className="w-full h-full object-cover aspect-square"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback: try without encoding
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.retried) {
                        target.dataset.retried = 'true';
                        target.src = `${baseUrl}${img}`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-28 md:py-36 bg-ocean text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <span className="text-sunlight font-semibold text-[11px] uppercase tracking-[0.3em] mb-6 block">{t.cta.tag}</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight font-medium tracking-tight">{t.cta.title}</h2>
          <p className="text-white/60 mb-10 text-lg font-light leading-relaxed max-w-xl mx-auto">{t.cta.desc}</p>
          <button
            onClick={() => window.location.hash = '#/booking'}
            className="px-10 py-5 bg-white text-ocean-900 font-semibold text-[11px] uppercase tracking-[0.15em] hover-lift shadow-premium rounded-sm"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TheHouse;
