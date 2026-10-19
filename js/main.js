/**
 * CINEMATIC PORTFOLIO ENGINE // MASTER CONTROLLER
 * Preloader, Fluid Canvas Mesh, Web Audio API, Magnetic Cursor, Terminal & Spotlight
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initFluidMeshCanvas();
  initLuxuryAudio();
  initMagneticCursor();
  initRealtimeClock();
  initTextScrambler();
  init3DSpecularTilt();
  initPhoneSimulator();
  initCodeTerminal();
  initBentoSchema();
  initSpotlightCommandPalette();
  initScrollReveals();
  initFormsAndCopy();
  initProjectModals();
  initMobileDrawer();
  initProjectFilterTabs();
  initScrollProgressAndBackToTop();
  initCvModal();
  initScrollSpy();
  initKeyboardShortcuts();
});

/* -------------------------------------------------------------------------
   1. PRELOADER CINEMATOGRÁFICO DE APERTURA (00% -> 100%)
   ------------------------------------------------------------------------- */
function initPreloader() {
  const curtain = document.getElementById('preloader-curtain');
  const counter = document.getElementById('preloader-count');
  const bar = document.getElementById('preloader-bar');

  if (!curtain || !counter || !bar) return;

  if (window.location.search.includes('nopreloader')) {
    curtain.style.display = 'none';
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4;
    if (progress > 100) progress = 100;

    counter.textContent = String(progress).padStart(2, '0') + '%';
    bar.style.width = progress + '%';

    if (progress === 100) {
      clearInterval(interval);
      setTimeout(() => {
        curtain.classList.add('loaded');
        if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
      }, 350);
    }
  }, 28);
}

/* -------------------------------------------------------------------------
   2. FLUID PARTICLE MESH CANVAS (COSMIC MONOCHROME FILAMENTS)
   ------------------------------------------------------------------------- */
function initFluidMeshCanvas() {
  const canvas = document.createElement('canvas');
  canvas.id = 'fluid-particles-canvas';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 60;
  const CONNECT_DIST = 145;

  const mouse = { x: null, y: null, radius: 170 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.5 + 0.8;
      this.baseAlpha = Math.random() * 0.35 + 0.15;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.3;
          this.x -= (dx / dist) * force;
          this.y -= (dy / dist) * force;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.baseAlpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  let isPageVisible = true;
  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
  });

  function render() {
    if (!isPageVisible) {
      requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECT_DIST) {
          const alpha = (1 - dist / CONNECT_DIST) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* -------------------------------------------------------------------------
   3. WEB AUDIO API SYNTHESIZER (ZERO AUDIO FILES REQUIRED)
   ------------------------------------------------------------------------- */
class LuxuryAudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.hasInitialized = false;
  }

  init() {
    if (this.hasInitialized) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.hasInitialized = true;
    } catch (e) {}
  }

  toggle() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isMuted = !this.isMuted;
    if (!this.isMuted) this.playSuccessChime();
    return !this.isMuted;
  }

  playHoverTick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1300, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, this.ctx.currentTime + 0.025);
      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.025);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.025);
    } catch (e) {}
  }

  playClickSnap() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(90, this.ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.055, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playSuccessChime() {
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + (idx * 0.04));
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime + (idx * 0.04));
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + (idx * 0.04) + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + (idx * 0.04));
        osc.stop(this.ctx.currentTime + (idx * 0.04) + 0.35);
      });
    } catch (e) {}
  }

  playModalOpen() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(240, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(700, this.ctx.currentTime + 0.09);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.09);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {}
  }
}

function initLuxuryAudio() {
  window.luxuryAudio = new LuxuryAudioSynthesizer();
  const btn = document.getElementById('sound-toggle-hud');
  const label = document.getElementById('sound-label-hud');
  const icon = document.getElementById('sound-icon-hud');

  if (!btn) return;

  btn.addEventListener('click', () => {
    const isNowOn = window.luxuryAudio.toggle();
    if (isNowOn) {
      btn.classList.add('active-sound');
      if (label) label.textContent = 'SOM: ATIVO';
      if (icon) icon.textContent = '🔊';
      showToastFeedback('🔊 Áudio tátil ativado.');
    } else {
      btn.classList.remove('active-sound');
      if (label) label.textContent = 'SOM: MUTED';
      if (icon) icon.textContent = '🔇';
      showToastFeedback('🔇 Áudio desativado.');
    }
  });
}

/* -------------------------------------------------------------------------
   4. MAGNETIC FLUID CURSOR (DUAL LAYER)
   ------------------------------------------------------------------------- */
function initMagneticCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.createElement('div');
  dot.className = 'luxury-cursor-dot';

  const ring = document.createElement('div');
  ring.className = 'luxury-cursor-ring';

  document.body.appendChild(dot);
  document.body.appendChild(ring);

  let mouseX = -100, mouseY = -100;
  let ringX = -100, ringY = -100;
  let isHovered = false;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function animate() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(animate);
  }
  animate();

  function attachListeners() {
    const targets = document.querySelectorAll('a, button, .bento-card-unit, .cinematic-project-card, .phone-tab-btn, .term-file-tab, input, textarea');
    targets.forEach((target) => {
      target.addEventListener('mouseenter', () => {
        isHovered = true;
        ring.classList.add('cursor-active');
        if (window.luxuryAudio) window.luxuryAudio.playHoverTick();
      });
      target.addEventListener('mouseleave', () => {
        isHovered = false;
        ring.classList.remove('cursor-active');
      });
      target.addEventListener('mousedown', () => {
        ring.classList.add('cursor-click');
        if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
      });
      target.addEventListener('mouseup', () => {
        ring.classList.remove('cursor-click');
      });
    });
  }

  attachListeners();
  window.refreshCursor = attachListeners;
}

/* -------------------------------------------------------------------------
   5. RELÓGIO DIGITAL EM DIRETO (LISBOA, PT)
   ------------------------------------------------------------------------- */
function initRealtimeClock() {
  const clockEl = document.getElementById('hud-live-clock');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    clockEl.textContent = `${h}:${m}:${s} PT`;
  }
  update();
  setInterval(update, 1000);
}

/* -------------------------------------------------------------------------
   6. TEXT SCRAMBLE / DECRYPT MATRIX EFFECT
   ------------------------------------------------------------------------- */
