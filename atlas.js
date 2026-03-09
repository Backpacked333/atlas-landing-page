/* ═══════════════════════════════════════════════════════════════
   ATLAS — Shared Runtime
   Scroll reveal · Progress bar · Back-to-top · Details auto-scroll
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
let topT = false;
window.addEventListener('scroll', () => {
  if (!topT) {
    requestAnimationFrame(() => { topBtn.classList.toggle('show', window.scrollY > 600); topT = false; });
    topT = true;
  }
});

// ── Details Auto-scroll ──
document.querySelectorAll('details.deep').forEach(d => {
  d.addEventListener('toggle', () => {
    if (d.open) setTimeout(() => d.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 120);
  });
});

// ── Counter Animation (homepage) ──
function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
const animateCounters = () => {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    if (!target) return;
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
const statRow = document.querySelector('.stat-row');
if (statRow) {
  const statObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCounters(); statObs.unobserve(e.target); } });
  }, { threshold: 0.3 });
  statObs.observe(statRow);
}

// ── Hero Parallax (homepage) ──
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  let heroT = false;
  window.addEventListener('scroll', () => {
    if (!heroT) {
      requestAnimationFrame(() => {
        if (window.scrollY < 1000) heroBg.style.transform = `translateY(${window.scrollY * 0.1}px)`;
        heroT = false;
      });
      heroT = true;
    }
  });
}

// ── Smooth Anchor Scrolling ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
