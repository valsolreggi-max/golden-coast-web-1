export type Language = 'es' | 'en' | 'fr' | 'de';

export interface Translations {
  nav: {
    home: string;
    services: string;
    zones: string;
    about: string;
    testimonials: string;
    contact: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustPoint1: string;
    trustPoint2: string;
    trustPoint3: string;
    trustPoint4: string;
  };
  valueProp: {
    badge: string;
    title: string;
    subtitle: string;
    tradTitle: string;
    boutiqueTitle: string;
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    tabAll: string;
    tabOwners: string;
    tabBuyers: string;
  };
  territory: {
    badge: string;
    title: string;
    subtitle: string;
  };
  aboutValeria: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    badge1Title: string;
    badge1Desc: string;
    badge2Title: string;
    badge2Desc: string;
    badge3Title: string;
    badge3Desc: string;
    badge4Title: string;
    badge4Desc: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    typeLabel: string;
    messageLabel: string;
    submitButton: string;
    directCall: string;
    whatsappText: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      zones: 'Zonas',
      about: 'Sobre Valeria',
      testimonials: 'Testimonios',
      contact: 'Contacto',
      ctaButton: 'Solicitar Asesoramiento',
    },
    hero: {
      badge: 'Asesoría Inmobiliaria Boutique · Garraf & Costa Dorada',
      title: 'Asesoramiento Inmobiliario Personalizado, Jurídico y Humano',
      subtitle: 'Tranquilidad, criterio experto y un acompañamiento cercano de principio a fin para familias e inversores que buscan su hogar o rentabilidad en el Mediterráneo.',
      ctaPrimary: 'Hablar con Valeria',
      ctaSecondary: 'Ver Servicios',
      trustPoint1: '7+ Años en el Territorio',
      trustPoint2: 'Agente API Homologado',
      trustPoint3: 'Perito Judicial Inmobiliario',
      trustPoint4: 'Especialistas LAU & Ley Hipotecaria',
    },
    valueProp: {
      badge: 'Diferenciación Real',
      title: 'Por Qué Elegir una Asesoría Boutique Frente a la Inmobiliaria Tradicional',
      subtitle: 'En Golden Coast no gestionamos inmuebles en masa. Nos enfundamos en tu proyecto personal para darte la mayor protección legal y económica.',
      tradTitle: 'Inmobiliaria Tradicional',
      boutiqueTitle: 'Golden Coast Property Advisory',
    },
    services: {
      badge: 'Nuestra Propuesta',
      title: 'Soluciones Adaptadas a Tus Necesidades Inmobiliarias',
      subtitle: 'Servicios integrales para propietarios que desean alquilar o vender con garantías, y para compradores que buscan su vivienda ideal.',
      tabAll: 'Todos los Servicios',
      tabOwners: 'Para Propietarios',
      tabBuyers: 'Para Compradores e Inversores',
    },
    territory: {
      badge: 'Ubicación & Estilo de Vida',
      title: 'Especialistas en la Costa Dorada y el Garraf',
      subtitle: 'Un litoral privilegiado con microclima mediterráneo, excelente conexión con Barcelona y una calidad de vida excepcional.',
    },
    aboutValeria: {
      badge: 'La Persona Detrás de Golden Coast',
      title: 'Valeria · Asesora Inmobiliaria, API & Perito Judicial',
      subtitle: 'Siete años guiando a familias e inversores internacionales a tomar decisiones seguras en el mercado español.',
      quote: 'Lo que está en juego siempre es mucho más que un inmueble. Es un hogar para una familia, la rentabilidad de una vida o el primer paso en un país nuevo.',
      badge1Title: '7 Años en Costa Dorada',
      badge1Desc: 'Profundo conocimiento local',
      badge2Title: 'Agente API Oficial',
      badge2Desc: 'Título oficial en Cataluña',
      badge3Title: 'Perito Judicial',
      badge3Desc: 'Tasaciones y arbitraje legal',
      badge4Title: 'Especialista LAU',
      badge4Desc: 'Seguridad en contratos de alquiler',
    },
    contact: {
      badge: 'Atención Directa',
      title: 'Comencemos con una Conversación Tranquila',
      subtitle: 'Cuéntanos tu proyecto o necesidad. Te responderemos personalmente en menos de 24 horas.',
      nameLabel: 'Nombre completo',
      emailLabel: 'Correo electrónico',
      phoneLabel: 'Teléfono de contacto',
      typeLabel: '¿En qué podemos ayudarte?',
      messageLabel: 'Detalles de tu consulta',
      submitButton: 'Enviar Mensaje',
      directCall: 'Llamar directamente',
      whatsappText: 'Contactar por WhatsApp',
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      zones: 'Locations',
      about: 'About Valeria',
      testimonials: 'Testimonials',
      contact: 'Contact',
      ctaButton: 'Book Advisory Session',
    },
    hero: {
      badge: 'Boutique Property Advisory · Garraf & Costa Dorada',
      title: 'Personalized, Legal & Human Real Estate Advisory',
      subtitle: 'Peace of mind, expert criteria, and close guidance from start to finish for families and international investors seeking their home in the Mediterranean.',
      ctaPrimary: 'Speak with Valeria',
      ctaSecondary: 'Explore Services',
      trustPoint1: '7+ Years Local Experience',
      trustPoint2: 'Certified API Real Estate Agent',
      trustPoint3: 'Judicial Property Expert',
      trustPoint4: 'LAU Rental Law Specialists',
    },
    valueProp: {
      badge: 'True Differentiation',
      title: 'Why Choose a Boutique Advisory Over Traditional Agencies',
      subtitle: 'At Golden Coast we do not handle bulk properties. We immerse ourselves in your personal project for maximum legal and economic protection.',
      tradTitle: 'Traditional Real Estate Agency',
      boutiqueTitle: 'Golden Coast Property Advisory',
    },
    services: {
      badge: 'Our Offerings',
      title: 'Tailored Solutions for Your Real Estate Goals',
      subtitle: 'Comprehensive services for owners wishing to rent or sell with full peace of mind, and buyers seeking their dream property.',
      tabAll: 'All Services',
      tabOwners: 'For Property Owners',
      tabBuyers: 'For Buyers & Investors',
    },
    territory: {
      badge: 'Location & Lifestyle',
      title: 'Garraf & Costa Dorada Local Specialists',
      subtitle: 'A privileged coastline with a Mediterranean microclimate, smooth connections to Barcelona, and outstanding quality of life.',
    },
    aboutValeria: {
      badge: 'The Person Behind Golden Coast',
      title: 'Valeria · Property Advisor, Certified API & Judicial Expert',
      subtitle: 'Seven years guiding international families and investors toward safe property decisions in Spain.',
      quote: 'What is at stake is always much more than a property. It is a home for a family, a lifetime’s savings return, or the first step in a new country.',
      badge1Title: '7 Years in Costa Dorada',
      badge1Desc: 'Deep local market insight',
      badge2Title: 'Certified API Agent',
      badge2Desc: 'Official accreditation in Catalonia',
      badge3Title: 'Judicial Expert',
      badge3Desc: 'Legal property valuations & mediation',
      badge4Title: 'Rental Law Specialist',
      badge4Desc: 'Total legal rental safety',
    },
    contact: {
      badge: 'Direct Attention',
      title: 'Let’s Start with a Relaxed Conversation',
      subtitle: 'Share your plans with us. Valeria will personally answer within 24 hours.',
      nameLabel: 'Full name',
      emailLabel: 'Email address',
      phoneLabel: 'Phone number',
      typeLabel: 'How can we help you?',
      messageLabel: 'Project details',
      submitButton: 'Send Message',
      directCall: 'Call directly',
      whatsappText: 'WhatsApp Chat',
    },
  },

  fr: {
    nav: {
      home: 'Accueil',
      services: 'Services',
      zones: 'Régions',
      about: 'À propos de Valeria',
      testimonials: 'Témoignages',
      contact: 'Contact',
      ctaButton: 'Demander un Conseil',
    },
    hero: {
      badge: 'Conseil Immobilier Boutique · Garraf & Costa Dorada',
      title: 'Conseil Immobilier Personnalisé, Juridique et Humain',
      subtitle: 'Sérénité, expertise et accompagnement sur mesure du début à la fin pour familles et investisseurs sur la Côte Méditerranéenne.',
      ctaPrimary: 'Parler avec Valeria',
      ctaSecondary: 'Découvrir nos Services',
      trustPoint1: '7+ Ans sur le Territoire',
      trustPoint2: 'Agent Homologué API',
      trustPoint3: 'Expert Judiciaire Immobilier',
      trustPoint4: 'Spécialistes Droit Baux LAU',
    },
    valueProp: {
      badge: 'Différenciation Vraie',
      title: 'Pourquoi Choisir un Conseil Boutique Éloigné des Agences Classiques',
      subtitle: 'Chez Golden Coast, nous privilégions la qualité et l’accompagnement personnalisé pour sécuriser pleinement votre investissement.',
      tradTitle: 'Agence Immobilière Traditionnelle',
      boutiqueTitle: 'Golden Coast Property Advisory',
    },
    services: {
      badge: 'Nos Services',
      title: 'Solutions Sur Mesure Pour Vos Projets Immobiliers',
      subtitle: 'Services complets pour propriétaires souhaitant louer ou vendre en toute sécurité, et pour acquéreurs exigeants.',
      tabAll: 'Tous les Services',
      tabOwners: 'Pour Propriétaires',
      tabBuyers: 'Pour Acquéreurs & Investisseurs',
    },
    territory: {
      badge: 'Territoire & Mode de Vie',
      title: 'Spécialistes de la Costa Dorada et du Garraf',
      subtitle: 'Un littoral d’exception, un microclimat méditerranéen et un accès privilégié à Barcelone.',
    },
    aboutValeria: {
      badge: 'La Personne Derrière Golden Coast',
      title: 'Valeria · Conseillère Immobilière, API & Experte Judiciaire',
      subtitle: 'Sept ans à guider les familles et investisseurs internationaux dans leurs démarches immobilières en Espagne.',
      quote: 'Ce qui est en jeu va bien au-delà d’un simple bien immobilier. C’est un foyer pour une famille, le fruit de toute une vie ou le premier pas dans un nouveau pays.',
      badge1Title: '7 Ans Costa Dorada',
      badge1Desc: 'Connaissance approfondie du marché',
      badge2Title: 'Agent Officiel API',
      badge2Desc: 'Homologation officielle en Catalogne',
      badge3Title: 'Expert Judiciaire',
      badge3Desc: 'Évaluations et sécurité juridique',
      badge4Title: 'Spécialiste LAU',
      badge4Desc: 'Sécurité contractuelle locative',
    },
    contact: {
      badge: 'Contact Direct',
      title: 'Échangeons Sur Votre Projet',
      subtitle: 'Partagez vos besoins avec nous. Valeria vous répondra personnellement sous 24h.',
      nameLabel: 'Nom complet',
      emailLabel: 'Adresse email',
      phoneLabel: 'Numéro de téléphone',
      typeLabel: 'Comment pouvons-nous vous aider ?',
      messageLabel: 'Détails de votre projet',
      submitButton: 'Envoyer le Message',
      directCall: 'Appeler directement',
      whatsappText: 'Contact WhatsApp',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      zones: 'Regionen',
      about: 'Über Valeria',
      testimonials: 'Referenzen',
      contact: 'Kontakt',
      ctaButton: 'Beratung Anfordern',
    },
    hero: {
      badge: 'Boutique Immobilienberatung · Garraf & Costa Dorada',
      title: 'Persönliche, Rechtssichere & Menschliche Immobilienberatung',
      subtitle: 'Sicherheit, Fachkompetenz und persönliche Begleitung von Anfang bis Ende für Familien und Investoren an der Mittelmeerküste.',
      ctaPrimary: 'Mit Valeria Sprechen',
      ctaSecondary: 'Leistungen Entdecken',
      trustPoint1: '7+ Jahre Regionale Erfahrung',
      trustPoint2: 'Offiziell Zertifizierte API Agentin',
      trustPoint3: 'Gerichtliche Immobiliengutachterin',
      trustPoint4: 'Spezialistin für Spanisches Mietrecht',
    },
    valueProp: {
      badge: 'Echte Differenzierung',
      title: 'Warum Eine Boutique-Beratung Statt Eines Klassischen Maklers',
      subtitle: 'Bei Golden Coast verwalten wir keine Massenimmobilien. Wir widmen uns Ihrem persönlichen Projekt mit höchstem rechtlichen Schutz.',
      tradTitle: 'Klassisches Immobilienbüro',
      boutiqueTitle: 'Golden Coast Property Advisory',
    },
    services: {
      badge: 'Unsere Leistungen',
      title: 'Maßgeschneiderte Lösungen Für Ihre Immobilienziele',
      subtitle: 'Umfassende Services für Eigentümer zum sicheren Vermieten oder Verkaufen sowie für Immobiliensuchende.',
      tabAll: 'Alle Leistungen',
      tabOwners: 'Für Eigentümer',
      tabBuyers: 'Für Käufer & Investoren',
    },
    territory: {
      badge: 'Region & Lebensstil',
      title: 'Spezialisten für Costa Dorada und Garraf',
      subtitle: 'Ein privilegierter Küstenstreifen mit mediterranem Mikroklima, hervorragender Anbindung an Barcelona und hoher Lebensqualität.',
    },
    aboutValeria: {
      badge: 'Die Person Hinter Golden Coast',
      title: 'Valeria · Immobilienberaterin, API & Gerichtliche Gutachterin',
      subtitle: 'Seit sieben Jahren Begleiterin internationaler Familien und Investoren bei sicheren Immobilienentscheidungen in Spanien.',
      quote: 'Es geht immer um weit mehr als eine Immobilie. Es ist das Zuhause einer Familie, die Ersparnisse eines Lebens oder der erste Schritt in einem neuen Land.',
      badge1Title: '7 Jahre Costa Dorada',
      badge1Desc: 'Tiefe Marktkenntnis vor Ort',
      badge2Title: 'Zertifizierter API Agent',
      badge2Desc: 'Offizielle Zulassung in Katalonien',
      badge3Title: 'Gerichtliche Gutachterin',
      badge3Desc: 'Rechtssichere Bewertungen',
      badge4Title: 'Mietrecht Spezialistin',
      badge4Desc: 'Maximale Vertragssicherheit',
    },
    contact: {
      badge: 'Direkter Kontakt',
      title: 'Lassen Sie Uns Miteinander Sprechen',
      subtitle: 'Beschreiben Sie uns Ihr Vorhaben. Valeria antwortet Ihnen persönlich innerhalb von 24 Stunden.',
      nameLabel: 'Vollständiger Name',
      emailLabel: 'E-Mail-Adresse',
      phoneLabel: 'Telefonnummer',
      typeLabel: 'Wie können wir Ihnen helfen?',
      messageLabel: 'Details zu Ihrem Projekt',
      submitButton: 'Nachricht Senden',
      directCall: 'Direkt anrufen',
      whatsappText: 'WhatsApp Kontakt',
    },
  },
};
