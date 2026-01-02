
import React from 'react';
import { useLanguage } from '../App';
import { ArrowDown } from 'lucide-react';

// Translations for the House page
const houseTranslations = {
  en: {
    pageTitle: "The House",
    pageSubtitle: "The Property",
    sections: {
      social: { title: "Social Spaces", subtitle: "Living & Dining", desc: "The ground floor is a vast open-air pavilion. It seamlessly connects the gourmet kitchen and main lounge directly to the beach deck." },
      suites: { title: "The Bedrooms", subtitle: "5 Private Rooms", desc: "Five distinct sleeping areas crafted with local wood. Each room catches the Atlantic trade winds, providing natural cooling and the sound of waves." },
      bathrooms: { title: "The Bathrooms", subtitle: "Craftsmanship", desc: "Hand-finished wood, stone surfaces, and solar-heated water ensure comfort in harmony with the environment." },
      terraces: { title: "The Terraces", subtitle: "Views & Horizons", desc: "Multiple outdoor spaces offer unique vantage points over the Moreré reef. Perfect for morning yoga or evening stargazing." }
    },
    cta: { tag: "Your Journey Starts Here", title: "Ready to experience Moreré?", desc: "The house is open year-round, following the rhythm of the tides and the Bahian sun.", button: "Book your stay" }
  },
  pt: {
    pageTitle: "A Casa",
    pageSubtitle: "A Propriedade",
    sections: {
      social: { title: "Espaços Sociais", subtitle: "Sala & Jantar", desc: "O térreo é um vasto pavilhão ao ar livre. Conecta a cozinha gourmet e a sala principal ao deck da praia." },
      suites: { title: "Os Quartos", subtitle: "5 Quartos Privativos", desc: "Cinco áreas de descanso construídas com madeira local. Cada quarto recebe os ventos alísios do Atlântico." },
      bathrooms: { title: "Os Banheiros", subtitle: "Artesanato", desc: "Madeira feita à mão, superfícies de pedra e água aquecida por energia solar." },
      terraces: { title: "Os Terraços", subtitle: "Vistas & Horizontes", desc: "Múltiplos espaços ao ar livre oferecem vistas únicas sobre o recife de Moreré." }
    },
    cta: { tag: "Sua Jornada Começa Aqui", title: "Pronto para viver Moreré?", desc: "A casa está aberta o ano todo, seguindo o ritmo das marés e do sol baiano.", button: "Reserve sua estadia" }
  },
  fr: {
    pageTitle: "La Maison",
    pageSubtitle: "La Propriété",
    sections: {
      social: { title: "Espaces de Vie", subtitle: "Salon & Salle à Manger", desc: "Le rez-de-chaussée est un vaste pavillon ouvert. Il relie la cuisine et le salon à la terrasse de plage." },
      suites: { title: "Les Chambres", subtitle: "5 Chambres Privées", desc: "Cinq espaces de repos fabriqués avec du bois local. Chaque chambre capte les alizés de l'Atlantique." },
      bathrooms: { title: "Les Salles de Bain", subtitle: "Artisanat", desc: "Bois fini à la main, surfaces en pierre et eau chauffée à l'énergie solaire." },
      terraces: { title: "Les Terrasses", subtitle: "Vues & Horizons", desc: "Plusieurs espaces extérieurs offrent des vues uniques sur le récif de Moreré." }
    },
    cta: { tag: "Votre Voyage Commence Ici", title: "Prêt à vivre Moreré?", desc: "La maison est ouverte toute l'année.", button: "Réserver" }
  },
  es: {
    pageTitle: "La Casa",
    pageSubtitle: "La Propiedad",
    sections: {
      social: { title: "Espacios Sociales", subtitle: "Sala & Comedor", desc: "La planta baja es un amplio pabellón al aire libre que conecta la cocina y sala con la terraza." },
      suites: { title: "Los Dormitorios", subtitle: "5 Habitaciones", desc: "Cinco áreas de descanso construidas con madera local. Cada habitación capta los vientos alisios." },
      bathrooms: { title: "Los Baños", subtitle: "Artesanía", desc: "Madera acabada a mano, superficies de piedra y agua calentada con energía solar." },
      terraces: { title: "Las Terrazas", subtitle: "Vistas & Horizontes", desc: "Múltiples espacios al aire libre ofrecen vistas únicas sobre el arrecife de Moreré." }
    },
    cta: { tag: "Tu Viaje Comienza Aquí", title: "¿Listo para vivir Moreré?", desc: "La casa está abierta todo el año.", button: "Reservar" }
  }
};

