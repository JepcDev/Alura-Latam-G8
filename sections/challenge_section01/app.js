
//DEV:TODO ->  1. Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
// DEV:TODO -> 2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let etiquetah1 = document.querySelector('h1');
etiquetah1.innerHTML = 'Hora del desafío';

// DEV:TODO -> 3. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function botonClickConsole() {
  console.log('El botón fue clicado');
}

// DEV:TODO -> 4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function botonClickPromp(){
  let nombreCiudad = prompt("Que ciudad de Brazil te gustaria visitar? : ");
  alert(`Estuve en ${nombreCiudad} y me acordé de ti!!`);
}

// DEV:TODO -> 5. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function clickBotonAlerta() {
  alert('Yo amo JS!!');
}

// DEV:TODO -> 6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function clickBotonSuma() {

  let num1 = parseInt(prompt('Digite un número por favor:'));
  let num2 = parseInt(prompt('Digite otro número por favor:'));
  alert(`El resumtado de la suma de los 2 números digitados es = ${num1 + num2}`);
}