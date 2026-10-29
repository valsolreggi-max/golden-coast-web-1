# Temas sensibles al tiempo: `llms.txt`, FAQ, IA de Google y Core Web Vitals

**Última revisión documental: 19 de octubre de 2026.** Vuelve a comprobar la documentación primaria antes de actuar.

## Cómo evaluar `llms.txt`, FAQ y otros temas discutidos

- **`llms.txt`:** es una propuesta comunitaria, no un requisito de Google Search ni un estándar respaldado universalmente por los principales proveedores. Google declaró (guía de julio 2026 y actualizaciones) que estos archivos no se necesitan para Google Search y no mejoran ni perjudican la visibilidad/posiciones allí; pueden mantenerse si otro sistema elegido los utiliza y su coste/beneficio lo justifica. Estudios independientes (Ahrefs mayo 2026 y mediciones posteriores) muestran que la gran mayoría de archivos publicados reciben cero o muy pocas solicitudes de crawlers de IA. Es un estudio de muestras, no un censo universal. No recomendar ni rechazar automáticamente: clasificarlo como experimento opcional (P3) y medir logs/uso.

- **FAQ:** el contenido de preguntas frecuentes puede resolver dudas reales; no lo impongas como requisito. Google dejó de mostrar resultados enriquecidos de FAQ en Search a partir del 7 de mayo de 2026 y retiró la documentación de esa función. `FAQPage` como vocabulario de Schema.org no debe confundirse con la continuidad de un resultado enriquecido en Google. Verifica documentación actual del proveedor antes de recomendar el marcado.

- **AI Overviews / AI Mode:** la guía oficial de Google dice que se aplican los fundamentos de SEO, que no hay requisitos adicionales ni schema especial para aparecer y que las páginas deben ser indexables/elegibles para snippet. Además, el sitio debe estar incluido en la configuración “Search generative AI” de Search Console (por defecto incluido; anunciado el 3-jun-2026 junto con informes de rendimiento de IA generativa en beta, solo impresiones, con despliegue gradual: verificar si la propiedad ya lo tiene). No inventes tácticas secretas. Google nombra explícitamente AEO y GEO y dice que siguen siendo SEO.

- **E-E-A-T:** úsalo como marco de evaluación de calidad/fiabilidad; no lo conviertas en puntuación oficial de Google.

- **Core Web Vitals:** usa LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 (percentil 75). No reportes FID como Core Web Vital vigente.

- **Longitudes de title/meta, 1 H1, preguntas por encabezado, recuento de FAQs, fuentes externas o enlaces:** son variables de análisis/contexto, no umbrales universales si ninguna fuente oficial o necesidad concreta los exige.

- **Controles de snippet:** `nosnippet`, `data-nosnippet`, `max-snippet` y `noindex` afectan lo que Google puede mostrar en resultados clásicos y en funciones de IA. Úsalos con intención clara.

- **Google-Extended:** token para controlar ciertos usos de contenido en Gemini/Vertex AI (entrenamiento y grounding). No afecta ranking ni inclusión en Google Search.
