# Hoja de ruta SEO + GEO + AEO — paso a paso con criterio de aprobado

Checklist concreto para el **modo rápido** y base del modo completo. Cada punto: **qué mirar → cómo → aprobado si**. Marca ✅ / ⚠️ / ❌ / 🔒 (no se pudo revisar) / N/A con su evidencia. Los comandos están en `quick-checks.md`. Los criterios con números son guías de lectura, no reglas de ranking (ver SKILL.md §1.10).

## 0. Datos del negocio a conseguir (antes de escribir o auditar contenido)

Sin estos datos no hay contenido propio ni creíble. Pedirlos al dueño; lo que no exista no se inventa.

- Datos de empresa definitivos y coherentes: razón social, país y dirección reales, teléfono, email del dominio, años de actividad.
- Mercados y países prioritarios, e idiomas de cada uno.
- Qué vende exactamente: productos/servicios, variantes, especificaciones o características medibles.
- Condiciones comerciales: precios o rangos (si se publican), mínimos, zona de servicio o envío, plazos, formas de pago o contratación.
- Pruebas reales: certificaciones, licencias, matrículas, análisis, garantías, casos, clientes que autorizan ser nombrados.
- Fotos y videos propios (equipo, instalaciones, proceso, productos, obras o propiedades).
- Preguntas reales que hacen los clientes (emails, WhatsApp, llamadas).
- Competidores conocidos.
- Cuántas consultas terminan en venta y el valor promedio (para medir retorno).

## 1. Antes de publicar (o al empezar la auditoría)

1. **Objetivo y conversión** → preguntar o deducir → aprobado si hay una acción principal clara (cotización, WhatsApp, llamada, compra).
2. **Mercados e idiomas** → listar países e idiomas reales → aprobado si cada idioma tiene su versión completa, no traducción automática pobre.
3. **Mapa de palabras clave** → tabla Página | Idioma | Keyword | Intención | Title (SKILL.md §0.A) → aprobado si cada intención tiene una sola página dueña y la home tiene la búsqueda comercial principal.
4. **Investigación de demanda** → Search Console (si hay datos), Google Trends, Keyword Planner, AnswerThePublic, preguntas reales de clientes → aprobado si cada keyword elegida tiene alguna señal de demanda o es la forma en que el cliente nombra el producto. Método:
   - Cuadro de atributos del producto/servicio (tipo, formato, calidad, uso, zona, certificación) para generar combinaciones.
   - Ideas de Google Suggest, «Otras preguntas de los usuarios», búsquedas relacionadas, Trends, foros del sector.
   - **Un estudio por idioma y mercado, no una traducción:** el mismo producto puede llamarse distinto en cada país; ver resultados como un comprador local (herramientas de búsqueda por país/idioma).
   - Intención de cada keyword según qué tipo de páginas muestra Google (ficha de proveedor, artículo, directorio, mapa local).
   - Priorizar long tail con intención comercial (proveedor, precio, mayorista, cerca de mí, alquiler, compra) sobre términos genéricos.
   - Repetir cada 6 meses.
5. **Política de bots de IA** → decidir con el dueño: búsqueda sí/no, entrenamiento sí/no → aprobado si la decisión está escrita y robots.txt + CDN/WAF la reflejan.

## 2. Dentro de cada página

1. **Title** (texto azul en Google) → leer `<title>` publicado → aprobado si: es único, describe la página, contiene la keyword de la página (idealmente al inicio), suena natural, y no se corta en lo importante (~50–60 caracteres visibles es guía, no regla).
2. **Meta description** (texto gris) → leer meta description publicada → aprobado si: única, contiene la keyword, dice qué ofrece y una razón para hacer clic, ≤ ~155–160 caracteres para no cortarse.
3. **H1** (título grande visible) → uno por página → aprobado si dice de qué trata la página; puede usar marca o variante de la keyword.
4. **Primer párrafo** → leer el texto visible inicial → aprobado si la keyword o su forma natural aparece y responde «qué es / qué ofrecemos» sin relleno.
5. **Subtítulos (H2/H3)** → orden lógico sin saltos → aprobado si se puede entender la página leyendo solo los subtítulos.
6. **Texto alternativo de imágenes** → todas las `<img>` relevantes → aprobado si describe la imagen; ninguna con nombre de archivo («IMG_1234», «logo-final-2»); logo = «Marca logo».
7. **Nombre y peso de imágenes** → aprobado si formato moderno (webp/avif), dimensiones definidas y la imagen principal no tiene lazy-load.
8. **Enlaces internos** → aprobado si la página enlaza a las páginas relacionadas y a contacto; ninguna página huérfana.
9. **Llamada a la acción** → aprobado si el botón principal (cotizar, WhatsApp, email) está visible arriba y al final, funciona y se mide en analítica.
10. **Datos de confianza** → empresa, dirección, contacto, quién está detrás, documentos/certificaciones reales → aprobado si son visibles y verificables (no inventar).
11. **Open Graph** → aprobado si al compartir por WhatsApp/LinkedIn aparece imagen, título y descripción correctos.

