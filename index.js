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


  class FallingSVGAnimation {
  constructor(config = {}) {
      // Configuración default
      this.svgCollection = config.svgCollection || this.getDefaultSVGs();
      this.container = config.container || document.body;
      this.maxItems = config.maxItems || 20;
      this.minSize = config.minSize || 30;
      this.maxSize = config.maxSize || 80;
      this.minDuration = config.minDuration || 3;
      this.maxDuration = config.maxDuration || 8;
      this.minDelay = config.minDelay || 0.1;
      this.maxDelay = config.maxDelay || 0.5;
      
      this.items = [];
      this.init();

      this.svgCollection = [
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

    ]
  }

  createItem() {
      //cambiar div por img
      const item = document.createElement('img');
      item.className = 'falling-img';
        
      // Obtiene un SVG aleatorio de la colección
      const svgIndex = Math.floor(Math.random() * this.svgCollection.length);
    // cambiar innerHTML por src
      item.src = this.svgCollection[svgIndex];
        
      // Propiedades aleatorias para el SVG
      const size = this.getRandomBetween(this.minSize, this.maxSize);
      const startX = Math.random() * window.innerWidth;
      const duration = this.getRandomBetween(this.minDuration, this.maxDuration);
      const rotation = this.getRandomBetween(-360, 360);
      const opacity = this.getRandomBetween(0.3, 1);
      const color = this.getRandomColor();
      
      // Aplica propiedades iniciales
      gsap.set(item, {
          width: size,
          height: size,
          x: startX,
          y: -size - 10,
          opacity: opacity,
          // color: color
      });
      
      this.container.appendChild(item);
      
      // Crea la animación
      this.animateItem(item, duration, rotation);
      
      this.items.push(item);
    }

  }