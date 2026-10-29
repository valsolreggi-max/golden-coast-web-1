export interface AboutMeSource {
  title: string;
  subtitle: string;
  sectionHeader: string;
  paragraphs: string[];
  highlights: {
    title: string;
    description: string;
  }[];
}

export const ABOUT_ME_SOURCE: AboutMeSource = {
  title: "Sobre mí",
  subtitle: "Historia y valores",
  sectionHeader: "Mi Trayectoria Profesional",
  paragraphs: [
    "Siempre me atrajeron dos mundos que, con el tiempo, entendí que se complementaban de forma natural: el derecho y el concepto de hogar.",
    "El derecho me interesaba por su capacidad para interpretar las normas, buscar soluciones y proteger a las personas en momentos importantes. Y el hogar, por todo lo que representa: un espacio propio, un lugar donde sentirse seguro, construir una vida y encontrar bienestar. Siempre he compartido una idea que leí hace años: el verdadero éxito está en nuestra propia casa; ese espacio que sentimos como nuestro templo, nuestro refugio y nuestro lugar de bienestar.",
    "Con el tiempo entendí que ambos mundos tenían algo esencial en común: la necesidad de encontrar seguridad, tranquilidad y certeza cuando tomamos decisiones importantes.",
    "Cuando emigré de Argentina a España, esa fusión encontró su lugar. Aquí había familias que querían comprar, invertir o instalarse, y no sabían por dónde empezar. No conocían las leyes, no hablaban el idioma, no tenían a nadie que los guiara de verdad. Ese problema era exactamente el que yo estaba dispuesta a resolver.",
    "Fui construyendo mi trayectoria paso a paso. Empecé en una inmobiliaria donde aprendí los fundamentos del sector: activos bancarios, reformas, rentabilidad, home staging, flipping. La primera base real de lo que es este mundo.",
    "De ahí di el salto a una inmobiliaria de alto standing como Lucas Fox, donde me especialicé en el mercado internacional y construí una cartera de clientes extranjeros que querían establecerse en España.",
    "Me formé como Agente de la Propiedad Inmobiliaria y como Perito Judicial Inmobiliario porque quería entender este negocio desde dentro y conocer cada una de sus capas.",
    "Después de siete años, decidí crear Golden Coast. Un proyecto propio, construido con paciencia y con la ayuda incondicional de mis dos hermanos, que estuvieron desde el primer día.",
    "Todo el trabajo que tengo hoy viene de los clientes que fui ganando en el camino y que siguen confiando en mí. Eso es lo que más valoro y lo que más cuido.",
    "Hubo una anécdota de mis inicios que marcó mucho esta historia. Una pareja con un niño pequeño visitando una casa en Cunit. El niño salió al jardín y empezó a jugar con las plantas, con las flores, con las maderitas. Los padres lo miraban enternecidos y me dijeron: “Sí, es esta la casa”.",
    "Ahí entendí algo que va más allá de la operación: lo que está en juego siempre es mucho más que un inmueble. Es un hogar para una familia, es la rentabilidad del ahorro de toda una vida, es el primer paso en un país nuevo.",
    "Desde aquel día entendí que mi trabajo nunca iba a consistir solamente en intermediar en una operación. Consiste en entender qué hay realmente detrás de cada decisión y acompañar a las personas para que puedan tomarla con tranquilidad."
  ],
  highlights: [
    {
      title: "API",
      description: "Agente de la Propiedad Inmobiliaria"
    },
    {
      title: "Perito Judicial Inmobiliario",
      description: "Conocimiento técnico y especializado en el ámbito inmobiliario"
    },
    {
      title: "Especialista",
      description: "Ley de Arrendamientos Urbanos de aplicación nacional"
    }
  ]
};
