
import React from 'react';
import { useLanguage } from '../App';
import { ArrowDown } from 'lucide-react';

// Translations for the House page
const houseTranslations = {
  en: {
    pageTitle: "The House",
    pageSubtitle: "The Property",
    sections: {
      social: { title: "Social Spaces", subtitle: "The Living Experience", desc: "The ground floor is a vast open-air pavilion. It seamlessly connects the gourmet kitchen and main lounge directly to the beach deck, allowing the sea breeze to flow freely." },
      suites: { title: "Sanctuaries", subtitle: "Bedrooms & Suites", desc: "Five distinct sleeping areas crafted with local wood. Each room catches the Atlantic trade winds, providing natural cooling and the sound of waves." },
      details: { title: "The Details", subtitle: "Craftsmanship & Bathrooms", desc: "Luxury is in the details. Hand-finished wood, stone bathrooms, and solar-heated water ensure comfort in harmony with the environment." },
      upper: { title: "The Outlook", subtitle: "Terraces & Views", desc: "The upper deck offers a unique vantage point over the Moreré reef. Perfect for morning yoga or evening stargazing." }
    },
    cta: { tag: "Your Journey Starts Here", title: "Ready to experience Moreré?", desc: "The house is open year-round, following the rhythm of the tides and the Bahian sun.", button: "Book your stay" }
  },
  pt: {
    pageTitle: "A Casa",
    pageSubtitle: "A Propriedade",
    sections: {
      social: { title: "Espaços Sociais", subtitle: "A Experiência de Vida", desc: "O térreo é um vasto pavilhão ao ar livre. Conecta perfeitamente a cozinha gourmet e a sala principal diretamente ao deck da praia." },
      suites: { title: "Santuários", subtitle: "Quartos & Suítes", desc: "Cinco áreas de descanso distintas, construídas com madeira local. Cada quarto recebe os ventos alísios do Atlântico." },
      details: { title: "Os Detalhes", subtitle: "Artesanato & Banheiros", desc: "O luxo está nos detalhes. Madeira feita à mão, banheiros de pedra e água aquecida por energia solar." },
      upper: { title: "A Vista", subtitle: "Terraços & Panoramas", desc: "O deck superior oferece uma vista única sobre o recife de Moreré. Perfeito para yoga matinal ou contemplação noturna." }
    },
    cta: { tag: "Sua Jornada Começa Aqui", title: "Pronto para viver Moreré?", desc: "A casa está aberta o ano todo, seguindo o ritmo das marés e do sol baiano.", button: "Reserve sua estadia" }
  },
  fr: {
    pageTitle: "La Maison",
    pageSubtitle: "La Propriété",
    sections: {
      social: { title: "Espaces de Vie", subtitle: "L'Expérience", desc: "Le rez-de-chaussée est un vaste pavillon ouvert. Il relie la cuisine gastronomique et le salon principal directement à la terrasse de plage." },
      suites: { title: "Sanctuaires", subtitle: "Chambres & Suites", desc: "Cinq espaces de repos distincts, fabriqués avec du bois local. Chaque chambre capte les alizés de l'Atlantique." },
      details: { title: "Les Détails", subtitle: "Artisanat & Salles de Bain", desc: "Le luxe est dans les détails. Bois fini à la main, salles de bain en pierre et eau chauffée à l'énergie solaire." },
      upper: { title: "La Vue", subtitle: "Terrasses & Panoramas", desc: "La terrasse supérieure offre un point de vue unique sur le récif de Moreré. Parfait pour le yoga du matin." }
    },
    cta: { tag: "Votre Voyage Commence Ici", title: "Prêt à vivre Moreré?", desc: "La maison est ouverte toute l'année, suivant le rythme des marées et du soleil bahianais.", button: "Réserver votre séjour" }
  },
  es: {
    pageTitle: "La Casa",
    pageSubtitle: "La Propiedad",
    sections: {
      social: { title: "Espacios Sociales", subtitle: "La Experiencia", desc: "La planta baja es un amplio pabellón al aire libre. Conecta la cocina gourmet y la sala principal directamente con la terraza de la playa." },
      suites: { title: "Santuarios", subtitle: "Dormitorios & Suites", desc: "Cinco áreas de descanso distintas, construidas con madera local. Cada habitación capta los vientos alisios del Atlántico." },
      details: { title: "Los Detalles", subtitle: "Artesanía & Baños", desc: "El lujo está en los detalles. Madera acabada a mano, baños de piedra y agua calentada con energía solar." },
      upper: { title: "La Vista", subtitle: "Terrazas & Panoramas", desc: "La terraza superior ofrece un punto de vista único sobre el arrecife de Moreré. Perfecto para yoga matutino." }
    },
    cta: { tag: "Tu Viaje Comienza Aquí", title: "¿Listo para vivir Moreré?", desc: "La casa está abierta todo el año, siguiendo el ritmo de las mareas y el sol bahiano.", button: "Reserva tu estancia" }
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
        { url: "salonprincipal.jpeg", span: "col-span-2 row-span-2" },
        { url: "deuxiemesalon.jpeg", span: "col-span-1 row-span-1" },
        { url: "salon2.jpeg", span: "col-span-1 row-span-1" },
        { url: "TerrasseEnBas.jpeg", span: "col-span-2 row-span-1" }
      ]
    },
    {
      id: "suites",
      ...t.sections.suites,
      images: [
        { url: "Chambre%202.JPG", span: "col-span-1 row-span-2" },
        { url: "Chambre%203.JPG", span: "col-span-1 row-span-1" },
        { url: "chambre%204.jpg", span: "col-span-1 row-span-1" },
        { url: "chambre%205.JPG", span: "col-span-1 row-span-1" }
      ]
    },
    {
      id: "details",
      ...t.sections.details,
      images: [
        { url: "SDB.jpg", span: "col-span-2 row-span-2" },
        { url: "SDB%202.jpg", span: "col-span-2 row-span-1" }
      ]
    },
    {
      id: "upper",
      ...t.sections.upper,
      images: [
        { url: "Vue%20depuis%20la%20terrasse%20du%201er%20e%CC%81tage.jpg", span: "col-span-2 row-span-2" },
        { url: "panorama%20rdc.jpg", span: "col-span-2 row-span-1" }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src={`${baseUrl}Maison%20depuis%20la%20plage.jpg`}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          alt="Casa Carolina"
        />
        <div className="relative z-20 text-center px-6">
          <span className="text-sunlight font-black text-xs uppercase tracking-luxury mb-8 block">{t.pageSubtitle}</span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-10 text-shadow-premium leading-none font-bold tracking-tightest">{t.pageTitle}</h1>
          <ArrowDown className="w-6 h-6 text-white/60 mx-auto mt-20 animate-bounce" />
        </div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-md z-30 border-b border-gray-100 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-center space-x-16">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="text-[10px] uppercase font-black tracking-luxury text-gray-400 hover:text-ocean transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, idx) => (
        <section key={section.id} id={section.id} className={`py-32 md:py-48 ${idx % 2 === 1 ? 'bg-offwhite' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
              {/* Text */}
              <div className={`space-y-8 lg:sticky lg:top-48 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <span className="text-sunlight font-black text-[11px] uppercase tracking-luxury border-l-2 border-sunlight pl-4">{section.subtitle}</span>
                <h2 className="font-serif text-5xl md:text-7xl text-ocean-900 leading-none font-bold tracking-tightest">{section.title}</h2>
                <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">{section.desc}</p>
                <div className="w-16 h-1 bg-sand"></div>
              </div>

              {/* Images Grid - Clean Masonry */}
              <div className={`grid grid-cols-2 gap-4 md:gap-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                {section.images.map((img, iIdx) => (
                  <div
                    key={iIdx}
                    className={`group relative overflow-hidden rounded-sm shadow-premium hover:shadow-premium-hover transition-all duration-700 ${img.span} ${img.span.includes('row-span-2') ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                  >
                    <img
                      src={`${baseUrl}${img.url}`}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-48 bg-ocean text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <span className="text-sunlight font-black text-xs uppercase tracking-luxury mb-10 block">{t.cta.tag}</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-12 leading-none font-bold tracking-tightest">{t.cta.title}</h2>
          <p className="text-white/60 mb-16 text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">{t.cta.desc}</p>
          <button
            onClick={() => window.location.hash = '#/booking'}
            className="px-16 py-6 bg-white text-ocean-900 font-black text-[11px] uppercase tracking-luxury hover:bg-sand-100 transition-all duration-500 shadow-premium hover:-translate-y-1"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
};

export default TheHouse;
