# Comprobaciones reproducibles

Comandos de solo lectura para obtener evidencia. Ejecutarlos contra la versión **pública** (sin sesión iniciada) y repetirlos después de cada cambio. Para saltar la caché en una comprobación puntual, agregar un parámetro inocuo (`?t=123`); en WordPress **no usar `?w=`** (es «semana» y da 404). Ojo con la consola de Windows: puede mostrar mal las tildes (`cotizaciÃ³n`); es la consola, no la web.

## PowerShell (Windows)

```powershell
$b='https://ejemplo.com'; $pages='/','/contacto/'   # completar con las URLs del sitemap
foreach($p in $pages){
  $sw=[Diagnostics.Stopwatch]::StartNew(); $r=Invoke-WebRequest -UseBasicParsing "$b$p"; $sw.Stop(); $h=$r.Content
  $t=[regex]::Match($h,'<title>(.*?)</title>').Groups[1].Value
  $d=[regex]::Match($h,'name="description" content="(.*?)"').Groups[1].Value
  $c=[regex]::Match($h,'rel="canonical" href="([^"]+)"').Groups[1].Value
  $rb=[regex]::Match($h,'name="robots" content="([^"]+)"').Groups[1].Value
  # solo <link rel="alternate" hreflang>: los <a hreflang> del selector de idioma no son señales para Google
  $hl=([regex]::Matches($h,'<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"')|%{$_.Groups[1].Value}) -join ','
  "$p | $($r.StatusCode) | $($sw.ElapsedMilliseconds) ms | canon propio=$($c -eq "$b$p") | robots=$rb | hreflang=$hl`n  T($($t.Length)): $t`n  D($($d.Length)): $d"
}
```

Redirecciones sin seguirlas (http, www, barra final):

```powershell
function Head($u,$ua='Mozilla/5.0'){ $q=[Net.HttpWebRequest]::Create($u); $q.AllowAutoRedirect=$false; $q.UserAgent=$ua
  try{ $s=$q.GetResponse(); "$([int]$s.StatusCode) $($s.Headers['Location'])"; $s.Close() } catch [Net.WebException]{ $x=$_.Exception.Response; if($x){"$([int]$x.StatusCode) $($x.Headers['Location'])"} else {"ERR $($_.Exception.Message)"} } }
Head 'http://ejemplo.com/'; Head 'https://www.ejemplo.com/'
```

Bots de IA y buscadores (¿los deja pasar el CDN/WAF?):

```powershell
foreach($bot in 'GPTBot','OAI-SearchBot','ChatGPT-User','ClaudeBot','Claude-SearchBot','PerplexityBot','Bingbot','Googlebot'){ "$bot : " + (Head "$b/" "Mozilla/5.0 (compatible; $bot/1.0)") }
```
Un 200 con user-agent falso no prueba que el bot real entre (puede filtrarse por IP); un 403/503 sí indica bloqueo a revisar en Cloudflare/WAF.

Datos estructurados presentes y de dónde salen:

```powershell
$h=(Invoke-WebRequest -UseBasicParsing "$b/").Content
[regex]::Matches($h,'(?s)<script[^>]*application/ld\+json[^>]*>') | % { $_.Value }      # la clase (p. ej. rank-math-schema) indica el origen
[regex]::Matches($h,'"@type"\s*:\s*"([^"]+)"') | % { $_.Groups[1].Value } | Sort -Unique
```

Si un comando se corta («la conexión ha terminado de forma inesperada») o da error del programa, **no es prueba de nada**: repetir con `curl` o en el navegador antes de concluir (algunos servidores/CDN cortan a PowerShell en respuestas 404).

Otros: `robots.txt`, `/sitemap_index.xml` (contar `<loc>`), `/llms.txt`, una URL inventada para probar el 404, presencia del ID de analítica (`G-XXXX`) y de los enlaces de contacto (`wa.me/`, `mailto:`) en cada página.

Certificado:

```powershell
$t=New-Object Net.Sockets.TcpClient('ejemplo.com',443); $s=New-Object Net.Security.SslStream($t.GetStream(),$false,{$true}); $s.AuthenticateAsClient('ejemplo.com')
(New-Object Security.Cryptography.X509Certificates.X509Certificate2($s.RemoteCertificate)).NotAfter; $t.Close()
```

## bash / curl

```bash
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" http://ejemplo.com/
curl -s https://ejemplo.com/ | grep -oE '<title>[^<]*|rel="canonical" href="[^"]*|name="robots" content="[^"]*|hreflang="[^"]*'
curl -s -A "Mozilla/5.0 (compatible; GPTBot/1.0)" -o /dev/null -w "%{http_code}\n" https://ejemplo.com/
```

## Navegador / herramientas oficiales

- Search Console › Inspección de URL (en vivo), Páginas, Rendimiento, Sitemaps, Notificaciones.
- Bing Webmaster Tools › Inspección de URL, Sitemaps, AI Performance.
- PageSpeed Insights (campo y laboratorio por separado).
- Rich Results Test y validator.schema.org.
- Vista previa de enlace en WhatsApp/LinkedIn o un depurador de Open Graph.
