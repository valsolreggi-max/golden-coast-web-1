# Protocolo de medición SEO, AEO y GEO

Registra antes/después y separa métricas técnicas, señales de búsqueda y resultado comercial.

## Medición de SEO, AEO y GEO

### SEO

Define previamente las páginas, consultas y conversiones relevantes. Compara periodos equivalentes y anota estacionalidad, promociones, cambios de sitio, despliegues y actualizaciones de motores. Registra clics, impresiones, CTR, posición media y conversiones cuando haya datos. Search Console filtra/agrega parte de las consultas y puede diferir de la analítica; no exijas igualdad exacta de sistemas distintos.

### AEO

No existe una métrica universal única de AEO. Evalúa con pruebas explícitas:

- ¿La página responde con precisión a preguntas reales de clientes?
- ¿La respuesta contiene contexto, restricciones y fuente cuando corresponde?
- ¿Se puede extraer una respuesta sin distorsionar las condiciones?
- ¿Los lectores consiguen completar el objetivo y disminuyen las dudas comerciales repetidas?
- ¿La página recibe impresiones/visibilidad o mejora la conversión en las consultas objetivo, según datos disponibles?

Registra el método usado y evita afirmar que una mejora de estilo ha causado una cita sin datos que lo apoyen.

### GEO — protocolo reproducible de visibilidad generativa

1. Construye una cohorte de consultas basada en compradores reales, búsquedas relevantes, consultas comerciales y preguntas informativas. Incluye marcas, categorías, problemas, comparativas y mercados donde tenga sentido.
2. Documenta para cada consulta: objetivo, intención, idioma, país/mercado, motor, herramienta/modo, fecha/hora, cuenta/log-in si afecta, texto exacto del prompt y si se habilitó búsqueda web.
3. Repite las mismas consultas en cada ciclo de medición sin editar las preguntas para favorecer el resultado. No introduzcas marcas de la empresa en consultas donde un comprador normal no las incluiría, salvo que esa sea la intención que se mide.
4. Guarda respuesta o fragmento permitido, fuentes enlazadas, URL citada, tipo de aparición (cita, mención sin enlace, recomendación, lista, ausencia), y si la información atribuida es correcta.
5. Incluye competidores pertinentes, pero no confundas una sola respuesta con una cuota de mercado ni con una posición estable.
6. Repite en condiciones comparables; informa tamaño de muestra, consultas con resultados válidos, variación y límites. Usa un intervalo de confianza solo si el diseño y tamaño muestral lo soportan; no finjas significación estadística.
7. Prioriza datos nativos de plataformas cuando estén disponibles:
   - Google Search Console: informes de rendimiento de funciones generativas (AI Overviews / AI Mode) y la configuración Search generative AI.
   - Bing Webmaster Tools: AI Performance (vista previa pública) y Topics Portfolio (beta desde 13 de octubre de 2026) para agrupación por temas y opportunity queries.
8. Mide resultados de negocio cuando se puedan vincular de forma válida: tráfico referencial de asistentes, consultas entrantes que mencionen fuentes, leads cualificados y ventas. No atribuyas conversiones a IA basándote solo en una coincidencia temporal.

Métricas manuales sugeridas (siempre definir fórmula y denominador):

- **Tasa de consultas con cita:** consultas de la cohorte en las que aparece al menos una URL del sitio / consultas válidas evaluadas.
- **Tasa de menciones:** consultas válidas en las que se menciona la marca con o sin enlace / consultas válidas evaluadas.
- **Tasa de exactitud de atribución:** citas revisadas que representan correctamente la página y la afirmación / citas revisadas.
- **Tráfico y conversión referido desde IA:** sesiones/consultas/leads identificables mediante analítica fiable, informando limitaciones de atribución.

No combines automáticamente cita, mención, impresiones y tráfico en un único «GEO score» opaco. Si se emplea una herramienta de terceros, registra metodología, cobertura, coste, límites y que su puntuación no es métrica oficial de los motores.

Consulta también `references/free-tools.md` para checkers gratuitos limitados que pueden complementar el muestreo manual.
