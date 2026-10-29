import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

const DOMAIN = 'https://www.goldencoastpropertyadvisory.com';
const OG_IMAGE = `${DOMAIN}/og-image.jpg`;

const ROUTES = [
  {
    path: '/',
    title: 'Golden Coast Property Advisory | Asesoría Inmobiliaria Costa Dorada & Garraf',
    description: 'Asesoría inmobiliaria boutique en Costa Dorada y Garraf por Valeria Reishi, API colegiada y Perito Judicial Inmobiliario. Acompañamiento honesto e integral en compraventa, inversión y relocation.',
    canonical: `${DOMAIN}/`,
    is404: false,
  },
  {
    path: '/servicios',
    title: 'Servicios de Asesoría Inmobiliaria | Propietarios, Compradores y Relocation',
    description: 'Servicios inmobiliarios de alto nivel en Costa Dorada y Garraf: acompañamiento a propietarios, compradores e inversores con asesoría legal y técnica por API colegiada.',
    canonical: `${DOMAIN}/servicios`,
    is404: false,
  },
  {
    path: '/zonas',
    title: 'Zonas Costa Dorada & Garraf | Sitges, Vilanova, Cubelles, Cunit y Calafell',
    description: 'Guía inmobiliaria de la Costa Dorada y el Garraf: Sitges, Vilanova i la Geltrú, Cubelles, Cunit, Segur de Calafell y Calafell. Estilo de vida, conectividad y asesoramiento local.',
    canonical: `${DOMAIN}/zonas`,
    is404: false,
  },
  {
    path: '/sobre-mi',
    title: 'Sobre Mí — Valeria Reishi | Agente de la Propiedad Inmobiliaria (API)',
    description: 'Conozca la trayectoria de Valeria Reishi: perito judicial inmobiliario, API colegiada y especialista en LAU con más de 7 años acompañando a familias e inversores en la Costa Dorada y Garraf.',
    canonical: `${DOMAIN}/sobre-mi`,
    is404: false,
  },
  {
    path: '/testimonios',
    title: 'Testimonios & Casos de Éxito | Golden Coast Property Advisory',
    description: 'Experiencias reales de compradores, vendedores e inversores nacionales e internacionales acompañados por Valeria Reishi en la Costa Dorada y Garraf.',
    canonical: `${DOMAIN}/testimonios`,
    is404: false,
  },
  {
    path: '/faq',
    title: 'Preguntas Frecuentes Inmobiliarias | Golden Coast Property Advisory',
    description: 'Respuestas claras a dudas frecuentes sobre honorarios, proceso de compraventa, documentación, LAU y acompañamiento en Costa Dorada y Garraf.',
    canonical: `${DOMAIN}/faq`,
    is404: false,
  },
  {
    path: '/contacto',
    title: 'Contacto Directo — Valeria Reishi | Golden Coast Property Advisory',
    description: 'Póngase en contacto con Valeria Reishi para una consulta confidencial sobre compra, venta o alquiler en Costa Dorada y Garraf. Teléfono, WhatsApp y formulario.',
    canonical: `${DOMAIN}/contacto`,
    is404: false,
  },
  {
    path: '/404',
    title: '404 — Página no encontrada | Golden Coast Property Advisory',
    description: 'La página que busca no existe o ha sido trasladada. Regrese al inicio o explore nuestra asesoría inmobiliaria en Costa Dorada y Garraf.',
    canonical: `${DOMAIN}/404`,
    is404: true,
  },
];

async function runPrerender() {
  console.log('[prerender] Starting static HTML generation...');

  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run client build first.');
  }

  const template = fs.readFileSync(templatePath, 'utf8');
  const ssrModulePath = path.resolve(rootDir, 'dist-ssr', 'prerender-entry.js');
  
  if (!fs.existsSync(ssrModulePath)) {
    throw new Error('dist-ssr/prerender-entry.js not found. Run vite build --ssr first.');
  }

  const { render } = await import(ssrModulePath);

  for (const route of ROUTES) {
    console.log(`[prerender] Rendering route: ${route.path}`);
    const appHtml = render(route.path);

    let html = template;

    // 1. Inject rendered HTML inside root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // 2. Replace Title
    html = html.replace(/<title>.*?<\/title>/i, `<title>${route.title}</title>`);

    // 3. Replace Meta Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // 4. Replace Canonical URL
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // 5. Replace OpenGraph Title, Description, and URL
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // 6. Replace Twitter Title and Description
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // 7. Robots tag for 404
    if (route.is404) {
      html = html.replace(
        /<meta\s+name="robots"\s+content=".*?"\s*\/?>/i,
        '<meta name="robots" content="noindex, nofollow" />'
      );
    }

    // 8. Output files
    if (route.path === '/') {
      fs.writeFileSync(path.resolve(distDir, 'index.html'), html, 'utf8');
    } else if (route.is404) {
      fs.writeFileSync(path.resolve(distDir, '404.html'), html, 'utf8');
      const routeDir = path.resolve(distDir, '404');
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.resolve(routeDir, 'index.html'), html, 'utf8');
    } else {
      const cleanPath = route.path.replace(/^\//, '');
      const routeDir = path.resolve(distDir, cleanPath);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.resolve(routeDir, 'index.html'), html, 'utf8');
      fs.writeFileSync(path.resolve(distDir, `${cleanPath}.html`), html, 'utf8');
    }
  }

  // Remove temporary dist-ssr directory
  fs.rmSync(path.resolve(rootDir, 'dist-ssr'), { recursive: true, force: true });

  console.log('[prerender] Static prerender successfully generated all routes!');
}

runPrerender().catch((err) => {
  console.error('[prerender] Error during prerendering:', err);
  process.exit(1);
});
