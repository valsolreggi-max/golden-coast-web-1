import { PageArchitecture, RequirementChecklist, PALETTE_TOKENS } from '../types';
import { ABOUT_ME_SOURCE } from './sourceContent';

export { PALETTE_TOKENS };

export const PAGES_INVENTORY: PageArchitecture[] = [
  {
    id: 'home',
    path: '/',
    title: 'Inicio (Home)',
    status: 'incorporated',
    description: 'Página principal de presentación institucional y primer punto de contacto para propietarios y compradores.',
    sections: [
      {
        title: 'Hero / Cabecera Principal',
        contentType: 'text',
        source: 'framer',
        items: [
          'Titular: "La tranquilidad de estar bien asesorado."',
          'Subtitular: "Golden Coast acompaña a propietarios, compradores e inversores con un asesoramiento inmobiliario personalizado basado en la confianza, el conocimiento local y una relación que continúa mucho después de cada operación."',
          'Llamadas a la acción principales: "Quiero gestionar mi propiedad" | "Quiero encontrar una propiedad"',
          'Acreditaciones oficiales: API (Agente de la Propiedad Inmobiliaria) · Perito Judicial Inmobiliario'
        ]
      },
      {
        title: 'Sección ¿TIENES UNA PROPIEDAD? (Servicios Propietarios)',
        contentType: 'cards',
        source: 'framer',
        items: [
          'Premisa: "Tu propiedad merece algo más que una simple gestión."',
          'Explicación: Acompañamiento integral para alquiler turístico, alquiler temporal, alquiler de larga duración o venta en Costa Dorada y El Garraf.',
          'Servicios listados: Venta de viviendas · Alquiler turístico · Alquiler temporal · Alquiler de larga duración'
        ]
      },
      {
        title: 'Sección ¿BUSCAS UNA PROPIEDAD? (Metodología de Búsqueda)',
        contentType: 'steps',
        source: 'framer',
        items: [
          '01 · Primera reunión (online o presencial): Conocer proyecto, necesidades y objetivos.',
          '02 · Búsqueda personalizada: Selección, análisis y valoración de propiedades adaptadas.',
          '03 · Visitas y asesoramiento: Presenciales o virtuales con criterio y sin prisas.',
          '04 · Negociación y cierre: Acompañamiento hasta la firma en notaría con seguridad.',
          '05 · Después de la firma: Asistencia en los primeros pasos de la nueva etapa.'
        ]
      },
      {
        title: 'Sección DESCUBRE LA COSTA DORADA Y EL GARRAF',
        contentType: 'grid',
        source: 'framer',
        items: [
          'Presentación territorial entre Barcelona y Tarragona.',
          '6 Localidades clave: Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell, Calafell.'
        ]
      },
      {
        title: 'Sección TESTIMONIOS DESTACADOS',
        contentType: 'testimonials',
        source: 'framer',
        items: [
          'Caso destacado: Diana, Nick y su familia (Propietarios · Alemania).',
          'Reseña célebre: "«La confianza es tu fortaleza.» - Diana (5/5 en Google)"'
        ]
      }
    ]
  },
  {
    id: 'servicios',
    path: '/servicios',
    title: 'Servicios',
    status: 'incorporated',
    description: 'Estructura detallada de las 4 modalidades de servicio ofrecidas por Golden Coast.',
    sections: [
      {
        title: 'Alquiler Vacacional / Turístico',
        contentType: 'cards',
        source: 'framer',
        items: [
          'Asesoramiento legal e información sobre normativa y licencias.',
          'Estrategia de precios y posicionamiento en plataformas.',
          'Gestión completa de reservas y comunicación con huéspedes.',
          'Coordinación de entrega de llaves, limpieza y mantenimiento continuo.'
        ]
      },
      {
        title: 'Alquiler Temporal (1 a 11 meses)',
        contentType: 'cards',
        source: 'framer',
        items: [
          'Orientado a profesionales, nómadas digitales y estancias medias.',
          'Selección de inquilinos y comprobación de solvencia.',
          'Redacción de contratos conforme a la legislación de uso distinto de vivienda habitual.',
          'Gestión de fianza e inventario de entrada y salida.'
        ]
      },
      {
        title: 'Alquiler de Larga Duración',
        contentType: 'cards',
        source: 'framer',
        items: [
          'Análisis riguroso de solvencia y perfil del arrendatario.',
          'Redacción de contratos adaptados a la Ley de Arrendamientos Urbanos.',
          'Gestión del depósito legal y seguro de impago opcional.',
          'Atención continua durante la vigencia del contrato.'
        ]
      },
      {
        title: 'Relocation & Asentamiento',
        contentType: 'cards',
        source: 'framer',
        items: [
          'Acompañamiento en el traslado e instalación en la Costa Dorada y el Garraf.',
          'Búsqueda y selección de hogar adaptado al proyecto familiar.',
          'Gestiones iniciales, suministros y orientación en el territorio.',
          'Servicio en fase de definición.'
        ]
      }
    ]
  },
  {
    id: 'zonas',
    path: '/zonas',
    title: 'Zonas (El Territorio Golden Coast)',
    status: 'incorporated',
    description: 'Análisis cualitativo del territorio del Garraf y la Costa Dorada.',
    sections: [
      {
        title: 'Resumen territorial de las 6 localidades',
        contentType: 'grid',
        source: 'framer',
        items: [
          'Sitges: Cosmopolita, mediterránea, patrimonio cultural y eventos.',
          'Vilanova i la Geltrú: Dimensión urbana, puerto marinero y vida propia.',
          'Cubelles: Tranquilidad, playas familiares y ritmo pausado.',
          'Cunit: Carácter residencial junto al mar y conectividad.',
          'Segur de Calafell: Dimensión náutica, puerto deportivo y gastronomía.',
          'Calafell: Variedad gastronómica, patrimonio, playa y zonas interiores.'
        ]
      }
    ]
  },
  {
    id: 'sobre-mi',
    path: '/sobre-mi',
    title: 'Sobre mí',
    status: 'incorporated',
    description: 'Página con contenido literal oficial recibido. Incluye la historia personal de Valeria, su trayectoria desde Argentina hasta España, Lucas Fox, fundación de Golden Coast y las 4 acreditaciones principales.',
    sections: [
      {
        title: ABOUT_ME_SOURCE.subtitle + ' - ' + ABOUT_ME_SOURCE.sectionHeader,
        contentType: 'text',
        source: 'framer', // Now verified official content
        items: [
          `8 párrafos de narrativa personal vinculante (Orígenes, emigración de Argentina, Lucas Fox, fundación con sus 2 hermanos, anécdota de Cunit).`,
          `Puntos de acreditación: ${ABOUT_ME_SOURCE.highlights.map(h => h.title).join(' | ')}`
        ]
      }
    ]
  },
  {
    id: 'testimonios',
    path: '/testimonios',
    title: 'Testimonios',
    status: 'incorporated',
    description: 'Historias de confianza y casos de estudio reales de clientes.',
    sections: [
      {
        title: 'Casos Reales Incorporados',
        contentType: 'testimonials',
        source: 'framer',
        items: [
          'Tony, Raquel e Iffy (Inversores · Reino Unido): Reorientación de estrategia de inversión y posterior gestión de alquiler.',
          'Marco / Paco (Propietario · Cubelles): Venta con estrategia personalizada y relación continuada de más de 6 años.',
          'Amalia Julián (Propietaria · Madrid): Gestión integral de alquiler en Vilanova i la Geltrú con propietario residiendo en otra ciudad.',
          'Diana, Nick y su familia (Propietarios · Alemania): Reordenamiento y Home Staging para venta, seguido de gestión continua a distancia.'
        ]
      }
    ]
  },
  {
    id: 'preguntas-frecuentes',
    path: '/preguntas-frecuentes',
    title: 'Preguntas Frecuentes (FAQ)',
    status: 'pending_pdf',
    description: 'Listado de preguntas y respuestas frecuentes.',
    sections: [
      {
        title: 'Preguntas y Respuestas Oficiales',
        contentType: 'cards',
        source: 'pending_pdf',
        notes: 'Página sin contenido desarrollado en Framer. Pendiente de documento fuente.'
      }
    ]
  },
  {
    id: 'contacto',
    path: '/contacto',
    title: 'Contacto',
    status: 'pending_pdf',
    description: 'Canales directos de atención y formulario de proyecto.',
    sections: [
      {
        title: 'Formulario e Información de Contacto Directo',
        contentType: 'form',
        source: 'pending_pdf',
        notes: 'Página sin contenido desarrollado en Framer. Pendiente de documento fuente.'
      }
    ]
  }
];

