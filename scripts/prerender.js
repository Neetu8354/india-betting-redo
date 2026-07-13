import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

// Routes to prerender with their metadata
const routes = [
  {
    path: '/',
    title: "YOLO365 — India's #1 Online Cricket Betting ID, IPL & Live Casino 2026",
    description: "YOLO365 is India's trusted online cricket betting exchange. Get your IPL betting ID on WhatsApp in 60 seconds, instant INR deposits & 5-minute withdrawals.",
  },
  {
    path: '/about',
    title: "About YOLO365 — India's Trusted Cricket Betting ID & Live Casino Site",
    description: "Learn about YOLO365 — India's most trusted online cricket betting exchange since 2021. 5 lakh+ users, instant UPI deposits, 5-minute withdrawals, licensed & regulated.",
  },
  {
    path: '/contact',
    title: "Contact YOLO365 — 24×7 WhatsApp Support for Cricket Betting ID",
    description: "Contact YOLO365 customer support 24×7 on WhatsApp for cricket betting ID, deposit, withdrawal, or live casino help. Hindi & English support.",
  },
  {
    path: '/games/cricket-betting',
    title: "Online Cricket Betting in India 2026 — IPL, T20 & Test | YOLO365",
    description: "Bet on live cricket matches at YOLO365 — IPL 2026, T20 World Cup, BBL, PSL with best odds, in-play markets, instant UPI deposit & 5-minute withdrawal.",
  },
  {
    path: '/games/teen-patti',
    title: "Teen Patti Online Real Money India 2026 | YOLO365 Live Casino",
    description: "Play Teen Patti online for real money on YOLO365 — live dealers from Evolution & Ezugi, ₹100 min bet, instant UPI deposit, 5-minute INR withdrawal.",
  },
  {
    path: '/games/aviator',
    title: "Aviator Game Online India — Play Real Money Crash on YOLO365",
    description: "Play Aviator crash game online for real INR money on YOLO365 — Spribe original, 97% RTP, ₹10 min bet, auto cashout, instant UPI deposit & withdrawal.",
  },
  {
    path: '/games/andar-bahar',
    title: "Andar Bahar Online Real Money India 2026 | YOLO365 Live Casino",
    description: "Play Andar Bahar online for real INR money on YOLO365 — live dealers, ₹100 min bet, instant UPI deposit, 5-minute withdrawal, 24×7 games.",
  },
  {
    path: '/blog',
    title: "YOLO365 Blog — IPL Betting Tips, Cricket Strategy & Live Casino Guides 2026",
    description: "Expert IPL 2026 betting tips, cricket strategy, Teen Patti & live casino guides from YOLO365 — India's #1 cricket betting exchange. New articles every week.",
  },
];

function generatePrerenderedHTML(baseHTML, route) {
  let html = baseHTML;
  
  // Replace meta tags with route-specific content
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${route.description}"`
  );
  
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${route.title}</title>`
  );
  
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${route.title}"`
  );
  
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${route.description}"`
  );
  
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${route.title}"`
  );
  
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${route.description}"`
  );
  
  // Add initial content hint in noscript for crawlers
  const noscriptContent = `<noscript><h1>${route.title}</h1><p>${route.description}</p></noscript>`;
  html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, noscriptContent);
  
  return html;
}

async function prerender() {
  try {
    // Check if dist exists
    if (!fs.existsSync(distDir)) {
      console.log('⚠️  dist directory not found. Run "npm run build" first.');
      return;
    }

    // Read base index.html
    const baseHTML = fs.readFileSync(indexPath, 'utf-8');

    // Create prerendered versions for each route
    for (const route of routes) {
      const routePath = route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`;
      const fullPath = path.join(distDir, routePath);
      
      // Create directory if needed
      const dir = path.dirname(fullPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      // Generate and write prerendered HTML
      const prerenderedHTML = generatePrerenderedHTML(baseHTML, route);
      fs.writeFileSync(fullPath, prerenderedHTML);
      console.log(`✓ Prerendered: ${route.path}`);
    }

    console.log(`\n✅ Prerendering complete! Generated ${routes.length} static pages.`);
  } catch (error) {
    console.error('❌ Prerendering failed:', error);
    process.exit(1);
  }
}

prerender();
