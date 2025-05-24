document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded and ready');
  console.log('GSAP loaded', gsap);

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