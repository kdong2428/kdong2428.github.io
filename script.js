function openLightbox(imgElement) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    
    lightbox.style.display = 'block';
    lightboxImage.src = imgElement.src;
  }
  
  function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImage = document.getElementById('lightbox-image');
    
    lightbox.style.display = 'none';
    lightboxImage.src = '';
  }
  