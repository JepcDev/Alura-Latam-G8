
let numeroSecreto = 5;
let numeroUsuario = prompt("Me indicas un número entre el 1 y 10 por favor: ");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
  alert(`Felicidades!! Acestaste, el número es: ${numeroSecreto}`);
}else{
  if (numeroSecreto > numeroUsuario) {
    alert('El número secreto es menor');
  }else{
    alert('El número secreto es mayor');
  }
  // No se cumplio la condicion
  // alert('Lo siento, no acertaste el número!');
}
