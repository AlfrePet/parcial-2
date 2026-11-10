const raizPagina = document.documentElement;
const claveTema = "ia-software-tema";

function leerTemaGuardado() {
  try {
    const tema = localStorage.getItem(claveTema);
    return tema === "oscuro" || tema === "claro" ? tema : null;
  } catch {
    return null;
  }
}

// Aplica la preferencia antes de que se carguen los estilos.
raizPagina.dataset.tema = leerTemaGuardado() || "claro";

document.addEventListener("DOMContentLoaded", function () {
  const botonTema = document.getElementById("boton-tema");
  const textoTema = document.getElementById("texto-tema");
  const iconoTema = document.getElementById("icono-tema");

  function mostrarTema(tema) {
    raizPagina.dataset.tema = tema;
    textoTema.textContent = tema === "oscuro" ? "Modo claro" : "Modo oscuro";
    iconoTema.textContent = tema === "oscuro" ? "☀︎" : "☾";
    botonTema.title = textoTema.textContent;
  }

  mostrarTema(raizPagina.dataset.tema);
  botonTema.hidden = false;

  botonTema.addEventListener("click", function () {
    const tema = raizPagina.dataset.tema === "oscuro" ? "claro" : "oscuro";
    mostrarTema(tema);
    try {
      localStorage.setItem(claveTema, tema);
    } catch {
      // El cambio sigue funcionando en esta página si no se puede guardar.
    }
  });

  window.addEventListener("pageshow", function () {
    mostrarTema(leerTemaGuardado() || raizPagina.dataset.tema);
  });
});
