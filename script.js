/* ═══════════════════════════════════════════════════════════
   POLLY COLOR STUDIO — JavaScript
═══════════════════════════════════════════════════════════ */

/* ─── Google Ads: conversão em cliques no WhatsApp ─────── */

// Event snippet for CLIQUE WPP conversion
// Chamado em todos os botões que levam ao WhatsApp
function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
    'send_to': 'AW-18028077703/K6SeCI7Eo70cEIfFupRD',
    'value': 1.0,
    'currency': 'BRL',
    'event_callback': callback
  });
  return false;
}

// Aplica o tracking em todos os links do WhatsApp da página
document.querySelectorAll('a[href*="api.whatsapp.com"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    gtag_report_conversion(this.href);
  });
});

/* ─── Header: adiciona classe ao rolar ─────────────────── */
const hdr = document.getElementById('hdr');

window.addEventListener('scroll', () => {
  hdr.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ─── Menu mobile (hamburger) ───────────────────────────── */
const burger = document.getElementById('burger');
const mob    = document.getElementById('mob');

burger.addEventListener('click', () => {
  const isOpen = mob.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

/* Fecha ao clicar no overlay */
mob.addEventListener('click', e => {
  if (e.target === mob) closeMenu();
});

/* Fecha ao pressionar Escape */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mob.classList.contains('open')) closeMenu();
});

function closeMenu() {
  mob.classList.remove('open');
  burger.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

/* ─── Fecha menu ao clicar em link interno ──────────────── */
mob.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', closeMenu);
});

/* ─── Fade-in com IntersectionObserver ──────────────────── */
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fi').forEach(el => io.observe(el));

/* ─── Smooth scroll para links âncora ──────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth'
    });
  });
});