function initTextScrambler() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/-+<>';
  const targets = document.querySelectorAll('[data-scramble]');

  targets.forEach((el) => {
    const original = el.textContent;
    let isBusy = false;

    function runScramble() {
      if (isBusy) return;
      isBusy = true;
      let iter = 0;

      // Lock bounding height during animation to completely prevent layout shifts (CLS)
      const currentHeight = el.getBoundingClientRect().height;
      if (currentHeight > 0) {
        el.style.minHeight = `${currentHeight}px`;
        el.style.maxHeight = `${currentHeight}px`;
        el.style.overflow = 'hidden';
      }

      const timer = setInterval(() => {
        el.textContent = original
          .split('')
          .map((c, i) => {
            if (i < iter) return original[i];
            if (c === ' ') return ' ';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        if (iter >= original.length) {
          clearInterval(timer);
          el.textContent = original;
          el.style.minHeight = '';
          el.style.maxHeight = '';
          el.style.overflow = '';
          isBusy = false;
        }
        iter += 1 / 2;
      }, 30);
    }

    el.addEventListener('mouseenter', () => {
      runScramble();
      if (window.luxuryAudio) window.luxuryAudio.playHoverTick();
    });

    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runScramble();
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
  });
}

/* -------------------------------------------------------------------------
   7. 3D GYROSCOPIC TILT WITH SPECULAR GLOW
   ------------------------------------------------------------------------- */
function init3DSpecularTilt() {
  const cards = document.querySelectorAll('.tilt-card, .bento-card-unit, .cinematic-project-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rx = ((y - centerY) / centerY) * -6;
      const ry = ((x - centerX) / centerX) * 6;

      card.style.setProperty('--tilt-rx', `${rx.toFixed(2)}deg`);
      card.style.setProperty('--tilt-ry', `${ry.toFixed(2)}deg`);
      card.style.setProperty('--shine-x', `${((x / rect.width) * 100).toFixed(1)}%`);
      card.style.setProperty('--shine-y', `${((y / rect.height) * 100).toFixed(1)}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-rx', '0deg');
      card.style.setProperty('--tilt-ry', '0deg');
    });
  });
}

/* -------------------------------------------------------------------------
   8. SIMULADOR DE APP ANDROID 2.0 (CHASSI TITÂNIO, ROOM DB & BENCHMARK)
   ------------------------------------------------------------------------- */
function initPhoneSimulator() {
  const tabs = document.querySelectorAll('.phone-tab-btn');
  const views = document.querySelectorAll('.screen-view-panel');
  const clockEl = document.getElementById('phone-status-clock');
  const tasksList = document.getElementById('phone-tasks-list');
  const tasksCounter = document.getElementById('tasks-active-label');
  const addForm = document.getElementById('phone-add-task-form');
  const addInput = document.getElementById('phone-new-task-input');
  const benchBtn = document.getElementById('btn-run-benchmark');
  const benchFill = document.getElementById('bench-progress-fill');
  const benchStatus = document.getElementById('bench-status-label');
  const latencyVal = document.getElementById('stat-latency-val');
  const mvvmCards = document.querySelectorAll('.mvvm-layer-card');

  // Relógio do Sistema Android
  function updatePhoneClock() {
    if (!clockEl) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    clockEl.textContent = `${h}:${m}`;
  }
  updatePhoneClock();
  setInterval(updatePhoneClock, 10000);

  // Alternador de Abas do Ecrã
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-screen');
      views.forEach((v) => {
        if (v.getAttribute('data-view') === target) {
          v.classList.add('active');
        } else {
          v.classList.remove('active');
        }
      });

      if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
    });
  });

  // Atualizador de Contagem de Tarefas
  function updateTaskCounter() {
    if (!tasksList || !tasksCounter) return;
    const total = tasksList.querySelectorAll('.phone-task-row').length;
    const done = tasksList.querySelectorAll('.phone-task-row.done').length;
    tasksCounter.textContent = `Room DB: ${done} de ${total} concluídas`;
  }

  // Interação nas Linhas de Tarefa (Checkbox Toggle)
  function attachTaskRowListeners(row) {
    row.addEventListener('click', () => {
      const isDone = row.classList.toggle('done');
      const box = row.querySelector('.task-checkbox-state');
      if (box) box.textContent = isDone ? '✓' : '';
      updateTaskCounter();
      if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
    });
  }

  if (tasksList) {
    tasksList.querySelectorAll('.phone-task-row').forEach(attachTaskRowListeners);
    updateTaskCounter();
  }

  // Formulário Rápido para Criar Tarefas no SQLite
  if (addForm && addInput && tasksList) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = addInput.value.trim();
      if (!text) return;

      const newRow = document.createElement('div');
      newRow.className = 'phone-task-row';
      newRow.innerHTML = `
        <div class="task-info-block">
          <div class="task-title-text">${text}</div>
          <div class="task-sub-meta">Novo Registo // SQLite</div>
        </div>
        <div class="task-checkbox-state"></div>
      `;
      tasksList.appendChild(newRow);
      attachTaskRowListeners(newRow);

      addInput.value = '';
      updateTaskCounter();
      if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
      showToastFeedback(`📱 Registo gravado na base de dados SQLite: "${text}"`);
    });
  }

  // Benchmark Room Database (1000 INSERTs)
  if (benchBtn && benchFill && benchStatus) {
    let isBenchRunning = false;
    benchBtn.addEventListener('click', () => {
      if (isBenchRunning) return;
      isBenchRunning = true;
      benchBtn.disabled = true;
      benchStatus.textContent = 'A processar...';
      benchFill.style.width = '0%';

      let p = 0;
      const bInt = setInterval(() => {
        p += 20;
        benchFill.style.width = p + '%';
        if (p >= 100) {
          clearInterval(bInt);
          setTimeout(() => {
            benchStatus.textContent = '✓ 1000 INSERTs em 3.1ms';
            benchStatus.style.color = '#ffffff';
            if (latencyVal) latencyVal.textContent = '1.1 ms';
            if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
            showToastFeedback('⚡ Benchmark SQLite concluído: 1000 transações validadas.');
            isBenchRunning = false;
            benchBtn.disabled = false;
          }, 200);
        }
      }, 50);
    });
  }

  // Interação com Camadas de Arquitetura MVVM
  mvvmCards.forEach((c) => {
    c.addEventListener('click', () => {
      mvvmCards.forEach(card => card.classList.remove('active'));
      c.classList.add('active');
      if (window.luxuryAudio) window.luxuryAudio.playHoverTick();
    });
  });
}

/* -------------------------------------------------------------------------
   9. TERMINAL & COMPILADOR 2.0 (LINE NUMBERS & MONOCHROME SYNTAX)
   ------------------------------------------------------------------------- */
const TERMINAL_SNIPPETS = {
  sql: {
    filename: 'queries_gestao.sql',
    lang: 'sql',
    code: `-- Sistema Relacional Empresarial: Cálculo Analítico
SELECT 
    p.id_produto,
    p.nome AS produto,
    c.categoria,
    SUM(v.quantidade) AS total_vendido,
    ROUND(SUM(v.quantidade * p.preco), 2) AS receita_total
FROM produtos p
INNER JOIN categorias c ON p.id_categoria = c.id
LEFT JOIN vendas v ON p.id_produto = v.id_produto
WHERE v.data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)
GROUP BY p.id_produto
ORDER BY receita_total DESC
LIMIT 5;`,
    output: `[SQL Engine v8.0.35] Running query on database 'gestao_db'...
✓ Execution latency: 8.42ms | Rows returned: 5
-----------------------------------------------------------
ID  | PRODUTO               | CATEGORIA | QTD | TOTAL (€)
01  | Smartphone Pro 5G     | Disposit  | 142 | 85,200.00
02  | Monitor UltraView 4K  | Periféric |  89 | 44,500.00
03  | Teclado Mecânico Pro  | Acessórios| 210 | 25,200.00
-----------------------------------------------------------
Status: QUERY EXECUTED SUCCESSFULLY [OK]`
  },
  kotlin: {
    filename: 'MainActivity.kt',
    lang: 'kotlin',
    code: `package com.ctesp.easytask

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.ctesp.easytask.data.TaskDatabase
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {
    private val database by lazy { TaskDatabase.getDatabase(this) }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        lifecycleScope.launch {
            database.taskDao().getAllTasks().collect { tasks ->
                updateTaskInterface(tasks)
            }
        }
    }
}`,
    output: `[Android Gradle Plugin 8.3.0]
> Task :app:compileDebugKotlin UP-TO-DATE
> Task :app:processDebugResources
> Task :app:validateSigningDebug
> Task :app:assembleDebug
BUILD SUCCESSFUL in 1.48s (4 actionable tasks: 1 executed)`
  },
  js: {
    filename: 'app_reactive.js',
    lang: 'js',
    code: `// Async Data Store with Offline Fallback
class ReactiveStore {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.state = { items: [], loaded: false };
  }

  async sync() {
    try {
      const res = await fetch(this.endpoint);
      this.state.items = await res.json();
      this.state.loaded = true;
      console.log(\`[Sync] \${this.state.items.length} records hydrated.\`);
    } catch (e) {
      console.warn('[Offline] Falling back to local cache');
    }
  }
}`,
    output: `[Node.js Runtime v24.20.0]
✓ Modules transpiled cleanly
✓ Fetching endpoint: https://api.portfolio.dev/v1/sync
[Sync] 18 records hydrated successfully into client memory.
Latency: 28ms | Memory heap: 14.2 MB`
  }
};

function highlightMonochromeSyntax(rawCode, lang) {
  let escaped = rawCode.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  if (lang === 'sql') {
    escaped = escaped.replace(/(--.*$)/gm, '<span class="tok-com">$1</span>');
    escaped = escaped.replace(/('(?:\\'|[^'\r\n])*')/g, '<span class="tok-str">$1</span>');
    const kws = ['SELECT', 'FROM', 'INNER JOIN', 'LEFT JOIN', 'WHERE', 'GROUP BY', 'ORDER BY', 'LIMIT', 'AS', 'ON', 'AND', 'SUM', 'ROUND', 'DESC', 'DATE_SUB', 'NOW', 'INTERVAL', 'DAY'];
    kws.forEach(k => {
      const reg = new RegExp(`\\b(${k})\\b`, 'g');
      escaped = escaped.replace(reg, '<span class="tok-kw">$1</span>');
    });
  } else if (lang === 'kotlin') {
    escaped = escaped.replace(/(\/\/.*$)/gm, '<span class="tok-com">$1</span>');
    escaped = escaped.replace(/("(?:\\"|[^"\r\n])*")/g, '<span class="tok-str">$1</span>');
    const kws = ['package', 'import', 'class', 'override', 'fun', 'val', 'var', 'by', 'lazy', 'private'];
    kws.forEach(k => {
      const reg = new RegExp(`\\b(${k})\\b`, 'g');
      escaped = escaped.replace(reg, '<span class="tok-kw">$1</span>');
    });
  } else if (lang === 'js') {
    escaped = escaped.replace(/(\/\/.*$)/gm, '<span class="tok-com">$1</span>');
    escaped = escaped.replace(/(`(?:\\`|[^`])*`|"(?:\\"|[^"\r\n])*"|'(?:\\'|[^'\r\n])*')/g, '<span class="tok-str">$1</span>');
    const kws = ['class', 'constructor', 'async', 'await', 'try', 'catch', 'this', 'const', 'let', 'return'];
    kws.forEach(k => {
      const reg = new RegExp(`\\b(${k})\\b`, 'g');
      escaped = escaped.replace(reg, '<span class="tok-kw">$1</span>');
    });
  }
  return escaped;
}

function initCodeTerminal() {
  const codeBox = document.getElementById('terminal-code-body');
  const gutterBox = document.getElementById('terminal-gutter');
  const outBox = document.getElementById('terminal-output-body');
  const tabs = document.querySelectorAll('.term-file-tab');
  const runBtn = document.getElementById('terminal-run-action');
  const copyBtn = document.getElementById('terminal-copy-action');

  if (!codeBox) return;

  let currentKey = 'sql';

  function display(key) {
    currentKey = key;
    const snippet = TERMINAL_SNIPPETS[key];
    const lines = snippet.code.split('\n');

    if (gutterBox) {
      let g = '';
      for (let i = 1; i <= lines.length; i++) {
        g += String(i).padStart(2, '0') + '\n';
      }
      gutterBox.textContent = g;
    }

    codeBox.innerHTML = highlightMonochromeSyntax(snippet.code, snippet.lang);
    if (outBox) {
      outBox.innerHTML = `<span style="color:#71717a;">Clica em '⚡ EXECUTAR CÓDIGO' para compilar ou executar o script...</span>`;
    }
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-tab');
      display(key);
      if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
    });
  });

  if (runBtn) {
    runBtn.addEventListener('click', () => {
      if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
      outBox.innerHTML = `<span style="color:#ffffff; font-weight:700;">A processar motor de dados & compilador...</span>`;

      setTimeout(() => {
        outBox.innerHTML = `<pre style="margin:0; color:#a1a1aa; line-height:1.5; white-space:pre-wrap;">${TERMINAL_SNIPPETS[currentKey].output}</pre>`;
        if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
      }, 350);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = TERMINAL_SNIPPETS[currentKey].code;
      navigator.clipboard.writeText(code).then(() => {
        showToastFeedback(`📋 Código de ${TERMINAL_SNIPPETS[currentKey].filename} copiado!`);
        if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
      });
    });
  }

  display('sql');
}

/* -------------------------------------------------------------------------
   10. INTERACTIVE BENTO RELATIONAL SCHEMA (CARD 4)
   ------------------------------------------------------------------------- */
const SCHEMA_DATA = {
  produtos: {
    header: 'TABELA: produtos (Relacional)',
    pk: 'PK: id_produto',
    rows: [
      { name: 'id_produto', type: 'INT AUTO_INCREMENT (PK)' },
      { name: 'id_categoria', type: 'INT NOT NULL (FK)' },
      { name: 'nome', type: 'VARCHAR(120)' },
      { name: 'preco', type: 'DECIMAL(10,2)' },
      { name: 'stock_atual', type: 'INT DEFAULT 0' }
    ]
  },
  categorias: {
    header: 'TABELA: categorias (Normalização 3FN)',
    pk: 'PK: id',
    rows: [
      { name: 'id', type: 'INT AUTO_INCREMENT (PK)' },
      { name: 'categoria', type: 'VARCHAR(60) UNIQUE' },
      { name: 'descricao', type: 'TEXT NULL' },
      { name: 'ativo', type: 'TINYINT(1) DEFAULT 1' }
    ]
  },
  vendas: {
    header: 'TABELA: vendas (Transações)',
    pk: 'PK: id_venda',
    rows: [
      { name: 'id_venda', type: 'INT AUTO_INCREMENT (PK)' },
      { name: 'id_produto', type: 'INT NOT NULL (FK)' },
      { name: 'quantidade', type: 'INT NOT NULL' },
      { name: 'data_venda', type: 'DATETIME DEFAULT NOW()' },
      { name: 'total_item', type: 'DECIMAL(10,2)' }
    ]
  }
};

function initBentoSchema() {
  const tabs = document.querySelectorAll('.schema-tab-btn');
  const display = document.getElementById('schema-table-display');
  const jumpBtn = document.getElementById('btn-jump-to-query');

  if (!display) return;

  function render(tableKey) {
    const data = SCHEMA_DATA[tableKey];
    if (!data) return;

    display.innerHTML = `
      <div class="schema-table-header">
        <span class="table-name-tag">${data.header}</span>
        <span class="table-pk-tag">${data.pk}</span>
      </div>
      ${data.rows.map(r => `
        <div class="schema-row-item">
          <span class="field-name">${r.name}</span>
          <span class="field-type">${r.type}</span>
        </div>
      `).join('')}
    `;
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const table = tab.getAttribute('data-schema');
      render(table);
      if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
    });
  });

  if (jumpBtn) {
    jumpBtn.addEventListener('click', () => {
      const term = document.getElementById('terminal');
      if (term) term.scrollIntoView({ behavior: 'smooth' });

      const sqlTab = document.querySelector('.term-file-tab[data-tab="sql"]');
      if (sqlTab) sqlTab.click();

      setTimeout(() => {
        const runBtn = document.getElementById('terminal-run-action');
        if (runBtn) runBtn.click();
      }, 450);
    });
  }
}

/* -------------------------------------------------------------------------
   11. SPOTLIGHT COMMAND PALETTE (CTRL+K / CMD+K)
   ------------------------------------------------------------------------- */
function initSpotlightCommandPalette() {
  const COMMANDS = [
    { title: 'Início', desc: 'Voltar ao topo da página', action: () => scrollToId('inicio'), cat: 'Navegação' },
    { title: 'Bento Grid & Arquitetura', desc: 'Explorar tecnologias e simulador', action: () => scrollToId('bento'), cat: 'Navegação' },
    { title: 'Simulador Android Studio', desc: 'Testar aplicação nativa com SQLite', action: () => scrollToId('bento'), cat: 'Ferramentas' },
    { title: 'Terminal de Código', desc: 'Executar queries SQL e compilar Kotlin', action: () => scrollToId('terminal'), cat: 'Ferramentas' },
    { title: 'Projetos em Destaque', desc: 'Ver catálogo prático Web & Mobile', action: () => scrollToId('projetos'), cat: 'Navegação' },
    { title: 'EasyTask (Android Native)', desc: 'Abrir detalhes da app Android', action: () => openProjectByTitle('EasyTask'), cat: 'Projetos' },
    { title: 'ShopFlow (Web Platform)', desc: 'Abrir catálogo web responsivo', action: () => openProjectByTitle('ShopFlow'), cat: 'Projetos' },
    { title: 'GestãoPlus (SQL & Stock)', desc: 'Abrir sistema de dados relacional', action: () => openProjectByTitle('GestãoPlus'), cat: 'Projetos' },
    { title: 'SoundWave (Android Player)', desc: 'Abrir leitor de áudio em background', action: () => openProjectByTitle('SoundWave'), cat: 'Projetos' },
    { title: 'Ver Currículo Técnico (CV)', desc: 'Visualizar currículo profissional e projetos', action: () => openCvAction(), cat: 'Currículo' },
    { title: 'Imprimir / Guardar CV (PDF)', desc: 'Exportar currículo formatado para folha A4', action: () => printCvAction(), cat: 'Currículo' },
    { title: 'Percurso CTeSP', desc: 'Formação académica e competências', action: () => scrollToId('sobre'), cat: 'Navegação' },
    { title: 'Contacto & Mensagem', desc: 'Enviar proposta ou falar diretamente', action: () => scrollToId('contacto'), cat: 'Navegação' },
    { title: 'Copiar Endereço de Email', desc: 'Copiar email para a área de transferência', action: () => triggerCopyEmail(), cat: 'Ações Rápidas' },
    { title: 'Alternar Som Tátil (M)', desc: 'Ligar ou desligar áudio sintetizado', action: () => toggleSoundAction(), cat: 'Configuração' },
  ];

  let modal, input, list, selectedIdx = 0, currentList = [...COMMANDS];

  function buildPalette() {
    modal = document.getElementById('command-palette-backdrop');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'command-palette-backdrop';
      modal.id = 'command-palette-backdrop';

      modal.innerHTML = `
        <div class="command-palette-card">
          <div class="command-input-wrapper">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="command-search-icon">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" class="command-search-input" id="cmd-input-field" placeholder="O que procuras? (ex: 'sql', 'mobile', 'cv', 'contacto')..." autocomplete="off">
            <span class="command-shortcut-hint">ESC</span>
          </div>
          <div class="command-results-list" id="cmd-results-list"></div>
          <div class="command-palette-footer">
            <span>Usa <kbd>↑</kbd> <kbd>↓</kbd> para navegar</span>
            <span><kbd>ENTER</kbd> para selecionar</span>
            <span><kbd>ESC</kbd> para fechar</span>
          </div>
        </div>
      `;

      document.body.appendChild(modal);
    }

    input = modal.querySelector('#cmd-input-field');
    list = modal.querySelector('#cmd-results-list');

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePalette();
    });

    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      currentList = COMMANDS.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.desc.toLowerCase().includes(q) || 
        c.cat.toLowerCase().includes(q)
      );
      selectedIdx = 0;
      render();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIdx = (selectedIdx + 1) % currentList.length;
        render();
        if (window.luxuryAudio) window.luxuryAudio.playHoverTick();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIdx = (selectedIdx - 1 + currentList.length) % currentList.length;
        render();
        if (window.luxuryAudio) window.luxuryAudio.playHoverTick();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        execSelected();
      } else if (e.key === 'Escape') {
        closePalette();
      }
    });
  }

  function render() {
    if (!list) return;
    if (currentList.length === 0) {
      list.innerHTML = `<div style="padding:16px; color:#71717a; text-align:center;">Nenhum comando encontrado.</div>`;
      return;
    }

    list.innerHTML = currentList.map((cmd, i) => `
      <div class="command-item-row ${i === selectedIdx ? 'selected' : ''}" data-index="${i}">
        <div>
          <div class="command-item-title">${cmd.title}</div>
          <div class="command-item-desc">${cmd.desc}</div>
        </div>
        <span class="command-item-badge">${cmd.cat}</span>
      </div>
    `).join('');

    list.querySelectorAll('.command-item-row').forEach((row) => {
      row.addEventListener('click', () => {
        selectedIdx = parseInt(row.getAttribute('data-index'), 10);
        execSelected();
      });
      row.addEventListener('mouseenter', () => {
        selectedIdx = parseInt(row.getAttribute('data-index'), 10);
        render();
      });
    });
  }

  function execSelected() {
    if (currentList[selectedIdx]) {
      closePalette();
      currentList[selectedIdx].action();
      if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
    }
  }

  function openPalette() {
    if (!modal) buildPalette();
    modal.classList.add('open');
    input.value = '';
    currentList = [...COMMANDS];
    selectedIdx = 0;
    render();
    setTimeout(() => input.focus(), 60);
    document.body.style.overflow = 'hidden';
    if (window.luxuryAudio) window.luxuryAudio.playModalOpen();
  }

  function closePalette() {
    if (!modal) return;
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  function triggerCopyEmail() {
    const b = document.querySelector('.btn-copy-email');
    if (b) b.click();
  }

  function toggleSoundAction() {
    const b = document.getElementById('sound-toggle-hud');
    if (b) b.click();
  }

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (modal && modal.classList.contains('open')) {
        closePalette();
      } else {
        openPalette();
      }
    }
  });

  const triggerBtn = document.getElementById('hud-cmd-trigger');
  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);
}

