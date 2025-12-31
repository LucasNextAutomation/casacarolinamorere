
import { Language, TranslationStructure } from './types';

export const GOOGLE_CALENDAR_CONFIG = {
  // Primary iCal feed provided by the user (Google Calendar aggregating Airbnb)
  ICAL_URLS: [
    'https://www.airbnb.fr/calendar/ical/1574720018210550640.ics?t=fdcf0013cbe248c5a65c415545b3d98d',
    'https://calendar.google.com/calendar/ical/carophe%40hotmail.com/private-9e8107756e56cb4dde9de08e68912c5e/basic.ics'
  ],
  // The Calendar ID for API access
  CALENDAR_ID: 'carophe@hotmail.com',
  // Minimum stay in nights
  MIN_NIGHTS: 3
};

export const TRANSLATIONS: Record<Language, TranslationStructure> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      house: "The House",
      experience: "Experience",
      location: "Location",
      reviews: "Reviews",
      contact: "Contact",
      book: "Check Availability"
    },
    hero: {
      title: "Modern beach house on the sand in Moreré",
      subtitle: "A naturally ventilated, open-air home for families and friends on Boipeba Island, Bahia.",
      cta1: "Check Availability",
      cta2: "Discover the House"
    },
    highlights: {
      beachfront: "Beachfront / Pé na areia",
      capacity: "Sleeps up to 10",
      bedrooms: "4 Bedrooms + Mezzanine",
      service: "Daily Housekeeping"
    },
    house: {
      title: "The House",
      description: "A 200m² architect-restored home using certified wood and solar energy. The ground floor features an open living plan connecting directly to the beach deck. Upstairs, four bedrooms and a flexible mezzanine offer comfort with natural sea breezes.",
      layoutTitle: "Layout & Capacity",
      layoutDesc: "Designed for 2-3 families or groups. 4 configurable bedrooms plus a mezzanine for flexible sleeping arrangements. 3 full bathrooms.",
      amenitiesTitle: "Amenities",
      knowTitle: "What you should know",
      knowItems: [
        "No AC - Ceiling fans & ocean breeze only",
        "Open architecture - Part of nature",
        "Island logistics - Car-free environment",
        "Rustic charm - Not hotel perfection"
      ]
    },
    experience: {
      title: "The Experience",
      villageTitle: "Life in Moreré",
      villageDesc: "A quiet fishing village with sandy paths and coral reefs. Slow living at its best.",
      staffTitle: "Hospitality",
      staffDesc: "Ronaldo (caretaker) and Zil (cook/housekeeper) are the heart of the house. Optional meal services available."
    },
    booking: {
      title: "Request a Reservation",
      arrival: "Arrival",
      departure: "Departure",
      guests: "Guests",
      cta: "Request Booking",
      disclaimer: "You will not be charged yet. We will confirm availability shortly."
    }
  },
  [Language.PT]: {
    nav: {
      home: "Início",
      house: "A Casa",
      experience: "Experiência",
      location: "Localização",
      reviews: "Avaliações",
      contact: "Contato",
      book: "Ver Disponibilidade"
    },
    hero: {
      title: "Casa de praia moderna pé na areia em Moreré",
      subtitle: "Uma casa aberta e naturalmente ventilada para famílias e amigos na Ilha de Boipeba, Bahia.",
      cta1: "Ver Disponibilidade",
      cta2: "Descubra a Casa"
    },
    highlights: {
      beachfront: "Pé na areia",
      capacity: "Até 10 hóspedes",
      bedrooms: "4 Quartos + Mezanino",
      service: "Limpeza Diária"
    },
    house: {
      title: "A Casa",
      description: "Casa de 200m² restaurada por arquitetos com madeira certificada e energia solar. O térreo possui conceito aberto conectando-se ao deck da praia. No andar superior, quatro quartos e um mezanino oferecem conforto com a brisa do mar.",
      layoutTitle: "Layout e Capacidade",
      layoutDesc: "Projetada para 2-3 famílias. 4 quartos configuráveis mais um mezanino flexível. 3 banheiros completos.",
      amenitiesTitle: "Comodidades",
      knowTitle: "O que você deve saber",
      knowItems: [
        "Sem Ar Condicionado - Ventiladores e brisa",
        "Arquitetura aberta - Contato com a natureza",
        "Logística da ilha - Sem carros",
        "Charme rústico - Não é hotelaria tradicional"
      ]
    },
    experience: {
      title: "A Experiência",
      villageTitle: "Vida em Moreré",
      villageDesc: "Uma vila de pescadores tranquila com caminhos de areia e piscinas naturais.",
      staffTitle: "Hospitality",
      staffDesc: "Ronaldo (caseiro) e Zil (cozinheira/arrumadeira) são o coração da casa. Serviço de refeições opcional."
    },
    booking: {
      title: "Solicitar Reserva",
      arrival: "Chegada",
      departure: "Saída",
      guests: "Hóspedes",
      cta: "Solicitar Reserva",
      disclaimer: "Você não será cobrado agora. Confirmaremos a disponibilidade em breve."
    }
  },
  [Language.FR]: {
    nav: {
      home: "Accueil",
      house: "La Maison",
      experience: "Expérience",
      location: "Localisation",
      reviews: "Avis",
      contact: "Contact",
      book: "Disponibilité"
    },
    hero: {
      title: "Maison de plage moderne sur le sable à Moreré",
      subtitle: "Une maison ouverte et naturellement ventilée pour familles et amis sur l'île de Boipeba, Bahia.",
      cta1: "Voir Disponibilités",
      cta2: "Découvrir la Maison"
    },
    highlights: {
      beachfront: "Les pieds dans le sable",
      capacity: "Jusqu'à 10 voyageurs",
      bedrooms: "4 Chambres + Mezzanine",
      service: "Ménage quotidien"
    },
    house: {
      title: "La Maison",
      description: "Une maison de 200m² restaurée par des architectes, utilisant du bois certifié. Le rez-de-chaussée offre un espace de vie ouvert sur la plage. À l'étage, quatre chambres et une mezzanine profitent de la brise marine.",
      layoutTitle: "Agencement",
      layoutDesc: "Conçue pour 2-3 familles. 4 chambres configurables plus une mezzanine. 3 salles de bain.",
      amenitiesTitle: "Équipements",
      knowTitle: "À savoir",
      knowItems: [
        "Pas de clim - Ventilateurs et brise marine",
        "Architecture ouverte - Proche de la nature",
        "Île sans voitures - Logistique insulaire",
        "Charme rústique - Pas un hôtel standardisé"
      ]
    },
    experience: {
      title: "L'Expérience",
      villageTitle: "La vie à Moreré",
      villageDesc: "Un village de pêcheurs calme avec des chemins de sable et des piscines naturelles.",
      staffTitle: "Hospitalité",
      staffDesc: "Ronaldo (gardien) et Zil (cuisine/ménage) sont le cœur de la maison. Service de repas en option."
    },
    booking: {
      title: "Demande de Réservation",
      arrival: "Arrivée",
      departure: "Départ",
      guests: "Voyageurs",
      cta: "Demander la réservation",
      disclaimer: "Aucun débit immédiat. Nous confirmerons la disponibilité rapidement."
    }
  },
  [Language.ES]: {
    nav: {
      home: "Inicio",
      house: "La Casa",
      experience: "Experiencia",
      location: "Ubicación",
      reviews: "Reseñas",
      contact: "Contacto",
      book: "Disponibilidad"
    },
    hero: {
      title: "Casa de playa moderna en la arena en Moreré",
      subtitle: "Una casa abierta y ventilada naturalmente para familias y amigos en la isla de Boipeba, Bahía.",
      cta1: "Ver Disponibilidad",
      cta2: "Descubre la Casa"
    },
    highlights: {
      beachfront: "Pé na areia (en la arena)",
      capacity: "Hasta 10 huéspedes",
      bedrooms: "4 Habitaciones + Entresuelo",
      service: "Limpieza Diaria"
    },
    house: {
      title: "La Casa",
      description: "Una casa de 200m² restaurada por arquitectos con madera certificada. La planta baja cuenta con un plan abierto que conecta directamente con la playa. Arriba, cuatro habitaciones y un entresuelo disfrutan de la brisa marina.",
      layoutTitle: "Distribución",
      layoutDesc: "Diseñada para 2-3 familias. 4 habitaciones configurables más un entresuelo flexible. 3 baños completos.",
      amenitiesTitle: "Comodidades",
      knowTitle: "Lo que debes saber",
      knowItems: [
        "Sin aire acondicionado - Ventiladores y brisa",
        "Arquitectura abierta - Contacto con la naturaleza",
        "Logística de isla - Sin coches",
        "Encanto rústico - No es un hotel"
      ]
    },
    experience: {
      title: "La Experiencia",
      villageTitle: "Vida en Moreré",
      villageDesc: "Un tranquilo pueblo de pescadores con caminos de arena y piscinas naturales.",
      staffTitle: "Hospitalidad",
      staffDesc: "Ronaldo (casero) y Zil (cocinera/limpieza) são el coração da casa. Serviço de refeições opcional."
    },
    booking: {
      title: "Solicitar Reserva",
      arrival: "Llegada",
      departure: "Salida",
      guests: "Huéspedes",
      cta: "Solicitar Reserva",
      disclaimer: "No se le cobrará todavía. Confirmaremos la disponibilidad en breve."
    }
  }
};
