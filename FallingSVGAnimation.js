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
        width: size,
        height: size,
        x: startX,
        y: -size - 10,
        opacity: opacity,
        color: color
    });
    
    this.container.appendChild(item);
    
    // Crea la animación
    this.animateItem(item, duration, rotation);
    
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
        width: size,
        height: size,
        x: startX,
        y: -size - 10,
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
  }
  
  resume() {
    gsap.globalTimeline.resume();
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
}