/* -------------------------------------------------------------------------
   11. SCROLL REVEALS & INTERSECTION OBSERVER
   ------------------------------------------------------------------------- */
function initScrollReveals() {
  const elements = document.querySelectorAll('.lux-reveal');
  const obs = new IntersectionObserver((entries, o) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        o.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => obs.observe(el));
}

/* -------------------------------------------------------------------------
   12. FORMULÁRIO DE CONTACTO & BOTÃO COPIAR EMAIL
   ------------------------------------------------------------------------- */
function initFormsAndCopy() {
  const copyButtons = document.querySelectorAll('.btn-copy-email');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || 'oteuemail@exemplo.com';
      navigator.clipboard.writeText(email).then(() => {
        showToastFeedback(`📋 Email copiado com sucesso: ${email}`);
        if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
      }).catch(() => {
        showToastFeedback(`📋 Email copiado: ${email}`);
      });
    });
  });

  const form = document.getElementById('direct-contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.innerHTML;

      btn.innerHTML = '<span>A processar envio...</span>';
      btn.disabled = true;

      setTimeout(() => {
        btn.innerHTML = '<span>✓ Mensagem Enviada com Sucesso</span>';
        showToastFeedback('🚀 A tua mensagem foi registada. Obrigado!');
        if (window.luxuryAudio) window.luxuryAudio.playSuccessChime();
        form.reset();

        setTimeout(() => {
          btn.innerHTML = orig;
          btn.disabled = false;
        }, 3000);
      }, 900);
    });
  }
}

