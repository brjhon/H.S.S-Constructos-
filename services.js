// ═══════════════════════════════════════════════
// H.S.S. — Honestidade. Seriedade. Solidez.
// Hosvaldo dos Santos Silva — Pedreiro Profissional
// Páginas de Serviço — services.js
// ═══════════════════════════════════════════════

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); });
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
function toggleFaq(el) {
  const item = el.parentElement;
  item.classList.toggle('open');
}