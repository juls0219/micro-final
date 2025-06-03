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

  const jpgs = [
      'imagenes/1x/acondicionador.jpg',
      'imagenes/1x/audifonos.jpg',
      'imagenes/1x/botella.jpg',
      'imagenes/1x/cepillo.jpg',
      'imagenes/1x/coca.jpg',
      'imagenes/1x/cotonete.jpg',
      'imagenes/1x/croc.jpg',
      'imagenes/1x/cuchara_cocina.jpg',
      'imagenes/1x/cuchara_desechable.jpg',
      'imagenes/1x/dulce.jpg',
      'imagenes/1x/esmalte.jpg',
      'imagenes/1x/espatula.jpg',
      'imagenes/1x/esponja.jpg',
      'imagenes/1x/lentes.jpg',
      'imagenes/1x/licras.jpg',
      'imagenes/1x/playera.jpg',
      'imagenes/1x/rastrillo.jpg',
      'imagenes/1x/rimel.jpg',
      'imagenes/1x/rollo.jpg',
      'imagenes/1x/shampoo.jpg',
      'imagenes/1x/tenedor.jpg',
      'imagenes/1x/toallas_humedas.jpg',
      'imagenes/1x/top.jpg',
      'imagenes/1x/toper_marca.jpg',
      'imagenes/1x/topper_tapa.jpg',
    ];

   // Inicializa la animación
  const config  = {
    maxItems: 10,
    minSize: 30,
    maxSize: 60,
    minDuration: 3,
    maxDuration: 13,
    svgCollection: jpgs,
  }
  const animation = new FallingSVGAnimation(config);

  animation.init();
});