const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const FFMPEG = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\video-tools\\node_modules\\ffmpeg-static\\ffmpeg.exe';
const { Resvg } = require('C:/Users/shami/.gemini/antigravity-ide/brain/7e19507c-d57e-46c7-b110-66f675c8a4d3/scratch/video-tools/node_modules/@resvg/resvg-js');

const WORK_DIR = 'C:\\Users\\shami\\.gemini\\antigravity-ide\\brain\\7e19507c-d57e-46c7-b110-66f675c8a4d3\\scratch\\brag_render';
if (!fs.existsSync(WORK_DIR)) fs.mkdirSync(WORK_DIR, { recursive: true });

console.log('Generating high-res cinematic SVG frames...');

// ============================================================================
// 1. SCENE SVG TEMPLATES (1920x1080)
// ============================================================================

function getLetterboxAndGrid() {
  return `
    <!-- Cinematic Letterbox Borders -->
    <rect x="0" y="0" width="1920" height="75" fill="#070805"/>
    <rect x="0" y="1005" width="1920" height="75" fill="#070805"/>
    <line x1="0" y1="75" x2="1920" y2="75" stroke="#3a3d31" stroke-width="1.5"/>
    <line x1="0" y1="1005" x2="1920" y2="1005" stroke="#3a3d31" stroke-width="1.5"/>

    <!-- Tactical 8-Corner Hairline Crosshairs -->
    <path d="M80 125H115M80 125V160" stroke="#ebfc72" stroke-width="3"/>
    <path d="M1840 125H1805M1840 125V160" stroke="#ebfc72" stroke-width="3"/>
    <path d="M80 955H115M80 955V920" stroke="#ebfc72" stroke-width="3"/>
    <path d="M1840 955H1805M1840 955V920" stroke="#ebfc72" stroke-width="3"/>

    <!-- Subtle Hairline Grid -->
    <path d="M0 135H1920M0 270H1920M0 405H1920M0 540H1920M0 675H1920M0 810H1920M0 945H1920" stroke="#3a3d31" stroke-width="0.8" stroke-dasharray="6 8" opacity="0.3"/>
    <path d="M240 0V1080M480 0V1080M720 0V1080M960 0V1080M1200 0V1080M1440 0V1080M1680 0V1080" stroke="#3a3d31" stroke-width="0.8" stroke-dasharray="6 8" opacity="0.3"/>

    <!-- HUD Header -->
    <circle cx="95" cy="42" r="6" fill="#ff5b42"/>
    <text x="115" y="48" font-family="monospace" font-size="16" font-weight="700" fill="#ffffff" letter-spacing="2">ACTIVE DISASTER RESPONSE ZONE // FLOOD BASIN EMERGENCY</text>
    <text x="1820" y="48" font-family="monospace" font-size="16" font-weight="700" fill="#ebfc72" text-anchor="end" letter-spacing="2">RELIEFLENS // CINEMATIC CUT</text>
  `;
}

