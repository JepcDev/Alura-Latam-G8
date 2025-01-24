
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = 'vez';
let maximoIntnetos = 3;

while( numeroUsuario!= numeroSecreto){
  numeroUsuario = prompt("Me indicas un número entre el 1 y 10 por favor: ");

  // console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(`Felicidades!! Acestaste, el número es: ${numeroSecreto}. Lo hiciste en ${intentos} ${intentos ==1 ? 'vez' : 'veces'}`);
  }else{
    if (numeroUsuario > numeroSecreto) {
      alert('El número secreto es menor');
    }else{
      alert('El número secreto es mayor');
    }

    // incrementamos el contador cuando no acierta
    // intentos = intentos +1;
    // intentos +=1;
    intentos++;

    // palabraVeces = 'veces';
    if (intentos>maximoIntnetos) {
      alert(`Llegaste al número maximo de ${maximoIntnetos} intentos`);
      break;
    }
    // No se cumplio la condicion
    // alert('Lo siento, no acertaste el número!');
  }
}