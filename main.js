/**
 * RELIEFLENS — INVERSA.COM TEMPLATE RUNTIME
 * Architectural Reference: Inversa.com by Exo Ape
 * Core Philosophy: Explainable Prioritization with Human Oversight
 * Accessible Emergency Call for Help & High-Visibility Mode
 */

// ============================================================================
// 1. STATE & INCIDENT REPOSITORY (PLAIN ENGLISH & CLEAR HAZARDS)
// ============================================================================

const WEIGHTS = {
  threat: 0.40,
  pop: 0.30,
  time: 0.20,
  conf: 0.10,
};

let incidents = [
  {
    id: 'FL-8042',
    title: 'St. Jude Senior Care Center · 1st Floor Flooded',
    source: 'CITIZEN PHONE CALL & SMS',
    sourceType: 'sms',
    timestamp: Date.now() - 4 * 60 * 1000,
    status: 'NEEDS CHECKING',
    dispatched: false,
    dispatchedUnit: null,
    lat: 47.6082,
    lon: -122.3321,
    threatScore: 95,
    popScore: 82,
    timeScore: 90,
    confScore: 42,
    urgencyScore: 88,
    threatReason: 'Water depth is over 6 feet deep and rising 5 inches per hour. Rapid flooding into first floor.',
    popReason: 'Senior care facility 400 feet from river. 45 elderly residents who cannot walk + 12 care staff on duty.',
    timeReason: 'Main bridge and escape road will be completely underwater in less than 22 minutes.',
    confReason: 'Report came from a single cell phone caller. Location estimated from nearest cell tower (+/- 1.4km).',
    uncertainty: {
      flagged: true,
      badgeText: 'LOCATION ESTIMATED FROM CELL TOWER (NEEDS CHECK)',
      detail: 'Sending search drone to confirm exact GPS.'
    },
    cluster: {
      hasDuplicate: true,
      clusterCount: 3,
      matchPercent: 89.4,
      masterId: 'FL-8042',
      candidateTitle: 'Water rising fast at 42 River Road, elderly people stuck on porch',
      candidateText: 'Water is up to the second porch step. We have 6 seniors who cannot walk upstairs. Need a rescue boat quickly.'
    },
    aiRecommendation: 'Send Search Drone Alpha to confirm location, then immediately deploy Rescue Boat R-3.',
    summary: 'Water reaching 2nd floor balcony at St. Jude eldercare. 45 residents sheltering with 12 staff. Power is out.'
  },
  {
    id: 'EQ-4419',
    title: 'Highland Pass Bridge Cracked · 12 Cars Trapped',
    source: 'SEISMIC GROUND SENSOR + HAM RADIO',
    sourceType: 'sensor',
    timestamp: Date.now() - 9 * 60 * 1000,
    status: 'CONFIRMED',
    dispatched: true,
    dispatchedUnit: 'HELICOPTER SAR-1',
    lat: 47.6321,
    lon: -122.3015,
    threatScore: 98,
    popScore: 78,
    timeScore: 96,
    confScore: 92,
    urgencyScore: 94,
    threatReason: 'Bridge support pillar cracked and tilted 12 degrees after tremor. High risk of collapse.',
    popReason: '12 cars stranded between broken bridge expansion joints; approximately 26 people trapped inside.',
    timeReason: 'Critical collapse window estimated under 18 minutes if aftershocks occur.',
    confReason: 'Highway sensor alert confirmed visually by local volunteer radio operator on scene.',
    uncertainty: { flagged: false },
    cluster: { hasDuplicate: false },
    aiRecommendation: 'Airlift commuters from western bridge span immediately; block all road traffic.',
    summary: 'Severe structural crack on elevated mountain highway. Commuters trapped between broken joints.'
  },
  {
    id: 'CY-9012',
    title: 'Chemical Plant Flood Breach · 1,200 Neighbors Warned',
    source: 'WEATHER SATELLITE + PLANT ALARM',
    sourceType: 'satellite',
    timestamp: Date.now() - 14 * 60 * 1000,
    status: 'CRITICAL',
    dispatched: false,
    dispatchedUnit: null,
    lat: 47.5891,
    lon: -122.3582,
    threatScore: 94,
    popScore: 88,
    timeScore: 85,
    confScore: 89,
    urgencyScore: 91,
    threatReason: 'Floodwaters breached safety wall around chlorine storage tank #3.',
    popReason: 'Downwind neighborhood of 1,200 residents within half-mile radius.',
    timeReason: 'Water buoyancy danger to storage tanks in less than 32 minutes.',
    confReason: 'Satellite radar images verified with automated factory emergency alarm.',
    uncertainty: { flagged: false },
    cluster: { hasDuplicate: false },
    aiRecommendation: 'Sound neighborhood sirens; stage emergency hazmat and medical team outside flood zone.',
    summary: 'Factory perimeter wall compromised. Flood water reaching chlorine tanks. Evacuation sirens sounded.'
  },
  {
    id: 'LS-2201',
    title: 'Route 109 Mudslide · 2 Ambulances Blocked',
    source: 'FIRST RESPONDER POLICE RADIO',
    sourceType: 'radio',
    timestamp: Date.now() - 19 * 60 * 1000,
    status: 'MONITORED',
    dispatched: true,
    dispatchedUnit: 'HIGH-CLEAR 4WD TRUCK',
    lat: 47.6450,
    lon: -122.3420,
    threatScore: 78,
    popScore: 72,
    timeScore: 88,
    confScore: 94,
    urgencyScore: 83,
    threatReason: 'Rock and mud debris covering 400 meters of the primary mountain road.',
    popReason: 'Two ambulances carrying 3 sick patients are trapped behind the mud; detour adds 45 minutes.',
    timeReason: 'Patients need emergency hospital care within 30 minutes.',
    confReason: 'Police deputy on scene confirmed blocked road via radio.',
    uncertainty: { flagged: false },
    cluster: { hasDuplicate: false },
    aiRecommendation: 'Deploy heavy bulldozer from north depot; reroute helicopter for emergency airlift.',
    summary: 'Debris flow completely cut off Route 109. High clearance equipment clearing emergency lane.'
  },
  {
    id: 'FL-8045',
    title: 'Willow Creek Water Rising Fast · 340 Homes at Risk',
    source: 'RIVER DEPTH SENSOR 09B',
    sourceType: 'iot',
    timestamp: Date.now() - 25 * 60 * 1000,
    status: 'NEEDS CHECKING',
    dispatched: false,
    dispatchedUnit: null,
    lat: 47.5950,
    lon: -122.3120,
    threatScore: 80,
    popScore: 74,
    timeScore: 72,
    confScore: 50,
    urgencyScore: 76,
    threatReason: 'River water sensor spikes 220% above flood level. Water pushing against earthen barrier.',
    popReason: 'Low-lying neighborhood of 340 homes immediately downstream.',
    timeReason: 'Flood surge expected to reach residential street in 45 minutes.',
    confReason: 'Automated sensor alarm only; no visual confirmation by human yet.',
    uncertainty: {
      flagged: true,
      badgeText: 'SENSOR READING ONLY · AWAITING DRONE VISUAL',
      detail: 'Water height sensor spike detected. Debris may be blocking gauge.'
    },
    cluster: { hasDuplicate: false },
    aiRecommendation: 'Deploy Drone Alpha to check river bank condition before sending sandbag trucks.',
    summary: 'River gauge detected rapid surge. Sending drone to confirm whether dike is holding.'
  }
];

