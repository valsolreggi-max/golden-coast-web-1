export interface PageArchitecture {
  id: string;
  path: string;
  title: string;
  status: 'incorporated' | 'partial' | 'pending_pdf';
  description: string;
  sections: SectionDetail[];
}

export interface SectionDetail {
  title: string;
  contentType: 'text' | 'cards' | 'grid' | 'steps' | 'testimonials' | 'form' | 'legal';
  source: 'framer' | 'pending_pdf' | 'mixed';
  items?: string[];
  notes?: string;
}

export interface ZoneDetail {
  id: string;
  name: string;
  subhead: string;
  summary: string;
  idealFor: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface TestimonialDetail {
  id: string;
  client: string;
  role: string;
  location: string;
  storySummary: string;
  quote?: string;
  rating?: string;
}

export interface RequirementChecklist {
  id: string;
  category: 'Sobre mí' | 'Contacto' | 'FAQ' | 'Servicios' | 'Corporativo' | 'Legales';
  title: string;
  description: string;
  status: 'A la espera de PDF' | 'Verificado en Framer';
}

export interface PaletteToken {
  name: string;
  hex: string;
  usage: string;
  class: string;
}

export const PALETTE_TOKENS: PaletteToken[] = [
  {
    name: 'Marfil Cálido',
    hex: '#FBF9F5',
    usage: 'Fondo principal / Canvas de lectura editorial',
    class: 'bg-ivory'
  },
  {
    name: 'Arena Natural',
    hex: '#EFE8DC',
    usage: 'Contenedores suaves, tarjetas y fondos secundarios',
    class: 'bg-sand-light'
  },
  {
    name: 'Verde Oliva Profundo',
    hex: '#2B382D',
    usage: 'Encabezados, elementos de máximo contraste, elegancia mediterránea',
    class: 'bg-olive-deep'
  },
  {
    name: 'Melocotón / Terracota',
    hex: '#C86D51',
    usage: 'Acentos cálidos, etiquetas y botones interactivos',
    class: 'bg-terracotta'
  },
  {
    name: 'Texto Oscuro Cálido',
    hex: '#221F1B',
    usage: 'Cuerpo de texto con alto contraste para legibilidad en pantalla',
    class: 'bg-[#221F1B]'
  }
];
