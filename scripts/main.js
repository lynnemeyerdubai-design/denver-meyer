/**
 * Denver Meyer — Portfolio Site Scripts
 * Navigation, scroll animations, form handling
 */

(function () {
  'use strict';

  // ── Mobile Navigation ───────────────────────────────────────────────
  const navToggle = document.querySelector('.nav__toggle');
  const navMobile = document.getElementById('nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', function () {
      const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      navMobile.classList.toggle('is-open');
      navMobile.setAttribute('aria-hidden', isOpen);
    });

    navMobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.classList.remove('is-open');
        navMobile.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // ── Nav scroll state ────────────────────────────────────────────────
  const nav = document.querySelector('.nav');
  if (nav) {
    var lastScroll = 0;
    window.addEventListener('scroll', function () {
      var scrollY = window.scrollY;
      if (scrollY > 20) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
      lastScroll = scrollY;
    }, { passive: true });
  }

  // ── Scroll fade-in animations ───────────────────────────────────────
  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '50px 0px -20px 0px'
    });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });

    // Force-check elements already in viewport on load
    requestAnimationFrame(function () {
      fadeEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      });
    });
  } else {
    fadeEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ── Contact Form (Formspree) ────────────────────────────────────────
  var contactForm = document.getElementById('contact-form');
  var contactSuccess = document.getElementById('contact-success');

  if (contactForm && contactSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      }).then(function (response) {
        if (response.ok) {
          contactForm.style.display = 'none';
          contactSuccess.classList.add('is-visible');
          contactForm.reset();
        } else {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
          }
        }
      }).catch(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      });
    });
  }

  // ── Active nav link ─────────────────────────────────────────────────
  var currentPath = window.location.pathname.replace(/\/$/, '').replace(/\.html$/, '');
  if (currentPath === '' || currentPath === '/index') currentPath = '/';

  document.querySelectorAll('.nav__links a').forEach(function (link) {
    var href = link.getAttribute('href').replace(/\/$/, '').replace(/\.html$/, '');
    if (href === '/' && currentPath === '/') {
      link.classList.add('is-active');
    } else if (href !== '/' && currentPath.indexOf(href) === 0) {
      link.classList.add('is-active');
    }
  });

})();
