document.addEventListener("DOMContentLoaded", () => {
  const btnDark = document.getElementById("btn-dark");
  const icono = document.getElementById("icono-modo");

  // Si no encuentra el botón, salimos (para que no rompa en otras páginas)
  if (!btnDark || !icono) return;

  let modoOscuro = false;

  btnDark.addEventListener("click", () => {
    modoOscuro = !modoOscuro;

    if (modoOscuro) {
      // Activa modo oscuro
      document.body.classList.add("dark");
      icono.src = "/Imagenes/Iconos/modo-nocturno.png"; // ícono de sol (modo claro)
      icono.alt = "Modo claro";
    } else {
      // Vuelve al modo claro
      document.body.classList.remove("dark");
      icono.src = "/Imagenes/Iconos/modo-claro.png"; // ícono de luna (modo oscuro)
      icono.alt = "Modo oscuro";
    }
  });
});
