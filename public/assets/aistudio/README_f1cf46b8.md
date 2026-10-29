# SEO + AEO + GEO Audit & Build Skill — v3.3.0

**Fecha de revisión documental:** 19 de octubre de 2026. Basada en la v3.2.0 recibida, revisada y ampliada.

## Qué archivo debe seguir el agente

**`SKILL.md` es el archivo rector.** Las referencias de `references/` forman parte de la skill y se consultan cuando `SKILL.md` lo indica. Este README solo explica la estructura.

## Contenido

- `SKILL.md`: principios, modos (rápido / completo), entrega en lenguaje simple, mapa de palabras clave, flujo, priorización, autorización, validación y auto-revisión.
- `references/hoja-de-ruta.md` *(nuevo)*: checklist paso a paso en 8 bloques (antes de publicar, cada página, técnica, Search Console, analítica, IAs, autoridad externa, seguimiento mensual) con criterio de aprobado.
- `references/quick-checks.md` *(nuevo)*: comandos de solo lectura (PowerShell y curl) para obtener evidencia.
- `references/wordpress-cms.md` *(nuevo)*: Rank Math/Yoast, Elementor, caché, Cloudflare, falsas alarmas frecuentes.
- `references/offsite-b2b.md` *(nuevo)*: autoridad externa, directorios legítimos, entidad coherente, B2B/exportación.
- `references/audit-modules.md`, `ai-crawlers.md`, `current-practices.md`, `implementation-validation.md`, `measurement.md`, `official-sources.md`, `report-template.md`, `free-tools.md`, `build-from-scratch.md`: igual que v3.2.0, con la fecha del control de IA de Search Console corregida.

## Cambios respecto de v3.2.0

1. **Modo rápido** para webs chicas y dueños no técnicos (la v3.2.0 exigía siempre matriz de 13 columnas y tres ciclos formales).
2. **Entrega en lenguaje simple** con tabla bien / mejorar / falla / no pude revisar, separando lo que mejora Google de lo que solo sube la nota de un plugin.
3. **Hoja de ruta concreta** con criterio de aprobado por punto (la v3.2.0 era sobre todo principios).
4. **Mapa de palabras clave** obligatorio contra canibalización, incluido el caso multidioma.
5. **Comprobaciones reproducibles** listas para usar.
6. **Guía WordPress** con lecciones reales (nota del plugin, schema «inactivo», caché, cron, Elementor).
7. **Autoridad externa y B2B** como módulo propio (era una viñeta).
8. **Corrección de hecho:** el control «Search generative AI» se anunció el 3-jun-2026 con despliegue gradual (la v3.2.0 decía «global desde finales de agosto», sin fuente).
9. Disparadores en castellano coloquial en la descripción.

## Uso

- En Claude.ai: subir el ZIP completo (Personalizar › Skills). No subir solo `SKILL.md`.
- En Claude Code: copiar la carpeta a `~/.claude/skills/seo-geo-aeo-audit/` (o `.claude/skills/` del proyecto).
- No combinar con v3.0–3.2.

## Seguridad

Autorización explícita antes de cada cambio, verificación en la web pública y reversión para cambios con riesgo. Tener acceso técnico no equivale a tener permiso.

## 3.3.1 (19-10-2026, tras la primera prueba real)
- Notas previas son contexto: verificar en vivo antes de reportar.
- Decisiones del dueño se informan como decisión vigente, no como falla.
- Revisar Search Console/Bing/analítica si hay sesión iniciada.
- En sitios nuevos, la autoridad externa suele pesar más que retoques on-page.
- No juzgar titles/descriptions solo por la cantidad de caracteres.

## 3.3.2 (19-10-2026, segunda prueba)
- Search Console, Bing, analítica, Rich Results y PageSpeed son obligatorios en modo rápido: abrirlos en el navegador visible (el dueño inicia sesión si hace falta).
- quick-checks: hreflang solo desde <link rel=alternate> (los del selector de idioma daban un falso aviso).

## 3.4.0 (19-10-2026, tercera prueba + genérico)
- Reglas anti-atajo: si falla la terminal, probar en navegador; si un navegador pide sesión, probar el otro; las notas no reemplazan pruebas obligatorias; indexación confirmada con Inspección de URL en vivo (3 páginas).
- 100 % genérica (cualquier rubro): ejemplos neutros; offsite-b2b con B2B/exportación, negocio local (inmobiliaria, chatarrería, servicios) y ecommerce.
- Sumado desde la hoja SEO de Fernando (parte genérica): datos del negocio a conseguir, método de palabras clave por idioma/mercado, tabla de qué medir, 'Qué no hacer', orden de fases y migración.

## 3.4.1 (19-10-2026, cuarta prueba)
- Invocar el skill sin instrucciones = auditoría rápida solo lectura.
- Abrir herramientas de solo lectura no requiere preguntar; no entregar con pruebas obligatorias ejecutables pendientes (lista de control antes del resumen).
- Responder en la variante de español del usuario (voseo si corresponde).

## 3.4.2 (19-10-2026)
- Auditoría ciega: el diagnóstico se hace sin leer notas del proyecto; después las notas solo agregan etiquetas (decisión vigente / ya en pendientes) y nunca cambian un estado. Funciona igual sin notas.

### 3.4.3
- Navegador integrado primero (externo solo si hay doble factor/antibots o lo pide el dueño). Contraste con notas automático en el mismo informe. No ofrecer como próximo paso lo que es solo mirar. Capturas solo para verificar. 404 confirmado en navegador. Revisión final del idioma.

### 3.4.4
- Mensajes de progreso en el idioma del usuario. Cadena de redirecciones completa. Revisar marca de evento clave y abrir todas las listas de no indexación.

### 3.5.0
- Informe de tráfico y mercado (países, IA generativa, redes, decisiones). Contraste analítica vs. medición sin cookies. Sitemap en cada auditoría. Más rincones de Search Console, Bing (Keyword Research), PageSpeed (Navegación agéntica), sameAs de redes. Sección genérica Cloudflare (AI Crawl Control, Web Analytics, tráfico, redirecciones). Trucos de navegación.
