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
});