function showToastFeedback(msg) {
  let toast = document.getElementById('luxury-toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'luxury-toast-msg';
    toast.className = 'luxury-toast-capsule';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

/* -------------------------------------------------------------------------
   13. MODAL CINEMATOGRÁFICO DE PROJETO 2.0 (FULL BLEED SHOWCASE)
   ------------------------------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('cinematic-project-modal');
  const closeBtn = document.getElementById('modal-close-action');
  const triggers = document.querySelectorAll('.open-cinematic-modal');
  const imgTarget = document.getElementById('modal-img-target');
  const featuresTarget = document.getElementById('modal-features-target');
  const repoLink = document.getElementById('modal-repo-link');
  const contextBtn = document.getElementById('modal-context-action');
  const contextBtnText = document.getElementById('modal-context-action-text');

  if (!modal) return;

  triggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = btn.getAttribute('data-title') || 'Projeto';
      const badge = btn.getAttribute('data-badge') || 'Showcase';
      const desc = btn.getAttribute('data-desc') || '';
      const tech = (btn.getAttribute('data-tech') || '').split(',');
      const image = btn.getAttribute('data-image') || 'assets/images/project-mobile.jpg';
      const features = (btn.getAttribute('data-features') || '').split(';').filter(f => f.trim().length > 0);
      const github = btn.getAttribute('data-github') || 'https://github.com';
      const demo = btn.getAttribute('data-demo') || '';

      document.getElementById('modal-title-target').textContent = title;
      document.getElementById('modal-badge-target').textContent = badge;
      document.getElementById('modal-desc-target').textContent = desc;

      if (imgTarget) {
        imgTarget.src = image;
        imgTarget.alt = title;
      }

      if (featuresTarget) {
        featuresTarget.innerHTML = features.map(f => `<li>${f.trim()}</li>`).join('');
      }

      if (repoLink) {
        repoLink.href = github;
      }

      if (contextBtn) {
        if (demo === 'simulator') {
          contextBtn.style.display = 'inline-flex';
          if (contextBtnText) contextBtnText.textContent = 'Testar no Simulador 📱';
          contextBtn.onclick = () => {
            close();
            const bento = document.getElementById('bento');
            if (bento) bento.scrollIntoView({ behavior: 'smooth' });
          };
        } else if (demo === 'terminal') {
          contextBtn.style.display = 'inline-flex';
          if (contextBtnText) contextBtnText.textContent = 'Executar no Terminal ⚡';
          contextBtn.onclick = () => {
            close();
            const term = document.getElementById('terminal');
            if (term) term.scrollIntoView({ behavior: 'smooth' });
            const run = document.getElementById('terminal-run-action');
            if (run) setTimeout(() => run.click(), 400);
          };
        } else {
          contextBtn.style.display = 'none';
        }
      }

      const tagsBox = document.getElementById('modal-tags-target');
      tagsBox.innerHTML = '';
      tech.forEach(t => {
        if (!t.trim()) return;
        const span = document.createElement('span');
        span.className = 'tech-pill-tag';
        span.textContent = t.trim();
        tagsBox.appendChild(span);
      });

      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.luxuryAudio) window.luxuryAudio.playModalOpen();
    });
  });

  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
}

function openProjectByTitle(titlePart) {
  const btns = document.querySelectorAll('.open-cinematic-modal');
  for (const b of btns) {
    const t = b.getAttribute('data-title') || '';
    if (t.toLowerCase().includes(titlePart.toLowerCase())) {
      b.click();
      return;
    }
  }
}

function openCvAction() {
  const cvBtn = document.querySelector('.btn-open-cv-modal');
  if (cvBtn) cvBtn.click();
}

function printCvAction() {
  openCvAction();
  setTimeout(() => {
    window.print();
  }, 400);
}

/* -------------------------------------------------------------------------
   14. MOBILE NAVIGATION DRAWER & TOGGLE
   ------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (!toggleBtn || !drawer) return;

  function toggle() {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      toggleBtn.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.luxuryAudio) window.luxuryAudio.playModalOpen();
    }
  }

  toggleBtn.addEventListener('click', toggle);

  drawer.querySelectorAll('.drawer-link-item').forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.classList.remove('open');
      document.body.style.overflow = '';
      if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
    });
  });
}

/* -------------------------------------------------------------------------
   15. PROJECT FILTER TABS (ANIMATED CATEGORIES)
   ------------------------------------------------------------------------- */
function initProjectFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-pill-btn');
  const projectCards = document.querySelectorAll('.cinematic-project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter || (cat && cat.includes(filter))) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 240);
        }
      });

      if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
    });
  });
}

