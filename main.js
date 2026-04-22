// ═══════════════════════════════════════════════
// H.S.S. — Honestidade. Seriedade. Solidez.
// Hosvaldo dos Santos Silva — Pedreiro Profissional
// Página Principal — main.js
// ═══════════════════════════════════════════════

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', window.scrollY > 60); });
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.textContent = '✓ Mensagem enviada!';
  btn.style.background = '#2a7a42';
  setTimeout(() => { btn.textContent = 'Enviar mensagem →'; btn.style.background = ''; e.target.reset(); }, 3000);
}