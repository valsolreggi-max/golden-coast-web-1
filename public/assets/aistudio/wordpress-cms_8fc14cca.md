# WordPress: plugins SEO, constructores, caché y CDN

Lecciones verificadas en sitios reales. Confirmar versiones y menús el día de uso.

## Plugins SEO (Rank Math / Yoast)

- **La nota del plugin no es Google.** Sirve como lista de control interna. Muchas pruebas solo suben la nota: keyword en la URL, «600 palabras», número o *power word* en el title, tabla de contenidos, densidad. Informarlas como «solo para el plugin» y no cambiar URLs publicadas para cumplirlas.
- **Sí importan** (y coinciden con buenas prácticas): keyword de la página en title, meta description, primer párrafo y algún subtítulo; ALT útil en imágenes; enlaces internos.
- **La nota se calcula al abrir la página en el editor** (Gutenberg o panel SEO dentro de Elementor). Si los metadatos se cambian por otra vía, la lista de páginas muestra la nota vieja hasta reabrir el editor.
- La keyword del plugin no la ve Google; lo que cuenta es el texto publicado. Usar el campo para el **mapa de palabras clave** y evitar repetir la misma keyword en dos páginas del mismo idioma.
- «**Schema: Inactivo**» en la lista de páginas puede ser correcto si los datos estructurados salen del esquema global del plugin (Organization/WebSite/Breadcrumb) o están escritos en la propia página (p. ej. FAQPage en un bloque HTML). Comprobar el HTML publicado antes de activar nada: activar en dos lugares duplica.
- **Analizador del sitio** (Rank Math SEO Analyzer): útil como chequeo rápido. «Tiempo de respuesta» lento justo después de vaciar la caché es esperable; repetir más tarde. «12 páginas sin keyword en el título de la entrada» se refiere al nombre interno de la página (menú), no al title de Google.
- **Avisos del panel**: «DISABLE_WP_CRON» y «problema al programar la acción de Analíticas» pueden ser falsa alarma si hay un cron real en el hosting (cPanel › Cron Jobs con `php wp-cron.php` cada 5–15 min) y en Herramientas › Acciones programadas las tareas del plugin aparecen pendientes/completas. Verificar antes de cerrar el aviso.
- Cambiar title/description/keyword sin publicar el contenido: el editor del plugin, o su endpoint interno de metadatos con sesión de administrador (Rank Math: `POST /wp-json/rankmath/v1/updateMeta` con nonce `wp_rest`). Siempre con autorización y verificación en la web pública.

## Elementor

- Muchas páginas guardan el texto dentro de widgets HTML: editar en el widget correcto y **publicar** (el botón Publicar es un cambio público: requiere el «sí» del dueño para esa página).
- Cambiar una frase concreta y no reescribir el widget entero; comprobar que el texto viejo aparece **una sola vez** antes de reemplazar.
- Tras publicar: vaciar caché y comprobar el texto en la URL pública.

## Caché (SpeedyCache, WP Rocket, LiteSpeed, etc.)

- Cambios en metadatos o contenido pueden no verse por la caché de páginas. Vaciar desde la pantalla del plugin (en SpeedyCache, el botón «Vaciar toda la caché…» de su página; el atajo de la barra superior no siempre funciona) y verificar.
- Después de vaciar, la primera carga es más lenta: no medir velocidad en ese momento.
- Si vence una licencia Pro, revisar que las optimizaciones (fuentes locales, webp, minificación) sigan funcionando.

## Cloudflare u otro CDN

- Revisar que «Block AI bots», Bot Fight Mode o reglas WAF no bloqueen a los buscadores/bots de IA que el dueño quiere permitir.
- El certificado público que se ve puede ser el del CDN; revisar también el del servidor (modo SSL «Full (strict)»).
- Purgar la caché del CDN si sirve HTML en caché.

## Seguridad que afecta al SEO

- Contraseñas fuertes y 2FA en el administrador; ataques al API REST o inyección pueden insertar spam o enlaces.
- Plugins y tema al día; copias de seguridad automáticas comprobadas.
- Página 404 propia (plugin o plantilla) con diseño del sitio, idioma correcto y código HTTP 404 real.
