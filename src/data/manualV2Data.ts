export interface OfficialColorToken {
  name: string;
  hex: string;
  role: string;
  classBg: string;
  classText: string;
  borderClass: string;
}

export const OFFICIAL_BRAND_COLORS: OfficialColorToken[] = [
  {
    name: 'Verde Oliva Mediterráneo',
    hex: '#8FA777',
    role: 'Color principal de fondo de marca / Fondo del isotipo e identidad boutique',
    classBg: 'bg-[#8FA777]',
    classText: 'text-[#8FA777]',
    borderClass: 'border-[#8FA777]'
  },
  {
    name: 'Dorado Champagne',
    hex: '#D4AF37',
    role: 'Acentos de elegancia, isotipo sol/mar, acreditaciones e insignias',
    classBg: 'bg-[#D4AF37]',
    classText: 'text-[#D4AF37]',
    borderClass: 'border-[#D4AF37]'
  },
  {
    name: 'Naranja Sunset',
    hex: '#E76F51',
    role: 'Acento de atardecer, llamadas a la acción principales y botones interactivos',
    classBg: 'bg-[#E76F51]',
    classText: 'text-[#E76F51]',
    borderClass: 'border-[#E76F51]'
  },
  {
    name: 'Melocotón Atardecer',
    hex: '#F2A77B',
    role: 'Fondo de tarjetas secundarias, resaltados mediterráneos e indicadores',
    classBg: 'bg-[#F2A77B]',
    classText: 'text-[#F2A77B]',
    borderClass: 'border-[#F2A77B]'
  },
  {
    name: 'Marfil Cálido',
    hex: '#F5F2EA',
    role: 'Canvas principal de la web, fondo editorial de lectura y contenedores sobrios',
    classBg: 'bg-[#F5F2EA]',
    classText: 'text-[#F5F2EA]',
    borderClass: 'border-[#F5F2EA]'
  }
];

export interface ManualRuleSection {
  code: string;
  title: string;
  rules: string[];
}

export const MANUAL_V2_SECTIONS: ManualRuleSection[] = [
  {
    code: '0',
    title: 'Control y Autoridad Documental',
    rules: [
      'Documento Maestro de Valeria: Máxima autoridad estratégica vinculante.',
      'Manual V2.0: Traducción estricta a criterios de dirección visual, UI/UX y maquetación web.',
      'Regla de Precedencia: Ninguna decisión visual puede modificar una decisión estratégica de Valeria.'
    ]
  },
  {
    code: '1',
    title: 'Esencia, Posicionamiento y Personalidad',
    rules: [
      'Asesoramiento inmobiliario personalizado basado en confianza, criterio, experiencia y acompañamiento.',
      'NO representarse como inmobiliaria tradicional, portal de búsqueda masiva ni estructura corporativa impersonal.',
      'Equilibrar sofisticación y cercanía, profesionalidad y humanidad, elegancia y naturalidad.',
      'Soporte nativo para internacionalización (ES / EN / FR / DE).'
    ]
  },
  {
    code: '2',
    title: 'Experiencia Web (UX/UI)',
    rules: [
      'Recorrido UX: Atención → Comprensión → Interés → Confianza → Reducción de incertidumbre → Contacto.',
      'Los CTA deben sentirse como consecuencia directa de la confianza creada, nunca como presión comercial.',
      'Diseño responsive desde móvil hasta ultra-wide con componentes reutilizables y estados interactivos claros.'
    ]
  },
  {
    code: '3',
    title: 'Dirección Creativa y Estética',
    rules: [
      'Universo: Mediterráneo + Luminosidad + Naturalidad + Contemporaneidad + Sofisticación + Cercanía.',
      'Fotografía real, humana y natural que comunique luz, arquitectura, materiales y bienestar.',
      'Uso de los 5 colores oficiales integrados directamente del isotipo oficial de marca.'
    ]
  }
];
