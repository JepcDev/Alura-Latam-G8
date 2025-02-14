
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;

let listaNumerosSorteados = [];
let numeroMaximo =10;
let maximoIntentos = 3;

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
    document.getElementById('reiniciar').removeAttribute('disabled');
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
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  // Si ya se sortearon todos los numeros posibles
  if (listaNumerosSorteados.length===numeroMaximo) {
  // if (listaNumerosSorteados.length===maximoIntentos) {
    asignarTextoElemento('p','Ya se sortearon todos los número posibles');
    // asignarTextoElemento('p','Ya Perdiste llegaste al numero maximo de intentos');
  }else{
    // Si el numero generado esta en la lista realizamos cierta operacion u otra
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroScreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }


}

function condicionesIniciales() {
  asignarTextoElemento('h1','Juego del número secreto');
  asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroScreto();
  intentos = 1;
}

function reiniciarJuego() {
  // limpiar la caja input
  limpiarCaja();
  // indicar mensaje de intervalo de números
  // Generar número aleatorio
  // Inicializar el número de intentos
  condicionesIniciales();
  // Desabilitar el bóton de nuevo Juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();