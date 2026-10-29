# Referencia de rastreadores de IA y control de acceso

**Última revisión documental de esta referencia: 19 de octubre de 2026.** No uses la tabla como verdad permanente. Antes de editar robots.txt, consulta las fuentes primarias del proveedor, verifica endpoints/IPs oficiales cuando proceda, revisa logs/CDN/WAF y confirma la intención del propietario. Los nombres y propósitos pueden cambiar.

### Matriz de referencia (verificar en fuente primaria antes de aplicar)

| Proveedor / token | Uso descrito por el proveedor | Interpretación para la decisión |
|---|---|---|
| OpenAI `OAI-SearchBot` | Descubrimiento/citación en búsqueda de ChatGPT | Controla por separado si se desea inclusión en resultados de búsqueda de ChatGPT. Bloquearlo puede excluir el sitio de las respuestas de búsqueda de ChatGPT. |
| OpenAI `GPTBot` | Rastreo de contenido que podría utilizarse para entrenar modelos fundacionales | No lo equipares a `OAI-SearchBot`; la decisión de entrenamiento puede ser distinta de la de búsqueda. |
| OpenAI `ChatGPT-User` | Peticiones iniciadas por usuarios en ciertas funciones | No lo trates como el token que controla la búsqueda automática; OpenAI indica que robots.txt rules may not apply porque la acción es iniciada por el usuario. |
| OpenAI `OAI-AdsBot` | Validación de páginas enviadas como anuncios en ChatGPT | Solo relevante si se publicitan en ChatGPT. |
| Anthropic `ClaudeBot` | Recopilación de contenido que podría contribuir al entrenamiento | Decisión separada de la indexación/búsqueda. |
| Anthropic `Claude-SearchBot` | Mejora de resultados de búsqueda de Claude | Evalúa el efecto sobre la posibilidad de aparición en sus respuestas de búsqueda. |
| Anthropic `Claude-User` | Recuperación de páginas a petición de usuarios | Decide por separado de bots automáticos. |
| Perplexity `PerplexityBot` | Rastreo/indexación para mostrar sitios en resultados de Perplexity | Comprueba documentación, IPs y WAF; el proveedor distingue este bot de `Perplexity-User`. |
| Perplexity `Perplexity-User` | Recuperación en respuesta a acciones de usuarios | El proveedor indica que, al ser una petición del usuario, generalmente ignora robots.txt; revisa su documentación actual y no des por garantizado el control mediante robots. |
| Google `Googlebot` | Rastreo para Google Search (incluye AI Overviews y AI Mode) | Control principal para el acceso a funciones de Search; la indexabilidad depende también de otros factores. |
| Google `Google-Extended` | Token de control para determinados usos de contenido en Gemini/Vertex AI (entrenamiento y grounding) | No es un user-agent HTTP separado y Google indica que no afecta la inclusión ni el ranking en Google Search. |

**Fuentes primarias a consultar (verificar el día de uso):**
- OpenAI: https://developers.openai.com/api/docs/bots
- Anthropic: https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity: https://docs.perplexity.ai/docs/resources/perplexity-crawlers y https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt
- Google crawlers y Google-Extended: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers

## Reglas de aplicación

- Esta tabla no decide por el usuario qué bots permitir o bloquear.
- Distingue rastreo para búsqueda, recuperación iniciada por usuarios y posible entrenamiento. No asumas que son controles equivalentes.
- No confíes solo en el `User-Agent`; verifica IPs oficiales cuando el proveedor las publique y valida el comportamiento real en logs.
- `robots.txt` no protege datos privados ni sustituye autenticación/autorización.
- No reemplaces el `robots.txt` completo con una plantilla. Compara el estado actual y aplica un diff mínimo solo con autorización explícita.
- La documentación de Perplexity indica que `Perplexity-User` generalmente ignora `robots.txt`; no prometas que una directiva de ese archivo impedirá todas esas peticiones.
- Muchos crawlers de búsqueda de IA tienen soporte limitado o nulo de JavaScript. Asegura que el contenido esencial esté en HTML inicial o se renderice de forma compatible.

Ejemplo **solo ilustrativo** para discutir una decisión (no una configuración de producción lista para pegar):

```txt
# Ejemplo conceptual: permitir búsqueda de OpenAI/Anthropic/Perplexity sin conceder por ello permiso de entrenamiento.
User-agent: OAI-SearchBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /
```

Este ejemplo no debe aplicarse sin revisar reglas previas, otros agentes, subdominios, políticas del titular, documentación vigente y comportamiento del CDN/WAF. No implica que permitir/denegar esos bots sea siempre la mejor decisión.
