---
name: seo-geo-aeo-audit
description: >
  Audita, prioriza, mejora y construye sitios web para SEO (buscadores), AEO (motores de respuesta)
  y GEO (motores generativos), con evidencia reproducible, cambios autorizados, validación posterior
  y herramientas gratuitas. Cubre sitios existentes y construcción desde cero. Úsalo para auditorías
  web, indexación, rendimiento, contenido, datos estructurados, control de rastreadores de IA,
  medición de visibilidad en respuestas de IA y creación de sitios optimizados desde el inicio.
  Úsalo también cuando pidan «revisá/auditá la web», «cómo estamos en Google», «por qué no
  aparecemos en ChatGPT», revisar Search Console, Analytics, Rank Math o Yoast, palabras clave,
  canibalización, o armar/seguir la hoja de ruta SEO de un sitio.
metadata:
  version: "3.5.0"
  last_reviewed: "2026-10-19"
---

# Skill SEO + AEO + GEO — versión 3.5.0

> **Novedades 3.3.0:** modo rápido para webs chicas, hoja de ruta paso a paso con criterio de aprobado (`references/hoja-de-ruta.md`), comprobaciones reproducibles (`references/quick-checks.md`), guía WordPress/Rank Math/Elementor/caché/Cloudflare (`references/wordpress-cms.md`), plan de autoridad externa por tipo de negocio (`references/offsite-b2b.md`), mapa de palabras clave contra canibalización e informe en lenguaje simple para dueños no técnicos.

**Idioma de trabajo:** español, salvo que el sitio necesite contenido en otro idioma. Explica siglas y términos técnicos la primera vez que aparezcan.

**Objetivo:** mejorar la visibilidad orgánica, la capacidad de respuesta del contenido y su descubribilidad/citación en experiencias de búsqueda generativa sin sacrificar conversiones, precisión, accesibilidad, seguridad, privacidad ni estabilidad técnica. Cuando se construye desde cero, entregar un sitio que nazca con estos fundamentos.

**Principio rector:** diagnosticar con evidencia, recomendar por impacto, intervenir solo con permiso, y verificar lo que realmente cambió. El objetivo es el mejor resultado razonablemente demostrable, no prometer posiciones ni afirmar que una web quedó «perfecta».

**Posición oficial de Google (vigente a 19-10-2026, verificar el día de uso):** optimizar para funciones de IA generativa en Google Search (AI Overviews y AI Mode) **sigue siendo SEO**. No existen requisitos técnicos adicionales más allá de estar indexado y elegible para snippet. Desde el 3 de junio de 2026 Search Console incorpora informes de rendimiento de IA generativa (beta, solo impresiones) y un control para excluirse de esas funciones; el despliegue fue gradual (empezó por Reino Unido), así que comprueba si la propiedad concreta ya lo tiene antes de marcarlo PASS/FAIL. Los “hacks” de AEO/GEO no son necesarios ni efectivos según Google.

## 0.A Modo de trabajo y cómo entregar

**Si te invocan solo con el nombre del skill** (con o sin una URL y sin más instrucciones), el comportamiento por defecto es: **auditoría en modo rápido, solo lectura, sin cambiar nada**, usando por tu cuenta la terminal y el navegador según las reglas de abajo. Si no hay URL, búscala en las notas o el tablero del proyecto actual; si no está, pregunta solo eso. Al final ofrece los próximos pasos y pide autorización para cualquier cambio.

Elige el modo al empezar y dilo en una línea:

- **Modo rápido** (por defecto para webs de hasta ~30 URLs, una persona dueña no técnica, o cuando el pedido es «revisá cómo estamos»): recorre `references/hoja-de-ruta.md` con las comprobaciones de `references/quick-checks.md`, sin matriz de 13 columnas ni tres ciclos formales. Sigue siendo obligatorio: evidencia por punto, no inventar, autorización por cambio, verificación en vivo y reversión.
- **Modo completo** (sitios grandes, cliente formal, migraciones, ecommerce o riesgo alto): flujo entero de las secciones 2–14.

**Entrega para el dueño (siempre, en ambos modos):** primero un resumen en lenguaje simple y sin jerga, con una tabla `Qué revisé | Estado (✅ bien / ⚠️ mejorar / ❌ falla / 🔒 no pude revisar) | Qué hacer`, ordenada por impacto real en ventas y visibilidad, no por la cantidad de alertas de una herramienta. Separa explícitamente lo que **mejora Google/IA de verdad** de lo que **solo sube la nota de un plugin** (por ejemplo Rank Math, Yoast o checkers externos). La matriz técnica va después, como anexo, solo si aporta.

**Auditoría ciega primero, notas después.**
1. **Diagnóstico ciego:** asigna cada estado (✅/⚠️/❌/🔒) solo con lo que observas hoy en la web y en las herramientas. Para esta fase **no leas** notas, tableros, memorias ni auditorías anteriores del proyecto (aunque las instrucciones generales de la carpeta pidan leerlas al empezar sesión, para el diagnóstico prevalece esta regla). Excepción: buscar en ellas solo la URL del sitio si no te la dieron.
2. **Contraste con notas (si existen):** con la tabla ya armada, lee las notas solo para añadir una etiqueta junto al hallazgo: «decisión vigente del dueño» (un title elegido, una página que no se toca; puedes señalar su costo en una línea) o «ya está en pendientes con fecha». **Las notas nunca cambian un estado** ni evitan una prueba; si una nota contradice lo observado, gana lo observado y lo señalas. **Esta fase es automática y va en el mismo informe final** (no la ofrezcas como «segunda parte» ni preguntes si hacerla): primero la tabla ciega, después las etiquetas.
3. **Sin notas** (otro cliente, claude.ai, web nueva): solo la fase 1. El skill debe funcionar completo sin ningún archivo del proyecto.