let auditLogs = [
  {
    timestamp: '12:04:12',
    operator: 'CAPT. MARCUS VANCE',
    action: 'CONFIRMED SCORE',
    target: 'ST. JUDE SENIOR CARE',
    delta: 'PRIORITY: 88/100',
    note: 'Confirmed 45 residents in care home. Verified flood water is surrounding building.',
    hash: 'SHA256:7e91...c3f4'
  },
  {
    timestamp: '12:01:45',
    operator: 'CAPT. MARCUS VANCE',
    action: 'SENT RESCUE',
    target: 'HIGHLAND PASS BRIDGE',
    delta: 'SENT HELICOPTER SAR-1',
    note: 'Bridge cracked. Commuters stranded. Airlift ordered immediately.',
    hash: 'SHA256:4b12...99a1'
  },
  {
    timestamp: '11:58:30',
    operator: 'LT. SARAH CHEN',
    action: 'SENT RESCUE',
    target: 'ROUTE 109 MUDSLIDE',
    delta: 'SENT HIGH-CLEAR 4WD',
    note: 'Ambulances blocked by rocks. Heavy bulldozer sent to clear lane.',
    hash: 'SHA256:88a3...104d'
  },
  {
    timestamp: '11:52:10',
    operator: 'CAPT. MARCUS VANCE',
    action: 'WEATHER UPDATE',
    target: 'FLOOD BASIN',
    delta: 'WATER LEVEL +5.5 INCHES',
    note: 'River crest warning updated from National Weather Service.',
    hash: 'SHA256:32c8...ee47'
  }
];

