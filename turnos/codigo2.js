// CAJEROS
var cantidad_cajeros = prompt("Cuantos cajeros hay?");
var cajeros = [];

for (i = 0; i < cantidad_cajeros; i++) {
  cajeros[i] = [prompt("Nombre del cajero " + (i + 1))];
}

// EMPACADORES
var cantidad_empacadores = prompt("Cuantos empacadores hay?");
var empacadores = [];

for (i = 0; i < cantidad_empacadores; i++) {
  empacadores[i] = [prompt("Nombre del empacador " + (i + 1))];
}

// SELECCIONAR EQUIPOS

var totalC = cajeros.length;
var totalE = empacadores.length;

for(i=0; i<totalC && i<totalE; i++) {
  cajeroAleatorio();
  empacadorAleatorio()

  console.log(seleccionC);
  console.log(seleccionE);

  document.write(`${seleccionC} / ${seleccionE} </br>`);
}

function cajeroAleatorio() {
  aleatorio_C = Math.floor(Math.random()*(cajeros.length));
  seleccionC = cajeros[aleatorio_C];
  cajeros.splice(aleatorio_C, 1);
};

function empacadorAleatorio() {
  aleatorio_E = Math.floor(Math.random()*(empacadores.length));
  seleccionE = empacadores[aleatorio_E];
  empacadores.splice(aleatorio_E, 1);
}