**Usa el navegador, no solo la terminal.** Los comandos de `quick-checks.md` leen el HTML público, pero **Search Console, Bing Webmaster Tools, la analítica, Rich Results Test y PageSpeed Insights son parte obligatoria también del modo rápido**. **Usa primero el navegador integrado** (el de la app, es más rápido), en solo lectura y en una pestaña visible para que el dueño vea lo que revisas. Si una cuenta pide iniciar sesión, pide al dueño que la inicie él **ahí mismo** (nunca escribas contraseñas) y espera: el dueño está presente. Pasa al navegador externo del usuario solo si el integrado no puede (doble factor, bloqueo antibots, la herramienta no responde) o si el dueño lo pide. Marca 🔒 solo si no hay herramientas de navegador, el dueño no puede iniciar sesión, o la propiedad no existe; di exactamente qué faltó.

**Reglas anti-atajo (obligatorias):**
1. **Si una prueba falla por terminal** (conexión cortada, bloqueo, error del programa), repítela en el navegador antes de marcar 🔒. Ejemplo: la página 404 se prueba abriendo una URL inventada en el navegador y mirando el código/diseño.
2. **Si el navegador integrado pide iniciar sesión**, pide al dueño que entre ahí y espera. Solo si no puede (doble factor, antibots) o lo pide, usa el navegador externo.
3. **Las notas no reemplazan una prueba obligatoria.** Search Console, Bing, analítica, Rich Results Test, PageSpeed, página 404 y vista previa al compartir se ejecutan en cada auditoría aunque una nota diga que «ya estaban bien».
4. **Indexación:** si el informe de páginas parece viejo o contradice otra fuente, confirma con **Inspección de URL** en vivo de al menos 3 páginas importantes (incluida la home) y reporta lo que ves hoy.
5. **Abrir herramientas de solo lectura ya está autorizado** por el hecho de invocar el skill: no preguntes «¿querés que abra Analytics / corra Rich Results / inspeccione más páginas?». Hazlo. Lo mismo para abrir las listas de «no indexadas», inspeccionar más URLs o mirar un detalle: si es solo mirar, hazlo antes de entregar, no lo ofrezcas como próximo paso. Solo pregunta para cambios, para iniciar sesión o para gastos. El skill es de solo lectura; si después del informe el dueño dice «corregí», ahí se aplican los cambios con antes/después y su «sí».
6. **Capturas:** úsalas para verificar mientras revisas; en el informe, en vez de capturas, indica de qué herramienta y fecha sale cada dato.
7. **Todo en el idioma del usuario, también los mensajes de progreso** mientras trabajas (nada de «It's loading» o «The pane is narrow»).
   **Redirecciones:** muestra la cadena completa salto por salto (http://, http://www, https://www) para que se pueda comprobar.
   **Revisión final del texto:** antes de entregar, relee el informe buscando errores de persona o variante (p. ej. «¿o prefiero…?» en vez de «¿o preferís…?»).
8. **No entregues el informe con pruebas obligatorias pendientes que sí podías ejecutar.** Antes de escribir el resumen, recorre esta lista y completa lo que falte: 14 o más URLs del sitemap · redirecciones · robots/sitemap · bots · 404 (código **y** diseño en navegador; si la terminal falla, el código se mira en el navegador, p. ej. con la pestaña de red) · Search Console (rendimiento, páginas, 3 inspecciones en vivo) · Bing (sitemap, rendimiento, AI Performance) · analítica (usuarios, canales, eventos clave **y si cada evento está marcado como clave**, tráfico desde IAs) · en Search Console abrir **todas** las listas de motivos de no indexación · Rich Results Test · PageSpeed móvil · vista previa al compartir. Lo único que puede quedar 🔒 es lo que de verdad no se pudo (sin sesión tras pedirla, herramienta caída).

**Idioma:** escribe en la misma variante de español que usa la persona (si usa voseo rioplatense —«vos», «tenés»—, usa voseo; nunca «vosotros/sois»). Sin jerga; si un término técnico es inevitable, explícalo en pocas palabras.

**Informe de tráfico y mercado (obligatorio, además de lo técnico):** el dueño quiere saber de dónde viene la gente para decidir idiomas, redes y contenido. Entrega una sección corta «De dónde viene la gente» con:
- Search Console (3 meses): países, páginas, consultas, dispositivos y aparición en búsquedas; destaca el país con mejor posición aunque aún no tenga clics. Abre también el **informe de IA generativa** (enlace «Abrir informe» dentro de Rendimiento) y anota impresiones y páginas.
- Analítica (90 días): países, fuente/medio (redes sociales, referencias de IA como chatgpt.com/perplexity), páginas de entrada, eventos y si cada uno está marcado como clave.
- **Contrasta analítica con Search Console y con una medición sin cookies** (Cloudflare Web Analytics u otra). Si el banner de cookies arranca en «denegado» (`gtag('consent','default',{analytics_storage:'denied'})`), la analítica muestra solo a quienes aceptan: dilo y usa la medición sin cookies para países y visitas.
- Traduce los datos en decisiones: idioma de redes y contenido según países reales, mercado prioritario, móvil vs. computadora, qué páginas reforzar. Marca como hipótesis si las visitas pueden ser del propio equipo.

**Más rincones a revisar (solo lectura):**
- Search Console: Ajustes (control «IA generativa en la Búsqueda», estadísticas de rastreo: hosts, códigos de respuesta, tipo de robot), Enlaces (externos e internos), Vídeos, HTTPS, mejoras (rutas de exploración), acciones manuales y seguridad. Abre **todas** las listas de no indexación.
- Sitemap: pídelo **en cada auditoría** y compara con la última lectura de Search Console; una nota que dice «sitemap OK» no vale. Si el sitemap da 404 pero `/?sitemap=1` da 200 (WordPress/Rank Math), la causa suele ser reglas de enlaces permanentes perdidas.
- Bing: Sitemaps, AI Performance, Backlinks, Recommendations, Keyword Research (útil para ver si una palabra es de consumidor —la ganan Amazon/Walmart— o de mayorista).
- PageSpeed: además de rendimiento/SEO/accesibilidad, la categoría **«Navegación agéntica»** (llms.txt, visibilidad para agentes de IA). Si la API no tiene cupo, usa la web pagespeed.web.dev.
- Datos de la empresa: que `sameAs` del schema incluya las redes reales (Instagram, LinkedIn…). Los enlaces desde la bio de redes ayudan a la entidad y traen visitas, pero no cuentan como enlaces fuertes para Google.
- **Si el sitio usa Cloudflare** (cabecera `server: cloudflare`): revisar en solo lectura
  - *AI Crawl Control*: qué bots de IA entran, cuántas peticiones fallan y qué rutas leen; `ChatGPT-User` = ChatGPT abriendo la web porque una persona preguntó (señal GEO real).
  - *Web Analytics / Real User Monitoring*: visitas y países **sin cookies** (excluir bots), y Core Web Vitals de usuarios reales con el elemento LCP.
  - *Analytics › Tráfico*: países, códigos de estado, host www vs. raíz, rutas sospechosas (p. ej. `wp-config.php.bak`: comprobar que den 403/404).
  - *Reglas de redirección*: cadena de saltos http/www. Crear o cambiar reglas es un cambio de dominio: solo con el «sí» explícito del dueño para ese paso.
- **Google Trends** (sin cuenta): comparar las palabras del producto en cada idioma (cuál se busca más y dónde), estacionalidad (meses pico para planificar contenido y redes) y búsquedas «en aumento» que sugieren temas nuevos. Sirve para decidir idioma y calendario, no para medir la web.
- **Velocidad: separa laboratorio de usuarios reales.** PageSpeed simula un teléfono lento con 4G lenta; si hay datos reales (CrUX o Cloudflare RUM), esos mandan. Si el dueño ve la web rápida en su teléfono, no lo contradigas: explica la diferencia y excluye del análisis las visitas del panel de administración.
- Herramientas gratuitas a sugerir si faltan: Microsoft Clarity (mapas de calor), Perfil de Empresa en Google, Google Trends, Ahrefs Webmaster Tools (enlaces).

**Trucos de navegación:** en Search Console, inspecciona URLs desde la barra superior (la dirección directa `/inspect?id=` da 404). En Bing y Cloudflare, navega desde el menú lateral si una dirección directa queda en blanco; si el panel es angosto, abre el menú (tres rayas). Si WordPress muestra el desafío antibots de Cloudflare en el navegador integrado, usa el externo.

**Orden de prioridad en sitios nuevos o chicos:** si hay pocas impresiones y casi ningún dominio enlazando, la autoridad externa (`references/offsite-b2b.md`) suele pesar más que los retoques on-page; no presentes un ajuste de párrafo o de longitud como «lo que más pesa» sin evidencia.

**Longitudes:** no marques ⚠️ un title o description solo por su número de caracteres; hazlo si se corta lo importante, no describe la página o no invita al clic. Mostrar la cifra está bien, juzgarla por sí sola no.

**Antes de proponer cambios de texto visible:** muestra antes/después por página y espera el «sí» de esa página. Cambios invisibles (title, meta description, palabra clave del plugin) también se muestran antes, aunque se apliquen juntos.

**Mapa de palabras clave (obligatorio si hay más de 3 páginas):** una tabla `Página | Idioma | Palabra clave principal | Intención | Title`. Regla: cada intención tiene una sola página dueña; la home se queda con la búsqueda comercial principal. Revisa el mapa antes y después de cualquier cambio de keyword o title para evitar canibalización (incluye versiones de idioma: la misma keyword en EN y ES con hreflang recíproco no es canibalización).

## 0. Definiciones operativas

- **SEO (Search Engine Optimization):** facilitar que buscadores descubran, rastreen, interpreten, indexen y muestren páginas útiles para consultas pertinentes.
- **AEO (Answer Engine Optimization):** estructurar la información para responder consultas con claridad, precisión y contexto en buscadores o asistentes que generan respuestas.
- **GEO (Generative Engine Optimization):** mejorar la posibilidad de que un contenido sea recuperado, comprendido, citado o enlazado por experiencias de búsqueda generativa. No es una fórmula oficial ni garantiza una cita.
- **SERP (Search Engine Results Page).**
- **CMS (Content Management System).**
- **CWV (Core Web Vitals):** LCP (Largest Contentful Paint ≤ 2,5 s), INP (Interaction to Next Paint ≤ 200 ms) y CLS (Cumulative Layout Shift ≤ 0,1) en el percentil 75 para una buena experiencia. Umbrales de experiencia, no garantías de ranking.
- **JSON-LD:** formato habitual para publicar datos estructurados.
- **EEAT:** experiencia, conocimiento, autoridad y fiabilidad. Marco de calidad descrito por Google; no es un factor único y directo de posicionamiento.
- **Conversión:** acción valiosa para el negocio (consulta cualificada, compra, llamada, solicitud de presupuesto, etc.).
- **Search generative AI setting:** control en Google Search Console (anunciado el 3-jun-2026, despliegue gradual) que decide si el contenido del sitio puede aparecer en AI Overviews, AI Mode y funciones generativas de Discover. Por defecto = incluido. Verificar disponibilidad en la propiedad real.

## 1. Límites y principios no negociables

1. **Evidencia antes que afirmaciones.** Cada hallazgo debe identificar el dato observable, la URL o plantilla afectada, la herramienta/fuente, la fecha y el método de verificación. Si no se puede comprobar, indicar por qué.
2. **No inventar resultados, métricas, datos comerciales, testimonios, autores, premios, certificaciones, reseñas, enlaces, fuentes, precios ni propiedades de schema.** Los ejemplos deben permanecer marcados como ejemplos hasta que sus datos se validen.
3. **No confundir hecho oficial con hipótesis.** Clasificar las afirmaciones como: `CONFIRMADO POR FUENTE PRIMARIA`, `OBSERVADO EN ESTE SITIO`, `HIPÓTESIS A VALIDAR` o `PRÁCTICA EXPERIMENTAL`. Añadir fecha y fuente cuando el hecho pueda cambiar.
4. **Nunca prometer rankings, tráfico, leads ni citas en asistentes de IA.** Los resultados dependen de múltiples sistemas, competencia, ubicación, idioma, personalización, tiempo y demanda.
5. **SEO, AEO y GEO se evalúan juntos, pero no se confunden.** La indexación y el tráfico orgánico no son lo mismo que las citas generativas, y las menciones en respuestas de IA no demuestran por sí solas un aumento de ventas.
6. **No editar, desplegar, publicar, borrar, redirigir, alterar robots/sitemaps, cambiar DNS/CDN/servidor, tocar datos estructurados ni modificar analítica sin autorización explícita para esa acción.** Acceso técnico no equivale a permiso.
7. **Primero copia/backup y plan de reversión.** Antes de cambios significativos registra el estado previo, la URL/plantilla, el archivo/configuración afectados, el cambio propuesto y cómo revertirlo.
8. **No cambies nada que no puedas explicar y probar.** Para cambios de alto riesgo solicita revisión técnica humana; si no puedes ejecutar o verificar la implementación, entrega el parche/instrucciones y marca el trabajo como pendiente.
9. **No expongas credenciales ni secretos.** No pidas contraseñas en el chat, no registres tokens en informes, y usa permisos mínimos cuando haya integraciones.
10. **No hagas SEO ritualista.** No impongas una cantidad universal de palabras, FAQs, encabezados en forma de pregunta, fuentes externas, backlinks, densidad de keywords o caracteres de title/meta. Evalúa la necesidad según intención, contexto, resultados visibles, requisitos oficiales y objetivos de negocio.
11. **No rellenes vacíos con ficción.** Si falta acceso a Search Console, analítica, registros del servidor, CMS, código o herramientas, declara qué parte queda bloqueada y el mínimo necesario para verificarla.
12. **La seguridad no se gestiona con robots.txt.** Para contenido privado se requieren controles de acceso reales. `robots.txt` comunica preferencias de rastreo; no autentica ni garantiza confidencialidad.
13. **La fecha de este skill no congela los hechos.** Antes de usar reglas sobre rastreadores de IA, prestaciones de herramientas, esquemas admitidos, interfaces o políticas, consulta la documentación oficial actual.
14. **Google no requiere llms.txt, chunking especial, reescritura “para IA” ni schema extra para aparecer en AI Overviews o AI Mode.** Prioriza fundamentos SEO y contenido útil y original.

## 2. Estados y formato de evidencia

Asigna a cada comprobación uno de estos estados:

- **PASS:** se comprobó con evidencia suficiente que el criterio relevante se cumple.
- **FAIL:** se comprobó una desviación real respecto de un requisito, una política o un objetivo definido.
- **BLOCKED:** no se pudo comprobar por falta de acceso, datos, permisos, disponibilidad o capacidad de la herramienta.
- **N/A:** el control no corresponde a este sitio o tipo de página; explica la razón.
- **OBSERVACIÓN:** dato contextual que merece seguimiento, pero que no es un fallo confirmado.

No conviertas `BLOCKED` o `N/A` en `PASS`. No uses `PASS` porque una herramienta no detectó un problema si la herramienta no cubre ese control.

Para cada hallazgo registra, como mínimo:

| Campo | Qué registrar |
|---|---|
| ID | Código único, por ejemplo `TECH-01`, `CNT-02`, `GEO-03` |
| Capa | Técnica, contenido, experiencia, datos estructurados, AEO, GEO, analítica u otra |
| Alcance | URL, grupo de URLs, plantilla o sitio completo |
| Estado | PASS / FAIL / BLOCKED / N/A / OBSERVACIÓN |
| Evidencia | URL, fragmento, cabecera HTTP, captura, exportación, log o resultado reproducible |
| Fuente | URL de documentación oficial o de la herramienta utilizada |
| Fecha | Fecha y zona horaria de comprobación |
| Impacto | Alto / medio / bajo, con justificación comercial/técnica |
| Confianza | Alta / media / baja, según fuerza y completitud de evidencia |
| Esfuerzo y riesgo | Bajo / medio / alto, incluidos efectos secundarios plausibles |
| Acción | Cambio concreto o explicación de por qué no se recomienda cambiar |
| Validación | Prueba exacta para comprobar el cambio |
| Reversión | Cómo restaurar el estado previo, si aplica |

## 3. Flujo de trabajo obligatorio

No saltes fases. Adapta la profundidad al tamaño, tipo y riesgo del sitio, pero documenta lo que no se pueda realizar.

### Fase 0 — Entender el encargo y el entorno

Identifica:

- URL/dominio, país(es), idioma(s), mercado(s) y público objetivo.
- Tipo de sitio: corporativo, B2B, local, editorial, ecommerce, marketplace, SaaS, portfolio, sector regulado u otro.
- Objetivo de negocio principal y conversión más valiosa.
- Páginas/plantillas de mayor valor y páginas afectadas.
- CMS, hosting, CDN/WAF, framework y renderizado, si se conocen.
- Alcance autorizado: solo auditar, proponer, editar en borrador, aplicar en staging o desplegar en producción.
- Disponibilidad de Google Search Console, Bing Webmaster Tools, analítica, registros del servidor, código y acceso al CMS.
- Restricciones legales, de privacidad, marca, confidencialidad o acceso a bots.
- Si el trabajo es **auditoría de sitio existente** o **construcción desde cero** (o ambos).

No bloquees todo el trabajo por ausencia de una keyword exacta o de un competidor aportado por el usuario: infiere una hipótesis provisional a partir del contenido, la intención y las SERP, y márcala como hipótesis. Pregunta solo si falta un dato esencial para evitar una acción irreversible o cambiar una decisión estratégica.

### Fase 1 — Línea de base reproducible (antes de cambiar nada)

Guarda una referencia del estado inicial:

1. Fecha/hora, URLs incluidas, límites del rastreo y exclusiones.
2. Lista/crawl de URLs conocidas: sitemap, navegación, enlaces internos, Search Console/Bing si están disponibles.
3. Respuestas HTTP, redirecciones, canonical, robots meta/X-Robots-Tag y robots.txt.
4. HTML inicial frente a HTML renderizado en páginas representativas.
5. Titles, descriptions, H1/H2, enlaces, imágenes, idioma/hreflang y datos estructurados.
6. Medidas de laboratorio y de campo separadas. En Core Web Vitals registra dispositivo, URL/plantilla, herramienta, fecha, métrica y origen de datos.
7. Rendimiento orgánico inicial: clics, impresiones, CTR, posición media, consultas y páginas, con periodo comparable y notas sobre estacionalidad o cambios conocidos.
8. Conversiones y eventos de analítica pertinentes, si hay acceso y consentimiento/configuración válidos.
9. Visibilidad generativa inicial: consultas de prueba, motor, país, idioma, cuenta/modo cuando pueda afectar resultados, fecha, respuesta, URL citada y tipo de mención.
10. Estado de la configuración “Search generative AI” en Search Console (Include/Exclude).
11. Estado de enlaces externos/reputación solo cuando existan datos accesibles y fiables; no inventes métricas de autoridad.

Conserva exports/capturas/logs en la ubicación permitida por el usuario. No guardes datos personales innecesarios.

### Fase 2 — Auditoría integral por módulos

Audita los módulos aplicables. El veredicto debe derivarse de la evidencia, no de una lista mecánica de preferencias.

Para el diagnóstico detallado de cada módulo aplicable (rastreo, URLs, contenido, on-page, rendimiento, schema, internacional, local, ecommerce/B2B, reputación, seguridad/analítica, AEO y GEO), consulta `references/audit-modules.md`. No omitas un módulo que sea relevante para el sitio; marca `N/A` solo con una razón y `BLOCKED` cuando no se disponga de la evidencia necesaria.

### Fase 3 — Construcción desde cero (si aplica)

Si el encargo es crear un sitio nuevo o una sección nueva, sigue el instructivo completo de `references/build-from-scratch.md`. Integra desde el día 1: arquitectura de información orientada a intención, renderizado accesible a rastreadores, schema verdadero, rendimiento, control de bots, medición y contenido original.

## 4. Selección de herramientas y calidad de medición

Usa herramientas oficiales o de reputación conocida cuando aporten evidencia necesaria. Comprueba disponibilidad, límites del plan gratuito, fecha de datos y alcance antes de declararlas «gratuitas», «verificadas» o suficientes.

Consulta obligatoriamente:
- `references/hoja-de-ruta.md` como checklist concreto con criterio de aprobado (base del modo rápido).
- `references/quick-checks.md` para comprobaciones reproducibles desde terminal o navegador.
- `references/wordpress-cms.md` si el sitio es WordPress (Rank Math/Yoast, Elementor, caché, Cloudflare).
- `references/offsite-b2b.md` para autoridad externa, enlaces, reputación y particularidades por tipo de negocio (B2B/exportación, negocio local, ecommerce, servicios).

**Regla de genericidad:** este skill sirve para cualquier rubro y sitio. No guardes dentro del skill datos de un cliente concreto; el estado, las decisiones y los pendientes de cada sitio van en las notas o el tablero de ese proyecto.
- `references/free-tools.md` para la lista actualizada de herramientas gratuitas con límites reales.
- `references/audit-modules.md` para el diagnóstico por módulos.
- `references/ai-crawlers.md` para rastreadores.
- `references/measurement.md` para protocolos de medición y validación.

**Herramientas prioritarias (oficiales / gratuitas):**

- Google Search Console (indexación, Performance, Generative AI reports, URL Inspection, Search generative AI setting).
- Bing Webmaster Tools (AI Performance + Topics Portfolio beta, Site Scan, IndexNow).
- PageSpeed Insights / Lighthouse / CrUX (separar campo y laboratorio).
- Rich Results Test y Schema.org Validator.
- Screaming Frog free (hasta 500 URLs) u equivalentes.
- Analítica ya instalada (GA4 u otra) solo si es fiable.
- Registros HTTP/CDN/WAF cuando el propietario los facilite.
- Motores generativos: consultas manuales con registro de contexto + paneles nativos.

No recomiendes una herramienta comercial como indispensable cuando exista un método gratuito aceptable. No asegures que cualquier herramienta mencionada sigue siendo gratis o mantiene el mismo plan: revísalo el día de uso.

## 5. Política de robots y rastreadores de IA: decisión explícita, no plantilla universal

Antes de editar robots.txt, documenta la intención del propietario:

1. ¿Desea permitir búsqueda/citación pública con IA?
2. ¿Desea permitir recuperación iniciada por una persona usuaria?
3. ¿Desea permitir uso para entrenamiento/modelos?
4. ¿Hay contenido licenciado, privado, sensible, confidencial o contractual que requiera tratamiento particular?
5. ¿Hay CDN/WAF que bloquee bots aunque robots.txt los permita?

Consulta la documentación oficial del proveedor el mismo día que prepares las reglas. Los nombres y propósitos pueden cambiar; valida también IPs oficiales y logs. No confíes únicamente en la cadena User-Agent, que puede falsificarse. No bloquees recursos críticos de Googlebot sin razón técnica demostrable.

Consulta obligatoriamente `references/ai-crawlers.md`. La matriz es orientativa. Si no puedes comprobar documentación, logs o CDN/WAF, marca el control como `BLOCKED` y no edites.

No pegues una plantilla genérica reemplazando todo el archivo del sitio. Genera un diff mínimo sobre las reglas existentes; revisa precedencia, grupos, subdominios, rutas y sintaxis. Si el objetivo no está claro, no edites: presenta opciones con consecuencias.

## 6. Cómo evaluar `llms.txt`, FAQ y otros temas discutidos

Consulta `references/current-practices.md` al tratar `llms.txt`, FAQ, funciones de IA de Google, E-E-A-T o umbrales de Core Web Vitals. Antes de afirmar que una función existe, está retirada o influye en visibilidad, confirma la documentación primaria actual y registra la fecha.

Resumen vigente a 19-10-2026:
- **llms.txt:** propuesta comunitaria. Google declara que no la usa ni la necesita para Search ni para sus funciones de IA. Estudios independientes muestran muy bajo uso real por crawlers de IA. Clasificar como P3 experimental.
- **FAQ rich results de Google:** retirados a partir del 7 de mayo de 2026. `FAQPage` de Schema.org sigue existiendo como vocabulario, pero no genera el rich result anterior.
- **AI Overviews / AI Mode:** mismos fundamentos de SEO; no hay requisitos técnicos adicionales ni schema especial.
- **Core Web Vitals:** LCP, INP, CLS. No reportar FID.

## 7. Priorización transparente

No sumes puntos con una fórmula inventada. Clasifica cada acción con estas dimensiones:

- **Impacto:** alto / medio / bajo para indexación, visibilidad, conversión, usuarios o riesgo.
- **Esfuerzo:** bajo / medio / alto, explicando dependencias técnicas.
- **Confianza:** alta / media / baja, según evidencia.
- **Riesgo de regresión:** bajo / medio / alto.
- **Dependencias:** permisos, contenido del cliente, desarrollo, acceso o aprobación.

Prioridades sugeridas:

- **P0 — Crítico:** desindexación accidental, brecha de seguridad/privacidad, páginas principales caídas, tracking/checkout gravemente roto, bloqueo extendido de rastreo de search bots estratégicos, Search generative AI = Exclude no deseado, cambios que puedan producir daño inmediato. Escalar antes de intervenir.
- **P1 — Alto:** problemas confirmados que impiden que páginas estratégicas se rastreen/indexen, canonicals incorrectas, contenido esencial ausente por renderizado, conversiones clave rotas, errores estructurados/legales relevantes, robots que bloquean OAI-SearchBot / Claude-SearchBot / PerplexityBot cuando se desea citación.
- **P2 — Medio:** mejoras con impacto plausible y evidencia suficiente en contenido, arquitectura, rendimiento, accesibilidad o medición.
- **P3 — Bajo/experimental:** mejoras cosméticas, apuestas inciertas, `llms.txt`, schema no esencial, herramientas de puntuación no validadas.

Dentro de cada prioridad, ordena por impacto, confianza, riesgo y esfuerzo. No ocultes acciones de bajo coste que reduzcan un riesgo crítico.

## 8. Contrato de implementación segura

Cada cambio propuesto debe contener:

1. ID del hallazgo y evidencia original.
2. Resultado esperado y por qué resuelve la causa, no solo el síntoma.
3. Páginas/plantillas/archivos afectados.
4. Texto, configuración o diff concreto, adaptado al CMS/framework real.
5. Supuestos, dependencias y cuestiones que debe responder el cliente.
6. Riesgos y posibles efectos secundarios.
7. Plan de prueba previa y posterior.
8. Copia de seguridad/commit y procedimiento de rollback.
9. Quién debe aprobarlo y qué autorización falta.

**Gates de autorización:**

- Sin permiso para editar: produce un plan y cambios propuestos; no simules la implementación.
- Con permiso para editar en borrador/staging: trabaja solo en ese entorno y prueba antes de producción.
- Con autorización de producción: confirma alcance específico, backup, riesgo, ventana y rollback. No extrapoles permiso de una acción a otra.
- Si no puedes verificar el resultado publicado, marca la acción como «implementación no verificada» y el estado `BLOCKED`.

Para plantillas de alto alcance (header, footer, robots, sitemap, redirecciones, canonicals, plugins SEO, middleware, CMS global), prueba primero una muestra representativa y revisión humana.

## 9. Validación posterior a la implementación

La validación posterior es obligatoria para todo cambio ejecutado. Usa `references/implementation-validation.md` como lista de pruebas y registro de regresiones. Vuelve a probar las mismas URLs/plantillas y condiciones de la línea de base; si no puedes comprobar la publicación o su comportamiento, marca el cambio como `BLOCKED`/«implementación no verificada». Separa siempre «cambio técnico verificado» de «efecto de negocio/visibilidad observado».

## 10. Medición de SEO, AEO y GEO

Usa `references/measurement.md` para el protocolo detallado de línea de base, medición SEO/AEO/GEO, muestreo y fórmulas. No mezcles citas, menciones, impresiones, sesiones y conversiones; registra alcance, denominador, herramienta, fecha y limitaciones. No afirmes causalidad con una mera coincidencia temporal.

Prioriza siempre los paneles nativos (Search Console Generative AI reports y Bing AI Performance / Topics Portfolio) cuando estén disponibles. El muestreo manual es complementario y debe ser reproducible.

## 11. Tres ciclos de control obligatorios

Completa y documenta los tres ciclos. «Tres ciclos» significa tres rondas explícitas de revisión, no repetir la misma respuesta ni garantizar ausencia absoluta de errores.

### Ciclo 1 — Diagnóstico inicial y crítica

- Evalúa la web y el plan de auditoría sin hacer cambios.
- Identifica riesgos críticos, lagunas de evidencia, supuestos, errores técnicos y oportunidades por capas.
- Verifica las afirmaciones dudosas con fuentes primarias actuales.
- Produce un plan ordenado; deja separado qué está confirmado y qué requiere acceso/datos.
- Punto de salida: la línea de base está registrada o todo bloqueo está anotado; hay criterios de aceptación antes de editar.

### Ciclo 2 — Diseño e implementación controlada

- Revisa cada acción P0/P1 y la adapta al stack real.
- Comprueba el contenido, los datos y permisos antes de proponer un patch final.
- Obtén autorización explícita para editar/desplegar; registra versiones y backup.
- Implementa solo el alcance autorizado y valida inmediatamente con la sección 9.
- Punto de salida: cada cambio está verificado, revertido o marcado `BLOCKED`; no se presenta como hecho lo que solo fue recomendado.

### Ciclo 3 — Auditoría adversarial independiente en método

Cambia deliberadamente de perspectiva: actúa como revisor que no da por cierto el diagnóstico ni la propia implementación. Si el entorno permite separar la revisión en una sesión/persona distinta, úsala para cambios críticos; si no, declara que es una revisión adversarial del mismo agente y no una auditoría externa independiente.

Busca específicamente:

- Errores introducidos por los cambios, URLs clave caídas, `noindex`, reglas de bots peligrosas, canonicals equivocadas, redirecciones, sitemap roto, schema falso o duplicado.
- Conclusiones sin evidencia, métricas con denominador ausente, herramientas/funciones desactualizadas y afirmaciones basadas en terceros presentadas como oficiales.
- Confusión entre bots de búsqueda y de entrenamiento, o promesas sobre `llms.txt`, FAQ, schema o citas IA.
- Recomendaciones redundantes, irrelevantes, cosméticas o contrarias a objetivos de negocio.
- Problemas no cubiertos en móvil, idiomas, mercados, analítica, accesibilidad, rendimiento, privacidad o plantillas relacionadas.
- Necesidad de rollback o una prueba adicional para cerrar un riesgo.

Corrige los fallos detectados y repite las pruebas afectadas. Si una corrección modifica otro elemento, vuelve a testear ese elemento. Documenta los problemas restantes como limitaciones, no los escondas.

## 12. Criterios de salida y definición de «terminado»

El trabajo solo puede declararse **cerrado técnicamente dentro del alcance** cuando:

- La línea de base y el alcance están documentados.
- Todos los P0 están resueltos, revertidos o escalados explícitamente; ningún P0 queda oculto como N/A.
- Los P1 están resueltos o tienen bloqueo, responsable, dependencia y próximo paso documentados.
- Las páginas críticas superan las pruebas acordadas de HTTP, indexabilidad, canonical, renderizado, sitemaps y conversión correspondientes.
- No quedan placeholders ni datos estructurados inventados; la validación de esquema usa la herramienta pertinente.
- La medición separa datos de campo/laboratorio y cita/mención/tráfico/conversión.
- Hay plan de rollback para los cambios con riesgo relevante.
- Se completó el ciclo 3 y se enumeraron limitaciones/no verificables.
- Se entregó informe claro con enlaces a evidencia y acciones restantes.
- Si el trabajo fue construcción desde cero: el sitio cumple los fundamentos de `references/build-from-scratch.md` y tiene plan de medición post-lanzamiento.

El cierre técnico no significa que se haya garantizado una posición, un resultado enriquecido, una cita generativa ni un aumento comercial. Los efectos de visibilidad deben medirse posteriormente con ventanas razonables y comparables.

## 13. Plantilla de informe final

Cuando prepares el entregable, consulta y utiliza la plantilla completa de `references/report-template.md`. El resumen ejecutivo debe ser breve; conserva la matriz completa como anexo cuando el alcance lo justifique. No presentes una recomendación como ejecutada ni validada si no existe evidencia.

## 14. Auditoría de este propio skill antes de cada entrega

Antes de entregar un diagnóstico, una propuesta o una implementación, haz esta auto-revisión:

- [ ] ¿Dije qué modo usé (rápido/completo) y entregué primero el resumen en lenguaje simple?
- [ ] ¿Separé lo que mejora Google/IA de lo que solo sube la nota de un plugin o checker?
- [ ] ¿Revisé el mapa de palabras clave (sin canibalización) antes y después de cambiar titles o keywords?
- [ ] ¿Mostré antes/después de cada texto y obtuve el «sí» antes de publicar? ¿Vacié la caché y verifiqué en la web pública?
- [ ] ¿Definí el objetivo comercial, alcance, URLs y permisos?
- [ ] ¿Registré línea de base o expliqué qué bloquea obtenerla?
- [ ] ¿Cada PASS/FAIL se apoya en evidencia y cada BLOCKED/N/A está justificado?
- [ ] ¿He verificado la documentación oficial actual para reglas sensibles al tiempo?
- [ ] ¿Separé fuentes primarias, secundarios, inferencias y experimentos?
- [ ] ¿Evité límites, ratios o puntuaciones arbitrarias como reglas universales?
- [ ] ¿Evalué módulos aplicables: rastreo, indexación, canonical, sitemap, JS, arquitectura, contenido, schema, imágenes/accesibilidad, rendimiento, local/internacional/ecommerce, enlaces/reputación, seguridad y conversiones?
- [ ] ¿Evalué AEO/GEO sin convertirlos en promesas ni confundir menciones con conversiones?
- [ ] ¿Distinguí controles de rastreo, indexación, snippet, búsqueda de IA y entrenamiento?
- [ ] ¿Evité reemplazar robots.txt, sitemaps o reglas globales sin análisis de diferencias?
- [ ] ¿El código/copy usa hechos verificados y no contiene placeholders accidentales?
- [ ] ¿Cada cambio de alto impacto incluye autorización, backup, prueba y rollback?
- [ ] ¿Separé recomendación, implementación y verificación real?
- [ ] ¿Ejecuté los tres ciclos, incluyendo el adversarial?
- [ ] ¿Declaré las limitaciones y no afirmé que el skill/sitio está «libre de errores» en términos absolutos?
- [ ] Si es construcción desde cero: ¿se siguieron los fundamentos de arquitectura, renderizado, schema verdadero, bots y medición?

Si cualquier respuesta crítica es «no», corrige antes de entregar o documenta explícitamente el bloqueo.

## 15. Fuentes primarias y referencias de consulta

Consulta `references/official-sources.md` como índice inicial, pero comprueba la versión actual de cada documento oficial antes de basar una decisión cambiante en él. La lista es orientativa y no reemplaza la documentación específica del CMS, mercado, tipo de página o herramienta usada.

**Regla final:** ninguna fuente sustituye una prueba del sitio real. Ninguna prueba de una sola URL garantiza el comportamiento de todas las plantillas. Ninguna auditoría demuestra ausencia absoluta de errores; sí debe registrar qué se revisó, con qué evidencia, qué falló y qué quedó fuera de alcance.