const quotes = [
  {
    text: "When the East River levee failed, our phones didn't stop ringing. ReliefLens clearly showed us that 45 elderly residents were trapped in St. Jude care home before the access road went underwater. We got boats to them in 15 minutes.",
    author: "Chief Marcus Vance · Incident Commander, County Emergency Rescue"
  },
  {
    text: "The call grouping feature combined 14 panic calls into one single rescue mission in under 40 seconds. We saved three boats from being sent to the same street and rescued an entire family downstream.",
    author: "Elena Rostova · Senior Triage Director, State Disaster Agency"
  },
  {
    text: "In floods and fires, computers shouldn't make decisions in the dark. ReliefLens lets every coordinator see the plain facts and sign their name before any helicopter takes off.",
    author: "Col. David Keller · Operations Chief, National SAR Task Force"
  }
];

let activeIncidentId = 'FL-8042';
let currentFilter = 'all';
let audioEnabled = false;
let audioCtx = null;
let currentQuoteIdx = 0;

// Map layers & state
let mapLayers = { radar: true, flood: true, uncertainty: true, units: true };
let radarAngle = 0;

// ============================================================================
// 2. INVERSA LOADER SIMULATION
// ============================================================================

function initInversaLoader() {
  const loader = document.getElementById('pageLoader');
  const bar = document.getElementById('loaderProgressBar');
  const phase = document.getElementById('loaderPhase');
  const text = document.getElementById('loaderText');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 12;
    if (progress > 100) progress = 100;

    if (bar) bar.style.width = `${progress}%`;
    if (phase) phase.textContent = `${progress}%`;

    if (progress > 60 && text) {
      text.textContent = 'CONNECTING TO RESCUE SATELLITES & BOATS...';
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        if (loader) loader.classList.add('is-hidden');
      }, 300);
    }
  }, 60);
}

// ============================================================================
// 3. INVERSA CUSTOM RETICLE CURSOR
// ============================================================================

function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const label = document.getElementById('cursorLabel');
  if (!cursor) return;

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    cursor.classList.add('is-visible');
  });

  document.querySelectorAll('[data-cursor]').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
      const customText = elem.getAttribute('data-cursor');
      if (label) label.textContent = customText || 'INSPECT';
    });
    elem.addEventListener('mouseleave', () => {
      if (label) label.textContent = 'EXPLORE';
    });
  });
}

// ============================================================================
// 4. INVERSA MENU DRAWER
// ============================================================================

function initMenu() {
  const btn = document.getElementById('menuToggleBtn');
  const menu = document.getElementById('fullMenu');
  const header = document.getElementById('mainHeader');
  const label = document.getElementById('menuLabelText');

  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-active');
    header?.classList.toggle('is-menu-open', isOpen);
    if (label) label.textContent = isOpen ? 'Close' : 'Menu';
    playTacticalTone('click');
  });

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-active');
      header?.classList.remove('is-menu-open');
      if (label) label.textContent = 'Menu';
    });
  });
}

// ============================================================================
// 5. INVERSA HARVESTER SLIDER (001 - 004)
// ============================================================================

function initHarvesterSlider() {
  const buttons = document.querySelectorAll('.nav-btn');
  const slides = document.querySelectorAll('.h-slide');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.getAttribute('data-slide');
      buttons.forEach(b => b.classList.remove('active'));
      slides.forEach(s => s.classList.remove('active'));

      btn.classList.add('active');
      const targetSlide = document.querySelector(`.h-slide[data-index="${idx}"]`);
      if (targetSlide) targetSlide.classList.add('active');

      playTacticalTone('click');
    });
  });
}

// ============================================================================
// 6. INVERSA QUOTES CONTROLS
// ============================================================================

