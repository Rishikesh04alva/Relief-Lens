const fs = require('fs');
const path = require('path');
const { Resvg } = require('C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\video-tools\\node_modules\\@resvg\\resvg-js');

const OUT_DIR = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\brag_series_a';
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// Common CSS & font styles for 2016 Silicon Valley Series A hype aesthetic
const COMMON_STYLE = `
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0c16" />
      <stop offset="50%" stop-color="#111528" />
      <stop offset="100%" stop-color="#07080e" />
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="50%" stop-color="#a855f7" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1e243d" stop-opacity="0.85" />
      <stop offset="100%" stop-color="#141829" stop-opacity="0.95" />
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="60" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <style>
    .font-sans { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
    .mono { font-family: 'Consolas', 'Courier New', monospace; }
  </style>
`;

function renderSvg(svgString, filename) {
  const resvg = new Resvg(svgString, {
    fitTo: { mode: 'width', value: 1920 },
    font: { loadSystemFonts: true }
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(path.join(OUT_DIR, filename), pngBuffer);
  console.log(`Rendered ${filename} (${pngBuffer.length} bytes)`);
}

// ---------------------------------------------------------------------------
// SCENE 1: The $18.5M Series A Announcement & TechCrunch Splash
// ---------------------------------------------------------------------------
const scene1Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" class="font-sans">
  ${COMMON_STYLE}
  <rect width="1920" height="1080" fill="url(#bgGrad)" />

  <!-- 2016 ambient blur spheres -->
  <circle cx="250" cy="200" r="300" fill="#6366f1" opacity="0.18" filter="url(#glow)" />
  <circle cx="1700" cy="850" r="350" fill="#ec4899" opacity="0.15" filter="url(#glow)" />
  <circle cx="1000" cy="500" r="280" fill="#06b6d4" opacity="0.12" filter="url(#glow)" />

  <!-- Subtle grid hairlines -->
  <line x1="120" y1="0" x2="120" y2="1080" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" />
  <line x1="1800" y1="0" x2="1800" y2="1080" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" />
  <line x1="0" y1="140" x2="1920" y2="140" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" />
  <line x1="0" y1="920" x2="1920" y2="920" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1" />

  <!-- Top TechCrunch banner bar -->
  <g transform="translate(140, 70)">
    <rect width="170" height="38" rx="6" fill="#00D664" />
    <text x="85" y="25" fill="#000000" font-weight="900" font-size="18" text-anchor="middle" letter-spacing="1.5">TECHCRUNCH</text>
    <text x="195" y="25" fill="#94a3b8" font-size="16" font-weight="600" letter-spacing="2">DISRUPT SF 2016 // EXCLUSIVE VENTURE NEWS</text>
    <rect x="1440" y="0" width="200" height="38" rx="19" fill="#1e243d" stroke="#334155" stroke-width="1" />
    <text x="1540" y="24" fill="#f59e0b" font-size="14" font-weight="700" text-anchor="middle" letter-spacing="1">YC W16 ALUMNI</text>
  </g>

  <!-- Main Hero Card -->
  <g transform="translate(180, 210)">
    <!-- Pill tag -->
    <rect width="360" height="42" rx="21" fill="url(#accentGrad)" />
    <text x="180" y="27" fill="#ffffff" font-size="16" font-weight="800" text-anchor="middle" letter-spacing="1.5">SERIES A ANNOUNCEMENT</text>

    <!-- Main huge headline -->
    <text x="0" y="150" fill="#ffffff" font-size="108" font-weight="900" letter-spacing="-2">DISRUPTING FLOODS.</text>

    <!-- Subtitle -->
    <text x="0" y="225" fill="#cbd5e1" font-size="34" font-weight="400" line-height="1.4">
      ReliefLens closes <tspan fill="#38bdf8" font-weight="800">$18,500,000</tspan> led by Andreessen Horowitz &amp; Sequoia
    </text>
    <text x="0" y="275" fill="#94a3b8" font-size="28" font-weight="400">
      Moving emergency disaster coordination and flood logistics completely to the cloud.
    </text>
  </g>

  <!-- Investor Badges & Valuation Footer -->
  <g transform="translate(180, 680)">
    <rect width="1560" height="190" rx="16" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.12" stroke-width="1" />
    
    <text x="50" y="45" fill="#64748b" font-size="14" font-weight="800" letter-spacing="2">PARTICIPATING SYNDICATE</text>
    
    <!-- Investor 1: a16z -->
    <g transform="translate(50, 75)">
      <rect width="320" height="75" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1" />
      <text x="160" y="47" fill="#ffffff" font-size="24" font-weight="900" text-anchor="middle" letter-spacing="1">a16z</text>
    </g>

    <!-- Investor 2: Sequoia -->
    <g transform="translate(410, 75)">
      <rect width="320" height="75" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1" />
      <text x="160" y="47" fill="#10b981" font-size="22" font-weight="800" text-anchor="middle" letter-spacing="1">SEQUOIA CAPITAL 🌲</text>
    </g>

    <!-- Investor 3: Y Combinator -->
    <g transform="translate(770, 75)">
      <rect width="320" height="75" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1" />
      <text x="160" y="47" fill="#f97316" font-size="22" font-weight="800" text-anchor="middle" letter-spacing="1">Y COMBINATOR</text>
    </g>

    <!-- Quote -->
    <g transform="translate(1130, 80)">
      <text x="0" y="28" fill="#e2e8f0" font-size="18" font-style="italic" font-weight="500">"Software ate the world.</text>
      <text x="0" y="55" fill="#38bdf8" font-size="18" font-weight="700">Now it's drinking the water."</text>
    </g>
  </g>

  <!-- Bottom Ticker -->
  <text x="960" y="1030" fill="#64748b" font-size="18" font-weight="600" text-anchor="middle" letter-spacing="2">
    VALUATION: $85,000,000 POST-MONEY • SAN FRANCISCO, CA • OCTOBER 2016
  </text>
</svg>
`;

// ---------------------------------------------------------------------------
// SCENE 2: The Ridiculous 2016 Pitch Deck Metrics (TAM, Velocity, Uptime)
// ---------------------------------------------------------------------------
const scene2Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" class="font-sans">
  ${COMMON_STYLE}
  <rect width="1920" height="1080" fill="url(#bgGrad)" />

  <circle cx="960" cy="200" r="300" fill="#6366f1" opacity="0.16" filter="url(#glow)" />
  <circle cx="300" cy="800" r="300" fill="#06b6d4" opacity="0.14" filter="url(#glow)" />

  <!-- Top Deck Header -->
  <g transform="translate(140, 80)">
    <text x="0" y="20" fill="#38bdf8" font-size="15" font-weight="800" letter-spacing="3" class="mono">CONFIDENTIAL // SERIES A PITCH DECK // SLIDE 04</text>
    <text x="0" y="70" fill="#ffffff" font-size="52" font-weight="900" letter-spacing="-1">Planetary Scale. Cloud Synergies.</text>
    <text x="0" y="110" fill="#94a3b8" font-size="22">Replacing legacy radios with edge neural routing to unlock massive stakeholder value.</text>
  </g>

  <!-- 3 Massive Pitch Metric Cards -->
  <g transform="translate(140, 260)">
    <!-- Card 1: TAM -->
    <g transform="translate(0, 0)">
      <rect width="500" height="480" rx="20" fill="url(#cardGrad)" stroke="#38bdf8" stroke-width="2" />
      <rect x="30" y="30" width="120" height="32" rx="16" fill="#0284c7" />
      <text x="90" y="52" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle" letter-spacing="1">MARKET SIZE</text>
      
      <text x="40" y="190" fill="#38bdf8" font-size="110" font-weight="900" letter-spacing="-3">$4.2T</text>
      <text x="40" y="245" fill="#ffffff" font-size="26" font-weight="800">Total Addressable Moisture</text>
      
      <line x1="40" y1="280" x2="460" y2="280" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      
      <text x="40" y="325" fill="#94a3b8" font-size="18" line-height="1.5">71% of Earth's surface is water.</text>
      <text x="40" y="360" fill="#cbd5e1" font-size="18" font-weight="600">Currently zero enterprise SaaS penetration.</text>
      <text x="40" y="420" fill="#10b981" font-size="18" font-weight="700">↗ +340% YoY flood frequency expansion</text>
    </g>

    <!-- Card 2: Velocity -->
    <g transform="translate(570, 0)">
      <rect width="500" height="480" rx="20" fill="url(#cardGrad)" stroke="#a855f7" stroke-width="2" />
      <rect x="30" y="30" width="130" height="32" rx="16" fill="#7e22ce" />
      <text x="95" y="52" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle" letter-spacing="1">PERFORMANCE</text>
      
      <text x="40" y="190" fill="#c084fc" font-size="110" font-weight="900" letter-spacing="-3">10x</text>
      <text x="40" y="245" fill="#ffffff" font-size="26" font-weight="800">Rescue Velocity</text>
      
      <line x1="40" y1="280" x2="460" y2="280" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      
      <text x="40" y="325" fill="#94a3b8" font-size="18">Algorithmic edge routing via AWS.</text>
      <text x="40" y="360" fill="#cbd5e1" font-size="18" font-weight="600">Eliminates 92% of triage bureaucracy.</text>
      <text x="40" y="420" fill="#c084fc" font-size="18" font-weight="700">⚡ 3.4 min average dispatch latency</text>
    </g>

    <!-- Card 3: Uptime -->
    <g transform="translate(1140, 0)">
      <rect width="500" height="480" rx="20" fill="url(#cardGrad)" stroke="#ec4899" stroke-width="2" />
      <rect x="30" y="30" width="140" height="32" rx="16" fill="#be185d" />
      <text x="100" y="52" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle" letter-spacing="1">RELIABILITY</text>
      
      <text x="40" y="190" fill="#f472b6" font-size="88" font-weight="900" letter-spacing="-2">99.999%</text>
      <text x="40" y="245" fill="#ffffff" font-size="26" font-weight="800">Empathy Uptime</text>
      
      <line x1="40" y1="280" x2="460" y2="280" stroke="#ffffff" stroke-opacity="0.1" stroke-width="1" />
      
      <text x="40" y="325" fill="#94a3b8" font-size="18">Mission-critical SLA guarantees.</text>
      <text x="40" y="360" fill="#cbd5e1" font-size="18" font-weight="600">Dual geo-redundant command failover.</text>
      <text x="40" y="420" fill="#ec4899" font-size="18" font-weight="700">🛡 Zero data loss during Category 5 storms</text>
    </g>
  </g>

  <!-- Bottom Traction Callout -->
  <g transform="translate(140, 800)">
    <rect width="1640" height="90" rx="16" fill="#0f172a" stroke="#334155" stroke-width="1" />
    <text x="50" y="55" fill="#f59e0b" font-size="28">🏆</text>
    <text x="95" y="54" fill="#ffffff" font-size="22" font-weight="700">Product Hunt #1 Product of the Day</text>
    <text x="540" y="54" fill="#94a3b8" font-size="20">— 3,842 upvotes</text>
    <text x="950" y="54" fill="#38bdf8" font-size="20" font-weight="600">"Uber for disasters is the startup of the year."</text>
  </g>

  <text x="960" y="1030" fill="#64748b" font-size="16" font-weight="600" text-anchor="middle" letter-spacing="2">
    SOURCE: RELIEFLENS INTERNAL PROJECTIONS • CONFIDENTIAL TO INVESTOR SYNDICATE
  </text>
</svg>
`;

// ---------------------------------------------------------------------------
// SCENE 3: The "Uber for Disasters" Live Product Demo & Human-in-the-Loop AI
// ---------------------------------------------------------------------------
const scene3Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" class="font-sans">
  ${COMMON_STYLE}
  <rect width="1920" height="1080" fill="url(#bgGrad)" />

  <circle cx="1500" cy="300" r="320" fill="#06b6d4" opacity="0.18" filter="url(#glow)" />
  <circle cx="400" cy="700" r="300" fill="#6366f1" opacity="0.15" filter="url(#glow)" />

  <!-- Top Bar -->
  <g transform="translate(140, 70)">
    <rect width="220" height="36" rx="18" fill="#1e243d" stroke="#38bdf8" stroke-width="1" />
    <text x="110" y="24" fill="#38bdf8" font-size="14" font-weight="800" text-anchor="middle" letter-spacing="2">LIVE APP DEMO</text>
    
    <text x="0" y="95" fill="#ffffff" font-size="56" font-weight="900" letter-spacing="-1">Uber for the Apocalypse.</text>
    <text x="0" y="135" fill="#94a3b8" font-size="24">Consumer-grade UI meets mission-critical tactical rescue operations.</text>
  </g>

  <!-- Split Screen: Left Product Frame, Right Feature Explainer -->
  <!-- Left: Tactical Dispatch Card -->
  <g transform="translate(140, 240)">
    <rect width="840" height="690" rx="20" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1" />
    
    <!-- Header of UI -->
    <rect x="0" y="0" width="840" height="65" rx="20" fill="#0f172a" />
    <circle cx="35" cy="32" r="7" fill="#ef4444" />
    <circle cx="60" cy="32" r="7" fill="#f59e0b" />
    <circle cx="85" cy="32" r="7" fill="#10b981" />
    <text x="420" y="38" fill="#94a3b8" font-size="16" font-weight="700" text-anchor="middle" class="mono">ReliefLens Client v2.4 (iOS 10 / iPad Pro)</text>
    
    <!-- Surge Pricing Pill (The 2016 Joke) -->
    <g transform="translate(40, 95)">
      <rect width="360" height="42" rx="21" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="1.5" />
      <text x="180" y="27" fill="#10b981" font-size="16" font-weight="900" text-anchor="middle" letter-spacing="1">SURGE PRICING: 0.0x (ALWAYS FREE)</text>
    </g>

    <g transform="translate(420, 95)">
      <rect width="380" height="42" rx="21" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" stroke-width="1.5" />
      <text x="190" y="27" fill="#f87171" font-size="15" font-weight="800" text-anchor="middle">INCIDENT: SECTOR 7 FLOOD CREST</text>
    </g>

    <!-- Live Driver/Boat Mock -->
    <g transform="translate(40, 170)">
      <rect width="760" height="230" rx="16" fill="#0b0e1b" stroke="#334155" stroke-width="1" />
      
      <!-- Boat icon / avatar -->
      <rect x="35" y="35" width="90" height="90" rx="16" fill="#1e293b" />
      <text x="80" y="92" font-size="46" text-anchor="middle">🚤</text>
      
      <text x="150" y="65" fill="#ffffff" font-size="28" font-weight="900">Zodiac Hurricane #04 Dispatched</text>
      <text x="150" y="100" fill="#38bdf8" font-size="20" font-weight="700">Driver: Chief Marcus Vance • ★ 4.98 (2,410 Rescues)</text>
      
      <!-- ETA badge -->
      <rect x="540" y="35" width="180" height="70" rx="12" fill="#0284c7" />
      <text x="630" y="65" fill="#ffffff" font-size="13" font-weight="800" text-anchor="middle" letter-spacing="1">ESTIMATED ARRIVAL</text>
      <text x="630" y="95" fill="#ffffff" font-size="26" font-weight="900" text-anchor="middle">3 MIN 42S</text>

      <line x1="35" y1="150" x2="725" y2="150" stroke="#334155" stroke-width="1" />
      
      <text x="35" y="195" fill="#94a3b8" font-size="17">Destination: Rooftop Cluster B • 4 Trapped Citizens (Priority Alpha)</text>
    </g>

    <!-- Explainable Scorecard Vector -->
    <g transform="translate(40, 430)">
      <rect width="760" height="210" rx="16" fill="#0f172a" stroke="#6366f1" stroke-width="1.5" />
      <text x="30" y="38" fill="#a5b4fc" font-size="15" font-weight="800" letter-spacing="1.5">EXPLAINABLE 4-VECTOR DISPATCH SCORECARD</text>
      <text x="650" y="38" fill="#38bdf8" font-size="18" font-weight="900" class="mono">SCORE: 94.2</text>
      
      <g transform="translate(30, 65)">
        <text x="0" y="20" fill="#cbd5e1" font-size="15" font-weight="600">Vulnerability (Infant/Elderly)</text>
        <rect x="0" y="32" width="320" height="10" rx="5" fill="#1e293b" />
        <rect x="0" y="32" width="310" height="10" rx="5" fill="#ef4444" />
        <text x="330" y="42" fill="#ef4444" font-size="14" font-weight="700">98%</text>

        <text x="0" y="80" fill="#cbd5e1" font-size="15" font-weight="600">Water Rise Rate (Surging)</text>
        <rect x="0" y="92" width="320" height="10" rx="5" fill="#1e293b" />
        <rect x="0" y="92" width="295" height="10" rx="5" fill="#f97316" />
        <text x="330" y="102" fill="#f97316" font-size="14" font-weight="700">94%</text>
      </g>

      <g transform="translate(390, 65)">
        <text x="0" y="20" fill="#cbd5e1" font-size="15" font-weight="600">Geographic Isolation</text>
        <rect x="0" y="32" width="300" height="10" rx="5" fill="#1e293b" />
        <rect x="0" y="32" width="275" height="10" rx="5" fill="#eab308" />
        <text x="310" y="42" fill="#eab308" font-size="14" font-weight="700">92%</text>

        <text x="0" y="80" fill="#cbd5e1" font-size="15" font-weight="600">Structural Integrity</text>
        <rect x="0" y="92" width="300" height="10" rx="5" fill="#1e293b" />
        <rect x="0" y="92" width="280" height="10" rx="5" fill="#38bdf8" />
        <text x="310" y="102" fill="#38bdf8" font-size="14" font-weight="700">90%</text>
      </g>
    </g>
  </g>

  <!-- Right: Value Props / Buzzwords -->
  <g transform="translate(1040, 240)">
    <!-- Feature 1 -->
    <g transform="translate(0, 30)">
      <rect width="740" height="170" rx="16" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" />
      <text x="40" y="55" fill="#38bdf8" font-size="28" font-weight="800">100% Human-in-the-Loop Synergy</text>
      <text x="40" y="95" fill="#cbd5e1" font-size="20">AI proposes the optimal vector. Real human Incident Chiefs approve every launch with 1 click on an iPad Pro.</text>
      <text x="40" y="135" fill="#10b981" font-size="18" font-weight="700">✓ Zero automated hallucination liability</text>
    </g>

    <!-- Feature 2 -->
    <g transform="translate(0, 240)">
      <rect width="740" height="170" rx="16" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" />
      <text x="40" y="55" fill="#a855f7" font-size="28" font-weight="800">No Smartphone? No Problem.</text>
      <text x="40" y="95" fill="#cbd5e1" font-size="20">Fallback SMS bot and emergency radio bridge ensure even 2G flip phones receive live rescue timestamps.</text>
      <text x="40" y="135" fill="#a855f7" font-size="18" font-weight="700">✓ Ubiquitous omnichannel survival protocol</text>
    </g>

    <!-- Feature 3 -->
    <g transform="translate(0, 450)">
      <rect width="740" height="170" rx="16" fill="url(#cardGrad)" stroke="#334155" stroke-width="1" />
      <text x="40" y="55" fill="#ec4899" font-size="28" font-weight="800">Zero Surge Pricing. Period.</text>
      <text x="40" y="95" fill="#cbd5e1" font-size="20">Unlike consumer ride-hailing apps, ReliefLens never charges for saving human lives during catastrophic floods.</text>
      <text x="40" y="135" fill="#ec4899" font-size="18" font-weight="700">✓ Ethical tech before it was trendy</text>
    </g>
  </g>

  <text x="960" y="1025" fill="#64748b" font-size="16" font-weight="600" text-anchor="middle" letter-spacing="2">
    AVAILABLE ON TESTFLIGHT BETA // INTEGRATED WITH FEMA &amp; COAST GUARD OPS
  </text>
</svg>
`;

// ---------------------------------------------------------------------------
// SCENE 4: The Startup Rocket Ship Outro & 2016 Tech Perks Ticker
// ---------------------------------------------------------------------------
const scene4Svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080" class="font-sans">
  ${COMMON_STYLE}
  <rect width="1920" height="1080" fill="url(#bgGrad)" />

  <circle cx="960" cy="540" r="450" fill="#6366f1" opacity="0.22" filter="url(#glow)" />
  <circle cx="300" cy="200" r="280" fill="#ec4899" opacity="0.18" filter="url(#glow)" />
  <circle cx="1600" cy="800" r="300" fill="#06b6d4" opacity="0.18" filter="url(#glow)" />

  <!-- Center Branding -->
  <g transform="translate(960, 280)" text-anchor="middle">
    <!-- Geometric Prism Logo -->
    <g transform="translate(0, -110)">
      <polygon points="0,-45 40,25 -40,25" fill="none" stroke="url(#accentGrad)" stroke-width="12" stroke-linejoin="round" />
      <circle cx="0" cy="3" r="14" fill="#38bdf8" />
    </g>
    
    <text x="0" y="20" fill="#ffffff" font-size="96" font-weight="900" letter-spacing="-2">ReliefLens</text>
    <text x="0" y="80" fill="#38bdf8" font-size="32" font-weight="700" letter-spacing="3">DISRUPTING DISASTER WITH 10x EMPATHY</text>
    <text x="0" y="125" fill="#94a3b8" font-size="24">Because when disasters move fast, help moves faster.</text>
  </g>

  <!-- 2016 Parody Hiring Perks Banner -->
  <g transform="translate(240, 480)">
    <rect width="1440" height="230" rx="20" fill="url(#cardGrad)" stroke="#ffffff" stroke-opacity="0.15" stroke-width="1.5" />
    
    <g transform="translate(50, 40)">
      <rect width="220" height="34" rx="17" fill="url(#accentGrad)" />
      <text x="110" y="23" fill="#ffffff" font-size="14" font-weight="900" text-anchor="middle" letter-spacing="1.5">WE ARE HIRING 🚀</text>
      
      <text x="250" y="25" fill="#ffffff" font-size="24" font-weight="800">Join Our Mission-Driven Rocket Ship</text>
    </g>

    <!-- Perks list -->
    <g transform="translate(50, 110)">
      <g transform="translate(0, 0)">
        <text x="0" y="20" fill="#38bdf8" font-size="22" font-weight="800">⚡ 10x Rescue Ninjas</text>
        <text x="0" y="50" fill="#94a3b8" font-size="16">Full-stack React &amp; Swift engineers</text>
      </g>

      <g transform="translate(340, 0)">
        <text x="0" y="20" fill="#10b981" font-size="22" font-weight="800">🍵 Kombucha on Tap</text>
        <text x="0" y="50" fill="#94a3b8" font-size="16">Cold brew + catered vegan lunch</text>
      </g>

      <g transform="translate(680, 0)">
        <text x="0" y="20" fill="#f59e0b" font-size="22" font-weight="800">🏓 Command Ping Pong</text>
        <text x="0" y="50" fill="#94a3b8" font-size="16">Aeron chairs &amp; standing docks</text>
      </g>

      <g transform="translate(1020, 0)">
        <text x="0" y="20" fill="#ec4899" font-size="22" font-weight="800">🌴 Unlimited PTO</text>
        <text x="0" y="50" fill="#94a3b8" font-size="16">Work from anywhere in the world</text>
      </g>
    </g>
  </g>

  <!-- Big Call to Action Button & URL -->
  <g transform="translate(960, 810)" text-anchor="middle">
    <!-- Button -->
    <rect x="-240" y="0" width="480" height="74" rx="37" fill="url(#accentGrad)" />
    <text x="0" y="47" fill="#ffffff" font-size="24" font-weight="900" letter-spacing="2">REQUEST TESTFLIGHT BETA</text>
    
    <!-- Domain -->
    <text x="0" y="125" fill="#ffffff" font-size="28" font-weight="700" letter-spacing="1">relieflens.io</text>
    <text x="0" y="160" fill="#64748b" font-size="18" font-weight="600">Backed by Sequoia Capital • Andreessen Horowitz • Y Combinator (W16)</text>
  </g>
</svg>
`;

console.log('Rendering 4 Series A launch scenes...');
renderSvg(scene1Svg, 'scene1.png');
renderSvg(scene2Svg, 'scene2.png');
renderSvg(scene3Svg, 'scene3.png');
renderSvg(scene4Svg, 'scene4.png');
console.log('All 4 scenes rendered successfully!');
