import { Language } from '../i18n';

export interface TestimonialsPageContent {
  headerEyebrow: string;
  headerTitle: string;
  headerSubtitle: string;
  introP1: string;
  introP2: string;
  realReviewsEyebrow: string;
  verifiedLabel: string;
  googleReview: string;
  directTestimonial: string;
  bottomEyebrow: string;
  bottomTitle: string;
  bottomDesc: string;
  bottomBtn: string;
  stories: {
    id: string;
    number: string;
    tag: string;
    names: string;
    roleLocation: string;
    paragraphs: string[];
    quote?: string;
    reviews?: {
      author: string;
      source: string;
      text: string;
    }[];
    originalTextLabel?: string;
    originalText?: string[];
  }[];
}

export const TESTIMONIALS_I18N: Record<Language, TestimonialsPageContent> = {
  es: {
    headerEyebrow: 'TESTIMONIOS',
    headerTitle: 'Historias de confianza',
    headerSubtitle: 'Historias que hablan por sí solas.',
    introP1: 'La confianza se construye con cada decisión y permanece mucho después de una operación.',
    introP2: 'Para mí, una relación profesional no termina cuando se firma. Estas historias hablan de clientes que, con el tiempo, siguieron confiando en mí para nuevas decisiones, nuevos proyectos y para cuidar aquello que habían confiado a mis manos.',
    realReviewsEyebrow: 'RESEÑAS REALES DE ESTA EXPERIENCIA',
    verifiedLabel: 'Verificada',
    googleReview: 'Reseña en Google',
    directTestimonial: 'Testimonio recibido directamente',
    bottomEyebrow: 'ACOMPAÑAMIENTO PERSONALIZADO',
    bottomTitle: 'La tranquilidad de estar en buenas manos',
    bottomDesc: 'Cada decisión inmobiliaria merece cercanía, rigor técnico y un compromiso sincero antes, durante y mucho después de la firma.',
    bottomBtn: 'Conversar con Valeria',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVERSIÓN & GESTIÓN CONTINUADA',
        names: 'Tony, Raquel e Iffy',
        roleLocation: 'Inversores · Reino Unido',
        paragraphs: [
          'Cuando conocí a Tony y Raquel buscaban invertir en la Costa Dorada. Durante una visita entendí que la vivienda que estaban viendo no era la mejor opción para ellos.',
          'Escuché cuáles eran sus objetivos y les propuse una alternativa completamente distinta. En lugar de comprar una gran casa para reformar, terminaron adquiriendo una vivienda mucho más adecuada para su proyecto de inversión.',
          'Era una decisión menos evidente, pero también la más acertada para ellos.',
          'Los años pasaron y volvieron a confiar en mí para gestionar el alquiler de esa misma propiedad.',
          'Más tarde, Tony me presentó a su hermana, Iffy, para acompañarla en la búsqueda de su primera inversión inmobiliaria en España.',
          'Para mí, esa recomendación tiene un valor especial. No porque llegara un nuevo cliente, sino porque confirmó algo en lo que siempre he creído: cuando el asesoramiento se basa en la honestidad y en poner los intereses del cliente por delante, la confianza permanece y acaba recomendándote por sí sola.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Reseña en Google',
            text: '«Con Valeria, la experiencia ha sido inmejorable. Nos ayudó con todo: desde la selección del propietario y la búsqueda de inquilinos hasta todos los aspectos legales. Gracias, Valeria. Estamos muy contentos y la recomendamos al 100 %. »',
          },
          {
            author: 'Iffy Anagor',
            source: 'Reseña en Google',
            text: '«Valeria es una profesional excepcional que trabaja con verdadera dedicación por sus clientes. Cuenta con una amplia red de contactos que pone al servicio de cada proyecto para encontrar la propiedad más adecuada. Es una persona en la que se puede confiar y está profundamente comprometida con ofrecer un servicio excelente. La recomiendo tanto para encontrar una propiedad como para acompañar todo el proceso y la burocracia asociada. Es una gran aliada.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'VENTA & ACOMPAÑAMIENTO CONTINUADO',
        names: 'Marco (Paco)',
        roleLocation: 'Propietario · Cubelles',
        paragraphs: [
          'Cuando Paco decidió vender su vivienda, trabajamos juntos para prepararla y presentarla de la mejor manera posible.',
          'Definimos una estrategia, cuidamos cada detalle de la presentación y acompañé todo el proceso hasta la venta.',
          'Pero lo más importante no fue la operación.',
          'Seis años después seguimos trabajando juntos. Ha vuelto a confiar en mí para nuevos proyectos, consulta conmigo decisiones relacionadas con sus propiedades y, lo que más valoro, sigue recomendándome a familiares y amigos.',
          'Para mí, esa continuidad significa mucho más que una venta. Es la tranquilidad de saber que la confianza se mantiene incluso cuando la operación ya forma parte del pasado.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Reseña en Google',
            text: '«Valeria es una profesional como pocas,se encarga de todo,tanto de buscarte lo que necesites como alquilarlo o comprarlo o reformarlo incluso, asesora muy bien a la gente, profesional.Muy Recomendable y Profesional de Máster.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'GESTIÓN INTEGRAL & TRANQUILIDAD A DISTANCIA',
        names: 'Amalia',
        roleLocation: 'Propietaria · Madrid',
        paragraphs: [
          'Gestionar una vivienda desde otra ciudad requiere algo más que encontrar un buen inquilino.',
          'Requiere la tranquilidad de saber que alguien cuida tu propiedad como si fuera propia.',
          'Amalia vive en Madrid y confía en mí para gestionar el alquiler de su vivienda en Vilanova i la Geltrú.',
          'Me encargo de la selección del inquilino, la documentación, los aspectos legales y el seguimiento de todo el proceso para que no tenga que preocuparse por nada.',
          'Nuestra relación continúa porque entiende que mi trabajo no termina con la firma del contrato.',
          'Sigue cada vez que surge una duda, una gestión o una decisión importante sobre su vivienda.',
          'La verdadera tranquilidad no consiste en delegar una propiedad. Consiste en saber que siempre habrá alguien al otro lado cuando lo necesites.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Reseña en Google',
            text: '«Estoy encantada con el encargo de alquiler que hice para un apartamento en Vilanova i la Geltrú. Valeria, muy comprometida con el cliente, concienzuda con la gestión del alquiler y atenta en todo momento a los aspectos legales e incluso materiales que evitan problemas futuros tanto para el arrendador como para el inquilino. ¡Cinco estrellas para Golden Coast!»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'COMPRA & CUIDADO PERMANENTE',
        names: 'Diana',
        roleLocation: 'Propietaria · Alemania',
        paragraphs: [
          'Hay personas en las que confías desde el primer momento. Para nosotros, Valeria es exactamente una de esas personas.',
          'No se limitó a ayudarnos a comprar una casa; nos ayudó a encontrar un lugar en el que pudiéramos sentirnos como en casa desde el primer día. Con su cercanía, su honestidad y su extraordinaria capacidad para entender a las personas, nos acompañó durante todo el proceso de compra y estuvo siempre presente, orientada a encontrar soluciones y siendo absolutamente fiable.',
          'Precisamente porque comprábamos la casa en España, su apoyo fue de un valor incalculable para nosotros. Encontró soluciones junto a nosotros, organizó un intérprete, nos acompañó con mucho tacto en las negociaciones con los vendedores, negoció de manera justa tanto el precio de la propiedad como el de los muebles que queríamos adquirir y posteriormente nos puso en contacto con profesionales y colaboradores locales de confianza. Nunca tuvimos la sensación de estar solos.',
          'Lo que hace especialmente valiosa a Valeria es que su acompañamiento no termina con la entrega de las llaves. Incluso hoy sigue cuidando nuestra casa con la misma atención, responsabilidad y dedicación. Como no estamos permanentemente allí, para nosotros es una tranquilidad enorme saber que nuestro hogar está en las mejores manos.',
        ],
        quote: '“La confianza no se puede comprar; hay que ganársela. Valeria consigue precisamente eso. Con verdadera dedicación, profesionalidad y una calidez humana que pocas veces se encuentra.”',
        originalTextLabel: 'TESTIMONIO ORIGINAL EN ALEMÁN',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
  en: {
    headerEyebrow: 'TESTIMONIALS',
    headerTitle: 'Stories of Trust',
    headerSubtitle: 'Stories that speak for themselves.',
    introP1: 'Trust is built through every thoughtful decision and endures long after a transaction concludes.',
    introP2: 'For me, a professional relationship never ends when deeds are signed. These journeys reflect clients who, over the years, continue to place their most valued decisions and properties in my care.',
    realReviewsEyebrow: 'GENUINE REVIEWS FROM THIS JOURNEY',
    verifiedLabel: 'Verified',
    googleReview: 'Google Review',
    directTestimonial: 'Direct client letter',
    bottomEyebrow: 'BESPOKE STEWARDSHIP',
    bottomTitle: 'The peace of mind of being in trusted hands',
    bottomDesc: 'Every property decision deserves genuine empathy, forensic legal rigor, and sincere commitment before, during, and long after closing.',
    bottomBtn: 'Speak with Valeria',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVESTMENT & ONGOING MANAGEMENT',
        names: 'Tony, Raquel & Iffy',
        roleLocation: 'Investors · United Kingdom',
        paragraphs: [
          'When I first met Tony and Raquel, they were seeking an investment along the Costa Dorada. During a viewing, I realized the house they were considering was not the right vehicle for their plans.',
          'I listened closely to their financial goals and proposed a completely different strategy. Instead of buying a large home in need of renovation, they acquired a property far more aligned with their rental investment blueprint.',
          'It was a less obvious route, yet undeniably the wisest decision for them.',
          'Years passed, and they entrusted me once more to oversee the ongoing rental management of that very asset.',
          'Later, Tony introduced me to his sister, Iffy, so I could guide her through acquiring her first property investment in Spain.',
          'To me, this continuity holds special meaning. Not simply for welcoming a new client, but because it validates what I have always championed: when advice is anchored in honesty and placing the client first, trust remains and speaks for itself.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Google Review',
            text: '«With Valeria, the experience was second to none. She guided us through every facet: from vendor negotiations and tenant sourcing to full legal compliance. Thank you, Valeria. We are delighted and recommend her 100%.»',
          },
          {
            author: 'Iffy Anagor',
            source: 'Google Review',
            text: '«Valeria is an exceptional professional who works with genuine dedication for her clients. She commands a wide network of trusted contacts that she brings to each project to uncover the ideal home. She is someone you can wholeheartedly rely upon. A true ally.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'SALE & ENDURING PARTNERSHIP',
        names: 'Marco (Paco)',
        roleLocation: 'Owner · Cubelles',
        paragraphs: [
          'When Paco decided to sell his home, we collaborated closely to stage and present it in its finest light.',
          'We framed a precise marketing roadmap, attended to every staging nuance, and I stewarded the entire trajectory through closing.',
          'Yet the true milestone was not the sale itself.',
          'Six years later, we remain in continuous collaboration. He has turned to me for subsequent ventures, consults me on portfolio decisions, and continuously recommends me to friends and family.',
          'To me, that enduring connection transcends any single transaction. It is the peace of knowing trust endures long after deeds are recorded.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Google Review',
            text: '«Valeria is a rare professional who takes care of everything from start to finish: buying, leasing, renovation coordination, and sharp legal advice. Highly recommended and a master of her craft.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'COMPREHENSIVE REMOTE STEWARDSHIP',
        names: 'Amalia',
        roleLocation: 'Owner · Madrid',
        paragraphs: [
          'Overseeing a coastal home from another city requires far more than finding a qualified tenant.',
          'It requires complete confidence that someone cares for your asset as if it were their own.',
          'Amalia resides in Madrid and relies on me to manage her residential rental in Vilanova i la Geltrú.',
          'I oversee candidate vetting, legal leases, inventory checks, and ongoing monitoring so she enjoys absolute peace of mind.',
          'Our relationship thrives because she knows my dedication does not end with the ink on a lease.',
          'Whenever questions, maintenance needs, or legislative changes arise, I am right there.',
          'True peace of mind is knowing an expert is always on the other end of the line when needed.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Google Review',
            text: '«I am thrilled with the rental mandate for my apartment in Vilanova. Valeria is deeply devoted, meticulous with tenant selection, and alert to legal and technical details that prevent headaches for both parties. Five stars for Golden Coast!»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'PURCHASE & ONGOING GUARDIANSHIP',
        names: 'Diana',
        roleLocation: 'Owner · Germany',
        paragraphs: [
          'There are people you trust implicitly from the very first moment. For our family, Valeria is precisely that person.',
          'She did not simply broker a house; she helped us discover a sanctuary where we felt at home from day one. With her warmth, clarity, and extraordinary empathy, she stood by us across the entire acquisition.',
          'Particularly when buying from abroad, her guidance proved invaluable. She organized interpreters, mediated negotiations with vendor diplomacy, fairly agreed the property and furniture valuations, and introduced us to reputable local craftsmen. We never felt alone.',
          'What distinguishes Valeria is that her stewardship did not terminate at the notary. Today she continues to look after our Mediterranean residence with the same vigilance and heartfelt devotion.',
        ],
        quote: '“Trust cannot be purchased; it must be earned. Valeria achieves exactly that. With genuine dedication, consummate professionalism, and a human warmth rarely encountered.”',
        originalTextLabel: 'ORIGINAL GERMAN TESTIMONIAL',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
  de: {
    headerEyebrow: 'ERFAHRUNGSBERICHTE',
    headerTitle: 'Geschichten des Vertrauens',
    headerSubtitle: 'Geschichten, die für sich selbst sprechen.',
    introP1: 'Vertrauen wächst mit jeder wohlüberlegten Entscheidung und bleibt weit über eine notarielle Beurkundung hinaus bestehen.',
    introP2: 'Für mich endet eine Geschäftsbeziehung nicht mit der Unterschrift. Diese Berichte erzählen von Kunden, die mich über viele Jahre hinweg bei neuen Vorhaben und der treuhänderischen Betreuung ihrer Immobilien begleiten.',
    realReviewsEyebrow: 'ECHTE REZENSIONEN DIESER ERFAHRUNG',
    verifiedLabel: 'Verifiziert',
    googleReview: 'Google Rezension',
    directTestimonial: 'Direkte Kundenstimme',
    bottomEyebrow: 'INDIVIDUELLE BEGLEITUNG',
    bottomTitle: 'Die Gelassenheit, in besten Händen zu sein',
    bottomDesc: 'Jede Immobilienentscheidung verdient menschliche Nähe, juristische Präzision und aufrichtiges Engagement.',
    bottomBtn: 'Gespräch mit Valeria vereinbaren',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVESTITION & FORTLAUFENDE BETREUUNG',
        names: 'Tony, Raquel & Iffy',
        roleLocation: 'Investoren · Großbritannien',
        paragraphs: [
          'Als ich Tony und Raquel kennenlernte, suchten sie eine Investition an der Costa Dorada. Bei einer Besichtigung erkannte ich, dass das ins Auge gefasste Objekt nicht optimal für ihre Ziele war.',
          'Ich hörte aufmerksam zu und schlug eine grundlegend andere Strategie vor. Anstelle eines sanierungsbedürftigen Hauses erwarben sie eine Immobilie, die perfekt zu ihrem Anlagehorizont passte.',
          'Es war die weniger naheliegende, aber weitaus klügere Entscheidung.',
          'Die Jahre vergingen, und sie vertrauten mir erneut die Vermietung und Betreuung dieses Objekts an.',
          'Später stellte mir Tony seine Schwester Iffy vor, um sie bei ihrem ersten Immobilienkauf in Spanien zu begleiten.',
          'Für mich bestätigt dies das Leitprinzip meiner Arbeit: Wenn Beratung auf Ehrlichkeit beruht, bleibt das Vertrauen dauerhaft bestehen.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Google Rezension',
            text: '«Mit Valeria war die Erfahrung schlichtweg perfekt. Sie unterstützte uns in allen Belangen: von der Verkäuferverhandlung über Mietersuche bis hin zu allen juristischen Feinheiten. Wir sind begeistert und empfehlen sie zu 100%.»',
          },
          {
            author: 'Iffy Anagor',
            source: 'Google Rezension',
            text: '«Valeria ist eine herausragende Fachfrau, die sich mit echter Hingabe für ihre Klienten einsetzt. Sie verfügt über ein exzellentes Netzwerk und ist zutiefst vertrauenswürdig. Eine verlässliche Partnerin für Kauf und Bürokratie.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'VERKAUF & DAUERHAFTE PARTNERSCHAFT',
        names: 'Marco (Paco)',
        roleLocation: 'Eigentümer · Cubelles',
        paragraphs: [
          'Als Paco beschloss, seine Immobilie zu verkaufen, erarbeiteten wir eine präzise Präsentation und Verkaufsstrategie.',
          'Wir planten jedes Detail sorgfältig, und ich begleitete den gesamten Weg bis zum Notartermin.',
          'Doch das Wertvollste war nicht die Transaktion an sich.',
          'Sechs Jahre später arbeiten wir noch immer vertrauensvoll zusammen. Er konsultiert mich bei neuen Projekten und empfiehlt mich fortwährend an Familie und Freunde weiter.',
          'Diese Kontinuität bedeutet mir mehr als jeder einzelne Abschluss.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Google Rezension',
            text: '«Valeria ist eine Ausnahmeprofi: Sie kümmert sich um alles – Kauf, Miete, Renovierung und exzellente Beratung. Höchst empfehlenswert und meisterhaft.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'GANZHEITLICHE VERWALTUNG AUS DER DISTANZ',
        names: 'Amalia',
        roleLocation: 'Eigentümerin · Madrid',
        paragraphs: [
          'Eine Immobilie aus einer anderen Stadt zu vermieten erfordert mehr als das Finden solventer Mieter.',
          'Es verlangt die Gewissheit, dass sich jemand mit derselben Sorgfalt um das Eigentum kümmert wie um das eigene.',
          'Amalia lebt in Madrid und vertraut mir die Vermietung ihrer Wohnung in Vilanova i la Geltrú an.',
          'Ich übernehme Mieterauswahl, Verträge, behördliche Formalitäten und laufende Betreuung, damit sie vollkommen beruhigt sein kann.',
          'Wahre Gelassenheit bedeutet zu wissen, dass immer eine verlässliche Ansprechpartnerin vor Ort ist.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Google Rezension',
            text: '«Ich bin überglücklich mit der Betreuung meiner Wohnung in Vilanova. Valeria agiert gewissenhaft, engagiert und stets mit wachem Blick für rechtliche Sicherheit. Fünf Sterne für Golden Coast!»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'KAUF & DAUERHAFTE BETREUUNG',
        names: 'Diana',
        roleLocation: 'Eigentümerin · Deutschland',
        paragraphs: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Gerade weil wir das Haus in Spanien gekauft haben, war ihre Unterstützung von unschätzbarem Wert: Dolmetscher, Verhandlungsgeschick bei Kaufpreis und Mobiliar sowie verlässliche Handwerker vor Ort.',
          'Auch heute kümmert sie sich um unser Haus mit derselben Sorgfalt und Verantwortung, während wir in Deutschland sind.',
        ],
        quote: '„Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.“',
        originalTextLabel: 'ORIGINAL-TESTIMONIAL AUF DEUTSCH',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten. Mit ihrer Herzlichkeit, ihrer Ehrlichkeit und ihrem außergewöhnlichen Gespür für Menschen hat sie uns durch den gesamten Kaufprozess begleitet.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
  fr: {
    headerEyebrow: 'TÉMOIGNAGES',
    headerTitle: 'Histoires de confiance',
    headerSubtitle: 'Des récits qui parlent d’eux-mêmes.',
    introP1: 'La confiance se forge à chaque décision et perdure bien au-delà de la signature.',
    introP2: 'Pour moi, une relation professionnelle ne s’achève pas chez le notaire. Ces histoires illustrent le parcours de clients qui continuent de me confier leurs projets et la gérance de leur patrimoine au fil des années.',
    realReviewsEyebrow: 'AVIS AUTHENTIQUES DE CETTE EXPÉRIENCE',
    verifiedLabel: 'Vérifié',
    googleReview: 'Avis Google',
    directTestimonial: 'Témoignage direct',
    bottomEyebrow: 'ACCOMPAGNEMENT SUR MESURE',
    bottomTitle: 'La sérénité d’être entre de bonnes mains',
    bottomDesc: 'Chaque décision immobilière requiert écoute, rigueur juridique et un dévouement sincère avant, pendant et bien après la remise des clés.',
    bottomBtn: 'Échanger avec Valeria',
    stories: [
      {
        id: 'tony-raquel-iffy',
        number: '01',
        tag: 'INVESTISSEMENT & GÉRANCE CONTINUE',
        names: 'Tony, Raquel & Iffy',
        roleLocation: 'Investisseurs · Royaume-Uni',
        paragraphs: [
          'Lorsque j’ai rencontré Tony et Raquel, ils cherchaient à investir sur la Costa Dorada. Lors d’une visite, j’ai compris que le bien convoité ne correspondait pas à leur intérêt.',
          'J’ai écouté leurs objectifs et leur ai proposé une orientation différente. Plutôt qu’une maison imposante à rénover, ils ont acquis un bien parfaitement adapté à leur projet locatif.',
          'C’était un choix moins conventionnel, mais assurément le plus judicieux.',
          'Les années ont passé et ils m’ont de nouveau confié la gestion locative de cette même propriété.',
          'Plus tard, Tony m’a présenté sa sœur, Iffy, pour l’accompagner dans son premier investissement en Espagne.',
          'Cette recommandation témoigne de ce en quoi j’ai toujours cru : quand le conseil est honnête et met l’intérêt du client au premier plan, la confiance perdure d’elle-même.',
        ],
        reviews: [
          {
            author: 'Anags A (Tony)',
            source: 'Avis Google',
            text: '«Avec Valeria, l’expérience fut tout simplement remarquable. Elle nous a assistés sur chaque détail : sélection, locataires et aspects juridiques. Merci Valeria, nous la recommandons à 100%.»',
          },
          {
            author: 'Iffy Anagor',
            source: 'Avis Google',
            text: '«Valeria est une professionnelle d’exception qui s’investit avec un dévouement absolu pour ses clients. Elle possède un réseau étendu et une intégrité rare. Une alliée précieuse pour tout projet immobilier en Espagne.»',
          },
        ],
      },
      {
        id: 'marco-paco',
        number: '02',
        tag: 'VENTE & FIDÉLITÉ DANS LE TEMPS',
        names: 'Marco (Paco)',
        roleLocation: 'Propriétaire · Cubelles',
        paragraphs: [
          'Lorsque Paco a souhaité vendre son bien, nous avons défini une mise en valeur soignée et une stratégie commerciale claire.',
          'Chaque détail fut pris en compte et j’ai coordonné l’ensemble du processus jusqu’à la conclusion de la vente.',
          'Mais l’essentiel dépasse cette transaction.',
          'Six ans plus tard, nous collaborons toujours. Il continue de solliciter mon avis pour ses choix patrimoniaux et me recommande chaleureusement à son entourage.',
          'Cette continuité est la plus belle preuve de satisfaction.',
        ],
        reviews: [
          {
            author: 'Marco Ramirez',
            source: 'Avis Google',
            text: '«Valeria s’occupe de tout : recherche, location, achat et même travaux, avec une maîtrise juridique parfaite. Très hautement recommandée, une vraie professionnelle.»',
          },
        ],
      },
      {
        id: 'amalia',
        number: '03',
        tag: 'GÉRANCE GLOBALE & TRANQUILLITÉ À DISTANCE',
        names: 'Amalia',
        roleLocation: 'Propriétaire · Madrid',
        paragraphs: [
          'Gérer un logement depuis une autre ville exige bien plus que trouver un locataire.',
          'Cela demande la certitude absolue que votre bien est préservé comme s’il s’agissait du nôtre.',
          'Amalia réside à Madrid et me confie la gestion de son appartement à Vilanova i la Geltrú.',
          'Je prends en charge la sélection rigoureuse des locataires, les contrats, les inventaires et le suivi pour qu’elle n’ait aucun souci.',
          'La vraie sérénité, c’est de savoir qu’une interlocutrice de confiance veille en permanence sur place.',
        ],
        reviews: [
          {
            author: 'Amalia Julián',
            source: 'Avis Google',
            text: '«Je suis ravie de la gestion de mon appartement à Vilanova. Valeria est consciencieuse, attentive aux aspects juridiques et prévient tout litige futur. Cinq étoiles méritées pour Golden Coast !»',
          },
        ],
      },
      {
        id: 'diana',
        number: '04',
        tag: 'ACHAT & GARDIENNAGE PERMANENT',
        names: 'Diana',
        roleLocation: 'Propriétaire · Allemagne',
        paragraphs: [
          'Il y a des personnes à qui l’on accorde sa confiance dès le premier instant. Pour notre famille, Valeria est exactement cette personne.',
          'Elle ne s’est pas contentée de trouver une maison : elle nous a aidés à dénicher un foyer où nous nous sentons chez nous dès le premier jour.',
          'Acheter depuis l’Allemagne aurait pu être complexe, mais sa présence constante a tout simplifié : interprètes, négociations équitables sur le bien et le mobilier, artisans locaux de confiance.',
          'Ce qui est exceptionnel, c’est que sa mission n’a pas pris fin après le notaire. Aujourd’hui encore, elle veille sur notre maison avec la même attention responsable.',
        ],
        quote: '« La confiance ne s’achète pas, elle se mérite. Valeria réussit précisément cela. Avec un dévouement sincère, un grand professionnalisme et une chaleur humaine remarquable. »',
        originalTextLabel: 'TÉMOIGNAGE ORIGINAL EN ALLEMAND',
        originalText: [
          'Es gibt Menschen, denen man vom ersten Moment an vertraut. Für uns ist Valeria genau so ein Mensch.',
          'Sie hat uns nicht einfach ein Haus vermittelt – sie hat uns geholfen, einen Ort zu finden, an dem wir uns vom ersten Tag an zuhause fühlen konnten.',
          'Vertrauen kann man nicht kaufen – man muss es sich verdienen. Valeria schafft genau das. Mit echter Hingabe, Professionalität und einer Herzenswärme, die man selten findet.',
        ],
      },
    ],
  },
};
