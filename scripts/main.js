/**
 * Denver Meyer — Landing Page Scripts
 * Mobile nav toggle, smooth scroll, form handling
 */

(function () {
  'use strict';

  // ── Mobile Navigation ──────────────────────────────────────────────
  const navToggle = document.querySelector('.nav__toggle');
  const navMobile = document.getElementById('nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navMobile.classList.toggle('is-open');
      navMobile.setAttribute('aria-hidden', isOpen);
    });

    // Close mobile nav when a link is clicked
    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('is-open');
        navMobile.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ── Contact Form ───────────────────────────────────────────────────
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      contactSuccess.classList.add('is-visible');
    });
  }
})();