/* -------------------------------------------------------------------------
   16. SCROLL PROGRESS RING & BACK TO TOP BUTTON
   ------------------------------------------------------------------------- */
function initScrollProgressAndBackToTop() {
  const btn = document.getElementById('scroll-progress-btn');
  const circle = document.getElementById('progress-ring-circle');
  if (!btn || !circle) return;

  const totalLength = 140; // 2 * PI * r (approx 2 * 3.14159 * 22)

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = Math.min(Math.max(scrollTop / (scrollHeight || 1), 0), 1);

    const offset = totalLength - (progress * totalLength);
    circle.style.strokeDashoffset = offset;

    if (scrollTop > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.luxuryAudio) window.luxuryAudio.playClickSnap();
  });
}

/* -------------------------------------------------------------------------
   17. CV PREVIEW MODAL & ACTIONS
   ------------------------------------------------------------------------- */
function initCvModal() {
  const modal = document.getElementById('cv-preview-modal');
  const openBtns = document.querySelectorAll('.btn-open-cv-modal');
  const closeBtn = document.getElementById('cv-modal-close-btn');
  const printBtn = document.getElementById('cv-print-btn');

  if (!modal) return;

  openBtns.forEach((b) => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (window.luxuryAudio) window.luxuryAudio.playModalOpen();
    });
  });

  function close() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) close();
  });
}

/* -------------------------------------------------------------------------
   18. SCROLLSPY (DESTAQUE DINÂMICO NA BARRA DE NAVEGAÇÃO)
   ------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu-item');
  const drawerLinks = document.querySelectorAll('.drawer-link-item');

  function update() {
    const scrollY = window.pageYOffset + 180;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-section');
          } else {
            link.classList.remove('active-section');
          }
        });
        drawerLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.style.color = '#ffffff';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* -------------------------------------------------------------------------
   19. ATALHOS GLOBAIS DE TECLADO (POWER USER SHORTCUTS)
   ------------------------------------------------------------------------- */
function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea') return;

    if (e.key === 'm' || e.key === 'M') {
      const soundBtn = document.getElementById('sound-toggle-hud');
      if (soundBtn) soundBtn.click();
    } else if (e.key === 'c' || e.key === 'C') {
      openCvAction();
    } else if (e.key === 'p' || e.key === 'P') {
      const sec = document.getElementById('projetos');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 't' || e.key === 'T') {
      const sec = document.getElementById('terminal');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
    }
  });
}
