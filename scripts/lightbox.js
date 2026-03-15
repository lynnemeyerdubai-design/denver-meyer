/**
 * Lightbox — fullscreen image viewer for project galleries
 */
(function () {
  'use strict';

  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCounter = document.getElementById('lightbox-counter');

  if (!lightbox || !lightboxImg) return;

  var galleryImages = Array.from(
    document.querySelectorAll('.project-gallery__item, .portfolio-brand__img')
  );
  var currentIndex = 0;

  function showImage(index) {
    if (index < 0) index = galleryImages.length - 1;
    if (index >= galleryImages.length) index = 0;
    currentIndex = index;
    lightboxImg.src = galleryImages[index].src;
    lightboxImg.alt = galleryImages[index].alt;
    if (lightboxCounter) {
      lightboxCounter.textContent = (index + 1) + ' / ' + galleryImages.length;
    }
  }

  window.openLightbox = function (imgEl) {
    var index = galleryImages.indexOf(imgEl);
    if (index === -1) return;
    showImage(index);
    lightbox.classList.add('is-open');
    document.body.classList.add('lightbox-open');
  };

  window.closeLightbox = function (e) {
    if (e && e.target !== lightbox && e.target.className !== 'lightbox__close') return;
    lightbox.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
  };

  window.prevImage = function (e) {
    e.stopPropagation();
    showImage(currentIndex - 1);
  };

  window.nextImage = function (e) {
    e.stopPropagation();
    showImage(currentIndex + 1);
  };

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      lightbox.classList.remove('is-open');
      document.body.classList.remove('lightbox-open');
    } else if (e.key === 'ArrowLeft') {
      showImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showImage(currentIndex + 1);
    }
  });

  // Prevent click on image from closing lightbox
  lightboxImg.addEventListener('click', function (e) {
    e.stopPropagation();
  });

})();