export const REQUIREMENTS_CHECKLIST: RequirementChecklist[] = [
  {
    id: 'req-sobre-mi',
    category: 'Sobre mí',
    title: 'Texto de trayectoria y filosofía personal',
    description: 'Historia de Valeria, experiencia en el sector inmobiliario, valores y enfoque personal.',
    status: 'Verificado en Framer' // Marked as received!
  },
  {
    id: 'req-contacto',
    category: 'Contacto',
    title: 'Datos de contacto y directrices de consulta',
    description: 'Teléfono, e-mail, dirección física/zona de atención, horario y campos del formulario.',
    status: 'A la espera de PDF'
  },
  {
    id: 'req-faq',
    category: 'FAQ',
    title: 'Batería de Preguntas Frecuentes',
    description: 'Respuestas oficiales para propietarios (venta/alquiler) e inversores/compradores.',
    status: 'A la espera of PDF' as any
  },
  {
    id: 'req-servicios-extra',
    category: 'Servicios',
    title: 'Condiciones específicas o detalles ampliados de servicios',
    description: 'Detalles adicionales sobre comisiones, coberturas, garantías o cláusulas.',
    status: 'A la espera de PDF'
  },
  {
    id: 'req-corporativo',
    category: 'Corporativo',
    title: 'Acreditaciones y certificaciones oficiales',
    description: 'Número de colegiación API, peritaje judicial y sellos de calidad.',
    status: 'A la espera de PDF'
  },
  {
    id: 'req-legales',
    category: 'Legales',
    title: 'Aviso Legal, Privacidad y Cookies',
    description: 'Textos normativos vinculantes (RGPD, LSSI-CE).',
    status: 'A la espera de PDF'
  }
];
