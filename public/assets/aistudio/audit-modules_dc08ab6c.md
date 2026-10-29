# Checklist de auditoría web por módulos

Usa solo los módulos aplicables, pero no omitas uno relevante. Cada resultado debe llevar estado, alcance y evidencia según el contrato de `SKILL.md`.

#### A. Rastreo, acceso e indexación

- Verifica que las URLs estratégicas devuelvan el estado HTTP esperado: normalmente `200` para páginas vigentes; `3xx` justificados para redirecciones; `404`/`410` reales para contenido retirado. Detecta errores de servidor, cadenas/bucles, soft 404 y bloqueos por autenticación, CDN o WAF.
- Comprueba el `robots.txt` real en el origen de cada host/subdominio; valida la sintaxis y cómo interactúan los grupos de reglas. No reemplaces reglas existentes con una plantilla genérica. Incluye decisión explícita sobre search bots de IA (ver `ai-crawlers.md`).
- Comprueba `meta robots`, `X-Robots-Tag`, directivas de snippet (`nosnippet`, `max-snippet`, `data-nosnippet`) y posibles contradicciones entre crawl y noindex.
- Comprueba canonical declarada y canonical seleccionada por el buscador cuando haya evidencia disponible.
- Verifica sitemap XML: solo URLs canónicas, preferentemente indexables, códigos adecuados y `lastmod` veraz. Google ignora `priority` y `changefreq`.
- Revisa duplicados, parámetros, filtros/facetas, paginación, páginas de búsqueda interna, URLs de sesión, versiones HTTP/HTTPS, www/no-www y variantes de mayúsculas o barra final.
- Contrasta con informes de indexación e inspección de URL en Search Console y Bing cuando estén disponibles. No uses `site:` como prueba definitiva.
- Revisa enlaces internos, páginas huérfanas y descubribilidad.
- Verifica si contenido importante depende de JavaScript; compara HTML recibido y renderizado. Muchos crawlers de IA de búsqueda tienen soporte limitado de JS: el contenido esencial debe estar disponible sin depender exclusivamente de ejecución compleja.
- Verifica que los recursos necesarios para representar la página no estén bloqueados sin motivo.
- Comprueba el estado de la configuración “Search generative AI” en Search Console (Include/Exclude).

#### B. Arquitectura, URLs y enlaces internos

- Valora si la jerarquía representa productos/servicios, mercados e intenciones de búsqueda reales.
- Busca enlaces rotos, redirecciones innecesarias, anchors opacos, huérfanas, navegación incoherente, profundidad excesiva y páginas que compiten por la misma intención.
- Propón URLs legibles y estables cuando exista una razón demostrable; no declares fallo solo porque el slug tenga más de cuatro palabras.
- Evita cambios de URLs por estética. Si una URL cambia, exige mapa de redirecciones 301, actualización de enlaces/canonical/sitemap/hreflang, control de cadenas y plan de monitorización.
- No añadas enlaces internos por cumplir un número arbitrario: cada enlace debe facilitar descubrimiento o ayudar al usuario.

#### C. Contenido, intención, entidades y fiabilidad

- Identifica la intención primaria/secundaria por consulta, etapa comercial y audiencia; valida la hipótesis con SERP, preguntas reales, Search Console o investigación directa cuando sea posible.
- Comprueba que la página satisface la intención completa con información específica, actual, precisa y útil, no solo con repetición de keywords.
- Detecta canibalización, contenido duplicado/similar, páginas puerta, traducciones automáticas pobres, contenido genérico creado a escala, relleno de keywords y contenido que no aporta valor original.
- Alinea title, H1, texto visible, propuesta de valor, enlaces, metadatos sociales y datos estructurados sin exigir que sean idénticos palabra por palabra.
- Analiza cobertura temática y entidades relevantes; define términos ambiguos, nombres de producto, empresa, lugares y relaciones con claridad.
- Verifica afirmaciones cuantitativas, certificaciones, calidad, especificaciones, procedencia, sostenibilidad, experiencia, plazos y ventajas competitivas con fuentes o evidencia del propietario. Marca la ausencia de soporte; no inventes hechos.
- Evalúa autoría/actualización/transparencia cuando aporten confianza al lector. No exijas una biografía de autor en cada página comercial si no tiene sentido. No falsifiques fechas de actualización.
- En temas de alto impacto (médico, financiero, legal, seguridad), eleva el estándar de evidencia, autoría, revisión y lenguaje prudente.
- Aplica el marco EEAT como evaluación de experiencia, conocimiento, autoridad y fiabilidad, no como puntuación oficial de Google.
- Prioriza contenido non-commodity e information gain (datos propios, experiencia de primera mano, perspectivas únicas). Google lo destaca explícitamente para funciones de IA.
- No crees contenido solo para capturar variantes semánticas. Cada URL nueva debe tener propósito, diferencia útil y demanda/intención plausibles.

