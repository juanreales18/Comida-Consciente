
document.getElementById("buscador").addEventListener("input", function () {
    const filtro = this.value.toLowerCase();
    const productos = document.querySelectorAll(".producto");
    let encontrados = 0;

    productos.forEach(producto => {
        const nombre = producto.querySelector("h3").textContent.toLowerCase();
        const descripcion = producto.querySelector("p").textContent.toLowerCase();

        if (nombre.includes(filtro) || descripcion.includes(filtro)) {
            producto.style.display = "block";

            // animación nice
            producto.style.opacity = "1";
            producto.style.transform = "scale(1)";
            encontrados++;
        } else {
            producto.style.opacity = "0";
            producto.style.transform = "scale(0.95)";

            setTimeout(() => { producto.style.display = "none"; }, 200);
        }
    });

    document.getElementById("mensaje-no-resultados").style.display =
        encontrados === 0 ? "block" : "none";
});


document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".producto");
  const btnWhatsApp = document.getElementById("btn-whatsapp");

  productos.forEach(producto => {
    const checkbox = producto.querySelector(".seleccionar");
    const opciones = producto.querySelector(".opciones");

    // Mostrar/ocultar opciones según el checkbox
    checkbox.addEventListener("change", () => {
      opciones.style.display = checkbox.checked ? "block" : "none";
    });
  });

  btnWhatsApp.addEventListener("click", () => {
    let mensaje = "Hola! Quiero hacer un pedido:%0A";
    let total = 0;

    productos.forEach(p => {
      const checkbox = p.querySelector(".seleccionar");
      if (checkbox.checked) {
        const nombre = p.querySelector("h3").textContent;
        const precio = parseFloat(p.querySelector(".precio").dataset.precio);
        const cantidad = parseInt(p.querySelector(".cantidad").value);
        const detalle = p.querySelector(".detalle").value.trim();
        const subtotal = precio * cantidad;

        total += subtotal;

        mensaje += `• ${nombre} x${cantidad} = $${subtotal}%0A`;
        if (detalle) mensaje += `  Detalle: ${detalle}%0A`;
      }
    });

    mensaje += `%0A*Total: $${total}*`;

    const telefono = "543837471371"; // sin + ni espacios
    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(url, "_blank");
  });
});

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
