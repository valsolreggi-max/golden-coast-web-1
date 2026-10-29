# LEER PRIMERO (para Google AI Studio)

Esto es una GUÍA de trabajo para mejorar el SEO (Google), AEO (respuestas directas) y GEO (que las IAs citen la web) de una página web. Fue escrita para otra herramienta (Claude), así que tené en cuenta lo siguiente:

## Cómo usarla
1. Leé primero `SKILL.md` (es la guía principal). Los archivos de la carpeta `references/` son anexos: abrilos solo cuando `SKILL.md` los nombre.
2. IGNORÁ las partes que hablan de usar navegador, terminal, Search Console, Bing, Analytics, tablero, memoria o notas del proyecto: vos no tenés esas herramientas. Cuando algo necesite un dato de esas herramientas, pedíselo a la persona y esperá a que lo pegue en el chat.
3. Usá la guía sobre el CÓDIGO de la página que ya está en este proyecto. No inventes datos: ni precios, ni reseñas, ni autores, ni premios, ni teléfonos, ni direcciones. Si falta un dato, preguntalo.
4. Antes de cambiar nada, mostrá una lista corta: qué vas a cambiar, en qué archivo y por qué. Aplicá los cambios solo después de que la persona diga que sí.
5. Explicá todo en castellano simple, sin jerga.

## Qué mirar primero en una página hecha con AI Studio
(Si la página se arma en el navegador con React/Vite/JavaScript, Google a veces ve una página casi vacía. Verificalo en el código antes de asumir nada.)
- Cada página con su propio título (`<title>`) y su descripción (`<meta name="description">`), distintos entre sí.
- Un solo `<h1>` por página, con la palabra clave principal.
- Que el texto importante esté en el HTML y no se cargue recién después con JavaScript. Si no es así, proponer prerenderizado (generar el HTML de antemano) o una alternativa, y explicar el costo.
- Direcciones (URLs) reales para cada página, no solo `#` ni cambios de pantalla sin dirección propia.
- `robots.txt` y `sitemap.xml` en la raíz del sitio.
- Etiqueta `<link rel="canonical">`, `lang` en `<html>`, y `hreflang` si hay más de un idioma.
- Datos estructurados (JSON-LD): Organization y lo que corresponda a la página. Solo con datos reales.
- Imágenes con texto alternativo (`alt`) y tamaños livianos.
- Etiquetas al compartir en redes (`og:title`, `og:description`, `og:image`).
- Velocidad: imágenes y videos pesados, fuentes, scripts que bloquean la carga.

## Cuando termines
Hacé un resumen en una tabla: `Qué revisé | Estado (bien / mejorar / falla) | Qué cambié o qué recomiendo`. Aclará qué cosas mejoran de verdad la visibilidad en Google/IA y cuáles no. No prometas posiciones ni resultados.