## 3. Parte técnica

1. **Estado HTTP** de cada URL estratégica → aprobado si 200.
2. **Redirecciones** http→https y www→raíz (o al revés) → aprobado si 301 directo, sin cadenas.
3. **Canonical** → aprobado si cada página apunta a sí misma (salvo duplicados intencionales).
4. **Indexable** → aprobado si no hay `noindex` en páginas que deben salir en Google.
5. **robots.txt** → aprobado si solo bloquea zonas privadas (ej. `/wp-admin/`) y declara el sitemap.
6. **Sitemap XML** → aprobado si lista todas las URLs canónicas indexables y nada más.
7. **Idiomas (hreflang)** → aprobado si cada versión enlaza a la otra, hay `x-default` y `lang` correcto en `<html>`.
8. **Página 404** → aprobado si devuelve código 404 real, tiene el diseño del sitio, está en el idioma correcto y ofrece volver a inicio / contacto.
9. **HTTPS y certificado** → aprobado si válido y sin contenido mixto.
10. **Velocidad (Core Web Vitals)** → PageSpeed Insights móvil y PC → aprobado si LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 en datos de campo; si no hay datos de campo, informar laboratorio aparte.
11. **Bots de IA reales** → pedir la home con user-agents GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Bingbot, Googlebot → aprobado si responden 200 según la política decidida (revisar Cloudflare «Block AI bots» / Bot Fight Mode).
12. **Datos estructurados** → Rich Results Test + Schema.org Validator → aprobado si: Organization/WebSite correctos, sin duplicados, sin datos inventados, coinciden con lo visible.
13. **Contenido sin JavaScript** → ver HTML recibido → aprobado si el texto principal está en el HTML inicial.
14. **Caché** → aprobado si tras cada cambio se vació la caché (plugin + CDN) y se verificó la versión pública.

## 4. Google Search Console

1. Propiedad verificada (preferir propiedad de dominio).
2. Sitemap enviado → estado «Correcto» y nº de URLs descubiertas = nº de páginas.
3. **Páginas › indexación** → revisar cada motivo de «sin indexar»; distinguir esperables (redirecciones, noindex a propósito, 404 de basura) de problemas reales. El informe va con días de atraso: confirmar con **Inspección de URL** en vivo.
4. **Inspección de URL** de cada página nueva o cambiada → «La URL está en Google» o pedir indexación.
5. **Rendimiento** → clics, impresiones, CTR, posición media por consulta y por página (28 días y 3 meses).
6. **Consultas** → detectar búsquedas con impresiones y posición 8–20 (oportunidad) y búsquedas que caen en la página equivocada (canibalización).
7. **Informe de IA generativa / control de exclusión** → si la propiedad lo tiene: anotar impresiones en AI Overviews/AI Mode y confirmar que no está excluido sin querer.
8. **Core Web Vitals y HTTPS** → sin errores.
9. **Acciones manuales y Seguridad** → «No se ha detectado ningún problema».
10. **Notificaciones (campana)** → leer y clasificar cada aviso.
11. **Enlaces** → enlaces externos e internos principales.

## 5. Analítica (GA4 u otra)

1. Etiqueta instalada en todas las páginas (incluidas políticas y 404).
2. Banner de cookies conforme y que no rompa la medición permitida.
3. Eventos de conversión creados y marcados como **eventos clave**: clic en WhatsApp, email, teléfono, envío de formulario.
4. Excluir tráfico interno (IP de la empresa) para no contarse a uno mismo.
5. Retención de datos al máximo disponible (14 meses en GA4 estándar).
6. Vincular con Search Console.
7. Revisar: usuarios, canales (orgánico vs directo), países, páginas más vistas, eventos clave, y **tráfico referido desde IA** (chatgpt.com, perplexity.ai, copilot, gemini) en Adquisición › origen/medio.

