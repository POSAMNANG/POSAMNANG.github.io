// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const themeLabel = document.getElementById('themeLabel');
const root = document.documentElement;

function setTheme(theme) {
  if (theme === 'light') {
    root.setAttribute('data-theme', 'light');
    themeLabel.textContent = 'Light';
  } else {
    root.removeAttribute('data-theme');
    themeLabel.textContent = 'Dark';
  }
  localStorage.setItem('theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(current);
});

// Load saved theme
setTheme(localStorage.getItem('theme') || 'dark');

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => observer.observe(el));

// Scrollspy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      document.querySelector(`nav a[href="#${entry.target.id}"]`).classList.add('active');
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => spy.observe(section));
