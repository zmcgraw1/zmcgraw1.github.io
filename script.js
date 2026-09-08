document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('.lightbox-close');
  const thumbnails = document.querySelectorAll('.thumbnail');
  let lastFocusedElement;

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.src = '';
    document.body.style.overflow = '';
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
      lastFocusedElement = thumbnail;
      lightboxImage.src = thumbnail.dataset.fullImage || thumbnail.src;
      lightboxImage.alt = thumbnail.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    });
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});

