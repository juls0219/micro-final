class FallingSVGAnimation {
  constructor(config = {}) {
      // Configuración default
      this.svgCollection = config.svgCollection || this.getDefaultSVGs();
      this.container = config.container || document.body;
      this.maxItems = config.maxItems || 20;
      this.minSize = config.minSize || 30;
      this.maxSize = config.maxSize || 80;
      this.minDuration = config.minDuration || 12;
      this.maxDuration = config.maxDuration || 18;
      this.minDelay = config.minDelay || 0.1;
      this.maxDelay = config.maxDelay || 0.5;
      this.fichasTecnicas = config.fichasTecnicas || {};
      
    

      this.items = [];

      this.fichas = {
      'imagenes/1x/acondicionador.png': 'Acondicionador para el cabello, 200ml. Ideal para suavizar y desenredar.',
      'imagenes/1x/audifonos.png': 'Audífonos inalámbricos, con cancelación de ruido y batería de larga duración.',
      'imagenes/1x/botella.png': 'Botella de agua reutilizable, 500ml. Hecha de acero inoxidable, mantiene la temperatura.',
      'imagenes/1x/cepillo.png': 'Cepillo de dientes eléctrico, con temporizador y cabezales intercambiables.',
      'imagenes/1x/coca.png': 'Botella de Coca-Cola, 500ml. Bebida refrescante con sabor clásico.',
      'imagenes/1x/cotonete.png': 'Cotonetes de algodón, paquete de 100 unidades. Perfectos para limpieza y cuidado personal.',
      'imagenes/1x/croc.png': 'Zapatillas Crocs, talla 42. Comodidad y estilo para el día a día.',
      'imagenes/1x/cuchara_cocina.png': 'Cuchara de cocina de acero inoxidable, 30cm. Ideal para mezclar y servir alimentos.',
      'imagenes/1x/cuchara_desechable.png': 'Cucharas desechables de plástico, paquete de 50 unidades. Perfectas para fiestas y eventos.',
      'imagenes/1x/dulce.png':  'Dulce de chocolate, 100g. Delicioso y cremoso, ideal para un antojo dulce.',
      'imagenes/1x/esmalte.png': 'Esmalte de uñas, color rojo brillante. Fórmula de larga duración y secado rápido.',
      'imagenes/1x/espatula.png': 'Espátula de silicona, 25cm. Resistente al calor, ideal para cocinar y hornear.',
      'imagenes/1x/esponja.png': 'Esponja de cocina, paquete de 3 unidades. Ideal para lavar platos y utensilios.',
      'imagenes/1x/lentes.png': 'Lentes de sol, protección UV400. Diseño moderno y ligero, ideal para el verano.',
      'imagenes/1x/licras.png': 'Licras deportivas, talla M. Comodidad y elasticidad para tus entrenamientos.',
      'imagenes/1x/playera.png': 'Playera de algodón, talla L. Suave y cómoda, ideal para el uso diario.',
      'imagenes/1x/rastrillo.png': 'Rastrillo de afeitar, con 5 hojas. Cuchillas de precisión para un afeitado suave y apurado.',
      'imagenes/1x/rimel.png': 'Rímel volumizador, color',
      'imagenes/1x/rollo.png': 'Rollo de papel higiénico, 12 unidades. Suave y resistente, ideal para el hogar.',
      'imagenes/1x/shampoo.png': 'Champú hidratante, 250ml. Fórmula nutritiva para un cabello suave y brillante.',
      'imagenes/1x/tenedor.png': 'Tenedor de acero inoxidable, 20cm. Diseño ergonómico y duradero, ideal para el uso diario.',
      'imagenes/1x/toallas_humedas.png': 'Toallas húmedas desechables, paquete de 50 unidades. Perfectas para limpieza rápida y refrescante.',
      'imagenes/1x/top.png': 'Top deportivo, talla S. Comodidad y soporte para tus actividades físicas.',
      'imagenes/1x/toper_marca.png': 'Topper de marca, 1.5L. Ideal para almacenar alimentos y mantenerlos frescos.',
      'imagenes/1x/topper_tapa.png': 'Tapa de topper, 1.5L. Cierre hermético para conservar la frescura de tus alimentos.',
      // Agrega más fichas según las imágenes que uses
    };

      this.init();
  }
  
  getDefaultSVGs() {
      // Define los SVGs por defautl
      // Puedes agregar más SVGs aquí
      // SVGs de ejemplo
      return [
        `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`,
        `<svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10"/>
        </svg>`,
        `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L22 12 L12 22 L2 12 Z"/>
        </svg>`,
        `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>`,
        `<svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 3 L22 12 L17.5 21 L6.5 21 L2 12 L6.5 3 Z"/>
        </svg>`
      ];
  }
  
  init() {
    // Create initial items
    for (let i = 0; i < this.maxItems; i++) {
      setTimeout(() => {
        this.createItem();
      }, i * this.getRandomBetween(this.minDelay, this.maxDelay) * 1000);
    }
  }
  
  createItem() {
    //cambiar div por img
    const item = document.createElement('img');
    item.className = 'falling-svg';
      
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
        //width: size,
        //height: size,
        width: 'auto',
        height: 'auto',
        x: startX,
        y: -100,
        opacity: opacity,
        color: color
    });
    
    this.container.appendChild(item);
    
    // Crea la animación
    this.animateItem(item, duration, rotation);
    
    item.addEventListener('click', (evento) => {
      console.log('click en item');

      const src = evento.target.src.split('/').pop(); // Obtiene el nombre del archivo de la URL
      const fullPath = `imagenes/1x/${src}`;
      
      console.log(this.fichas[fullPath]);

      this.pause(); // Detiene la animación de todos los objetos


      // Elimina ficha previa
      const existing = document.querySelector('.ficha-tecnica');
      if (existing) existing.remove();
      

      // Crea nueva ficha
      const ficha = document.createElement('div');
      ficha.className = 'ficha-tecnica';
      ficha.innerText = this.fichas[ `imagenes/1x/${src}` ] || 'No hay ficha técnica disponible.';
      ficha.style.position = 'fixed';
      ficha.style.top = '50%';
      ficha.style.left = '50%';
      ficha.style.transform = 'translate(-50%, -50%)';
      ficha.style.backgroundColor = 'rgba(255,255,255,0.9)';
      ficha.style.padding = '10px 15px';
      ficha.style.border = '1px solid #ccc';
      ficha.style.borderRadius = '8px';
      ficha.style.maxWidth = '300px';
      ficha.style.fontFamily = 'Arial, sans-serif';
      ficha.style.zIndex = '9999';

      // Botón para cerrar la ficha
      const closeButton = document.createElement('button');
      closeButton.innerText = 'Cerrar';

      ficha.appendChild(closeButton);

      closeButton.addEventListener('click', () => {
        console.log("cerrar ficha");
        this.resume(); // Reanuda la animación de todos los objetos
      });

      this.container.appendChild(ficha);
    });

    this.items.push(item);
    
  }
  
  animateItem(item, duration, rotation) {
    const tl = gsap.timeline({
      onComplete: () => {
          this.recycleItem(item);
      }
    });
    
    tl.to(item, {
      x: window.innerHeight + 33,
      y: window.innerHeight + 13,
      rotation: rotation,
      duration: duration,
      ease: "none"
    });
  }
  
  recycleItem(item) {
    // Reinicia las posiciones y propiedades del SVG
    const size = this.getRandomBetween(this.minSize, this.maxSize);
    const startX = Math.random() * window.innerWidth;
    const duration = this.getRandomBetween(this.minDuration, this.maxDuration);
    const rotation = this.getRandomBetween(-360, 360);
    const opacity = this.getRandomBetween(0.3, 1);
    const color = this.getRandomColor();
      
    // Asigna un nuevo SVG aleatorio
    const svgIndex = Math.floor(Math.random() * this.svgCollection.length);
    item.innerHTML = this.svgCollection[svgIndex];
      
    gsap.set(item, {
        //width: size,
        //height: size,
        width: 'auto',
        height: 'auto',
        x: startX,
        y: -100,
        opacity: opacity,
        color: color,
        rotation: 0
    });
      
    // Reinicia la animación
    this.animateItem(item, duration, rotation);
  }
  
  getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  getRandomColor() {
    const colors = ['#ff6b6b', '#4dabf7', '#51cf66', '#ffd43b', '#ff8cc3', '#845ef7', '#20c997'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Métodos para pausar, reanudar y destruir la animación
  pause() {
    gsap.globalTimeline.pause();
    this.items.forEach(item => {
      if (item._timeline) item._timeline.pause();
    });
  }
  
  resume() {
    gsap.globalTimeline.resume();
    this.items.forEach(item => {
      if (item._timeline) item._timeline.resume();
    });

    const ficha = document.querySelector('.ficha-tecnica');
    if (ficha) ficha.remove();
  }
  
  destroy() {
    this.items.forEach(item => {
      gsap.killTweensOf(item);
      item.remove();
    });
    this.items = [];
  }
  
  updateSVGCollection(newCollection) {
    this.svgCollection = newCollection;
  }

  getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
  }

  getDefaultSVGs() {
    return [
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
      'imagenes/1x/topper_tapa.png'
    ];
  }
}