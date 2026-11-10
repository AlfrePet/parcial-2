# Inteligencia artificial aplicada al desarrollo de software

Proyecto de **Alfredo Peters**, para Desarrollo de Software V.

## Abrir la página

Abre la carpeta en Visual Studio Code. Después abre `index.html` en un navegador. El sitio funciona con sus archivos locales; no necesita instalación, cuentas ni claves.

También puedes utilizar Live Server, o ejecutar `npm run dev` si tienes Node.js instalado.

## Archivos principales

| Archivo o carpeta | Contenido |
| --- | --- |
| `index.html` | Presentación del tema y enlaces a las otras páginas. |
| `fundamentos.html` | Conceptos básicos de IA, modelos de lenguaje y prompts. |
| `aplicaciones.html` | Usos en programación, pruebas, depuración y documentación, con un validador interactivo y una mini práctica. |
| `beneficios-riesgos.html` | Beneficios, comparación por tarea, riesgos y limitaciones. |
| `buenas-practicas.html` | Cómo plantear tareas, revisar las respuestas y cuidar los datos. |
| `autor.html` | Imagen y breve reseña de Alfredo Peters. |
| `404.html` | Mensaje de recuperación ante una dirección inexistente. |
| `css/estilos.css` | Estilos propios, bordes redondeados, efectos de cursor y adaptación a pantallas pequeñas. |
| `js/principal.js` | Menú móvil, progreso de lectura y comprobación de las respuestas de la práctica. |
| `js/tema.js` | Selector de modo claro y oscuro y preferencia guardada en el navegador. |
| `imagenes/` | Diagramas SVG e imagen del autor. |

El código utiliza HTML, CSS y JavaScript sin frameworks ni plantillas. El contenido está en HTML. JavaScript controla el menú móvil, el selector de tema y la mini práctica.

## Requisitos del enunciado

- Tema permitido: inteligencia artificial aplicada al desarrollo de software.
- Varias páginas HTML con navegación funcional.
- Encabezado, barra de navegación y pie de página.
- Imagen y breve reseña del creador.
- Información organizada con imágenes explicativas y fuentes.
- Diseño y CSS propios, con adaptación a celular.
- Archivos HTML y carpetas para CSS e imágenes/recursos.

La reseña utiliza únicamente el nombre y los datos conocidos del proyecto. La página muestra la fotografía optimizada `imagenes/alfredo-peters-web.jpg`. El encuadre visible se realiza con CSS.

## Cambios de presentación

- Menú con seis páginas de contenido.
- Encabezado claro con símbolo original del sitio, navegación compartida y página actual destacada.
- Portada con el título «Del concepto al código, con IA» e ilustración SVG original del proceso de trabajo.
- Títulos en Georgia y texto en Segoe UI, con alternativas del sistema.
- Paleta clara de blanco cálido, azul profundo y verde azulado.
- Tarjetas del inicio con iconos SVG propios y enlaces alineados; presentación del autor con marco de foto y reseña.
- Cuadros, botones y fotografía con bordes redondeados.
- Elevación y sombra suaves al pasar el cursor por cuadros y botones.
- Botones y opciones de navegación que cambian de azul a verde azulado al pasar el cursor. El foco del teclado recibe el mismo cambio de color.
- Los cuadros informativos conservan su función de lectura: el efecto visual no los convierte en enlaces.
- Los desplazamientos se desactivan cuando el dispositivo indica una preferencia de movimiento reducido.

Los recursos nuevos `imagenes/marca-ia.svg`, `imagenes/portada-ia.svg` y `imagenes/icono-*.svg` se crearon para este proyecto. Se utiliza CSS con Flexbox, Grid y consultas de medios; no hacen falta librerías, fuentes externas ni instalación para abrir los HTML.

## Usabilidad aplicada

Las siguientes referencias guían decisiones de diseño. No se añaden formularios ni actividades únicamente para mostrar un principio.

### Ocho reglas de Shneiderman

1. Consistencia: encabezado, menú, colores y enlaces comunes.
2. Usabilidad universal: teclado, textos alternativos y diseño adaptable.
3. Retroalimentación: el menú indica si está abierto y la página actual queda marcada.
4. Cierre: el contenido tiene un final y enlaces para continuar el recorrido.
5. Prevención de errores: enlaces con nombres descriptivos y destinos comprobados.
6. Reversibilidad: se puede cerrar el menú, volver atrás o regresar al inicio.
7. Control: cada cambio de página depende de una acción del visitante.
8. Menor carga de memoria: las opciones y las explicaciones permanecen disponibles.

### Diez heurísticas de Nielsen

1. Estado visible: página actual marcada y estado del menú comunicado.
2. Lenguaje familiar: etiquetas simples en español.
3. Control y libertad: retorno al inicio, páginas anteriores y cierre del menú.
4. Consistencia: estructura y estilos comunes.
5. Prevención de errores: enlaces identificables y comprobados.
6. Reconocimiento: navegación con nombres visibles.
7. Flexibilidad: teclado y enlace para saltar al contenido.
8. Diseño esencial: contenido y controles relacionados con el tema.
9. Recuperación: página 404 con explicación y enlace al inicio, cuando un servidor la utiliza.
10. Ayuda: indicaciones de navegación en la página del autor y fuentes junto al contenido.

Referencias de usabilidad:

- https://www.cs.umd.edu/users/ben/goldenrules.html
- https://www.nngroup.com/articles/ten-usability-heuristics/

## Comprobación local

`npm run check` comprueba sintaxis de JavaScript, recursos, anclas, estructura básica y texto alternativo de las imágenes. Los scripts de `scripts/` son ayudas de desarrollo, no son necesarios para abrir el sitio.

Las ilustraciones SVG son recursos originales del proyecto. Las referencias del contenido están enlazadas en las páginas correspondientes. El proyecto cuenta con asistencia de IA y debe ser comprendido por el autor antes de su presentación.