function initQuotes() {
  const textElem = document.getElementById('quoteText');
  const authElem = document.getElementById('quoteAuthor');
  const numElem = document.getElementById('quoteCurrentIndex');
  const fillElem = document.getElementById('quoteProgressFill');

  function updateQuote(idx) {
    currentQuoteIdx = idx;
    if (textElem) textElem.textContent = `"${quotes[idx].text}"`;
    if (authElem) authElem.textContent = quotes[idx].author;
    if (numElem) numElem.textContent = `00${idx + 1}`;
    if (fillElem) fillElem.style.width = `${((idx + 1) / quotes.length) * 100}%`;
  }

  document.getElementById('nextQuoteBtn')?.addEventListener('click', () => {
    const next = (currentQuoteIdx + 1) % quotes.length;
    updateQuote(next);
    playTacticalTone('click');
  });

  document.getElementById('prevQuoteBtn')?.addEventListener('click', () => {
    const prev = (currentQuoteIdx - 1 + quotes.length) % quotes.length;
    updateQuote(prev);
    playTacticalTone('click');
  });
}

// ============================================================================
// 7. AUDIO FEEDBACK SYNTHESIZER
// ============================================================================

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playTacticalTone(type) {
  if (!audioEnabled || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.04);
    } else if (type === 'dispatch') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {
    console.warn(e);
  }
}

// ============================================================================
// 8. EXPLAINABLE SCORECARD FORMULATION & LIVE CALC
// ============================================================================

function calculateScore(threat, pop, time, conf) {
  return Math.round(
    (WEIGHTS.threat * threat) +
    (WEIGHTS.pop * pop) +
    (WEIGHTS.time * time) +
    (WEIGHTS.conf * conf)
  );
}

function updateScorecardMath() {
  const sThreat = parseInt(document.getElementById('sliderThreat')?.value || 95);
  const sPop = parseInt(document.getElementById('sliderPop')?.value || 82);
  const sTime = parseInt(document.getElementById('sliderTime')?.value || 90);
  const sConf = parseInt(document.getElementById('sliderConf')?.value || 42);

  document.getElementById('scValThreat').textContent = `${sThreat}/100`;
  document.getElementById('scValPop').textContent = `${sPop}/100`;
  document.getElementById('scValTime').textContent = `${sTime}/100`;
  document.getElementById('scValConf').textContent = `${sConf}/100`;

  const total = calculateScore(sThreat, sPop, sTime, sConf);
  const totalDisplay = document.getElementById('scTotalScore');
  const tierLabel = document.getElementById('scTierLabel');
  const dynamicFormula = document.getElementById('scDynamicFormula');

  if (totalDisplay) totalDisplay.textContent = total;
  if (tierLabel) {
    tierLabel.textContent = total >= 80 ? 'CRITICAL PRIORITY' : total >= 60 ? 'HIGH PRIORITY' : 'MONITORED';
    tierLabel.className = `score-tier-label ${total >= 80 ? 'text-urgent' : total >= 60 ? 'text-warning' : 'text-stable'}`;
  }
  if (dynamicFormula) {
    dynamicFormula.innerHTML = `0.40(${sThreat}) + 0.30(${sPop}) + 0.20(${sTime}) + 0.10(${sConf}) = <strong>${total} / 100</strong>`;
  }
}

// ============================================================================
// 9. COMMAND CENTER INCIDENTS & MAP (PLAIN ENGLISH & ZERO BLACK TEXT)
// ============================================================================

