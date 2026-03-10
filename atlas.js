/* ═══════════════════════════════════════════════════════════════
   ATLAS — Enhanced Runtime v2
   Scroll reveal · Progress bar · Back-to-top · Parallax
   Counter animations · Scroll-driven effects · Smooth interactions
   ═══════════════════════════════════════════════════════════════ */

// ── Scroll Reveal (IntersectionObserver) ──
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
  });
}, { threshold: 0.06, rootMargin: '0px 0px -80px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// ── Progress Bar ──
let progressT = false;
window.addEventListener('scroll', () => {
  if (!progressT) {
    requestAnimationFrame(() => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) document.getElementById('progress').style.width = (window.scrollY / h * 100) + '%';
      progressT = false;
    });
    progressT = true;
  }
});

// ── Back to Top ──
const topBtn = document.getElementById('top-btn');
if (topBtn) {
  let topT = false;
  window.addEventListener('scroll', () => {
    if (!topT) {
      requestAnimationFrame(() => { topBtn.classList.toggle('show', window.scrollY > 600); topT = false; });
      topT = true;
    }
  });
}

// ── Details Auto-scroll ──
document.querySelectorAll('details.deep').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) setTimeout(() => d.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
  });
});

// ── Counter Animation ──
function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
const animateCounters = () => {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    if (!target || el.dataset.animated) return;
    el.dataset.animated = '1';
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();
    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      el.textContent = prefix + Math.round(easeOutExpo(t) * target) + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
};

// Observe all stat rows for counter animation
document.querySelectorAll('.stat-row').forEach(row => {
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounters(); statObs.unobserve(e.target); }
    });
  }, { threshold: 0.3 });
  statObs.observe(row);
});

// ── Hero Parallax ──
const heroBg = document.querySelector('.hero-bg');
const heroOrbs = document.querySelectorAll('.hero-orb');
if (heroBg) {
  let heroT = false;
  window.addEventListener('scroll', () => {
    if (!heroT) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 1200) {
          heroBg.style.transform = `translateY(${y * 0.08}px)`;
          // Parallax orbs at different speeds
          heroOrbs.forEach((orb, i) => {
            const speed = 0.03 + (i * 0.02);
            orb.style.transform = `translateY(${y * speed}px)`;
          });
        }
        heroT = false;
      });
      heroT = true;
    }
  });
}

// ── Nav background opacity on scroll ──
const nav = document.querySelector('nav');
if (nav) {
  let navT = false;
  window.addEventListener('scroll', () => {
    if (!navT) {
      requestAnimationFrame(() => {
        const scrolled = window.scrollY > 20;
        nav.style.boxShadow = scrolled ? '0 1px 8px rgba(0,0,0,.06)' : 'none';
        navT = false;
      });
      navT = true;
    }
  });
}

// ── Engine Layer hover glow ──
document.querySelectorAll('.engine-layer').forEach((layer, i) => {
  layer.addEventListener('mouseenter', () => {
    layer.style.zIndex = '2';
  });
  layer.addEventListener('mouseleave', () => {
    layer.style.zIndex = '';
  });
});

// ── Smooth Anchor Scrolling ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ── Pipeline connector animation on reveal ──
const pipelineEl = document.querySelector('.pipeline');
if (pipelineEl) {
  const pipeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        pipelineEl.classList.add('pipeline-animate');
        pipeObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  pipeObs.observe(pipelineEl);
}
