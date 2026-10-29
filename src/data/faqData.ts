import { Language } from '../i18n';

export interface FAQItem {
  id: number;
  question: string;
  answerIntroduction: string;
  calloutTop?: string;
  callout1?: {
    title: string;
    text: string;
    borderCol: string;
  };
  callout2?: {
    title: string;
    text: string;
    borderCol: string;
  };
  bulletPoints?: {
    bold: string;
    text: string;
  }[];
  concludingText?: string;
}

export interface FAQBlock {
  blockNumber: string;
  blockTitle: string;
  buttonLabel: string;
  items: FAQItem[];
}

export interface FAQPageContent {
  headerEyebrow: string;
  headerTitle: string;
  headerSubtitle: string;
  expandAll: string;
  collapseAll: string;
  answerLabel: string;
  bottomEyebrow: string;
  bottomTitle: string;
  bottomSubtitle: string;
  bottomBtn: string;
  blocks: FAQBlock[];
}

export const FAQ_I18N: Record<Language, FAQPageContent> = {
  es: {
    headerEyebrow: 'PREGUNTAS FRECUENTES · GOLDEN COAST',
    headerTitle: 'Respuestas claras y rigor jurídico para cada duda.',
    headerSubtitle: 'La información transparente es la base de la tranquilidad. Aquí resolvemos las preguntas más habituales sobre la gestión, compraventa y alquiler de propiedades.',
    expandAll: 'Abrir todas',
    collapseAll: 'Cerrar todas',
    answerLabel: 'Respuesta:',
    bottomEyebrow: 'ASESORAMIENTO RIGUROSO',
    bottomTitle: '¿Tienes una consulta específica sobre tu propiedad?',
    bottomSubtitle: 'Cada caso patrimonial es único. Analizo tu situación de forma confidencial y sin compromiso para ofrecerte la máxima seguridad técnica y legal.',
    bottomBtn: 'Hacer una consulta con Valeria',
    blocks: [
      {
        blockNumber: 'BLOQUE 1',
        blockTitle: 'Bloque 1: Alquileres (Vacacional, Temporal y Larga Duración) y Normativa',
        buttonLabel: '1. Alquileres y Normativa',
        items: [
          {
            id: 1,
            question: '1. ¿Si mi piso está en zona tensionada, estoy obligado a bajar el alquiler al precio del Índice de Referencia? ¿O puedo subirlo si el Índice marca más de lo que cobraba?',
            answerIntroduction: 'Depende de tu perfil de propietario y del historial del inmueble (Ley 12/2023 por el Derecho a la Vivienda y Ley de Arrendamientos Urbanos):',
            callout1: {
              title: 'Si el Índice marca un precio INFERIOR al contrato anterior (Ejemplo: Alquilabas a 850 € y el Índice marca 780 €):',
              text: 'Si eres un pequeño propietario (menos de 5 o 10 inmuebles según la delimitación de la zona) y la vivienda ha estado alquilada en los últimos 5 años, NO estás obligado a bajar la renta inicial a 780 €. La ley te autoriza a tomar como techo la renta fijada en el contrato anterior (850 €). La obligación de bajar imperativamente al tope del Índice aplica únicamente a grandes tenedores o a viviendas sin contratos previos en los últimos 5 años.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Si el Índice marca un precio SUPERIOR al contrato anterior (Ejemplo: Alquilabas a 780 € y el Índice marca 850 €):',
              text: 'En este supuesto, la renta del contrato anterior (780 €) actúa como un techo infranqueable. No puedes incrementar la renta a 850 € escudándote en el Índice. La única excepción para aumentar hasta un 10 % adicional exige acreditar obras importantes de rehabilitación, mejoras de eficiencia energética acreditadas (mínimo 30 %), accesibilidad o la firma de un contrato de larga duración (10+ años).',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. ¿Puedo cobrar al inquilino los gastos de IBI, comunidad y tasa de basuras en un contrato nuevo?',
            answerIntroduction: '',
            calloutTop: 'Únicamente si esos mismos gastos ya se encontraban pactados y repercutidos de forma explícita en el contrato anterior.',
            concludingText: 'Si en el contrato previo no se cobraban, pretender introducirlos en un nuevo contrato sujeto a zona tensionada para compensar la limitación del precio se califica legalmente como un aumento fraudulento de la renta y resulta una cláusula nula de pleno derecho (Art. 6 y 20.1 LAU). Si un gasto ya figuraba previamente (por ejemplo, la tasa de basuras), se puede seguir repercutiendo actualizando únicamente su importe según el incremento real devengado del tributo.',
          },
          {
            id: 3,
            question: '3. ¿Se están concediendo licencias turísticas actualmente? ¿Y es real que la licencia "se transmite" al comprar un piso?',
            answerIntroduction: 'Es fundamental distinguir el marco legal real frente a los ganchos publicitarios engañosos:',
            bulletPoints: [
              {
                bold: 'Concesión de nuevas licencias:',
                text: 'En más de 260 municipios catalanes declarados tensionados (incluyendo Sitges, Vilanova, Calafell, Cubelles, etc.), el Decreto Ley 3/2023 congeló la entrega de títulos, exigiendo una licencia urbanística previa sujeta a planes municipales muy restrictivos.',
              },
              {
                bold: 'Comprar un piso con "licencia turística":',
                text: 'La licencia turística no es un título patrimonial que se venda o transfiera automáticamente. Administrativamente solo se realiza un trámite de cambio de titularidad de la actividad, el cual carece de validez si el municipio no permite el uso turístico.',
              },
              {
                bold: 'Caducidad obligatoria en 2028:',
                text: 'Las antiguas licencias que antes se consideraban "vitalicias" han pasado a estar sujetas al régimen transitorio del Decreto Ley 3/2023: caducan obligatoriamente a los 5 años (noviembre de 2028). Para continuar la actividad a partir de esa fecha, el Ayuntamiento deberá otorgar una nueva licencia urbanística bajo su planeamiento.',
              },
            ],
            concludingText: 'Antes de formalizar la compra de una propiedad turística en el Garraf o Costa Daurada, en Golden Coast realizamos una auditoría urbanística previa para comprobar si la actividad se mantendrá legalmente.',
          },
          {
            id: 4,
            question: '4. ¿Puedo contratar únicamente servicios puntuales para mi alquiler vacacional o de temporada sin delegar la gestión integral?',
            answerIntroduction: 'Sí. En Golden Coast adaptamos la propuesta a lo que realmente necesitas. En alquiler vacacional (hasta 31 noches) y en alquiler de temporada (desde 32 noches o 1 mes hasta 12 meses) en municipios como Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell, puedes contratar la gestión integral 360° o solicitar servicios a la carta: recepción y entrega de llaves (check-in/check-out), elaboración de contratos de temporada conforme a ley, inventarios con control de suministros, servicio de limpieza y lavandería o atención de incidencias 24/7.',
          },
          {
            id: 5,
            question: '5. Si vivo fuera (Madrid, Alemania, Reino Unido...), ¿cómo gestiona Golden Coast mi propiedad sin que yo tenga que desplazarme?',
            answerIntroduction: 'Ofrecemos un servicio de gestión integral "llave en mano" diseñado para propietarios con residencia remota o internacional:',
            bulletPoints: [
              {
                bold: 'Gestión a distancia:',
                text: 'Realizamos la valoración, preparación del inmueble, reportajes y selección de candidatos con total transparencia y comunicación constante.',
              },
              {
                bold: 'Firma Digital Avanzada:',
                text: 'Coordinamos las reuniones por videoconferencia, la entrega de llaves y la firma del contrato mediante herramientas de firma digital avanzada con plena validez y seguridad jurídica (Reglamento EIDAS), sin necesidad de desplazamientos ni trámites presenciales.',
              },
              {
                bold: 'Administración Total:',
                text: 'Tramitamos el depósito de fianzas en el INCASÒL, cobros, liquidaciones y mantenimiento, ofreciendo un seguimiento periódico para tu total tranquilidad.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'BLOQUE 2',
        blockTitle: 'Bloque 2: Venta de Propiedades, Valoración y Home Staging',
        buttonLabel: '2. Venta, Valoración y Staging',
        items: [
          {
            id: 6,
            question: '6. ¿Cómo calculáis el valor real de mercado de mi vivienda para venderla al mejor precio?',
            answerIntroduction: 'A diferencia de las valoraciones automáticas de portales inmobiliarios basadas en precios de oferta inflados, en Golden Coast combinamos nuestra capacitación como Peritos Judiciales Inmobiliarios y API con un análisis comparativo de transacciones reales cerradas en el Registro de la Propiedad. Evaluamos el estado técnico, la situación legal, la eficiencia energética y la demanda solvente activa para fijar un precio competitivo que maximice el rendimiento financiero sin estancar la propiedad.',
          },
          {
            id: 7,
            question: '7. ¿Por qué es indispensable preparar la vivienda (Home Staging) antes de hacer las fotos y publicarla?',
            answerIntroduction: 'La primera impresión determina el valor percibido. Publicar una propiedad con desorden, sobrecargada o con fotografía no profesional genera ofertas a la baja y prolonga el tiempo en el mercado. Un trabajo planificado de despersonalización, orden y preparación estética (Home Staging) combinado con fotografía profesional resalta el potencial del espacio, atrae a compradores cualificados y permite cerrar la venta al mejor precio posible.',
          },
          {
            id: 8,
            question: '8. ¿En cuánto tiempo se vende una propiedad si la gestión se hace correctamente desde el primer día?',
            answerIntroduction: 'Una propiedad con una valoración técnica rigurosa, una puesta a punto impecable y una estrategia de comercialización dirigida no debe tardar más de 3 meses en venderse. Superar este plazo suele ser síntoma de un error en la fijación de precio inicial o en la presentación y filtrado del cliente comprador.',
          },
        ],
      },
      {
        blockNumber: 'BLOQUE 3',
        blockTitle: 'Bloque 3: Servicio al Comprador, Reubicación (Relocation) y Seguridad Jurídica',
        buttonLabel: '3. Comprador, Relocation y Legal',
        items: [
          {
            id: 9,
            question: '9. Si quiero COMPRAR una vivienda en el Garraf o Costa Daurada, ¿cómo me ayuda Golden Coast?',
            answerIntroduction: 'Actuamos como tu Personal Shopper Inmobiliario para proteger tus intereses frente a las agencias vendedoras. Analizamos tus necesidades y presupuesto, realizamos la búsqueda personalizada, filtramos las opciones que realmente encajan, auditamos la documentación legal de la finca (cargas, nota simple, situación urbanística) y negociamos el mejor precio y condiciones en tu nombre hasta la firma en notaría.',
          },
          {
            id: 10,
            question: '10. Vengo a vivir o invertir desde el extranjero o de otra comunidad, ¿en qué consiste el Servicio de Reubicación (Relocation)?',
            answerIntroduction: 'Mudarse implica mucho más que encontrar una casa. Nuestro servicio de Relocation acompaña a clientes e inversores internacionales (Reino Unido, Alemania, Francia...) y nacionales durante todo el proceso de llegada a España:',
            bulletPoints: [
              {
                bold: 'Asesoramiento de zona:',
                text: 'Elección de la zona según tu perfil personal, familiar y estilo de vida.',
              },
              {
                bold: 'Búsqueda de vivienda:',
                text: 'Adquisición, alquiler de temporada o larga duración según tus necesidades.',
              },
              {
                bold: 'Coordinación legal y administrativa:',
                text: 'Trámites de NIE, apertura de cuentas bancarias y asesoría fiscal asociada.',
              },
              {
                bold: 'Acompañamiento posterior:',
                text: 'Búsqueda de colegios, suministros y contratación de servicios de confianza.',
              },
            ],
          },
          {
            id: 11,
            question: '11. ¿Qué documentos y requisitos legales son estrictamente obligatorios para alquilar o vender un inmueble en Cataluña?',
            answerIntroduction: 'La normativa catalana exige un expediente documental riguroso:',
            callout1: {
              title: 'Para Venta o Alquiler:',
              text: 'Es obligatorio disponer de la Cédula de Habitabilidad vigente (cuyo número de registro debe constar en contratos según Ley 18/2007) y el Certificado de Eficiencia Energética (CEE).',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Para Alquiler:',
              text: 'Es imperativo el justificante del depósito de la fianza en el INCASÒL (Decreto Ley 14/2010), el certificado oficial del Índice de Referencia de Precios en zonas tensionadas y el desglose contractual de gastos.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. ¿En qué consiste el servicio de doble check jurídico y pericial de Golden Coast frente a una inmobiliaria tradicional?',
            answerIntroduction: 'La mayoría de agencias intermediarias emplean contratos estándar y descuidan la comprobación técnica. En Golden Coast operamos con el rigor de un despacho pericial inmobiliario: auditamos el historial de contratos anteriores, comprobamos notas simples, cargas, estatutos de comunidad, concordancia catastral y la normativa vigente (LAU y contención de rentas). Redactamos contratos a medida para garantizar que la operación sea inatacable jurídicamente.',
          },
        ],
      },
    ],
  },
  en: {
    headerEyebrow: 'FREQUENTLY ASKED QUESTIONS · GOLDEN COAST',
    headerTitle: 'Clear answers and forensic legal rigor for every query.',
    headerSubtitle: 'Transparent guidance is the bedrock of peace of mind. Here we resolve the most frequent questions regarding property management, acquisition, leasing, and regional regulations.',
    expandAll: 'Open all',
    collapseAll: 'Close all',
    answerLabel: 'Answer:',
    bottomEyebrow: 'EXPERT ADVISORY',
    bottomTitle: 'Do you have a specific property inquiry or legal question?',
    bottomSubtitle: 'Every estate matter is unique. I evaluate your personal situation confidentially to ensure total technical and statutory security.',
    bottomBtn: 'Consult my case with Valeria',
    blocks: [
      {
        blockNumber: 'BLOCK 1',
        blockTitle: 'Block 1: Rentals (Holiday, Seasonal, Long-Term) & Regulations',
        buttonLabel: '1. Rentals & Regulations',
        items: [
          {
            id: 1,
            question: '1. If my property is in a designated rent-controlled zone, must I lower rent to the Reference Index? Or may I increase it if the Index is higher than what I charged?',
            answerIntroduction: 'It depends on your ownership status and previous leasing history (Spanish Housing Law 12/2023 and Catalan Tenancy Statutes):',
            callout1: {
              title: 'If the Index is LOWER than the prior lease (Example: You leased at €850 and the Index dictates €780):',
              text: 'If you are an individual landlord (owning fewer than 5 or 10 properties depending on municipality) and the home has been leased within the last 5 years, you are NOT obliged to lower the initial rent to €780. The law permits you to take the previous lease rate (€850) as your ceiling. Mandatory reduction to the statutory index ceiling applies solely to large institutional landlords or homes without leases in the prior 5 years.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'If the Index is HIGHER than the prior lease (Example: You leased at €780 and the Index allows €850):',
              text: 'The rent of the previous contract (€780) constitutes an impassable ceiling. You cannot increase rent to €850 citing the Index. The only statutory exception permitting up to a 10% premium requires documented substantial energy rehabilitation (min 30%), certified accessibility adaptations, or executing a long-term lease of 10+ years.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. Can I pass on property taxes (IBI), community fees, and waste collection charges to a new tenant?',
            answerIntroduction: '',
            calloutTop: 'Solely if those exact fees were already agreed and formally billed to the tenant in the previous lease.',
            concludingText: 'If those expenses were not passed on previously, introducing them into a new tenancy in a capped-rent zone to bypass rent limitations is considered a fraudulent rent hike by the courts, rendering the clause null and void (Articles 6 and 20.1 LAU).',
          },
          {
            id: 3,
            question: '3. Are tourist rental licenses currently being granted? And is it true that a license "transfers" upon purchasing an apartment?',
            answerIntroduction: 'It is vital to distinguish statutory realities from misleading marketing pitches:',
            bulletPoints: [
              {
                bold: 'Issuing of new licenses:',
                text: 'Across more than 260 Catalan municipalities designated as stressed housing zones (including Sitges, Vilanova, Calafell, Cubelles), Decree Law 3/2023 froze new tourist licenses, requiring special municipal permits that are heavily restricted.',
              },
              {
                bold: 'Buying an apartment with a "tourist license":',
                text: 'A tourist license is not a transferable asset sold with the title deed. Administratively, only a titular activity change request is filed, which is invalid if the municipality prohibits holiday use.',
              },
              {
                bold: 'Statutory expiration in 2028:',
                text: 'Under Decree Law 3/2023, existing licenses expire in November 2028. To continue past that threshold, the town hall must grant a newly qualified urban permit. Without it, tourist operation ceases.',
              },
            ],
            concludingText: 'Before committing to buy any holiday home in Garraf or Costa Dorada, Golden Coast conducts a thorough town planning audit to certify legal viability.',
          },
          {
            id: 4,
            question: '4. Can I hire modular services for my holiday or seasonal rental without assigning full management?',
            answerIntroduction: 'Yes. At Golden Coast we adapt to your precise needs. For holiday lets and seasonal rentals (from 32 days up to 12 months) in Sitges, Vilanova, Cubelles, Cunit, Segur, and Calafell, you may choose full 360° management or specific modules: key handovers, statutory seasonal lease drafting, check-in inventories, laundry, or 24/7 guest assistance.',
          },
          {
            id: 5,
            question: '5. If I reside abroad (UK, Germany, France...), how does Golden Coast manage my home without requiring my travel?',
            answerIntroduction: 'We provide a turnkey remote management service tailored for international owners:',
            bulletPoints: [
              {
                bold: 'Remote Management:',
                text: 'We execute valuations, staging, editorial photography, and candidate vetting with total transparency and continuous communication.',
              },
              {
                bold: 'Advanced Digital Signature:',
                text: 'We coordinate video conferences, key turnovers, and contract execution via certified eIDAS digital signatures with absolute legal validity across Europe.',
              },
              {
                bold: 'Complete Administration:',
                text: 'We handle INCASÒL escrow deposits, monthly settlements, utility tracking, and ongoing maintenance for your total peace of mind.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'BLOCK 2',
        blockTitle: 'Block 2: Property Sales, Valuation & Home Staging',
        buttonLabel: '2. Sales, Valuation & Staging',
        items: [
          {
            id: 6,
            question: '6. How do you calculate the true market value of my home to achieve the best sale price?',
            answerIntroduction: 'Unlike automated portal estimates based on inflated asking prices, Golden Coast combines certified Judicial Appraiser accreditation with forensic comparative data from verified transactions recorded in the Spanish Land Registry. We assess technical status, cadastral congruence, legal burdens, and active solvent demand to pinpoint an optimal price that maximizes proceeds without stagnating.',
          },
          {
            id: 7,
            question: '7. Why is Home Staging indispensable before photography and publishing?',
            answerIntroduction: 'First impressions determine perceived transaction value. Listing a cluttered home with uncurated photos attracts discount bidders and extends time on the market. Staged depersonalization, spatial order, and editorial photography spotlight the architectural potential, attracting qualified buyers willing to pay full market value.',
          },
          {
            id: 8,
            question: '8. How long does it take to sell a property when managed professionally from day one?',
            answerIntroduction: 'A properly priced home with professional staging, verified documentation, and targeted buyer outreach typically completes within 90 days. Exceeding this timeframe usually indicates pricing misalignment or insufficient buyer pre-screening.',
          },
        ],
      },
      {
        blockNumber: 'BLOCK 3',
        blockTitle: 'Block 3: Buyer Services, Relocation & Legal Safeguards',
        buttonLabel: '3. Buyers, Relocation & Legal',
        items: [
          {
            id: 9,
            question: '9. If I wish to PURCHASE a home in Garraf or Costa Dorada, how does Golden Coast assist?',
            answerIntroduction: 'We act as your independent Property Finder (Personal Shopper), representing your interests exclusively against listing agents. We refine your search criteria, conduct private scouting, inspect legal land registry status, review community debt certificates, and negotiate terms on your behalf through notary completion.',
          },
          {
            id: 10,
            question: '10. I am relocating from abroad or another region: what does your Relocation Service entail?',
            answerIntroduction: 'Relocating to Spain entails far more than securing a deed. Our Relocation practice guides international clients (UK, Germany, France, Switzerland, USA) through every milestone:',
            bulletPoints: [
              {
                bold: 'Lifestyle Advisory:',
                text: 'Pinpointing the exact neighborhood suited to your family and everyday rhythm.',
              },
              {
                bold: 'Property Search:',
                text: 'Tailored acquisition, long-term leasing, or transitional homes.',
              },
              {
                bold: 'Administrative Support:',
                text: 'Assistance with NIE registration, Spanish bank accounts, and certified legal liaisons.',
              },
              {
                bold: 'Post-Arrival Settlement:',
                text: 'Guidance on international schools, healthcare, and trusted contractor introductions.',
              },
            ],
          },
          {
            id: 11,
            question: '11. Which documents and legal certificates are strictly mandatory to sell or lease in Catalonia?',
            answerIntroduction: 'Catalan legislation mandates strict documentary compliance:',
            callout1: {
              title: 'For Sale or Lease:',
              text: 'A valid Certificate of Habitability (Cédula de Habitabilidad) and official Energy Performance Certificate (EPC / CEE) are statutory prerequisites.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'For Rentals:',
              text: 'Official proof of tenant deposit escrow with INCASÒL, an official certified Reference Price Index extract, and detailed expense breakdowns.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. What is Golden Coast’s "dual legal and appraisal check" compared to traditional real estate brokers?',
            answerIntroduction: 'Most traditional brokers rely on generic templates and skip technical audits. At Golden Coast, we operate with the forensic diligence of a Judicial Appraisal office: auditing prior lease histories, land registry notes (notas simples), community bylaws, and urban compliance (LAU and rent caps). We draft bespoke contracts designed to be legally unassailable and protect you from fines or litigation.',
          },
        ],
      },
    ],
  },
  de: {
    headerEyebrow: 'HÄUFIG GESTELLTE FRAGEN · GOLDEN COAST',
    headerTitle: 'Klare Antworten und juristische Präzision für jede Frage.',
    headerSubtitle: 'Transparenz ist das Fundament wahrer Gelassenheit. Hier beantworten wir die wichtigsten Fragen zu Immobilienverwaltung, Kauf, Vermietung und spanischem Immobilienrecht.',
    expandAll: 'Alle öffnen',
    collapseAll: 'Alle schließen',
    answerLabel: 'Antwort:',
    bottomEyebrow: 'FUNDIERTE BERATUNG',
    bottomTitle: 'Haben Sie ein konkretes Anliegen zu Ihrer Immobilie?',
    bottomSubtitle: 'Jedes Vermögen ist individuell. Ich prüfe Ihre Situation vertraulich und unverbindlich für maximale rechtliche und wirtschaftliche Sicherheit.',
    bottomBtn: 'Gespräch mit Valeria anfragen',
    blocks: [
      {
        blockNumber: 'BLOCK 1',
        blockTitle: 'Block 1: Vermietung (Ferien, Saison, Langzeit) & Vorschriften',
        buttonLabel: '1. Vermietung & Vorschriften',
        items: [
          {
            id: 1,
            question: '1. Bin ich in einem angespannten Wohnungsmarkt verpflichtet, die Miete auf den Referenzindex zu senken? Oder darf ich erhöhen, wenn der Index mehr erlaubt?',
            answerIntroduction: 'Dies hängt von Ihrem Eigentümerstatus und der Vorgeschichte der Immobilie ab (Spanisches Wohnraumgesetz 12/2023 und LAU):',
            callout1: {
              title: 'Wenn der Index NIEDRIGER ist als der vorherige Vertrag (Beispiel: Sie vermieteten zu 850 € und der Index liegt bei 780 €):',
              text: 'Wenn Sie Kleineigentümer sind (weniger als 5 bzw. 10 Einheiten) und die Immobilie in den letzten 5 Jahren vermietet war, müssen Sie die Miete NICHT auf 780 € senken. Das Gesetz erlaubt Ihnen, die vorherige Miete (850 €) als Obergrenze beizubehalten.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Wenn der Index HÖHER ist als der vorherige Vertrag (Beispiel: Sie vermieteten zu 780 € und der Index erlaubt 850 €):',
              text: 'Die vorherige Miete (780 €) fungiert als absolute Obergrenze. Sie dürfen nicht unter Berufung auf den Index auf 850 € erhöhen. Ein Zuschlag von bis zu 10% ist nur bei nachgewiesenen energetischen Sanierungen oder 10-jährigen Mietverträgen zulässig.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. Kann ich Grundsteuer (IBI), Hausgeld und Müllgebühren auf den neuen Mieter umlegen?',
            answerIntroduction: '',
            calloutTop: 'Ausschließlich dann, wenn genau diese Kosten bereits im Vorvertrag ausdrücklich vereinbart und umgelegt wurden.',
            concludingText: 'Wurden diese Kosten zuvor nicht umgelegt, gilt die nachträgliche Einführung in angespannten Gebieten als rechtswidrige Mieterhöhung und ist nichtig (Art. 6 und 20.1 LAU).',
          },
          {
            id: 3,
            question: '3. Werden derzeit Ferienvermietungslizenzen erteilt? Und geht die Lizenz beim Kauf automatisch über?',
            answerIntroduction: 'Hier ist die rechtliche Realität von irreführenden Maklerversprechen zu unterscheiden:',
            bulletPoints: [
              {
                bold: 'Vergabe neuer Lizenzen:',
                text: 'In über 260 katalanischen Gemeinden mit Wohnraummangel (u.a. Sitges, Vilanova, Calafell, Cubelles) wurden neue Ferienlizenzen durch das Dekret 3/2023 faktisch eingefroren.',
              },
              {
                bold: 'Kauf mit bestehender Lizenz:',
                text: 'Eine Ferienlizenz ist kein vererbbares Eigentumsrecht. Es findet lediglich eine verwaltungsrechtliche Umschreibung statt, die unwirksam ist, falls die Gemeinde die Nutzung nicht gestattet.',
              },
              {
                bold: 'Befristung bis 2028:',
                text: 'Frühere Lizenzen laufen im November 2028 aus. Für eine Fortführung bedarf es einer neuen städtebaulichen Bewilligung der jeweiligen Gemeinde.',
              },
            ],
            concludingText: 'Vor jedem Erwerb einer Ferienimmobilie führt Golden Coast eine baurechtliche Vorabprüfung durch.',
          },
          {
            id: 4,
            question: '4. Kann ich modulare Teilleistungen buchen, ohne die komplette Verwaltung zu übertragen?',
            answerIntroduction: 'Ja. Bei Golden Coast richten wir uns ganz nach Ihrem Bedarf. Bei Ferien- und Saisonvermietung können Sie Einzelleistungen wählen: Schlüsselübergabe, gesetzeskonforme Zeitmietverträge, Inventare, Reinigung oder 24/7 Notdienst.',
          },
          {
            id: 5,
            question: '5. Ich lebe im Ausland: Wie betreut Golden Coast meine Immobilie ohne meine Anwesenheit vor Ort?',
            answerIntroduction: 'Wir bieten einen schlüsselfertigen Rundum-Service für internationale Eigentümer:',
            bulletPoints: [
              {
                bold: 'Verwaltung aus der Ferne:',
                text: 'Bewertung, Home Staging, Fotografie und Mieterauswahl bei kontinuierlicher transparenter Berichterstattung.',
              },
              {
                bold: 'Qualifizierte digitale Signatur:',
                text: 'Vertragsabschlüsse über europaweit rechtsgültige digitale Signaturen (eIDAS-Verordnung) ohne Reiseaufwand.',
              },
              {
                bold: 'Vollständige Abwicklung:',
                text: 'Kautionshinterlegung beim INCASÒL, Abrechnung und Instandhaltung für Ihre absolute Ruhe.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'BLOCK 2',
        blockTitle: 'Block 2: Immobilienverkauf, Wertermittlung & Home Staging',
        buttonLabel: '2. Verkauf, Wertermittlung & Staging',
        items: [
          {
            id: 6,
            question: '6. Wie ermitteln Sie den realistischen Marktwert meiner Immobilie für den besten Erlös?',
            answerIntroduction: 'Anders als automatisierte Internet-Schätzungen stützen wir uns als zertifizierte API und Gerichtssachverständige auf tatsächliche notarielle Vergleichstransaktionen aus dem spanischen Grundbuch. Wir prüfen Bauzustand, Katasterübereinstimmung und kaufkräftige Nachfrage für eine punktgenaue Preisgestaltung.',
          },
          {
            id: 7,
            question: '7. Warum ist Home Staging vor der Vermarktung und Fotografie unverzichtbar?',
            answerIntroduction: 'Der erste Eindruck prägt den wahrgenommenen Wert entscheidend. Eine unaufgeräumte oder dunkle Immobilie führt zu Preisabschlägen. Gezieltes Home Staging und professionelle Fotografie rücken Vorzüge ins beste Licht und erzielen nachweislich höhere Verkaufspreise.',
          },
          {
            id: 8,
            question: '8. In welcher Zeitspanne wird eine Immobilie bei professioneller Betreuung verkauft?',
            answerIntroduction: 'Eine Immobilie mit fundierter Wertermittlung und zielgenauer Vermarktung wird in der Regel innerhalb von 3 Monaten veräußert. Längere Laufzeiten deuten meist auf Fehleinschätzungen beim Einstiegspreis hin.',
          },
        ],
      },
      {
        blockNumber: 'BLOCK 3',
        blockTitle: 'Block 3: Käuferberatung, Relocation & Rechtssicherheit',
        buttonLabel: '3. Käufer, Relocation & Recht',
        items: [
          {
            id: 9,
            question: '9. Wie unterstützt mich Golden Coast beim KAUF einer Immobilie im Garraf oder an der Costa Dorada?',
            answerIntroduction: 'Als unabhängige Buyers Agent vertreten wir ausschließlich Ihre Interessen gegenüber Verkäufern und Agenturen. Wir sondieren den Markt, prüfen Grundbuchauszüge (nota simple), Lastenfreiheit und Baurecht und verhandeln Konditionen bis zur notariellen Beurkundung.',
          },
          {
            id: 10,
            question: '10. Was beinhaltet der Relocation-Service für Zuziehende aus dem Ausland?',
            answerIntroduction: 'Ein Umzug ins Ausland geht weit über die Haussuche hinaus. Unser Relocation-Service begleitet internationale Klienten umfassend:',
            bulletPoints: [
              {
                bold: 'Standortberatung:',
                text: 'Ermittlung des optimalen Wohnumfelds passend zu Ihrem Lebensstil.',
              },
              {
                bold: 'Wohnraumsuche:',
                text: 'Kauf oder Miete nach Ihren terminlichen Vorgaben.',
              },
              {
                bold: 'Behörden & Administration:',
                text: 'Unterstützung bei NIE-Nummer, spanischem Bankkonto und steuerlichen Kontakten.',
              },
              {
                bold: 'Einleben vor Ort:',
                text: 'Hilfe bei Schulsuche, Versorgungsverträgen und verlässlichen Handwerkern.',
              },
            ],
          },
          {
            id: 11,
            question: '11. Welche Dokumente sind für Verkauf oder Vermietung in Katalonien zwingend erforderlich?',
            answerIntroduction: 'Das katalanische Recht verlangt lückenlose Unterlagen:',
            callout1: {
              title: 'Für Verkauf oder Vermietung:',
              text: 'Gültige Bewohnbarkeitsbescheinigung (Cédula de Habitabilidad) und offizieller Energieausweis (CEE).',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Für Vermietung:',
              text: 'Kautionsnachweis beim INCASÒL, offizieller Mietpreisindex-Auszug und Aufschlüsselung der Nebenkosten.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. Was unterscheidet den rechtlichen und gutachterlichen Doppel-Check von Golden Coast von klassischen Maklern?',
            answerIntroduction: 'Herkömmliche Makler nutzen oft Standardverträge ohne technische Detailprüfung. Bei Golden Coast agieren wir mit der Sorgfalt eines Sachverständigenbüros: Prüfung aller Vorverträge, Grundbuchlasten, Katastergrenzen und Mietpreisregulierungen für einen juristisch unanfechtbaren Abschluss.',
          },
        ],
      },
    ],
  },
  fr: {
    headerEyebrow: 'FOIRE AUX QUESTIONS · GOLDEN COAST',
    headerTitle: 'Réponses claires et rigueur juridique pour chaque interrogation.',
    headerSubtitle: 'La transparence est le fondement de la sérénité. Retrouvez ici les réponses aux questions les plus courantes sur la gestion, la vente, l’achat et la réglementation en Catalogne.',
    expandAll: 'Tout ouvrir',
    collapseAll: 'Tout fermer',
    answerLabel: 'Réponse :',
    bottomEyebrow: 'CONSEIL RIGOUREUX',
    bottomTitle: 'Vous avez une question spécifique sur votre bien ?',
    bottomSubtitle: 'Chaque situation patrimoniale est unique. J’analyse votre dossier en toute confidentialité pour vous garantir une parfaite sécurité juridique et technique.',
    bottomBtn: 'Poser une question à Valeria',
    blocks: [
      {
        blockNumber: 'BLOC 1',
        blockTitle: 'Bloc 1 : Locations (Saisonnière, Temporaire, Longue Durée) & Réglementation',
        buttonLabel: '1. Locations & Réglementation',
        items: [
          {
            id: 1,
            question: '1. En zone tendue, dois-je obligatoirement baisser le loyer au tarif de l’indice de référence ? Ou puis-je l’augmenter si l’indice est plus élevé ?',
            answerIntroduction: 'Tout dépend de votre statut de propriétaire et de l’historique du bien (Loi sur le logement 12/2023 et loi sur les baux urbains LAU) :',
            callout1: {
              title: 'Si l’indice est INFÉRIEUR au bail précédent (Exemple : Vous louiez à 850 € et l’indice indique 780 €) :',
              text: 'Si vous êtes un petit propriétaire (moins de 5 ou 10 biens) et que le logement a été loué au cours des 5 dernières années, vous n’êtes PAS tenu de baisser le loyer à 780 €. Le loyer du précédent bail (850 €) fait foi comme plafond.',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Si l’indice est SUPÉRIEUR au bail précédent (Exemple : Vous louiez à 780 € et l’indice autorise 850 €) :',
              text: 'Le loyer du bail précédent (780 €) constitue un plafond infranchissable. Vous ne pouvez pas augmenter le loyer à 850 € en invoquant l’indice. Une majoration jusqu’à 10 % n’est autorisée qu’en cas de travaux majeurs d’efficacité énergétique ou de bail de 10 ans et plus.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 2,
            question: '2. Puis-je répercuter la taxe foncière (IBI), les charges de copropriété et la taxe d’ordures ménagères sur le locataire ?',
            answerIntroduction: '',
            calloutTop: 'Uniquement si ces charges étaient déjà expressément prévues et répercutées dans le contrat de bail précédent.',
            concludingText: 'Les instaurer pour la première fois en zone tendue afin de compenser le plafonnement du loyer est considéré comme une hausse déguisée et sanctionné de nullité (Art. 6 et 20.1 LAU).',
          },
          {
            id: 3,
            question: '3. Des licences touristiques sont-elles encore accordées ? Est-il vrai que la licence se "transmet" lors de la vente ?',
            answerIntroduction: 'Il est indispensable de distinguer le cadre légal réel des arguments de vente trompeurs :',
            bulletPoints: [
              {
                bold: 'Octroi de nouvelles licences :',
                text: 'Dans plus de 260 communes catalanes en zone tendue (Sitges, Vilanova, Calafell, Cubelles), le Décret-loi 3/2023 a gelé les nouvelles licences touristiques.',
              },
              {
                bold: 'Achat d’un bien avec "licence" :',
                text: 'La licence touristique n’est pas un bien patrimonial cessible. Il s’agit d’une démarche administrative de changement de titulaire, nulle si la commune restreint cet usage.',
              },
              {
                bold: 'Caducité en 2028 :',
                text: 'Les licences existantes expirent obligatoirement en novembre 2028, sous réserve d’une nouvelle autorisation d’urbanisme délivrée par la mairie.',
              },
            ],
            concludingText: 'Avant toute acquisition d’un bien à vocation touristique, Golden Coast réalise un audit préalable de faisabilité.',
          },
          {
            id: 4,
            question: '4. Puis-je souscrire des prestations à la carte sans confier la gestion complète de mon bien ?',
            answerIntroduction: 'Oui. Chez Golden Coast, nous nous adaptons à votre organisation. Pour les locations de vacances ou temporaires, vous pouvez opter pour des modules à la carte : accueil et remise des clés (check-in/check-out), rédaction de baux temporaires légaux, inventaires, ménage ou permanence 24/7.',
          },
          {
            id: 5,
            question: '5. Si je réside à l’étranger (France, Belgique, Suisse...), comment Golden Coast gère-t-elle mon bien sans déplacement ?',
            answerIntroduction: 'Nous proposons une gérance clé en main pour les propriétaires non résidents :',
            bulletPoints: [
              {
                bold: 'Gestion à distance :',
                text: 'Estimation, mise en valeur, prises de vue et sélection des locataires avec des comptes-rendus réguliers.',
              },
              {
                bold: 'Signature électronique certifiée :',
                text: 'Signature des baux par signature électronique avancée (règlement européen eIDAS) à pleine valeur probante.',
              },
              {
                bold: 'Gestion administrative totale :',
                text: 'Dépôt des garanties à l’INCASÒL, encaissement des loyers et coordination des interventions.',
              },
            ],
          },
        ],
      },
      {
        blockNumber: 'BLOC 2',
        blockTitle: 'Bloc 2 : Vente de Propriétés, Estimation & Home Staging',
        buttonLabel: '2. Vente, Estimation & Staging',
        items: [
          {
            id: 6,
            question: '6. Comment déterminez-vous la valeur réelle de marché de mon bien pour le vendre au meilleur prix ?',
            answerIntroduction: 'Loin des estimations automatiques basées sur des prix d’annonces surévalués, nous croisons notre expertise d’API et d’experte judiciaire avec les transactions réelles enregistrées au Registre de la Propriété pour fixer un prix compétitif et maximiser votre gain.',
          },
          {
            id: 7,
            question: '7. Pourquoi la valorisation du bien (Home Staging) est-elle indispensable avant les photographies ?',
            answerIntroduction: 'La première impression dicte la perception de valeur. Un logement encombré ou mal éclairé suscite des offres au rabais. Une mise en scène soignée associée à des photos d’architecture met en lumière les volumes et attire les acquéreurs les plus qualifiés.',
          },
          {
            id: 8,
            question: '8. Quel est le délai moyen de vente d’un bien correctement géré dès le premier jour ?',
            answerIntroduction: 'Un bien proposé au juste prix, magnifiquement présenté et commercialisé de façon ciblée se vend généralement en moins de 3 mois.',
          },
        ],
      },
      {
        blockNumber: 'BLOC 3',
        blockTitle: 'Bloc 3 : Accompagnement Acquéreurs, Relocation & Sécurité Juridique',
        buttonLabel: '3. Acquéreurs, Relocation & Juridique',
        items: [
          {
            id: 9,
            question: '9. Si je souhaite ACHETER un bien dans le Garraf ou la Costa Dorada, comment Golden Coast m’accompagne-t-elle ?',
            answerIntroduction: 'Nous agissons comme votre chasseur immobilier exclusif (Personal Shopper) pour défendre vos intérêts face aux agences vendeuses. Nous sélectionnons les biens conformes, auditons le registre foncier, vérifions l’absence de dettes et négocions les conditions jusqu’à l’acte notarié.',
          },
          {
            id: 10,
            question: '10. Je viens m’installer depuis l’étranger : en quoi consiste le service de Relocation ?',
            answerIntroduction: 'S’installer en Espagne implique bien plus que dénicher un appartement. Notre service de Relocation accompagne les expatriés à chaque étape :',
            bulletPoints: [
              {
                bold: 'Choix du secteur :',
                text: 'Orientation vers la commune correspondant à vos aspirations de vie.',
              },
              {
                bold: 'Recherche de logement :',
                text: 'Achat ou location selon votre planning d’installation.',
              },
              {
                bold: 'Formalités administratives :',
                text: 'Accompagnement pour le NIE, ouverture de compte bancaire et mise en relation fiscale.',
              },
              {
                bold: 'Installation sereine :',
                text: 'Aide à la scolarisation des enfants et ouverture des contrats d’énergie.',
              },
            ],
          },
          {
            id: 11,
            question: '11. Quels documents légaux sont strictement obligatoires pour vendre ou louer en Catalogne ?',
            answerIntroduction: 'La législation catalane impose un dossier technique complet :',
            callout1: {
              title: 'Pour la vente ou la location :',
              text: 'Certificat d’habitabilité en vigueur (Cédula de Habitabilidad) et Diagnostic de Performance Énergétique (CEE).',
              borderCol: '#D4AF37',
            },
            callout2: {
              title: 'Pour la location :',
              text: 'Dépôt légal de la caution à l’INCASÒL, extrait officiel de l’indice de référence des loyers et détail des charges.',
              borderCol: '#8FA777',
            },
          },
          {
            id: 12,
            question: '12. En quoi consiste le double contrôle juridique et pericial de Golden Coast ?',
            answerIntroduction: 'La majorité des agences utilisent des contrats types sans vérification de fond. Chez Golden Coast, nous appliquons la rigueur d’un cabinet d’expertise judiciaire : audit cadastral, servitudes, charges de copropriété et encadrement des loyers pour une transaction juridiquement inattaquable.',
          },
        ],
      },
    ],
  },
};