function renderIncidentFeed() {
  const container = document.getElementById('incidentList');
  if (!container) return;

  const filtered = incidents.filter(inc => {
    if (currentFilter === 'critical' && inc.urgencyScore < 80) return false;
    if (currentFilter === 'unverified' && (!inc.uncertainty || !inc.uncertainty.flagged)) return false;
    if (currentFilter === 'clusters' && (!inc.cluster || !inc.cluster.hasDuplicate)) return false;
    return true;
  });

  container.innerHTML = '';
  filtered.forEach(inc => {
    const isSelected = inc.id === activeIncidentId;
    const card = document.createElement('div');
    card.className = `incident-card ${isSelected ? 'selected' : ''}`;
    card.setAttribute('data-cursor', 'VIEW');

    card.innerHTML = `
      <div class="card-top-row">
        <div>
          <span style="font-size: 0.68rem; color: var(--color-yellow); font-weight: 700; letter-spacing: 0.05em;">CALL ${inc.id} · ${inc.source}</span>
          <h4 class="card-title">${inc.title}</h4>
        </div>
        <div class="card-badge ${inc.urgencyScore >= 80 ? 'urgent' : inc.urgencyScore >= 60 ? 'warning' : 'stable'}">
          ${inc.urgencyScore}
        </div>
      </div>
      <div class="card-meta-line">
        <span>GPS: ${inc.lat.toFixed(4)}° N, ${Math.abs(inc.lon).toFixed(4)}° W</span>
        ${inc.dispatched ? `<span class="text-stable" style="font-weight: 700;">✓ ${inc.dispatchedUnit} EN ROUTE</span>` : ''}
      </div>
      ${inc.uncertainty && inc.uncertainty.flagged ? `
        <div style="font-size: 0.72rem; color: var(--color-yellow); background: rgba(235,252,114,0.1); padding: 5px 8px; border: 1.5px dashed var(--color-yellow); font-weight: 600;">
          ⚠️ ${inc.uncertainty.badgeText}
        </div>
      ` : ''}
      <p class="card-desc">${inc.summary}</p>
      <div class="card-btn-strip">
        <button class="action-link" data-explain="${inc.id}">[WHY THIS PRIORITY?]</button>
        ${inc.cluster && inc.cluster.hasDuplicate ? `<button class="action-link" data-dedup="${inc.id}">[SEE DUPLICATES]</button>` : ''}
      </div>
    `;

    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      selectIncident(inc.id);
    });

    const expBtn = card.querySelector(`[data-explain="${inc.id}"]`);
    if (expBtn) {
      expBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectIncident(inc.id);
        document.getElementById('scorecardModal')?.showModal();
        playTacticalTone('click');
      });
    }

    const dedBtn = card.querySelector(`[data-dedup="${inc.id}"]`);
    if (dedBtn) {
      dedBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        selectIncident(inc.id);
        document.getElementById('dedupModal')?.showModal();
        playTacticalTone('click');
      });
    }

    container.appendChild(card);
  });
}

function selectIncident(id) {
  activeIncidentId = id;
  const inc = incidents.find(i => i.id === id);
  if (!inc) return;

  playTacticalTone('click');

  const cId = document.getElementById('controlIncidentId');
  const cTitle = document.getElementById('controlIncidentTitle');
  const cScore = document.getElementById('controlIncidentScore');

  if (cId) cId.textContent = `#${inc.id}`;
  if (cTitle) cTitle.textContent = inc.title.toUpperCase();
  if (cScore) cScore.textContent = `${inc.urgencyScore}/100`;

  document.querySelectorAll('.incident-card').forEach(c => c.classList.remove('selected'));
  renderIncidentFeed();
}

// Canvas Tactical Map
const canvas = document.getElementById('tacticalMap');
const ctx = canvas?.getContext('2d');

function resizeCanvas() {
  if (!canvas || !canvas.parentElement) return;
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  ctx?.scale(window.devicePixelRatio, window.devicePixelRatio);
}

function drawMap() {
  if (!canvas || !ctx) return;
  const w = canvas.width / window.devicePixelRatio;
  const h = canvas.height / window.devicePixelRatio;

  // Background
  ctx.fillStyle = '#11130d';
  ctx.fillRect(0, 0, w, h);

  // Hairline grid
  ctx.strokeStyle = '#22251a';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 50) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 50) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Topographic rings
  ctx.strokeStyle = '#2d3322';
  const cx = w * 0.48;
  const cy = h * 0.52;
  for (let r = 60; r < 300; r += 45) {
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * 1.3, r * 0.9, 0.25, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Flood Inundation Floodplain
  if (mapLayers.flood) {
    ctx.fillStyle = 'rgba(74, 168, 184, 0.22)';
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.3);
    ctx.bezierCurveTo(w * 0.5, h * 0.45, w * 0.65, h * 0.75, w * 0.45, h * 0.8);
    ctx.bezierCurveTo(w * 0.3, h * 0.7, w * 0.15, h * 0.5, w * 0.2, h * 0.3);
    ctx.fill();

    ctx.strokeStyle = '#5cd2e6';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.15);
    ctx.bezierCurveTo(w * 0.35, h * 0.35, w * 0.4, h * 0.65, w * 0.85, h * 0.88);
    ctx.stroke();
  }

  // Radar sweep line
  if (mapLayers.radar) {
    radarAngle += 0.018;
    if (radarAngle > Math.PI * 2) radarAngle = 0;

    const r = Math.max(w, h);
    ctx.save();
    ctx.strokeStyle = 'rgba(235, 252, 114, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.5);
    ctx.lineTo(w * 0.5 + Math.cos(radarAngle) * r, h * 0.5 + Math.sin(radarAngle) * r);
    ctx.stroke();
    ctx.restore();
  }

  // Incident pins
  incidents.forEach(inc => {
    let nx = 0.5 + (inc.lon - (-122.33)) * 4.5;
    let ny = 0.5 - (inc.lat - 47.61) * 4.5;
    const ix = w * nx;
    const iy = h * ny;

    const isSelected = inc.id === activeIncidentId;
    const color = inc.urgencyScore >= 80 ? '#FF5B42' : inc.urgencyScore >= 60 ? '#F5A623' : '#00E5A3';

    // Outer glow ring
    ctx.fillStyle = isSelected ? 'rgba(235, 252, 114, 0.35)' : `${color}44`;
    ctx.beginPath();
    ctx.arc(ix, iy, isSelected ? 18 : 12, 0, Math.PI * 2);
    ctx.fill();

    // Center pin
    ctx.fillStyle = isSelected ? '#EBFC72' : color;
    ctx.beginPath();
    ctx.arc(ix, iy, isSelected ? 7 : 5, 0, Math.PI * 2);
    ctx.fill();

    // High contrast white label
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px "JetBrains Mono"';
    ctx.fillText(`${inc.id} [${inc.urgencyScore}]`, ix + 10, iy + 4);
  });

  requestAnimationFrame(drawMap);
}