## 6. IAs — GEO y AEO

1. **Bing Webmaster Tools** verificado, sitemap enviado, IndexNow activo si el CMS lo permite (ChatGPT y Copilot dependen de Bing). Revisar **AI Performance** y **Topics Portfolio** cuando haya datos.
2. **Cohorte de preguntas** → 10–20 preguntas como las haría un comprador real (sin nombrar la marca) en el idioma de cada mercado → guardar en una tabla.
3. **Prueba en motores** → ChatGPT (con búsqueda), Gemini, Perplexity, Copilot, Claude, Google AI Mode → registrar fecha, si cita la web, si la menciona, si la info es correcta, a quién cita en su lugar.
4. **Entidad clara** → la web dice en texto quién es la empresa, qué vende, desde dónde, a quién, con qué condiciones (precios o rangos, mínimos, zona de servicio, plazos, documentos o garantías).
5. **Respuestas directas** → cada pregunta frecuente real responde en la primera frase y después da contexto; preguntas sacadas de clientes reales, no inventadas.
6. **Datos propios** → especificaciones, fotos propias, procesos, cifras verificables (información que otros no tienen).
7. **Coherencia entre fuentes** → nombre, dirección y descripción iguales en web, LinkedIn, directorios y Perfil de Empresa en Google.
8. **llms.txt** → opcional (P3): mantener si ya existe y está correcto; no prometer efecto.
9. **FAQPage** → no genera resultado enriquecido en Google desde mayo 2026; mantener solo si ya existe y coincide con lo visible.

## 7. Autoridad externa (links y menciones)

Ver `offsite-b2b.md`. Mínimo: Perfil de Empresa en Google (si aplica), LinkedIn de empresa, 3–5 directorios sectoriales legítimos, cámaras/asociaciones, menciones en medios o socios. Nada de compra de enlaces.

## 8. Seguimiento mensual

1. Search Console: rendimiento del mes vs anterior, nuevas consultas, páginas sin indexar nuevas.
2. Bing: indexación y AI Performance.
3. Analítica: eventos clave del mes y canales.
4. Repetir la cohorte de preguntas en IAs y comparar.
5. Analizador del plugin SEO / auditoría rápida: sin regresiones (noindex, 404, canonical).
6. Velocidad: PageSpeed de la home.
7. Copias de seguridad hechas y plugins al día.
8. Anotar resultados y próximos pasos en el tablero del proyecto.

### Qué medir y cada cuánto

| Indicador | Fuente | Frecuencia |
|---|---|---|
| Consultas/contactos recibidos (por idioma y país) | Analítica + email/WhatsApp | Mensual |
| Clics e impresiones orgánicas | Search Console | Mensual |
| Keywords principales en el top 10 | Search Console | Mensual |
| Impresiones en funciones de IA de Google | Search Console (informe de IA generativa) | Mensual |
| Citas en Copilot/Bing | Bing AI Performance | Mensual |
| Presencia en respuestas de IA (cohorte de preguntas) | Muestreo manual | Mensual |
| Páginas indexadas y errores | Search Console | Mensual |
| Core Web Vitals móvil | Search Console + PageSpeed | Trimestral |
| Retorno: consultas → ventas → valor | Datos del dueño | Trimestral |

Acciones típicas: páginas con muchas impresiones y pocos clics → mejorar title/description; consultas sin página propia → evaluar contenido nuevo; caída de tráfico → cruzar la fecha con actualizaciones de Google (Search Status Dashboard) antes de tocar nada.

## 9. Qué no hacer

- Comprar enlaces o menciones, o usar plataformas que los venden.
- Crear páginas en masa para cada variante de búsqueda o de ciudad, con o sin IA.
- Repetir palabras clave o usar la meta keywords.
- Traducir literal o mezclar idiomas en una misma página.
- Redirigir automáticamente por idioma o país del visitante.
- Cambiar URLs sin redirecciones 301 una por una.
- Inventar datos, certificaciones, clientes, reseñas, fechas o autores.
- «Trucos GEO»: trocear textos para la IA, reescribir solo para IA, marcado especial.
- Creer en herramientas que dicen tener métricas internas de Google.
- Perseguir un número de palabras, encabezados o la nota 100 de un plugin.
- Cambiar algo en producción sin copia, sin autorización o sin verificar después.
