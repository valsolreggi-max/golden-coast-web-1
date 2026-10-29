import { Language } from '../i18n';

export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface OwnerServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  intro: string;
  steps: ServiceStep[];
  closing: string;
  ctaText: string;
  consultationType: 'owner';
}

export interface BuyerServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  intro: string;
  steps: ServiceStep[];
  ctaText: string;
  consultationType: 'buyer' | 'general';
}

export interface ServicesPageContent {
  headerEyebrow: string;
  headerTitle: string;
  ownerSectionEyebrow: string;
  buyerSectionEyebrow: string;
  howCanIHelp: string;
  bottomEyebrow: string;
  bottomTitle: string;
  bottomSubtitle: string;
  bottomBtnConsult: string;
  bottomBtnContact: string;
  ownerServices: OwnerServiceItem[];
  buyerServices: BuyerServiceItem[];
}

export const SERVICES_I18N: Record<Language, ServicesPageContent> = {
  es: {
    headerEyebrow: 'SERVICIOS',
    headerTitle: 'Un acompañamiento personalizado para cada etapa de tu proyecto inmobiliario.',
    ownerSectionEyebrow: '¿TIENES UNA PROPIEDAD?',
    buyerSectionEyebrow: '¿BUSCAS UNA PROPIEDAD?',
    howCanIHelp: '¿Cómo puedo ayudarte?',
    bottomEyebrow: 'ASESORAMIENTO OFICIAL & RIGOR JURÍDICO',
    bottomTitle: '¿Tienes dudas sobre qué modalidad de gestión se adapta mejor a tu vivienda?',
    bottomSubtitle: 'Analizamos tu propiedad y objetivos para diseñar una propuesta jurídica y comercial personalizada.',
    bottomBtnConsult: 'Consultar sobre mi propiedad',
    bottomBtnContact: 'Ir a formulario de contacto',
    ownerServices: [
      {
        id: 'alquiler-vacacional',
        number: '1',
        title: 'ALQUILER VACACIONAL',
        headline: 'La tranquilidad de delegar la gestión de tu alquiler vacacional.',
        intro:
          'Cada propietario tiene necesidades diferentes. Por eso adapto el servicio a cada vivienda, ofreciendo desde gestiones puntuales hasta una gestión integral del alquiler vacacional en Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell.',
        steps: [
          {
            step: '01',
            title: 'Analizo tu propiedad',
            desc: 'Valoro la vivienda y definimos el nivel de gestión que mejor se adapta a tus necesidades.',
          },
          {
            step: '02',
            title: 'Preparo tu vivienda',
            desc: 'Te asesoro en todo lo necesario para la puesta a punto de tu propiedad, de forma que esté preparada para ofrecer una excelente experiencia a los huéspedes desde el primer día.',
          },
          {
            step: '03',
            title: 'Gestiono el servicio',
            desc: 'Coordino los check-in y check-out, la elaboración de contratos, los inventarios, la limpieza y lavandería, el control de suministros y contadores y la atención de incidencias 24/7.',
          },
          {
            step: '04',
            title: 'Me adapto a ti',
            desc: 'Puedes contratar servicios concretos o confiarme la gestión integral de tu vivienda. Siempre encontrarás una propuesta adaptada a tus necesidades.',
          },
        ],
        closing: 'Cada propiedad es diferente. Cuéntame qué necesitas y prepararemos una propuesta personalizada.',
        ctaText: 'Solicitar información',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-temporal',
        number: '2',
        title: 'ALQUILER TEMPORAL',
        headline: 'La tranquilidad de un alquiler temporal bien gestionado desde el principio.',
        intro:
          'Cada alquiler temporal responde a una necesidad diferente. Por eso estudio cada caso de forma individual para ofrecer un asesoramiento adaptado tanto al propietario como a la vivienda.',
        steps: [
          {
            step: '01',
            title: 'Analizo tu caso',
            desc: 'Valoro las características del alquiler y definimos la modalidad que mejor se adapta a tus necesidades.',
          },
          {
            step: '02',
            title: 'Preparo la documentación',
            desc: 'Redacto el contrato de alquiler temporal y la documentación necesaria conforme a la normativa vigente.',
          },
          {
            step: '03',
            title: 'Gestiono el proceso',
            desc: 'Si lo deseas, coordino la incorporación del inquilino, la entrega de la vivienda, los inventarios y el seguimiento del alquiler.',
          },
          {
            step: '04',
            title: 'Te acompaño durante todo el proceso',
            desc: 'Como API y Perito Judicial Inmobiliario, te ofrezco un asesoramiento personalizado para que puedas alquilar con tranquilidad y seguridad.',
          },
        ],
        closing: 'Cada alquiler es diferente. Cuéntame tu caso y prepararemos la solución que mejor se adapte a tu vivienda.',
        ctaText: 'Solicitar información',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-larga-duracion',
        number: '3',
        title: 'ALQUILER DE LARGA DURACIÓN',
        headline: 'La tranquilidad de elegir al inquilino adecuado desde el primer momento.',
        intro:
          'Un alquiler de larga duración es una decisión importante. Elegir al inquilino adecuado, estudiar cada candidatura y preparar correctamente toda la documentación es la mejor forma de proteger tu vivienda desde el primer día.',
        steps: [
          {
            step: '01',
            title: 'Analizo tu vivienda',
            desc: 'Valoro la propiedad, el precio del alquiler conforme a la normativa vigente y definimos la estrategia más adecuada para encontrar al inquilino que mejor encaje con tu vivienda.',
          },
          {
            step: '02',
            title: 'Selecciono al inquilino',
            desc: 'Realizo un filtro exhaustivo de cada candidato, estudio su solvencia y, si lo deseas, gestiono el seguro de impago.',
          },
          {
            step: '03',
            title: 'Preparo toda la documentación',
            desc: 'Redacto el contrato conforme a la legislación vigente y la normativa de zonas tensionadas para garantizar seguridad jurídica.',
          },
          {
            step: '04',
            title: 'Te acompaño hasta la firma',
            desc: 'Te asesoro en cada paso del proceso, desde la comercialización de la vivienda hasta la entrega de llaves.',
          },
        ],
        closing: 'Cada vivienda y cada propietario son diferentes. Cuéntame tu caso y prepararemos una propuesta adaptada a tus necesidades.',
        ctaText: 'Solicitar información',
        consultationType: 'owner',
      },
      {
        id: 'venta-de-propiedades',
        number: '4',
        title: 'VENTA DE PROPIEDADES',
        headline: 'La tranquilidad de vender tu propiedad con una estrategia bien definida.',
        intro:
          'Cada vivienda es diferente. Por eso, antes de salir al mercado, realizo una valoración técnica y diseño una estrategia personalizada para conseguir la mejor venta posible.',
        steps: [
          {
            step: '01',
            title: 'Valoro tu propiedad',
            desc: 'Como API y Perito Judicial Inmobiliario, realizo una valoración técnica que permite fijar el mejor posicionamiento.',
          },
          {
            step: '02',
            title: 'Preparo la vivienda',
            desc: 'Planifico la presentación con fotografía profesional y acciones de home staging cuando aporta valor.',
          },
          {
            step: '03',
            title: 'Gestiono la comercialización',
            desc: 'Publico la propiedad, filtro a los compradores interesados y te mantengo informado puntualmente.',
          },
          {
            step: '04',
            title: 'Te acompaño hasta la firma',
            desc: 'Te asesoro durante la negociación, la firma en notaría y la entrega de llaves para tu total serenidad.',
          },
        ],
        closing: 'Cada propiedad es única. Cuéntame tu proyecto y prepararemos una estrategia adaptada a tu vivienda.',
        ctaText: 'Solicitar información',
        consultationType: 'owner',
      },
    ],
    buyerServices: [
      {
        id: 'compra-de-vivienda',
        number: '5',
        title: 'COMPRA DE VIVIENDA PERSONALIZADA',
        headline: 'La tranquilidad de entender tu proyecto y encontrar la vivienda adecuada.',
        intro:
          'Cada compra es diferente. Empiezo escuchando qué necesitas y cuál es tu objetivo. A partir de ahí realizo una búsqueda personalizada, analizo cada oportunidad y te acompaño durante todo el proceso en la Costa Dorada y el Garraf.',
        steps: [
          {
            step: '01',
            title: 'Analizo tu proyecto',
            desc: 'Conozco tus necesidades, tu presupuesto y el objetivo de la compra para definir la estrategia idónea.',
          },
          {
            step: '02',
            title: 'Selecciono las mejores oportunidades',
            desc: 'Busco, analizo y organizo visitas a las propiedades que realmente encajan contigo.',
          },
          {
            step: '03',
            title: 'Valoro y negocio por ti',
            desc: 'Reviso la documentación, audito la situación registral y negocio las mejores condiciones en tu nombre.',
          },
          {
            step: '04',
            title: 'Te acompaño hasta la firma',
            desc: 'Te asesoro durante todo el proceso, desde el contrato de arras hasta la notaría.',
          },
        ],
        ctaText: 'Solicitar asesoramiento',
        consultationType: 'buyer',
      },
      {
        id: 'reubicacion-espana',
        number: '6',
        title: 'REUBICACIÓN EN ESPAÑA',
        headline: 'La tranquilidad de empezar una nueva etapa con el acompañamiento adecuado.',
        intro:
          'Mudarse a otro país implica mucho más que encontrar una vivienda. Te acompaño antes, durante y después de tu llegada a España para que todo el proceso sea sencillo y sin sorpresas.',
        steps: [
          {
            step: '01',
            title: 'Analizo tu proyecto',
            desc: 'Comprendo tu situación familiar, profesional y personal para orientarte hacia la zona ideal.',
          },
          {
            step: '02',
            title: 'Organizo la búsqueda de vivienda',
            desc: 'Te ayudo a encontrar la mejor opción de compra, alquiler temporal o larga duración según tus tiempos.',
          },
          {
            step: '03',
            title: 'Coordino todo el proceso',
            desc: 'Te acompaño con los trámites legales, NIE, apertura bancaria, visitas y gestiones notariales.',
          },
          {
            step: '04',
            title: 'Te acompaño también después',
            desc: 'Te asisto con colegios, proveedores de confianza y suministros para una instalación serena.',
          },
        ],
        ctaText: 'Solicitar asesoramiento',
        consultationType: 'general',
      },
    ],
  },
  en: {
    headerEyebrow: 'SERVICES',
    headerTitle: 'Tailored guidance for every stage of your real estate journey.',
    ownerSectionEyebrow: 'DO YOU OWN A PROPERTY?',
    buyerSectionEyebrow: 'LOOKING TO ACQUIRE A PROPERTY?',
    howCanIHelp: 'How can I assist you?',
    bottomEyebrow: 'OFFICIAL ACCREDITATION & LEGAL RIGOR',
    bottomTitle: 'Unsure which management model best fits your property?',
    bottomSubtitle: 'We evaluate your property and goals to design a bespoke legal and commercial strategy.',
    bottomBtnConsult: 'Inquire about my property',
    bottomBtnContact: 'Go to contact form',
    ownerServices: [
      {
        id: 'alquiler-vacacional',
        number: '1',
        title: 'HOLIDAY RENTAL MANAGEMENT',
        headline: 'The peace of mind of delegating your holiday rental management.',
        intro:
          'Every owner has distinct needs. I tailor services to each home, providing everything from punctual coordination to full turnkey holiday rental management across Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur, and Calafell.',
        steps: [
          {
            step: '01',
            title: 'Property Analysis',
            desc: 'I assess your home and establish the optimal management tier aligned with your lifestyle and return objectives.',
          },
          {
            step: '02',
            title: 'Preparation & Styling',
            desc: 'I provide guidance on staging, equipment, and compliance so your home delivers a five-star guest experience from day one.',
          },
          {
            step: '03',
            title: 'Operations & Care',
            desc: 'I oversee guest check-ins/outs, contracts, inventories, premium laundry, utility monitoring, and 24/7 guest support.',
          },
          {
            step: '04',
            title: 'Flexible Cooperation',
            desc: 'Choose selected operational modules or complete full-service stewardship. You always receive an adaptable proposal.',
          },
        ],
        closing: 'Every home is unique. Share your vision and we will craft a personalized management plan.',
        ctaText: 'Request information',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-temporal',
        number: '2',
        title: 'SEASONAL RENTALS',
        headline: 'The peace of mind of a seasonal rental meticulously structured from day one.',
        intro:
          'Seasonal tenancies serve specific needs. I analyze each case individually to deliver guidance harmonized with both owner expectations and strict statutory frameworks.',
        steps: [
          {
            step: '01',
            title: 'Case Analysis',
            desc: 'I examine the rationale of the temporary tenancy and define the compliant statutory framework.',
          },
          {
            step: '02',
            title: 'Legal Documentation',
            desc: 'I draft bulletproof seasonal contracts justifying legal purpose and ensuring full compliance with regional regulations.',
          },
          {
            step: '03',
            title: 'Process Management',
            desc: 'I oversee tenant induction, photographic condition inventories, deposit escrows, and lease monitoring.',
          },
          {
            step: '04',
            title: 'End-to-End Advisory',
            desc: 'As an official API and Judicial Real Estate Appraiser, I offer expert oversight so you lease with serenity.',
          },
        ],
        closing: 'Every seasonal lease is different. Let us discuss your property and find the optimal legal approach.',
        ctaText: 'Request information',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-larga-duracion',
        number: '3',
        title: 'LONG-TERM LEASING',
        headline: 'The peace of mind of selecting the right tenant from the very start.',
        intro:
          'Long-term leasing is a consequential commitment. Vetting prospective tenants diligently and executing airtight documentation is the foremost defense of your asset.',
        steps: [
          {
            step: '01',
            title: 'Valuation & Strategy',
            desc: 'I appraise your property, calibrate statutory rent ceilings, and formulate the optimal marketing plan.',
          },
          {
            step: '02',
            title: 'Rigorous Vetting',
            desc: 'I conduct exhaustive credit, solvency, and background screenings, arranging rent-default guarantees where required.',
          },
          {
            step: '03',
            title: 'Airtight Legal Drafting',
            desc: 'I draft contracts compliant with Spanish Urban Tenancy Law (LAU) and Catalan capped-rent zone mandates.',
          },
          {
            step: '04',
            title: 'Support Until Key Handover',
            desc: 'I personally assist at every stage, through notary deposit registration to final handover.',
          },
        ],
        closing: 'Every property and landlord have specific priorities. Let us discuss your home and formulate a secure plan.',
        ctaText: 'Request information',
        consultationType: 'owner',
      },
      {
        id: 'venta-de-propiedades',
        number: '4',
        title: 'PROPERTY SALES',
        headline: 'The peace of mind of selling your home with a clear, forensic strategy.',
        intro:
          'Every property has distinctive merits. Prior to market launch, I perform a forensic technical valuation and design a bespoke roadmap to achieve the highest transaction value.',
        steps: [
          {
            step: '01',
            title: 'Forensic Valuation',
            desc: 'As a certified API and Judicial Appraiser, I establish an authoritative market assessment and positioning.',
          },
          {
            step: '02',
            title: 'Presentation & Staging',
            desc: 'I orchestrate professional editorial photography and strategic staging to elevate emotional appeal.',
          },
          {
            step: '03',
            title: 'Marketing & Buyer Vetting',
            desc: 'I publish across qualified international networks, screen genuine prospects, and keep you continuously apprised.',
          },
          {
            step: '04',
            title: 'Notary Completion',
            desc: 'I guide price negotiations, earnest money agreements (arras), and accompany you at the notary closing.',
          },
        ],
        closing: 'Every home is unique. Share your goals and we will establish a tailored sales strategy.',
        ctaText: 'Request information',
        consultationType: 'owner',
      },
    ],
    buyerServices: [
      {
        id: 'compra-de-vivienda',
        number: '5',
        title: 'BESPOKE PROPERTY ACQUISITION',
        headline: 'The peace of mind of having your vision understood and the ideal home secured.',
        intro:
          'Every purchase is personal. I begin by listening closely to your lifestyle priorities and investment goals. From there, I conduct bespoke searches, conduct technical audits, and represent your interests across Costa Dorada and Garraf.',
        steps: [
          {
            step: '01',
            title: 'Brief & Criteria Definition',
            desc: 'We define your lifestyle needs, aesthetic preferences, budget, and timeline to build a focused acquisition strategy.',
          },
          {
            step: '02',
            title: 'Curated Scouting & Screenings',
            desc: 'I evaluate, inspect, and organize private viewings solely for properties that genuinely match your exacting standards.',
          },
          {
            step: '03',
            title: 'Legal Audit & Negotiation',
            desc: 'I audit land registry certificates, urban charges, and structural permits, negotiating terms on your exclusive behalf.',
          },
          {
            step: '04',
            title: 'Completion at Notary',
            desc: 'I oversee deposit contracts, notary deed preparations, and translation support through closing.',
          },
        ],
        ctaText: 'Request advisory',
        consultationType: 'buyer',
      },
      {
        id: 'reubicacion-espana',
        number: '6',
        title: 'RELOCATION TO SPAIN',
        headline: 'The peace of mind of beginning a new chapter with trusted local guardianship.',
        intro:
          'Moving across borders involves far more than securing four walls. I accompany you before, during, and after your arrival in Spain so your transition is seamless and stress-free.',
        steps: [
          {
            step: '01',
            title: 'Lifestyle Assessment',
            desc: 'We examine your family requirements, schooling, and commuting needs to recommend ideal neighborhoods.',
          },
          {
            step: '02',
            title: 'Housing Acquisition',
            desc: 'I secure your ideal purchase, long-term lease, or interim home tailored to your relocation schedule.',
          },
          {
            step: '03',
            title: 'Administrative Navigation',
            desc: 'I guide NIE paperwork, Spanish bank account opening, and coordinate vetted legal advisors.',
          },
          {
            step: '04',
            title: 'Post-Arrival Settlement',
            desc: 'Support with international school enrollments, trusted contractor introductions, and essential utility setups.',
          },
        ],
        ctaText: 'Request advisory',
        consultationType: 'general',
      },
    ],
  },
  de: {
    headerEyebrow: 'DIENSTLEISTUNGEN',
    headerTitle: 'Individuelle Begleitung für jede Phase Ihres Immobilienvorhabens.',
    ownerSectionEyebrow: 'BESITZEN SIE EINE IMMOBILIE?',
    buyerSectionEyebrow: 'SUCHEN SIE EINE IMMOBILIE?',
    howCanIHelp: 'Wie kann ich Ihnen helfen?',
    bottomEyebrow: 'OFFIZIELLE AKKREDITIERUNG & JURISTISCHE PRÄZISION',
    bottomTitle: 'Unsicher, welches Betreuungsmodell am besten zu Ihrer Immobilie passt?',
    bottomSubtitle: 'Wir analysieren Ihr Objekt und Ihre Wünsche für ein maßgeschneidertes rechtliches und wirtschaftliches Konzept.',
    bottomBtnConsult: 'Beratung für meine Immobilie',
    bottomBtnContact: 'Zum Kontaktformular',
    ownerServices: [
      {
        id: 'alquiler-vacacional',
        number: '1',
        title: 'FERIENVERMIETUNG',
        headline: 'Die Gelassenheit, die Verwaltung Ihrer Ferienimmobilie in verlässliche Hände zu legen.',
        intro:
          'Jeder Eigentümer hat individuelle Ansprüche. Daher passe ich meine Betreuung exakt an Ihre Immobilie an – von gezielten Einzelleistungen bis zum ganzheitlichen Rundum-Service in Sitges, Vilanova, Cubelles, Cunit, Segur und Calafell.',
        steps: [
          {
            step: '01',
            title: 'Objektanalyse',
            desc: 'Ich bewerte Ihre Immobilie und definiere das Betreuungsniveau, das optimal zu Ihren Vorstellungen passt.',
          },
          {
            step: '02',
            title: 'Vorbereitung & Ausstattung',
            desc: 'Ich berate Sie bei der perfekten Vorbereitung, damit Ihre Gäste vom ersten Tag an begeistert sind.',
          },
          {
            step: '03',
            title: 'Operativer Service',
            desc: 'Check-in/Check-out, rechtssichere Verträge, Inventare, Reinigung & Wäsche sowie 24/7 Notfallbetreuung.',
          },
          {
            step: '04',
            title: 'Höchste Flexibilität',
            desc: 'Wählen Sie modulare Einzelleistungen oder eine vollständige Rundumbetreuung – ganz nach Ihrem Bedarf.',
          },
        ],
        closing: 'Jede Immobilie ist einzigartig. Schildern Sie mir Ihre Wünsche für ein individuelles Konzept.',
        ctaText: 'Informationen anfordern',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-temporal',
        number: '2',
        title: 'SAISONALE VERMIETUNG',
        headline: 'Die Sicherheit einer von Beginn an juristisch fundierten befristeten Vermietung.',
        intro:
          'Zeitmietverträge erfordern präzise Begründungen. Ich prüfe jeden Einzelfall individuell, um sowohl den Eigentümer als auch die Immobilie optimal zu schützen.',
        steps: [
          {
            step: '01',
            title: 'Fallanalyse',
            desc: 'Wir analysieren den Zweck der Vermietung und wählen die rechtlich sicherste Vertragsmodalität.',
          },
          {
            step: '02',
            title: 'Dokumentenerstellung',
            desc: 'Ausarbeitung des spanischen Zeitmietvertrags nach den aktuellen Vorgaben der Rechtsprechung.',
          },
          {
            step: '03',
            title: 'Prozesskoordination',
            desc: 'Übergabe der Immobilie, detailliertes Übergabeprotokoll mit Fotodokumentation und Kautionsverwaltung.',
          },
          {
            step: '04',
            title: 'Begleitung als API & Gutachterin',
            desc: 'Fundierte fachliche und juristische Betreuung für ein Vermieten mit maximaler Ruhe und Gelassenheit.',
          },
        ],
        closing: 'Jedes Mietverhältnis ist individuell. Lassen Sie uns über Ihre Immobilie sprechen.',
        ctaText: 'Informationen anfordern',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-larga-duracion',
        number: '3',
        title: 'LANGZEITVERMIETUNG',
        headline: 'Die Gewissheit, von Anfang an den passenden Mieter an Ihrer Seite zu haben.',
        intro:
          'Eine langfristige Vermietung ist eine weitreichende Entscheidung. Eine gewissenhafte Bonitätsprüfung und wasserdichte Verträge sind der beste Schutz für Ihr Eigentum.',
        steps: [
          {
            step: '01',
            title: 'Immobilienbewertung',
            desc: 'Objektanalyse, Ermittlung des Mietpreises nach den Vorgaben der katalanischen Mietpreisbremse und Vermarktungsstrategie.',
          },
          {
            step: '02',
            title: 'Mieterprüfung',
            desc: 'Eingehende Prüfung der Bonität, Schufa- und Einkommensnachweise sowie Vermittlung einer Mietausfallversicherung.',
          },
          {
            step: '03',
            title: 'Vertragswerk nach LAU',
            desc: 'Rechtssichere Vertragsgestaltung unter Einhaltung aller aktuellen spanischen Mietrechtsreformen.',
          },
          {
            step: '04',
            title: 'Begleitung bis zur Schlüsselübergabe',
            desc: 'Persönliche Präsenz von der Vermarktung über die Kautionshinterlegung bis zur finalen Übergabe.',
          },
        ],
        closing: 'Jedes Objekt ist besonders. Teilen Sie mir Ihre Prioritäten mit.',
        ctaText: 'Informationen anfordern',
        consultationType: 'owner',
      },
      {
        id: 'venta-de-propiedades',
        number: '4',
        title: 'IMMOBILIENVERKAUF',
        headline: 'Die Ruhe, Ihre Immobilie mit einer durchdachten Strategie zum besten Wert zu veräußern.',
        intro:
          'Vor dem Markteintritt erstelle ich eine fundierte technische Bewertung und ein maßgeschneidertes Vertriebskonzept für den erfolgreichen Verkauf.',
        steps: [
          {
            step: '01',
            title: 'Gutachterliche Wertermittlung',
            desc: 'Als API und Gerichtssachverständige erstelle ich eine fundierte Wertermittlung für die optimale Positionierung.',
          },
          {
            step: '02',
            title: 'Präsentation & Home Staging',
            desc: 'Professionelle Fotografie und gezieltes Home Staging zur emotionalen Aufwertung Ihres Objekts.',
          },
          {
            step: '03',
            title: 'Internationale Vermarktung',
            desc: 'Platzierung in qualifizierten Netzwerken, Vorab-Qualifizierung von Interessenten und regelmäßige Berichte.',
          },
          {
            step: '04',
            title: 'Notarieller Abschluss',
            desc: 'Verhandlungsführung, Vorbereitung des Arras-Vertrags und persönliche Begleitung zur notariellen Beurkundung.',
          },
        ],
        closing: 'Jede Immobilie ist einzigartig. Lassen Sie uns eine maßgeschneiderte Verkaufsstrategie planen.',
        ctaText: 'Informationen anfordern',
        consultationType: 'owner',
      },
    ],
    buyerServices: [
      {
        id: 'compra-de-vivienda',
        number: '5',
        title: 'MASSGESCHNEIDERTE IMMOBILIENSUCHE',
        headline: 'Die Gelassenheit, Ihre Vorstellungen verstanden zu wissen und das richtige Objekt zu finden.',
        intro:
          'Jeder Kauf ist persönlich. Ich höre Ihnen aufmerksam zu, führe eine individuelle Suche durch, prüfe alle rechtlichen Aspekte und begleite Sie entlang der Costa Dorada und Garraf.',
        steps: [
          {
            step: '01',
            title: 'Bedarfsanalyse',
            desc: 'Wir erfassen Ihre Wünsche, Lebensgewohnheiten und Ihr Budget für eine zielgerichtete Suchstrategie.',
          },
          {
            step: '02',
            title: 'Gezielte Vorauswahl',
            desc: 'Ich selektiere, besichtige vorab und präsentiere nur Immobilien, die wirklich Ihren Ansprüchen entsprechen.',
          },
          {
            step: '03',
            title: 'Rechtsprüfung & Verhandlung',
            desc: 'Prüfung von Grundbuch, Lastenfreiheit und Baurecht sowie Verhandlung der besten Konditionen in Ihrem Namen.',
          },
          {
            step: '04',
            title: 'Begleitung bis zum Notar',
            desc: 'Umfassende Betreuung von der Reservierung über den Optionsvertrag bis zur notariellen Unterzeichnung.',
          },
        ],
        ctaText: 'Erstberatung anfragen',
        consultationType: 'buyer',
      },
      {
        id: 'reubicacion-espana',
        number: '6',
        title: 'RELOCATION & EINLEBEN IN SPANIEN',
        headline: 'Die Sicherheit, ein neues Kapitel mit der richtigen Vertrauensperson zu beginnen.',
        intro:
          'Ein Umzug ins Ausland bedeutet viel mehr als vier Wände zu finden. Ich stehe Ihnen vor, während und nach Ihrer Ankunft in Spanien verlässlich zur Seite.',
        steps: [
          {
            step: '01',
            title: 'Lebensraum-Beratung',
            desc: 'Analyse Ihrer familiären und beruflichen Situation, um die Region auszuwählen, die perfekt zu Ihnen passt.',
          },
          {
            step: '02',
            title: 'Wohnraumvermittlung',
            desc: 'Unterstützung beim Kauf, Langzeitmietvertrag oder einer Übergangslösung nach Ihren Zeitplänen.',
          },
          {
            step: '03',
            title: 'Behörden & Administration',
            desc: 'Hilfestellung bei NIE-Nummer, Eröffnung spanischer Bankkonten und Koordination mit Fachanwälten.',
          },
          {
            step: '04',
            title: 'Ankommen & Einleben',
            desc: 'Unterstützung bei Schulwahl, verlässlichen Handwerkern und Versorgungsverträgen für einen sanften Start.',
          },
        ],
        ctaText: 'Erstberatung anfragen',
        consultationType: 'general',
      },
    ],
  },
  fr: {
    headerEyebrow: 'SERVICES',
    headerTitle: 'Un accompagnement personnalisé pour chaque étape de votre projet immobilier.',
    ownerSectionEyebrow: 'VOUS POSSÉDEZ UN BIEN IMMOBILIER ?',
    buyerSectionEyebrow: 'VOUS RECHERCHEZ UN BIEN ?',
    howCanIHelp: 'Comment puis-je vous accompagner ?',
    bottomEyebrow: 'ACCRÉDITATION OFFICIELLE & RIGUEUR JURIDIQUE',
    bottomTitle: 'Des doutes sur la formule de gestion la plus adaptée à votre logement ?',
    bottomSubtitle: 'Nous analysons votre bien et vos objectifs pour bâtir une proposition sur mesure.',
    bottomBtnConsult: 'Consulter pour mon bien',
    bottomBtnContact: 'Aller au formulaire de contact',
    ownerServices: [
      {
        id: 'alquiler-vacacional',
        number: '1',
        title: 'LOCATION SAISONNIÈRE',
        headline: 'La sérénité de déléguer la gestion de votre location de vacances.',
        intro:
          'Chaque propriétaire a des attentes précises. J’adapte mes services à chaque propriété, de missions ciblées à la gérance intégrale à Sitges, Vilanova, Cubelles, Cunit, Segur et Calafell.',
        steps: [
          {
            step: '01',
            title: 'Analyse de votre bien',
            desc: 'J’évalue le logement et nous définissons la formule de gestion qui répond le mieux à vos attentes.',
          },
          {
            step: '02',
            title: 'Mise en valeur',
            desc: 'Conseils pour la mise en place d’équipements et de décoration afin d’offrir une expérience remarquable aux hôtes.',
          },
          {
            step: '03',
            title: 'Gestion opérationnelle',
            desc: 'Accueil personnalisé, contrats, inventaires minutieux, blanchisserie soignée et assistance 24/7.',
          },
          {
            step: '04',
            title: 'Formule modulable',
            desc: 'Choisissez des prestations précises ou confiez-moi la gérance globale de votre bien en toute quiétude.',
          },
        ],
        closing: 'Chaque bien est unique. Présentez-moi votre projet et nous concevrons une offre adaptée.',
        ctaText: 'Demander des renseignements',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-temporal',
        number: '2',
        title: 'LOCATION TEMPORAIRE',
        headline: 'La tranquillité d’une location temporaire parfaitement encadrée dès l’origine.',
        intro:
          'La location temporaire obéit à des règles strictes. J’étudie chaque situation individuellement pour apporter un conseil personnalisé au propriétaire comme au locataire.',
        steps: [
          {
            step: '01',
            title: 'Étude du besoin',
            desc: 'Analyse du motif de séjour temporaire et validation du cadre juridique adapté.',
          },
          {
            step: '02',
            title: 'Rédaction du bail',
            desc: 'Rédaction du contrat de bail temporaire conforme à la loi espagnole sur les baux urbains (LAU).',
          },
          {
            step: '03',
            title: 'Suivi du bail',
            desc: 'Coordination de l’état des lieux d’entrée et de sortie, inventaire photographique et dépôt de garantie.',
          },
          {
            step: '04',
            title: 'Conseil expert API',
            desc: 'En tant qu’API et experte judiciaire, je vous garantis une sécurité juridique totale tout au long du contrat.',
          },
        ],
        closing: 'Chaque location a ses spécificités. Parlons de votre bien pour définir la meilleure approche.',
        ctaText: 'Demander des renseignements',
        consultationType: 'owner',
      },
      {
        id: 'alquiler-larga-duracion',
        number: '3',
        title: 'LOCATION LONGUE DURÉE',
        headline: 'La certitude de choisir le locataire idéal dès le premier instant.',
        intro:
          'Une location résidentielle est un engagement important. Sélectionner rigoureusement chaque candidat et verrouiller la documentation protège votre patrimoine durablement.',
        steps: [
          {
            step: '01',
            title: 'Évaluation du loyer',
            desc: 'Estimation conforme à l’indice de référence des loyers en Catalogne et élaboration de la stratégie.',
          },
          {
            step: '02',
            title: 'Filtrage minutieux',
            desc: 'Analyse approfondie de la solvabilité des candidats et mise en place d’une assurance loyers impayés.',
          },
          {
            step: '03',
            title: 'Contrat sur mesure',
            desc: 'Rédaction du contrat de bail conforme à la législation en vigueur et aux normes de zones tendues.',
          },
          {
            step: '04',
            title: 'Présence jusqu’aux clés',
            desc: 'Accompagnement continu, de la diffusion de l’annonce jusqu’à la remise solennelle des clés.',
          },
        ],
        closing: 'Chaque logement et chaque propriétaire ont des priorités distinctes. Échangeons ensemble.',
        ctaText: 'Demander des renseignements',
        consultationType: 'owner',
      },
      {
        id: 'venta-de-propiedades',
        number: '4',
        title: 'VENTE DE PROPRIÉTÉS',
        headline: 'La sérénité de vendre votre propriété avec une stratégie commerciale claire et valorisante.',
        intro:
          'Avant toute mise sur le marché, je réalise une estimation technique pointue et élabore une stratégie sur mesure pour obtenir la meilleure valorisation.',
        steps: [
          {
            step: '01',
            title: 'Estimation judiciaire',
            desc: 'Évaluation technique rigoureuse permettant de définir le meilleur positionnement prix sur le marché.',
          },
          {
            step: '02',
            title: 'Mise en scène & Photographie',
            desc: 'Reportage photographique professionnel et interventions de home staging valorisantes.',
          },
          {
            step: '03',
            title: 'Commercialisation ciblée',
            desc: 'Diffusion sur des portails nationaux et internationaux, qualification des acquéreurs et bilans réguliers.',
          },
          {
            step: '04',
            title: 'Signature notariée',
            desc: 'Négociation, rédaction du compromis de vente (arras) et présence à vos côtés chez le notaire.',
          },
        ],
        closing: 'Chaque bien a sa propre histoire. Définissons ensemble la meilleure stratégie de vente.',
        ctaText: 'Demander des renseignements',
        consultationType: 'owner',
      },
    ],
    buyerServices: [
      {
        id: 'compra-de-vivienda',
        number: '5',
        title: 'RECHERCHE SUR-MESURE & ACHAT',
        headline: 'La sérénité de voir votre projet parfaitement compris et le bien idéal acquis.',
        intro:
          'Chaque acquisition est une aventure singulière. J’écoute vos priorités, recherche les biens pertinents, audite chaque situation juridique et vous accompagne sur toute la Costa Dorada et le Garraf.',
        steps: [
          {
            step: '01',
            title: 'Cahier des charges',
            desc: 'Définition précise de vos critères, de votre budget et de votre calendrier pour cibler les meilleures options.',
          },
          {
            step: '02',
            title: 'Sélection & Visites privées',
            desc: 'Recherche active, pré-visites et organisation de visites uniquement pour les biens en adéquation réelle.',
          },
          {
            step: '03',
            title: 'Audit légal & Négociation',
            desc: 'Vérification du registre de la propriété, absence de charges urbanistiques et négociation des conditions.',
          },
          {
            step: '04',
            title: 'Accompagnement notarié',
            desc: 'Assistance complète lors de la signature de l’acte authentique et formalités de transfert.',
          },
        ],
        ctaText: 'Demander un accompagnement',
        consultationType: 'buyer',
      },
      {
        id: 'reubicacion-espana',
        number: '6',
        title: 'RELOCATION & INSTALLATION EN ESPAGNE',
        headline: 'La tranquillité d’amorcer une nouvelle vie en étant guidé par une professionnelle de confiance.',
        intro:
          'S’installer dans un nouveau pays dépasse largement la simple recherche de murs. Je vous guide avant, pendant et après votre arrivée pour une transition douce et sans embûches.',
        steps: [
          {
            step: '01',
            title: 'Orientation de vie',
            desc: 'Étude de vos besoins familiaux et professionnels pour déterminer la commune et le quartier les plus adaptés.',
          },
          {
            step: '02',
            title: 'Recherche de logement',
            desc: 'Accompagnement pour l’achat, une location temporaire ou un bail résidentiel selon votre planning.',
          },
          {
            step: '03',
            title: 'Démarches & Formalités',
            desc: 'Orientation pour l’obtention du NIE, ouverture de comptes bancaires espagnols et coordination juridique.',
          },
          {
            step: '04',
            title: 'Intégration sereine',
            desc: 'Aide à la scolarité, recommandation d’artisans de confiance et mise en service des abonnements essentiels.',
          },
        ],
        ctaText: 'Demander un accompagnement',
        consultationType: 'general',
      },
    ],
  },
};
