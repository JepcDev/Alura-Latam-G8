
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = generarNumeroScreto();
let intentos = 1;

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
  console.log(numeroSecreto);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número ${intentos} ${(intentos ===1) ? 'vez': 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disable');
  }else{
    if (numeroDeUsuario>numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    }else{
      asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

// Limpia la caja del input despues de no acertar o terminarse los intentos del numero secreto
function limpiarCaja() {
  // let valorCaja = document.querySelector('#valorUsuario');
  document.querySelector('#valorUsuario').value = '';
  // valorCaja.value = '';
}

function generarNumeroScreto() {
  return Math.floor(Math.random()*10)+1;
  // return numeroSecreto;
}

asignarTextoElemento('h1','Juego del número secreto');
asignarTextoElemento('p','Indica un número del 1 al 10');