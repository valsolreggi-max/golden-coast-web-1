# Instructivo para construir sitios desde cero optimizados para SEO + AEO + GEO

**Objetivo:** que un sitio nazca con los fundamentos correctos en lugar de intentar parchearlos después. Este instructivo se usa cuando el encargo es crear un sitio nuevo, una sección nueva o un rediseño profundo.

Sigue el mismo espíritu de evidencia, autorización y no-promesas del `SKILL.md`.

## 0. Orden de fases recomendado

No publicar contenido antes de tener medición y palabras clave.

| Fase | Qué | Detalle |
|---|---|---|
| 0 | Datos del negocio | `hoja-de-ruta.md` §0 |
| 1 | Bases y medición | Search Console (propiedad de dominio), Bing, analítica con eventos, consentimiento, línea de base |
| 2 | Palabras clave por idioma y mercado | `hoja-de-ruta.md` §1.4; planilla keyword → intención → volumen → país → página |
| 3 | Arquitectura y mapa de páginas | una página = una intención = una keyword por idioma; hreflang; selector de idioma sin redirección automática |
| 4 | Técnico | HTTPS, versión única del dominio, sitemap, robots, HTML sin depender de JS, móvil, 404 |
| 5 | Contenido y on-page | `hoja-de-ruta.md` §2 |
| 6 | Imágenes, video y velocidad | CWV en móvil |
| 7 | Datos estructurados y entidad | Organization, WebSite, Breadcrumb; el resto solo si es verdadero y visible |
| 8 | GEO / AEO | `hoja-de-ruta.md` §6 |
| 9 | Autoridad y menciones | `offsite-b2b.md` |
| 10 | Medición y mantenimiento | `hoja-de-ruta.md` §8 |

**Si se cambian URLs o se migra de plataforma:** inventario de URLs con tráfico o enlaces, tabla de 301 una por una (nada a la home por defecto), probar antes del lanzamiento, actualizar sitemap y enlaces internos, y seguir Search Console las semanas siguientes.

## 1. Antes de escribir una sola línea de código

1. Definir objetivo de negocio y conversión principal.
2. Definir público, mercados, idiomas y restricciones legales/privacidad.
3. Mapear intenciones de búsqueda reales (informacional, comercial, transaccional, local) y preguntas de compradores.
4. Decidir arquitectura de información orientada a intención (no a organigrama interno).
5. Elegir stack con renderizado accesible a rastreadores (SSR, SSG, o híbrido bien configurado). Evitar SPA puras sin prerender si el contenido esencial depende de JS.
6. Definir política de bots de IA (search sí / train no, o la decisión que corresponda) y documentarla.
7. Planificar medición desde el día 1: GSC, Bing Webmaster Tools, analítica, eventos de conversión, cohorte de prompts GEO.

## 2. Arquitectura y URLs

- URLs legibles, estables y jerárquicas.
- Una URL primaria por intención principal. Evitar canibalización.
- Navegación y enlaces internos que descubran las páginas de valor.
- Sitemap XML limpio (solo canónicas indexables).
- robots.txt mínimo y deliberado (ver `ai-crawlers.md`).
- Canonicals correctas desde el inicio.
- hreflang recíproco y correcto si hay versiones multiidioma/multirregión.

## 3. Contenido

- Contenido non-commodity: experiencia real, datos propios, perspectivas únicas, no resúmenes genéricos.
- Respuestas claras a preguntas reales de usuarios (estructura answer-first razonable + contexto + excepciones).
- Entidades nombradas con claridad (empresa, productos, lugares, personas cuando aporten).
- Claims verificables. No inventar cifras, reseñas ni certificaciones.
- Actualización real cuando el contenido cambie de forma significativa.
- EEAT como marco de calidad, no como checklist de biografías forzadas.

## 4. On-page y experiencia

- Titles y meta descriptions específicos y útiles.
- Jerarquía de encabezados semántica.
- Imágenes optimizadas (formato moderno, dimensiones, alt útil).
- Accesibilidad básica desde el diseño (contraste, teclado, etiquetas, foco).
- Core Web Vitals como objetivo de diseño (LCP, INP, CLS), no como parche posterior.
- CTA y formularios con fricción mínima y medición de eventos.

## 5. Datos estructurados

- Solo tipos y propiedades que representen contenido visible y verdadero.
- JSON-LD preferido.
- Validar con Schema.org Validator y Rich Results Test (solo tipos admitidos).
- Evitar FAQPage por defecto (rich results de FAQ retirados por Google).
- No inventar AggregateRating, ofertas falsas ni autores ficticios.
- Enlazar entidades con `@id` estable cuando tenga sentido.

## 6. Rendimiento y técnico

- HTML esencial disponible sin depender exclusivamente de JS complejo.
- Caché, compresión, formatos de imagen modernos, minimización de JS/CSS bloqueante.
- HTTPS, redirecciones limpias, sin mixed content.
- Monitorización de errores 4xx/5xx y crawl budget en sitios grandes.

## 7. Bots y visibilidad en IA

- robots.txt con decisión explícita sobre OAI-SearchBot, Claude-SearchBot, PerplexityBot, GPTBot, ClaudeBot, Google-Extended, etc.
- Verificar que CDN/WAF no bloquee lo que robots.txt permite.
- Contenido principal extraíble (texto, no solo imágenes o videos).
- Configurar Search Console (incluyendo Search generative AI = Include si se desea) y Bing Webmaster Tools desde el lanzamiento.
- Plan de muestreo manual de prompts + uso de paneles nativos.

## 8. Medición y lanzamiento

- Verificar propiedad en GSC y Bing antes o en el momento del lanzamiento.
- Enviar sitemap.
- Configurar IndexNow si se usa Bing/partners.
- Definir cohorte de prompts GEO y línea de base post-lanzamiento (2-4 semanas típicas para primeros datos).
- Eventos de conversión medibles y sin datos personales innecesarios.
- Plan de contenido de mantenimiento (actualizaciones reales, no “refresh” cosmético).

## 9. Checklist mínimo de salida para un sitio nuevo

- [ ] Arquitectura orientada a intención documentada.
- [ ] Renderizado compatible con rastreadores (contenido esencial en HTML o prerender).
- [ ] robots.txt y política de bots de IA decidida y documentada.
- [ ] Canonicals, sitemap, titles, H1 y schema verdadero en páginas clave.
- [ ] CWV medidos en laboratorio y plan de campo.
- [ ] GSC + Bing verificados; Search generative AI en Include (si se desea).
- [ ] Analítica y eventos de conversión funcionando.
- [ ] Cohorte de prompts GEO definida y primer muestreo planificado.
- [ ] No hay placeholders, datos inventados ni schema falso.
- [ ] Autorización, backup y rollback definidos para cualquier cambio posterior.

Este instructivo no garantiza citas ni rankings. Garantiza que el sitio nace con los fundamentos que Google y los principales motores de respuesta/generativos documentan como necesarios.
