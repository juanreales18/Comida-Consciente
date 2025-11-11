
const images = document.querySelectorAll(".hero-carousel img");
let current = 0;

function showNextImage() {
  images[current].style.opacity = 0;
  current = (current + 1) % images.length;
  images[current].style.opacity = 1;
}

// mostrar la primera imagen
images[0].style.opacity = 1;

// cambiar cada 4 segundos
setInterval(showNextImage, 4000);