#### D. SEO on-page y fragmentos de búsqueda

- Revisa title y meta description por especificidad, unicidad, claridad, coincidencia con la página e intención y valor para el usuario. Google no impone un límite universal rígido de caracteres para `<title>`; puede truncar según el contexto.
- Verifica que el H1 y los encabezados comuniquen la estructura al lector. Un número exacto de H1 o un porcentaje de encabezados en forma de pregunta no son reglas universales de ranking.
- Revisa enlaces canónicos, robots, idioma, `lang`, Open Graph/metadatos sociales cuando sean relevantes.
- Evalúa imágenes: calidad, peso, dimensiones, formato, nombre descriptivo razonable, texto alternativo útil y carga diferida solo cuando corresponda.
- Revisa accesibilidad básica: teclado, foco visible, contraste, etiquetas, formularios, encabezados, alt y nombres accesibles.
- Evalúa CTA, formularios, fricción, confianza y experiencia móvil en función de la conversión real.

#### E. Rendimiento y Core Web Vitals

Mide por plantilla representativa y segmento relevante.

- Métricas vigentes: **LCP ≤ 2,5 s**, **INP ≤ 200 ms**, **CLS ≤ 0,1** en el percentil 75. Son umbrales de experiencia, no garantías de ranking.
- Separa datos de campo (CrUX/PageSpeed Insights) de laboratorio (Lighthouse). El laboratorio diagnostica; no sustituye a los datos de campo.
- Registra si hay suficientes datos de campo. Si no los hay, marca `BLOCKED` para conclusiones de campo.
- Revisa LCP element, imágenes hero, dimensiones, formatos modernos, compresión, caché, fuentes, CSS/JS bloqueante, tareas largas, interacciones, scripts de terceros y saltos de layout.
- Prioriza el cuello de botella medido. No recomendar lazy-load para la imagen LCP ni eliminación indiscriminada de scripts sin análisis.

#### F. Datos estructurados

- Primero identifica la entidad y el tipo real de página. Usa Schema.org para vocabulario y la documentación de cada buscador para los requisitos de sus resultados enriquecidos.
- El marcado debe representar contenido visible, verdadero, actual y accesible. No inventes `Offer`, precio cero, valoraciones, reseñas, disponibilidad, autores, `sameAs`, ubicaciones ni fechas.
- Selecciona solo tipos y propiedades útiles/aplicables. Una landing B2B no debe convertirse en `Product` solo para intentar obtener estrellas.
- No insertes `FAQPage` por defecto ni prometas resultados enriquecidos de FAQ (retirados por Google en mayo 2026).
- No marques reseñas propias de forma que infrinja las políticas de reseñas. No uses `AggregateRating` si no hay reseñas genuinas y elegibles.
- Valida sintaxis JSON-LD y vocabulario (Schema.org Validator); usa Rich Results Test únicamente para los tipos admitidos actualmente. Distingue error de sintaxis, vocabulario válido, elegibilidad técnica y decisión del buscador.
- Evita esquemas duplicados o contradictorios. Enlaza entidades con `@id` estable cuando proceda.
- Comprueba que las plantillas no publiquen valores vacíos, placeholders o datos inconsistentes.

#### G. Internacional, multilingüe y multirregional (si aplica)

- Verifica cada versión lingüística/regional, `lang`, contenido localizado, URLs separables, canonical, enlaces recíprocos `hreflang` y códigos válidos.
- No uses `hreflang` para compensar contenido no localizado o traducción de mala calidad.
- Comprueba redirecciones geográficas y por idioma que puedan impedir que usuarios/crawlers vean versiones alternativas.
- Valida sitemap con alternates si se usa esa implementación.

