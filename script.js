// script.js

const galleryImg = document.getElementById('galleryImg');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

// When the group photo is clicked, show lightbox with larger image
galleryImg.addEventListener('click', () => {
  lightbox.style.display = 'flex';
  lightboxImg.src = galleryImg.src;
});

// Close lightbox when 'X' is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});

// Close lightbox if user clicks outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  }
});
