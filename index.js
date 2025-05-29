document.addEventListener('DOMContentLoaded', () => {
  function mostrarSeccion(id) {
    const seccion = document.getElementById(id);
    if (seccion.style.display === 'block') {
      seccion.style.display = 'none';
    } else {
      document.querySelectorAll('.seccion-oculta').forEach(section => {
        section.style.display = 'none';
      });
      seccion.style.display = 'block';
    }
  }

  window.mostrarSeccion = mostrarSeccion;
   // Inicializa la animación
  const animation = new FallingSVGAnimation({
    maxItems: 10,
    minSize: 10,
    maxSize: 20,
    minDuration: 3,
    maxDuration: 13,
  });

  animation.init();
});
