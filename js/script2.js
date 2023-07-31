//Menu variables
const floatingButton = document.querySelector('.header__floatingButton');
const mainNav = document.querySelector('.header__mainNav');



//Menu ejecucion

floatingButton.addEventListener('click', function() {
  mainNav.classList.toggle('show');
});





//ANIMACIONES FADE IN

// Función para verificar si un elemento es visible en la ventana del navegador
function esVisible(elemento) {
  const rect = elemento.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Función para agregar la clase de animación cuando la sección es visible
function animarElemento() {
  const seccion = document.querySelector('.proyecto');
  const img = seccion.querySelector('.proyecto__img');
  const parrafo = seccion.querySelector('.proyecto__p');
  
  if (esVisible(seccion)) {
    img.classList.add('fade-in');
    parrafo.classList.add('fade-in')
  }
}

// Evento de scroll para verificar cuando la sección es visible
window.addEventListener('scroll', animarElemento);
window.addEventListener('resize', animarElemento);
animarElemento();

//footer


/*
window.addEventListener('scroll', function() {
if (window.pageYOffset > 0) {
  footer.classList.add('showFooter');
} else {
  floatingButton.classList.remove('showFooter');
}



});


const footer = document.querySelector('.footer')

//Galeria slider
var currentIndex = 0;
var caption = document.getElementsByClassName('caption')
var images = document.getElementsByClassName('column_img');
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');







//Galeria slider
function showImage(index) {
  if (index < 0) {
    index = images.length - 1;
  } else if (index >= images.length) {
    index = 0;
  }

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }

  images[index].classList.add('active');
  currentIndex = index;
}

function showText(index) {
  if (index < 0) {
    index = caption.length - 1;
  } else if (index >= caption.length) {
    index = 0;
  }

  for (var i = 0; i < caption.length; i++) {
    caption[i].classList.remove('active');
  }

  caption[index].classList.add('active');
  currentIndex = index;
}

function prevImage() {
  showImage(currentIndex - 1);
  showText(currentIndex);
}

function nextImage() {
  showImage(currentIndex + 1);
  showText(currentIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage(currentIndex);*/