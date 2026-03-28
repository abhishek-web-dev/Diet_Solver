/* DietSolver — Main JS */
(function() {
  'use strict';

  // Header scroll
  const header = document.getElementById('header');
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    if (scrollTopBtn) scrollTopBtn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    document.addEventListener('click', e => {
      if (mobileNav.classList.contains('open') && !mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
        document.body.style.overflow = '';
      }
    });
  }

  // FAQ accordion
  window.toggleFaq = function(i) {
    const item = document.getElementById('faq-' + i);
    if (!item) return;
    const btn = item.querySelector('.faq-q');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(el => {
      el.classList.remove('open');
      el.querySelector('.faq-q').setAttribute('aria-expanded', false);
    });
    if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded', true); }
  };

  // Gallery tabs
  window.switchGallery = function(tab, btn) {
    document.querySelectorAll('.gallery-pane').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
    const pane = document.getElementById('gallery-' + tab);
    if (pane) pane.classList.add('active');
    if (btn) btn.classList.add('active');
  };

  // BMI Calculator
  window.calcBMI = function() {
    const w = parseFloat(document.getElementById('bmiWeight').value);
    const hCm = parseFloat(document.getElementById('bmiHeight').value);
    const result = document.getElementById('bmiResult');
    if (!w || !hCm || w <= 0 || hCm <= 0) { alert('Please enter valid weight and height.'); return; }
    const h = hCm / 100;
    const bmi = (w / (h * h)).toFixed(1);
    let cat = '', msg = '', col = '#2E7D32', bg = '#E8F5E9';
    if (bmi < 18.5) { cat = 'Underweight'; msg = 'A weight gain nutrition plan could help.'; col = '#1565C0'; bg = '#E3F2FD'; }
    else if (bmi < 25) { cat = '✓ Normal Weight'; msg = 'Great! Maintain your healthy lifestyle.'; col = '#2E7D32'; bg = '#E8F5E9'; }
    else if (bmi < 30) { cat = 'Overweight'; msg = 'A weight management plan can help you reach your goals.'; col = '#E65100'; bg = '#FBE9E7'; }
    else { cat = 'Obese'; msg = 'Consult Dr. Anjani for a personalised programme.'; col = '#B71C1C'; bg = '#FFEBEE'; }
    document.getElementById('bmiVal').textContent = bmi;
    const catEl = document.getElementById('bmiCat');
    catEl.textContent = cat; catEl.style.color = col;
    document.getElementById('bmiMsg').textContent = msg;
    result.style.background = bg; result.style.borderColor = col + '60';
    result.classList.add('show');
  };

  // Scroll-reveal animation
  const fadeEls = document.querySelectorAll('.fade-up');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.10 });
    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // Active nav link highlight
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && href !== '#' && currentPage === href.split('/').pop()) a.classList.add('active');
  });

})();
