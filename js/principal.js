// Menú móvil.
const botonMenu = document.getElementById("boton-menu");
const enlacesMenu = document.getElementById("enlaces-menu");

// Con JavaScript disponible, se habilita el botón del menú.
botonMenu.hidden = false;
enlacesMenu.classList.add("cerrado");

function cerrarMenu() {
  enlacesMenu.classList.add("cerrado");
  botonMenu.setAttribute("aria-expanded", "false");
}

botonMenu.addEventListener("click", function () {
  const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";

  if (estaAbierto) {
    cerrarMenu();
  } else {
    enlacesMenu.classList.remove("cerrado");
    botonMenu.setAttribute("aria-expanded", "true");
  }
});

// Escape permite cerrar el menú y regresar a su botón con el teclado.
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape" && botonMenu.getAttribute("aria-expanded") === "true") {
    cerrarMenu();
    botonMenu.focus();
  }
});

// Al regresar a la vista de escritorio, se restablece el estado del menú.
window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    cerrarMenu();
  }
});

// La barra muestra cuánto se ha recorrido de la página.
const cabecera = document.querySelector(".cabecera-sitio");
const progresoLectura = document.querySelector(".progreso-lectura");
const pagina = document.documentElement;

function actualizarProgreso() {
  const recorrido = pagina.scrollHeight - pagina.clientHeight;
  const avance = recorrido > 0 ? window.scrollY / recorrido : 0;
  progresoLectura.style.setProperty("--avance-lectura", Math.max(0, Math.min(1, avance)));
}

const medidasPagina = new ResizeObserver(function () {
  pagina.style.setProperty("--alto-cabecera", cabecera.offsetHeight + "px");
  actualizarProgreso();
});

medidasPagina.observe(cabecera);
medidasPagina.observe(document.body);
window.addEventListener("resize", actualizarProgreso);
window.addEventListener("scroll", actualizarProgreso, { passive: true });
actualizarProgreso();

// La demostración muestra el código de la misma función que ejecuta.
function validarTitulo(titulo) {
  return typeof titulo === "string" &&
    titulo.trim().length > 0;
}

const formularioValidador = document.getElementById("formulario-validador");

if (formularioValidador) {
  const entrada = document.getElementById("entrada-validador");
  const resultado = document.getElementById("resultado-validador");
  const codigo = document.getElementById("codigo-validador");

  codigo.textContent = validarTitulo.toString();
  document.getElementById("bloque-codigo-validador").hidden = false;
  formularioValidador.hidden = false;

  function mostrarValidacion() {
    const titulo = entrada.value;

    if (validarTitulo(titulo)) {
      resultado.dataset.estado = "aceptado";
      resultado.textContent = "Aceptado. El título contiene texto.";
      return;
    }

    resultado.dataset.estado = "rechazado";
    resultado.textContent = titulo.length === 0
      ? "Rechazado. El título está vacío."
      : "Rechazado. El título contiene solo espacios en blanco.";
  }

  formularioValidador.addEventListener("submit", function (evento) {
    evento.preventDefault();
    mostrarValidacion();
  });

  entrada.addEventListener("input", function () {
    delete resultado.dataset.estado;
    resultado.textContent = "Pulsa Validar título para comprobar este texto.";
  });

  formularioValidador.querySelectorAll("[data-titulo]").forEach(function (boton) {
    boton.addEventListener("click", function () {
      entrada.value = boton.dataset.titulo;
      mostrarValidacion();
    });
  });
}

// La práctica aparece en la página de Aplicaciones.
const formularioPractica = document.getElementById("formulario-practica");

if (formularioPractica) {
  const preguntas = formularioPractica.querySelectorAll("fieldset");
  const resultado = document.getElementById("resultado-practica");
  const resumen = document.getElementById("resumen-practica");
  const explicaciones = document.getElementById("explicaciones-practica");

  function limpiarResultado() {
    resultado.hidden = true;
    resumen.textContent = "";
    explicaciones.replaceChildren();
  }

  formularioPractica.hidden = false;
  formularioPractica.addEventListener("change", limpiarResultado);
  formularioPractica.addEventListener("reset", limpiarResultado);

  formularioPractica.addEventListener("submit", function (evento) {
    evento.preventDefault();
    limpiarResultado();

    let aciertos = 0;
    preguntas.forEach(function (pregunta, indice) {
      const respuesta = pregunta.querySelector("input:checked");
      const acertada = respuesta.hasAttribute("data-correcta");
      if (acertada) aciertos += 1;

      const explicacion = document.createElement("li");
      const estado = acertada ? "Correcta" : "Para revisar";
      explicacion.textContent = `${indice + 1}. ${estado}. ${pregunta.dataset.explicacion}`;
      explicaciones.append(explicacion);
    });

    resumen.textContent = `${aciertos} de ${preguntas.length} respuestas correctas`;
    resultado.hidden = false;
  });
}