// SCENE 1: THE FLOOD BREACH
const svgScene1 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <rect width="1920" height="1080" fill="#11130d"/>
  <circle cx="960" cy="540" r="650" fill="rgba(255, 91, 66, 0.08)"/>
  ${getLetterboxAndGrid()}

  <!-- Alert Badge -->
  <rect x="680" y="220" width="560" height="48" fill="rgba(255, 91, 66, 0.15)" stroke="#ff5b42" stroke-width="2" rx="3"/>
  <text x="960" y="252" text-anchor="middle" font-family="monospace" font-size="18" font-weight="800" fill="#ff5b42" letter-spacing="2.5">⚠️ FLOOD LEVEE COMPROMISED · EAST RIVER BASIN</text>

  <!-- Big Cinema Heading -->
  <text x="960" y="420" text-anchor="middle" font-family="sans-serif" font-size="82" font-weight="900" fill="#ffffff" letter-spacing="-2">WHEN FLOODWATERS RISE,</text>
  <text x="960" y="520" text-anchor="middle" font-family="sans-serif" font-size="82" font-weight="900" fill="#ebfc72" letter-spacing="-2">EVERY SECOND IS A LIFE.</text>

  <!-- Telemetry Row -->
  <g transform="translate(360, 660)">
    <rect x="0" y="0" width="360" height="110" fill="#171a11" stroke="#3a3d31" stroke-width="1.5" rx="3"/>
    <text x="24" y="38" font-family="monospace" font-size="14" font-weight="700" fill="#e8e9e1">WATER SURGE RATE</text>
    <text x="24" y="85" font-family="sans-serif" font-size="36" font-weight="900" fill="#ff5b42">+5.5 INCHES / HR</text>
  </g>

  <g transform="translate(780, 660)">
    <rect x="0" y="0" width="360" height="110" fill="#171a11" stroke="#3a3d31" stroke-width="1.5" rx="3"/>
    <text x="24" y="38" font-family="monospace" font-size="14" font-weight="700" fill="#e8e9e1">ACTIVE SOS CALLS</text>
    <text x="24" y="85" font-family="sans-serif" font-size="36" font-weight="900" fill="#ff5b42">18 EMERGENCIES</text>
  </g>

  <g transform="translate(1200, 660)">
    <rect x="0" y="0" width="360" height="110" fill="#171a11" stroke="#3a3d31" stroke-width="1.5" rx="3"/>
    <text x="24" y="38" font-family="monospace" font-size="14" font-weight="700" fill="#e8e9e1">PEAK FLOOD CREST</text>
    <text x="24" y="85" font-family="sans-serif" font-size="36" font-weight="900" fill="#f5a623">IN 38 MINUTES</text>
  </g>

  <!-- Subtitle Bar -->
  <rect x="420" y="870" width="1080" height="42" fill="#171a11" stroke="#3a3d31" stroke-width="1" rx="2"/>
  <text x="960" y="897" text-anchor="middle" font-family="monospace" font-size="17" font-weight="700" fill="#ffffff">VOICEOVER: "When catastrophic floodwaters rise... every single second is a life."</text>
