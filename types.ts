export enum Language {
  EN = 'en',
  PT = 'pt',
  FR = 'fr',
  ES = 'es'
}

export interface ReviewStats {
  average: number;
  count: number;
  cleanliness: number;
  accuracy: number;
  checkIn: number;
  communication: number;
  location: number;
  value: number;
}

export interface Amenity {
  category: string;
  items: string[];
}

export interface TranslationStructure {
  nav: {
    home: string;
    house: string;
    experience: string;
    location: string;
    reviews: string;
    contact: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  highlights: {
    beachfront: string;
    capacity: string;
    bedrooms: string;
    service: string;
  };
  house: {
    title: string;
    description: string;
    layoutTitle: string;
    layoutDesc: string;
    amenitiesTitle: string;
    knowTitle: string;
    knowItems: string[];
  };
  experience: {
    title: string;
    villageTitle: string;
    villageDesc: string;
    staffTitle: string;
    staffDesc: string;
  };
  booking: {
    title: string;
    arrival: string;
    departure: string;
    guests: string;
    cta: string;
    disclaimer: string;
  };
}