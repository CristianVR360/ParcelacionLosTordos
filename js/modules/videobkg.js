// Función para actualizar la posición del video
function updatePosition() {
    var scroll_top = window.pageYOffset;  // Obtiene la posición de desplazamiento actual de la página
    var video = document.querySelector('.header__videoBkg');  // Selecciona el video
    var speed = video.getAttribute('data-speed');  // Obtiene el valor de data-speed
  
    video.style.top = -(scroll_top * speed) + 'px';  // Actualiza la posición del video
  }
  
  // Evento de desplazamiento que llama a la función updatePosition
  window.addEventListener('scroll', updatePosition);
  