</svg>
`;

// SCENE 2: SITUATION ROOM
const svgScene2 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <rect width="1920" height="1080" fill="#11130d"/>
  ${getLetterboxAndGrid()}

  <!-- Left: Radar Screen -->
  <g transform="translate(140, 160)">
    <rect x="0" y="0" width="860" height="660" fill="#171a11" stroke="#3a3d31" stroke-width="2" rx="4"/>
    
    <!-- Radar Rings -->
    <circle cx="430" cy="330" r="280" fill="none" stroke="#3a3d31" stroke-width="1.5" stroke-dasharray="4 6"/>
    <circle cx="430" cy="330" r="190" fill="none" stroke="#3a3d31" stroke-width="1.5" stroke-dasharray="4 6"/>
    <circle cx="430" cy="330" r="100" fill="none" stroke="#3a3d31" stroke-width="1.5" stroke-dasharray="4 6"/>
    <line x1="430" y1="50" x2="430" y2="610" stroke="#3a3d31" stroke-width="1"/>
    <line x1="150" y1="330" x2="710" y2="330" stroke="#3a3d31" stroke-width="1"/>

    <!-- River Flood Basin Path -->
    <path d="M80 120 Q300 280 430 330 T780 500" fill="none" stroke="#5cd2e6" stroke-width="24" opacity="0.4" stroke-linecap="round"/>

    <!-- Radar Sweep Line -->
    <line x1="430" y1="330" x2="680" y2="180" stroke="#ebfc72" stroke-width="3"/>
    <polygon points="430,330 680,180 650,110" fill="rgba(235, 252, 114, 0.15)"/>

    <!-- Critical Hotspot Pin -->
    <circle cx="430" cy="330" r="20" fill="rgba(255,91,66,0.3)"/>
    <circle cx="430" cy="330" r="8" fill="#ff5b42"/>
    <rect x="460" y="305" width="360" height="50" fill="#2d1814" stroke="#ff5b42" stroke-width="1.5" rx="3"/>
    <text x="475" y="328" font-family="monospace" font-size="14" font-weight="800" fill="#ffffff">🚨 #FL-8042: ST. JUDE CARE HOME</text>
    <text x="475" y="346" font-family="monospace" font-size="12" font-weight="700" fill="#ebfc72">45 RESIDENTS TRAPPED · WATER 6FT</text>

    <!-- Approaching Boat Pin -->
    <circle cx="320" cy="460" r="7" fill="#ebfc72"/>
    <rect x="230" y="480" width="220" height="34" fill="#1b2015" stroke="#ebfc72" stroke-width="1.5" rx="3"/>
    <text x="340" y="502" text-anchor="middle" font-family="monospace" font-size="13" font-weight="800" fill="#ebfc72">🚤 BOAT R-3 (ETA 8 MIN)</text>
  </g>

  <!-- Right: Copy & Feature Points -->
  <g transform="translate(1060, 200)">
    <text x="0" y="24" font-family="monospace" font-size="16" font-weight="800" fill="#ebfc72" letter-spacing="2">ACT II · REAL-TIME SITUATION ROOM</text>
    <text x="0" y="80" font-family="sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-1">Live Disaster Radar</text>
    <text x="0" y="130" font-family="sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="-1">&amp; Rescue Coordination</text>

    <g transform="translate(0, 180)">
      <rect x="0" y="0" width="720" height="90" fill="#171a11" stroke="#3a3d31" stroke-width="1.5" rx="3"/>
      <text x="24" y="36" font-family="monospace" font-size="18" font-weight="800" fill="#00e5a3">✓ MULTI-SOURCE INGESTION</text>
      <text x="24" y="66" font-family="sans-serif" font-size="16" font-weight="500" fill="#e8e9e1">Citizen phone calls, SMS, IoT river sensors &amp; satellite telemetry.</text>
    </g>

    <g transform="translate(0, 290)">
      <rect x="0" y="0" width="720" height="90" fill="#171a11" stroke="#3a3d31" stroke-width="1.5" rx="3"/>
      <text x="24" y="36" font-family="monospace" font-size="18" font-weight="800" fill="#00e5a3">✓ STREET-LEVEL DEDUPLICATION</text>
      <text x="24" y="66" font-family="sans-serif" font-size="16" font-weight="500" fill="#e8e9e1">Groups repeated neighbor calls into unified rescue missions.</text>
    </g>

    <g transform="translate(0, 400)">
      <rect x="0" y="0" width="720" height="90" fill="#171a11" stroke="#3a3d31" stroke-width="1.5" rx="3"/>
      <text x="24" y="36" font-family="monospace" font-size="18" font-weight="800" fill="#00e5a3">✓ LIVE ASSET TRACKING</text>
      <text x="24" y="66" font-family="sans-serif" font-size="16" font-weight="500" fill="#e8e9e1">Routes boats, high-water trucks, drones, and helicopters.</text>
    </g>
  </g>

  <!-- Subtitle Bar -->
  <rect x="360" y="870" width="1200" height="42" fill="#171a11" stroke="#3a3d31" stroke-width="1" rx="2"/>
  <text x="960" y="897" text-anchor="middle" font-family="monospace" font-size="17" font-weight="700" fill="#ffffff">VOICEOVER: "ReliefLens maps the crisis in real time, finding trapped families and routing rescue crews."</text>
</svg>
`;