const TheHouse: React.FC = () => {
  const { language } = useLanguage();
  const t = houseTranslations[language as keyof typeof houseTranslations] || houseTranslations.en;
  const baseUrl = "https://casacarolinamorere-media.s3.fr-par.scw.cloud/";

  const sections = [
    {
      id: "social",
      ...t.sections.social,
      images: [
        { url: "salonprincipal.jpeg", label: "Main Living Room" },
        { url: "salon1.jpeg", label: "Living Area" },
        { url: "salon2.jpeg", label: "Lounge" },
        { url: "deuxiemesalon.jpeg", label: "Second Salon" },
        { url: "2eme%20salon.JPG", label: "Reading Nook" },
        { url: "cuisine.jpg", label: "Kitchen" },
        { url: "vue%20de%20la%20salle%20%C3%A0%20manger.jpg", label: "Dining View" },
        { url: "panorama%20rdc.jpg", label: "Ground Floor Panorama" },
        { url: "RDC%20de%20la%20maison.jpg", label: "Open Plan Living" },
        { url: "vue%20d'ensemble%20rdc.JPG", label: "Overview" }
      ]
    },
    {
      id: "suites",
      ...t.sections.suites,
      images: [
        { url: "Chambre%201.jpg", label: "Bedroom 1" },
        { url: "Chambre%202.JPG", label: "Bedroom 2" },
        { url: "Chambre%203.JPG", label: "Bedroom 3" },
        { url: "chambre%204.jpg", label: "Bedroom 4" },
        { url: "chambre%205.JPG", label: "Bedroom 5" }
      ]
    },
    {
      id: "bathrooms",
      ...t.sections.bathrooms,
      images: [
        { url: "SDB.jpg", label: "Master Bathroom" },
        { url: "SDB%202.jpg", label: "Bathroom 2" },
        { url: "sdb%20nous.jpg", label: "Private Bath" },
        { url: "sddouche%20rdc.JPG", label: "Ground Floor Shower" }
      ]
    },
    {
      id: "terraces",
      ...t.sections.terraces,
      images: [
        { url: "Vue%20depuis%20la%20terrasse%20du%201er%20%C3%A9tage.jpg", label: "First Floor View" },
        { url: "terrasse%201er%20etage.JPG", label: "Upper Terrace" },
        { url: "TerrasseEnBas.jpeg", label: "Beach Deck" },
        { url: "Terrasse%20sur%20la%20mer.jpg", label: "Sea Terrace" },
        { url: "terrasse%20sur%20mer%20(1).jpg", label: "Ocean View" },
        { url: "teraase%20sur%20mer.JPG", label: "Sunset Spot" },
        { url: "terrasse.JPG", label: "Main Terrace" },
        { url: "terrasse%20morere.jpg", label: "Moreré View" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={`${baseUrl}Maison%20depuis%20la%20plage.jpg`}
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
        <section key={section.id} id={section.id} className={`py-24 md:py-32 ${idx % 2 === 1 ? 'bg-offwhite' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <span className="text-sunlight font-semibold text-[11px] uppercase tracking-[0.3em] mb-4 block">{section.subtitle}</span>
              <h2 className="font-serif text-4xl md:text-5xl text-ocean-900 leading-tight font-medium tracking-tight mb-6">{section.title}</h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed">{section.desc}</p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {section.images.map((img, iIdx) => (
                <div
                  key={iIdx}
                  className={`image-reveal rounded-sm shadow-premium group cursor-pointer ${iIdx === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-[4/3]'
                    }`}
                >
                  <img
                    src={`${baseUrl}${img.url}`}
                    alt={img.label}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-xs font-medium tracking-wide">{img.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 md:py-40 bg-ocean text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <span className="text-sunlight font-semibold text-[11px] uppercase tracking-[0.3em] mb-8 block">{t.cta.tag}</span>
          <h2 className="font-serif text-4xl md:text-6xl mb-10 leading-tight font-medium tracking-tight">{t.cta.title}</h2>
          <p className="text-white/60 mb-12 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">{t.cta.desc}</p>
          <button
            onClick={() => window.location.hash = '#/booking'}
            className="px-12 py-5 bg-white text-ocean-900 font-semibold text-[11px] uppercase tracking-[0.15em] hover-lift shadow-premium rounded-sm"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TheHouse;
