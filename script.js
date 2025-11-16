
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


 const btn = document.getElementById('btn-dark');
    const body = document.body;

    // CARGA ESTADO DEL LOCALSTORAGE
    if (localStorage.getItem("modo") === "oscuro") {
        body.classList.add("dark");
    }

    // CAMBIO DE MODO
    btn.addEventListener("click", () => {
        body.classList.toggle("dark");

        // GUARDAR PREFERENCIA
        if (body.classList.contains("dark")) {
            localStorage.setItem("modo", "oscuro");
        } else {
            localStorage.setItem("modo", "claro");
        }
    });

const btnDark = document.getElementById("btn-dark");
const icono = document.getElementById("icono-modo");
let modoOscuro = false;

btnDark.addEventListener("click", () => {
    modoOscuro = !modoOscuro;

    if (modoOscuro) {
      // activa modo oscuro
      document.body.classList.add("dark");
      icono.src = "imagenes/Iconos/modo-nocturno.png";
      icono.alt = "Modo claro";
    } else {
      // vuelve al modo claro
      document.body.classList.remove("dark");
      icono.src = "imagenes/Iconos/modo-claro.png";
      icono.alt = "Modo oscuro";
    }
  });