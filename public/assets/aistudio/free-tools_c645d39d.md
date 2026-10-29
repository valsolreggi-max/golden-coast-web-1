# Herramientas gratuitas verificadas (octubre 2026)

**Última revisión: 19 de octubre de 2026.** Los límites y la disponibilidad pueden cambiar. Verifica el día de uso. No presentes una herramienta de terceros como métrica oficial de Google, Bing u otros motores.

## 1. Datos oficiales de los motores (prioridad máxima)

| Herramienta | Qué aporta | Límites / requisitos | Notas |
|---|---|---|---|
| Google Search Console | Indexación, Performance (clics/impresiones/CTR/posición), Generative AI reports, URL Inspection, Search generative AI setting, Core Web Vitals de campo | Requiere verificación de propiedad | Fuente primaria para Google. Incluye datos de AI Overviews/AI Mode cuando están disponibles. |
| Bing Webmaster Tools | Site Scan, Performance, AI Performance (citas, páginas citadas), Topics Portfolio (beta desde 13-oct-2026), IndexNow | Requiere verificación | Fuente primaria para Bing/Copilot. Topics Portfolio agrupa por temas y muestra opportunity queries. |
| PageSpeed Insights | Lab (Lighthouse) + campo (CrUX) de Core Web Vitals por URL | Sin cuenta; límites de uso razonables | Separar siempre campo y laboratorio. |
| Google Rich Results Test | Validación de tipos de resultados enriquecidos admitidos | Sin cuenta | Solo para tipos que Google admite actualmente. |
| Schema.org Validator | Validación de vocabulario y sintaxis JSON-LD | Sin cuenta | Complementa (no sustituye) el Rich Results Test. |

## 2. Crawl técnico gratuito

| Herramienta | Qué aporta | Límites | Notas |
|---|---|---|---|
| Screaming Frog SEO Spider | Crawl completo de títulos, meta, canonical, status, enlaces, etc. | Free: hasta 500 URLs | Excelente para sitios pequeños/medianos. |
| Ahrefs Webmaster Tools | Site Audit (170+ checks), backlinks básicos | Free para sitios verificados; ~5.000 créditos de crawl/mes | Requiere verificación. |
| Seobility | Crawl y on-page | Free limitado (1 proyecto, ~100 páginas) | Útil para chequeos rápidos. |
| Beam Us Up / LibreCrawl | Crawl desktop o self-hosted | Gratuitos | Alternativas open/desktop. |

## 3. On-page, schema, robots y chequeos single-URL (muchas sin signup)

- Meta tag / title / canonical checkers (varios free sin cuenta).
- Robots.txt testers y validators.
- JSON-LD generators y validators (Schema.org + Google).
- Favicon / Open Graph preview tools.
- Herramientas de accesibilidad básica (axe, Lighthouse accessibility, WAVE free).

## 4. Medición de visibilidad en IA (free / limitada)

Prioriza siempre los paneles nativos (GSC + Bing). Los checkers de terceros son complementarios y tienen metodologías propias:

- Checkers free de una sola vez o con límites diarios (Ahrefs AI Visibility, Semrush free limited, HubSpot AEO Grader, Am I Cited free report, rank.ai single-prompt, etc.).
- Protocolo manual (obligatorio como baseline): cohorte de prompts reales + registro sistemático (ver `measurement.md`).
- Open-source / self-hosted (Elmo, Gego, geo-aeo-tracker, etc.): útiles si el usuario puede hostear; coste de APIs aparte.

**Regla:** nunca trates el score de un checker de terceros como métrica oficial ni como prueba de ranking. Úsalo solo como señal exploratoria y registra su metodología.

## 5. Otras útiles y gratuitas

- Google Trends / AnswerThePublic (ideas de preguntas, con límites).
- IndexNow (envío rápido a Bing y partners).
- Google Business Profile y Merchant Center (cuando aplique local o productos).
- Lighthouse en Chrome DevTools (lab local, incluyendo staging).

## Uso recomendado en auditorías

1. GSC + Bing primero (datos reales de los motores).
2. PSI / CrUX para CWV.
3. Crawl free (Screaming Frog 500 o Ahrefs WT) para cobertura técnica.
4. Rich Results + Schema.org Validator para datos estructurados.
5. Muestreo manual de prompts + paneles nativos para GEO/AEO.
6. Solo entonces, checkers free de terceros como señal adicional.
