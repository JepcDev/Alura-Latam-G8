

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = generarNumeroScreto();

function asignarTextoElemento(elemento, texto) {
  // let titulo = document.querySelector('h1');
  let elementoHTML = document.querySelector(elemento);
  // titulo.innerHTML = 'Juego del número secreto';
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento(){
  // alert('Click desde el botón');
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  // console.log(typeof(numeroDeUsuario));
  // console.log(numeroDeUsuario === numeroSecreto);
  // console.log(numeroSecreto);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', 'Acertaste el número');
  }else{
    if (numeroDeUsuario>numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    }else{
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
  }

  return;
}


function generarNumeroScreto() {
  return Math.floor(Math.random()*10)+1;
  // return numeroSecreto;
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 al 100');