// SCENE 3: EXPLAINABLE SCORECARD
const svgScene3 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <rect width="1920" height="1080" fill="#11130d"/>
  ${getLetterboxAndGrid()}

  <!-- Scorecard Main Panel -->
  <g transform="translate(240, 160)">
    <rect x="0" y="0" width="1440" height="670" fill="#171a11" stroke="#3a3d31" stroke-width="2" rx="4"/>

    <!-- Header Row -->
    <text x="40" y="60" font-family="monospace" font-size="16" font-weight="800" fill="#ebfc72" letter-spacing="2">ACT III · EXPLAINABLE PRIORITIZATION ENGINE</text>
    <text x="40" y="110" font-family="sans-serif" font-size="40" font-weight="800" fill="#ffffff">How Help is Scored Fairly &amp; Transparently</text>
    
    <text x="1390" y="105" text-anchor="end" font-family="sans-serif" font-size="64" font-weight="900" fill="#ff5b42">88 <tspan font-size="32" fill="#e8e9e1">/ 100</tspan></text>

    <line x1="40" y1="140" x2="1400" y2="140" stroke="#3a3d31" stroke-width="1.5"/>

    <!-- Formula Banner -->
    <rect x="40" y="165" width="1360" height="46" fill="#11130d" stroke="#3a3d31" stroke-width="1.5" rx="3"/>
    <text x="60" y="195" font-family="monospace" font-size="18" font-weight="700" fill="#ebfc72">FORMULA: 40%(DANGER) + 30%(PEOPLE TRAPPED) + 20%(TIME LEFT) + 10%(LOCATION CHECK)</text>

    <!-- 4 Vector Cards Grid -->
    <g transform="translate(40, 240)">
      <!-- Card 1 -->
      <rect x="0" y="0" width="320" height="230" fill="#1c2016" stroke="#ff5b42" stroke-width="1.5" rx="3"/>
      <text x="20" y="35" font-family="monospace" font-size="13" font-weight="800" fill="#ff5b42">01 · DANGER DEPTH (40%)</text>
      <text x="20" y="90" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff">95/100</text>
      <rect x="20" y="115" width="280" height="8" fill="#11130d" rx="2"/>
      <rect x="20" y="115" width="266" height="8" fill="#ff5b42" rx="2"/>
      <text x="20" y="155" font-family="sans-serif" font-size="13" fill="#e8e9e1">Water depth &gt; 6 feet.</text>
      <text x="20" y="180" font-family="sans-serif" font-size="13" fill="#e8e9e1">Rising 5 inches per hour.</text>
    </g>

    <g transform="translate(385, 240)">
      <!-- Card 2 -->
      <rect x="0" y="0" width="320" height="230" fill="#1c2016" stroke="#ff5b42" stroke-width="1.5" rx="3"/>
      <text x="20" y="35" font-family="monospace" font-size="13" font-weight="800" fill="#ff5b42">02 · PEOPLE AT RISK (30%)</text>
      <text x="20" y="90" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff">82/100</text>
      <rect x="20" y="115" width="280" height="8" fill="#11130d" rx="2"/>
      <rect x="20" y="115" width="230" height="8" fill="#ff5b42" rx="2"/>
      <text x="20" y="155" font-family="sans-serif" font-size="13" fill="#e8e9e1">45 elderly residents.</text>
      <text x="20" y="180" font-family="sans-serif" font-size="13" fill="#e8e9e1">12 care staff on duty.</text>
    </g>

    <g transform="translate(730, 240)">
      <!-- Card 3 -->
      <rect x="0" y="0" width="320" height="230" fill="#1c2016" stroke="#f5a623" stroke-width="1.5" rx="3"/>
      <text x="20" y="35" font-family="monospace" font-size="13" font-weight="800" fill="#f5a623">03 · ESCAPE TIME (20%)</text>
      <text x="20" y="90" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff">90/100</text>
      <rect x="20" y="115" width="280" height="8" fill="#11130d" rx="2"/>
      <rect x="20" y="115" width="252" height="8" fill="#f5a623" rx="2"/>
      <text x="20" y="155" font-family="sans-serif" font-size="13" fill="#e8e9e1">Main bridge submerged</text>
      <text x="20" y="180" font-family="sans-serif" font-size="13" fill="#e8e9e1">in under 22 minutes.</text>
    </g>

    <g transform="translate(1075, 240)">
      <!-- Card 4 -->
      <rect x="0" y="0" width="320" height="230" fill="#1c2016" stroke="#ebfc72" stroke-width="1.5" rx="3"/>
      <text x="20" y="35" font-family="monospace" font-size="13" font-weight="800" fill="#ebfc72">04 · LOCATION CHECK (10%)</text>
      <text x="20" y="90" font-family="sans-serif" font-size="44" font-weight="900" fill="#ffffff">42/100</text>
      <rect x="20" y="115" width="280" height="8" fill="#11130d" rx="2"/>
      <rect x="20" y="115" width="118" height="8" fill="#ebfc72" rx="2"/>
      <text x="20" y="155" font-family="sans-serif" font-size="13" fill="#e8e9e1">Location from cell tower.</text>
      <text x="20" y="180" font-family="sans-serif" font-size="13" fill="#e8e9e1">Drone verifying exact GPS.</text>
    </g>

    <!-- Human Stamp Footer -->
    <rect x="40" y="520" width="800" height="52" fill="#11130d" stroke="#00e5a3" stroke-width="1.5" rx="3"/>
    <text x="60" y="552" font-family="monospace" font-size="16" font-weight="800" fill="#00e5a3">✓ 100% HUMAN-IN-THE-LOOP · SIGNED OFF BY CAPTAIN MARCUS VANCE</text>
  </g>

  <!-- Subtitle Bar -->
  <rect x="360" y="870" width="1200" height="42" fill="#171a11" stroke="#3a3d31" stroke-width="1" rx="2"/>
  <text x="960" y="897" text-anchor="middle" font-family="monospace" font-size="17" font-weight="700" fill="#ffffff">VOICEOVER: "Every decision is transparent. Every score is verified. And real human chiefs make the final call."</text>
