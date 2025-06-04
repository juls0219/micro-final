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
      'imagenes/1x/acondicionador.png',
      'imagenes/1x/audifonos.png',
      'imagenes/1x/botella.png',
      'imagenes/1x/cepillo.png',
      'imagenes/1x/coca.png',
      'imagenes/1x/cotonete.png',
      'imagenes/1x/croc.png',
      'imagenes/1x/cuchara_cocina.png',
      'imagenes/1x/cuchara_desechable.png',
      'imagenes/1x/dulce.png',
      'imagenes/1x/esmalte.png',
      'imagenes/1x/espatula.png',
      'imagenes/1x/esponja.png',
      'imagenes/1x/lentes.png',
      'imagenes/1x/licras.png',
      'imagenes/1x/playera.png',
      'imagenes/1x/rastrillo.png',
      'imagenes/1x/rimel.png',
      'imagenes/1x/rollo.png',
      'imagenes/1x/shampoo.png',
      'imagenes/1x/tenedor.png',
      'imagenes/1x/toallas_humedas.png',
      'imagenes/1x/top.png',
      'imagenes/1x/toper_marca.png',
      'imagenes/1x/topper_tapa.png',
    ];

   // Inicializa la animación
  const config  = {
    maxItems: 10,
    minSize: 30,
    maxSize: 60,
    minDuration: 13,
    maxDuration: 33,
    svgCollection: jpgs,
  }
  const animation = new FallingSVGAnimation(config);

  animation.init();
});