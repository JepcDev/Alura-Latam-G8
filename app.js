

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignarTextoElemento(elemento, texto) {
  // let titulo = document.querySelector('h1');
  let elementoHTML = document.querySelector(elemento);
  // titulo.innerHTML = 'Juego del número secreto';
  elementoHTML.innerHTML = texto;
}

function intentoUsuario(){
  alert('Click desde el botón');
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 al 100');