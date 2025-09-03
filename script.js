(function () {
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const printBtn = document.getElementById('printBtn');
  const backToTop = document.getElementById('backToTop');
  const year = document.getElementById('year');

  // Year
  if (year) year.textContent = new Date().getFullYear();

  // Theme: respect saved preference or system
  const saved = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (systemPrefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);
  if (themeToggle) themeToggle.setAttribute('aria-pressed', String(initial === 'dark'));

  // Toggle theme
  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
  });

  // Print to PDF
  printBtn?.addEventListener('click', () => {
    window.print();
  });

  // Back to top
  window.addEventListener('scroll', () => {
    const show = window.scrollY > 240;
    backToTop.style.opacity = show ? '1' : '0';
    backToTop.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