</svg>
`;

// SCENE 4: DEPLOY & MONOLITH OUTRO
const svgScene4 = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <rect width="1920" height="1080" fill="#11130d"/>
  <circle cx="960" cy="540" r="750" fill="rgba(235, 252, 114, 0.12)"/>
  ${getLetterboxAndGrid()}

  <!-- Dispatch Slider Success -->
  <rect x="660" y="200" width="600" height="60" fill="#1b2015" stroke="#00e5a3" stroke-width="2.5" rx="4"/>
  <text x="960" y="238" text-anchor="middle" font-family="monospace" font-size="19" font-weight="900" fill="#ffffff" letter-spacing="1.5">✓ RESCUE BOAT R-3 DISPATCHED TO ST. JUDE</text>

  <!-- Giant Brand Outline Typography -->
  <text x="960" y="490" text-anchor="middle" font-family="sans-serif" font-size="172" font-weight="900" fill="none" stroke="#ebfc72" stroke-width="4.5" letter-spacing="-5">RELIEFLENS</text>

  <!-- Tagline -->
  <text x="960" y="600" text-anchor="middle" font-family="sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="0">When disasters move fast, help moves faster.</text>
  
  <text x="960" y="660" text-anchor="middle" font-family="monospace" font-size="20" font-weight="700" fill="#e8e9e1" letter-spacing="1">Free Public Emergency Response Network · Real Human Oversight</text>

  <!-- Bottom CTA Pills -->
  <g transform="translate(680, 730)">
    <rect x="0" y="0" width="260" height="50" fill="#ff5b42" rx="3"/>
    <text x="130" y="32" text-anchor="middle" font-family="monospace" font-size="15" font-weight="800" fill="#ffffff">🚨 CALL 911 / SOS</text>

    <rect x="300" y="0" width="260" height="50" fill="#171a11" stroke="#ebfc72" stroke-width="1.5" rx="3"/>
    <text x="430" y="32" text-anchor="middle" font-family="monospace" font-size="15" font-weight="800" fill="#ebfc72">relieflens.org ➔</text>
  </g>

  <!-- Subtitle Bar -->
  <rect x="380" y="870" width="1160" height="42" fill="#171a11" stroke="#3a3d31" stroke-width="1" rx="2"/>
  <text x="960" y="897" text-anchor="middle" font-family="monospace" font-size="17" font-weight="700" fill="#ffffff">VOICEOVER: "ReliefLens. Because when disasters move fast, help moves faster."</text>
</svg>
`;

// Render SVGs to PNG
const scenes = [
  { name: 'scene1', svg: svgScene1 },
  { name: 'scene2', svg: svgScene2 },
  { name: 'scene3', svg: svgScene3 },
  { name: 'scene4', svg: svgScene4 }
];

scenes.forEach((s) => {
  const resvg = new Resvg(s.svg, { fitTo: { mode: 'width', value: 1920 } });
  const png = resvg.render();
  const pngPath = path.join(WORK_DIR, `${s.name}.png`);
  fs.writeFileSync(pngPath, png.asPng());
  console.log(`Rendered ${pngPath}`);
});

console.log('All 4 scene PNG frames rendered successfully!');