#### H. SEO local (si aplica)

- Valida consistencia y legitimidad del nombre, dirección, teléfono, horarios y área de servicio; no crees ubicaciones ficticias ni páginas duplicadas por ciudad.
- Revisa perfiles oficiales (Google Business Profile / Bing Places) solo si la empresa cumple sus requisitos.
- Usa `LocalBusiness` y subtipos solo cuando haya una entidad/ubicación real y los campos coincidan con lo visible.

#### I. Ecommerce, catálogo B2B o productos (si aplica)

- Revisa rastreo de categorías, fichas y variantes; disponibilidad/precio visibles; filtros/facetas; canonical; paginación; productos discontinuados; feed/Merchant Center cuando corresponda.
- No uses datos de producto falsos ni hagas parecer que se puede comprar online si el sitio solo solicita una cotización B2B.
- Prueba el recorrido real de conversión.

#### J. Enlaces externos, reputación y distribución

- Evalúa menciones, enlaces, asociaciones sectoriales, directorios legítimos, prensa y fuentes de referencia en contexto. Distingue enlace editorial merecido de enlace pagado/manipulativo.
- No propongas compra de enlaces, redes privadas, intercambios masivos ni automatización para inflar autoridad.
- La cantidad de backlinks o una puntuación de herramienta de terceros no son prueba directa de autoridad.

#### K. Seguridad, privacidad, confianza y analítica

- Revisa, dentro del alcance autorizado, HTTPS, páginas rotas, advertencias de navegador, redirecciones inesperadas, contenido inyectado, mixed content y señales en informes de seguridad. No realices pentesting intrusivo sin autorización específica.
- Comprueba banner/consentimiento y configuración de analítica conforme a la jurisdicción aplicable.
- Valida que conversiones, formularios, llamadas y eventos se midan de manera coherente.
- Usa datos agregados y minimizados. No incluyas emails, teléfonos ni datos de clientes en informes.

#### L. AEO — contenido que responde preguntas

- Comprueba que las respuestas a las preguntas reales sean fáciles de localizar, comprensibles y suficientemente contextualizadas.
- Una estructura posible es respuesta directa seguida de contexto, evidencia, condiciones/excepciones y próximo paso. No impongas un rango universal de palabras.
- Usa definiciones, listas, pasos, tablas, ejemplos o FAQs solo cuando mejoren la comprensión de esa página.
- Formula encabezados según el lenguaje real de usuarios y la función de la sección.
- Responde de manera autocontenida cuando ayude a que el fragmento sea claro, pero evita simplificar en exceso afirmaciones que requieran condiciones o contexto.
- Si creas FAQs, obtén las preguntas mediante investigación real (soporte, Search Console, entrevistas, SERP/PAA). No atribuyas preguntas inventadas a una herramienta.

#### M. GEO — descubribilidad y citación en experiencias generativas

- Asegura que las páginas públicas estratégicas sean accesibles e indexables cuando ese sea el objetivo; que su propósito, entidad, oferta y datos verificables estén claros; y que el contenido principal sea extraíble sin depender exclusivamente de interacciones complicadas.
- Audita acceso a rastreadores de IA y controles del sitio siguiendo la matriz de `ai-crawlers.md`. No habilites todos los bots por defecto. La decisión de permitir rastreo para búsqueda, solicitudes iniciadas por usuarios y entrenamiento debe ser explícita.
- No trates `llms.txt`, schema adicional, una cantidad fija de fuentes, `FAQPage`, frases «answer-first» o una herramienta de puntuación GEO como requisitos universales de Google o de todos los sistemas de IA.
- Favorece información original, precisa, atribuible y mantenida; datos, métodos, fuentes, autoría o evidencias cuando el tipo de afirmación lo necesite. No fabriques estudios ni citas.
- Registra si el motor ofrece paneles propios de visibilidad (GSC Generative AI reports; Bing AI Performance + Topics Portfolio). La disponibilidad puede depender del volumen de datos del sitio.
- Las citas o menciones observadas por consultas manuales son una muestra, no una posición de ranking comparable entre motores.
