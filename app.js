// alert("Hello world");
let numeroSecreto = 5;
let numeroUsuario = prompt("Me indicas un número entre el 1 y 10 por favor: ");
let nombreUsuario = "Lua"
let edadUsuario = 25;
let numeroVentas = 50;
let saldoDisponible = 1000;
let mensajeError = '¡Error! Completa todos los campos';

// alert('¡Bienvenido a nuestro sitio web');
// alert('¡Error! Completa todos los campos');
// alert("variable mensajeError" + mensajeError);

// console.log(numeroUsuario);
// nombreUsuario = prompt('Digite su nombre:');
// edadUsuario = prompt('Digite su edad: ');

if (numeroUsuario == numeroSecreto) {
  alert(`Felicidades!! Acestaste, el número es: ${numeroSecreto}`);
}else{
  // No se cumplio la condicion
  alert('Lo siento, no acertaste el número!');
}

// if (edadUsuario>= 18) {
//   alert('¡Puedes obtener tu licencia de conducir!');
// }