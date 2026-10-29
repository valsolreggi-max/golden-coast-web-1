# Validación posterior a la implementación

Usa esta lista después de cualquier cambio ejecutado. Adapta la prueba a la causa y al alcance; no marques `PASS` si no hay evidencia.

## Validación posterior a la implementación

Vuelve a probar las mismas URLs/plantillas y condiciones de la línea de base. Comprueba, según el cambio:

- Código HTTP, redirecciones, canonical declarada y seleccionada si se puede verificar.
- `robots.txt`, meta robots y X-Robots-Tag; confirma que no se produjo `noindex` ni bloqueo no deseado de search bots.
- Sitemap y enlaces internos actualizados y sin URLs incorrectas.
- Contenido principal y metadatos visibles en HTML recibido/renderizado.
- Validez y coherencia del JSON-LD con la página; ningún placeholder o valor ficticio.
- Formulario/CTA/conversión y medición de eventos sin datos personales innecesarios.
- Rendimiento antes/después con mismo dispositivo, región/herramienta y condiciones comparables; separar campo y laboratorio.
- Accesibilidad básica y comportamiento móvil cuando el cambio los afecta.
- Acceso de rastreadores según la política aprobada, robots y logs/WAF cuando estén disponibles.
- Configuración “Search generative AI” en Search Console si se tocó.
- No aparecieron nuevos errores en páginas/plantillas no previstas.

No interpretes la ausencia inmediata de cambios de ranking o citas como prueba de que una modificación técnica falló. Algunos cambios requieren nuevos rastreos, reindexación, suficiente volumen de datos y periodos comparables. Registra por separado: «cambio técnico verificado» y «efecto de negocio/visibilidad observado».

## Pruebas mínimas post-publicación

- Verifica que las URLs estratégicas devuelvan el estado esperado.
- Confirma que no se añadieron `noindex`, bloqueos de rastreo no deseados, canonicals erróneas ni redirecciones inesperadas.
- Comprueba HTML/renderizado, enlaces, sitemaps y schema que fueron afectados.
- Repite las pruebas de conversión y analítica que corresponden al cambio.
- Documenta toda prueba imposible como `BLOCKED`; prepara rollback si hay regresión relevante.
