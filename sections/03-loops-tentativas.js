
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while( numeroUsuario!= numeroSecreto){
  numeroUsuario = prompt("Me indicas un número entre el 1 y 10 por favor: ");

  // console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(`Felicidades!! Acestaste, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} veces`);
  }else{
    if (numeroUsuario > numeroSecreto) {
      alert('El número secreto es menor');
    }else{
      alert('El número secreto es mayor');
    }
    intentos++;
    palabraVeces = 'veces';
    // No se cumplio la condicion
    // alert('Lo siento, no acertaste el número!');
  }
}