// ============================================================================
// 10. MODAL HOOKS & AUDIT LOGS
// ============================================================================

function renderAuditTable() {
  const tbody = document.getElementById('auditTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  auditLogs.forEach(entry => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.timestamp}</td>
      <td><strong style="color: #ffffff;">${entry.operator}</strong></td>
      <td><span class="tag-pill" style="color: var(--color-yellow);">${entry.action}</span></td>
      <td style="color: #ffffff;">${entry.target}</td>
      <td style="color: var(--color-green); font-weight: 700;">${entry.delta}</td>
      <td style="color: var(--color-creme);">${entry.note}</td>
      <td style="color: var(--color-yellow); font-family: monospace;">${entry.hash}</td>
    `;
    tbody.appendChild(tr);
  });
}

function showToast(msg) {
  const c = document.getElementById('toastContainer');
  if (!c) return;
  const t = document.createElement('div');
  t.className = 'tactical-toast';
  t.innerHTML = `<span class="emergency-pulse-dot"></span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => t.remove(), 4000);
}

// ============================================================================
// 11. INITIALIZATION & CITIZEN EMERGENCY HELP WIRING
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initInversaLoader();
  initCustomCursor();
  initMenu();
  initHarvesterSlider();
  initQuotes();
  renderIncidentFeed();

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  requestAnimationFrame(drawMap);

  // CITIZEN "CALL FOR HELP" BUTTONS (Header, Hero, Menu)
  const callHelpModal = document.getElementById('callHelpModal');
  const openHelpModal = () => {
    callHelpModal?.showModal();
    playTacticalTone('click');
  };

  document.getElementById('btnQuickCallHelp')?.addEventListener('click', openHelpModal);
  document.getElementById('btnHeroCallHelp')?.addEventListener('click', openHelpModal);
  document.getElementById('btnMenuCallHelp')?.addEventListener('click', () => {
    document.getElementById('fullMenu')?.classList.remove('is-active');
    document.getElementById('mainHeader')?.classList.remove('is-menu-open');
    openHelpModal();
  });

  document.getElementById('closeCallHelpBtn')?.addEventListener('click', () => {
    callHelpModal?.close();
  });

  // CITIZEN HELP FORM SUBMISSION
  const helpForm = document.getElementById('citizenHelpForm');
  if (helpForm) {
    helpForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const location = document.getElementById('helpLocation')?.value.trim();
      const hazardElem = document.querySelector('input[name="hazardType"]:checked');
      const hazardType = hazardElem?.value || 'flood';
      const peopleCount = parseInt(document.getElementById('helpPeopleCount')?.value || 1);
      const phone = document.getElementById('helpPhone')?.value.trim();
      const notes = document.getElementById('helpNotes')?.value.trim();

      const newId = `SOS-${Math.floor(1000 + Math.random() * 9000)}`;
      
      let dangerScore = 90;
      let titleHazard = 'Rising Flood Water';
      if (hazardType === 'roof') { dangerScore = 96; titleHazard = 'Trapped on Roof'; }
      if (hazardType === 'medical') { dangerScore = 94; titleHazard = 'Medical Emergency'; }
      if (hazardType === 'elderly') { dangerScore = 92; titleHazard = 'Seniors / Children Trapped'; }
      if (hazardType === 'road') { dangerScore = 80; titleHazard = 'Vehicle Submerged in Water'; }
      if (hazardType === 'power') { dangerScore = 84; titleHazard = 'Power Out / No Clean Water'; }

      const newIncident = {
        id: newId,
        title: `${location} · ${titleHazard}`,
        source: `CITIZEN PHONE (${phone})`,
        sourceType: 'sms',
        timestamp: Date.now(),
        status: 'NEW EMERGENCY',
        dispatched: false,
        dispatchedUnit: null,
        lat: 47.6050 + (Math.random() - 0.5) * 0.03,
        lon: -122.3350 + (Math.random() - 0.5) * 0.03,
        threatScore: dangerScore,
        popScore: Math.min(100, 60 + peopleCount * 5),
        timeScore: 92,
        confScore: 60,
        urgencyScore: calculateScore(dangerScore, Math.min(100, 60 + peopleCount * 5), 92, 60),
        threatReason: `Reported by citizen: ${titleHazard}. Urgent help requested at ${location}.`,
        popReason: `${peopleCount} people confirmed in immediate danger.`,
        timeReason: 'Water depth rising rapidly; immediate response required.',
        confReason: `Direct caller authentication via phone ${phone}.`,
        uncertainty: {
          flagged: true,
          badgeText: 'CALL CONFIRMED · AWAITING FIELD RESCUE TEAM',
          detail: 'Direct citizen SOS report.'
        },
        cluster: { hasDuplicate: false },
        aiRecommendation: 'Dispatch nearest available rescue craft or emergency team.',
        summary: `${peopleCount} people trapped at ${location}. Notes: ${notes || 'Immediate help requested.'}`
      };

      incidents.unshift(newIncident);

      auditLogs.unshift({
        timestamp: new Date().toTimeString().split(' ')[0],
        operator: 'CITIZEN SOS GATEWAY',
        action: 'EMERGENCY CALL',
        target: `#${newId} (${location})`,
        delta: `PRIORITY: ${newIncident.urgencyScore}/100`,
        note: `Caller reported ${peopleCount} people trapped. Reason: ${titleHazard}.`,
        hash: `SHA256:${Math.random().toString(16).slice(2, 8)}...`
      });

      callHelpModal?.close();
      helpForm.reset();

      renderIncidentFeed();
      selectIncident(newId);

      playTacticalTone('dispatch');
      showToast(`🚨 RESCUE CALL RECEIVED: ${location} (${peopleCount} PEOPLE) — RESCUE TEAMS NOTIFIED!`);
    });
  }

  // Audio Toggle in Header
  const audioBtn = document.getElementById('headerAudioBtn');
  const audioStatus = document.getElementById('headerAudioStatus');
  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      audioEnabled = !audioEnabled;
      if (audioEnabled) initAudio();
      if (audioStatus) audioStatus.textContent = audioEnabled ? 'ON' : 'OFF';
      playTacticalTone('click');
      showToast(audioEnabled ? 'EMERGENCY AUDIO SOUNDS: ON' : 'AUDIO MUTED');
    });
  }

  // Filter Tabs
  document.querySelectorAll('.triage-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.triage-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter') || 'all';
      playTacticalTone('click');
      renderIncidentFeed();
    });
  });

  // Layer chips
  document.querySelectorAll('.layer-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const layer = btn.getAttribute('data-layer');
      if (layer) {
        mapLayers[layer] = !mapLayers[layer];
        btn.classList.toggle('active', mapLayers[layer]);
        playTacticalTone('click');
      }
    });
  });

  // Modal Open Buttons
  document.getElementById('btnOpenScorecard')?.addEventListener('click', () => {
    document.getElementById('scorecardModal')?.showModal();
    playTacticalTone('click');
  });
  document.querySelectorAll('.btn-open-scorecard-action').forEach(b => {
    b.addEventListener('click', () => {
      document.getElementById('scorecardModal')?.showModal();
      playTacticalTone('click');
    });
  });

  document.getElementById('btnOpenAudit')?.addEventListener('click', () => {
    renderAuditTable();
    document.getElementById('auditModal')?.showModal();
    playTacticalTone('click');
  });
  document.querySelectorAll('.btn-open-audit-action').forEach(b => {
    b.addEventListener('click', () => {
      renderAuditTable();
      document.getElementById('auditModal')?.showModal();
      playTacticalTone('click');
    });
  });

  document.querySelectorAll('.btn-open-dedup-action').forEach(b => {
    b.addEventListener('click', () => {
      document.getElementById('dedupModal')?.showModal();
      playTacticalTone('click');
    });
  });

  // Close buttons
  document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('dialog')?.close();
    });
  });

  // Sliders input
  ['sliderThreat', 'sliderPop', 'sliderTime', 'sliderConf'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', updateScorecardMath);
  });

  // Commit Human Override
  document.getElementById('btnCommitOverride')?.addEventListener('click', () => {
    const note = document.getElementById('overrideNoteInput')?.value.trim();
    if (!note) {
      alert('Please enter a short explanation for approving this decision.');
      return;
    }
    const inc = incidents.find(i => i.id === activeIncidentId);
    if (inc) {
      inc.urgencyScore = parseInt(document.getElementById('scTotalScore')?.textContent || 88);
      inc.status = 'CHIEF-APPROVED';

      auditLogs.unshift({
        timestamp: new Date().toTimeString().split(' ')[0],
        operator: 'CAPT. MARCUS VANCE',
        action: 'CHIEF APPROVAL',
        target: `#${inc.id}`,
        delta: `PRIORITY SET TO ${inc.urgencyScore}`,
        note: note,
        hash: `SHA256:${Math.random().toString(16).slice(2, 8)}...`
      });

      document.getElementById('scorecardModal')?.close();
      renderIncidentFeed();
      selectIncident(inc.id);
      showToast(`RESCUE DECISION SIGNED OFF FOR #${inc.id}`);
      playTacticalTone('dispatch');
    }
  });

  // Deduplication Actions
  document.getElementById('btnMergeDuplicate')?.addEventListener('click', () => {
    const inc = incidents.find(i => i.id === activeIncidentId);
    if (inc && inc.cluster) {
      inc.cluster.hasDuplicate = false;
      inc.confScore = Math.min(100, inc.confScore + 18);
      inc.urgencyScore = calculateScore(inc.threatScore, inc.popScore, inc.timeScore, inc.confScore);
      document.getElementById('dedupModal')?.close();
      renderIncidentFeed();
      selectIncident(inc.id);
      showToast(`COMBINED CALLS INTO #${inc.id} · RESCUE TEAM HAS FULL LOCATION INFO`);
      playTacticalTone('dispatch');
    }
  });

  // Failsafe Slide to Confirm Dispatch
  const slider = document.getElementById('dispatchSlider');
  const slideFill = document.getElementById('slideFill');
  const slideText = document.getElementById('slideTrackText');
  const unitSelect = document.getElementById('dispatchUnitSelect');

  if (slider) {
    slider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      if (slideFill) slideFill.style.width = `${val}%`;
      if (slideText) {
        slideText.textContent = val > 80 ? 'RELEASE TO DEPLOY RESCUE ➔' : 'SLIDE RIGHT TO SEND RESCUE ➔';
      }
    });

    slider.addEventListener('change', (e) => {
      const val = parseInt(e.target.value);
      if (val >= 90) {
        const inc = incidents.find(i => i.id === activeIncidentId);
        const unit = unitSelect?.value || 'BOAT-R3';
        if (inc) {
          inc.dispatched = true;
          inc.dispatchedUnit = unit;
          inc.status = 'RESCUE EN ROUTE';

          auditLogs.unshift({
            timestamp: new Date().toTimeString().split(' ')[0],
            operator: 'CAPT. MARCUS VANCE',
            action: 'DISPATCHED RESCUE',
            target: `#${inc.id}`,
            delta: `DEPLOYED ${unit}`,
            note: 'Rescue team sent via confirmation slider.',
            hash: `SHA256:${Math.random().toString(16).slice(2, 8)}...`
          });

          renderIncidentFeed();
          selectIncident(inc.id);
          showToast(`✓ ${unit} HAS BEEN DISPATCHED TO HELP #${inc.id}!`);
          playTacticalTone('dispatch');
        }
      }
      slider.value = 0;
      if (slideFill) slideFill.style.width = '0%';
      if (slideText) slideText.textContent = 'SLIDE RIGHT TO SEND RESCUE ➔';
    });
  }
});
