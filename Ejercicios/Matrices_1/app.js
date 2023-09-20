var competicion = ['Maria', 'Sonia', 'Clara', 'Maria Jose', 'Eva', 'Pilar'];

// 1. Clara adelanta a Sonia, reordenar array
competicion.splice(1,2, 'Clara', 'Sonia');

for (let i = 0; i < competicion.length; i++) {
    console.log(competicion[i]);
}

// 2. Quitar las ultimas tres clasificadas y meterlas en una matriz aparte
var eliminadas = competicion.splice(3,3);
console.log(eliminadas);

competicion = competicion.splice(-3); // Quitamos las últimas tres del array original

for (let i = 0; i < competicion.length; i++) {
    console.log(competicion[i]);
}

// 3. Concatena a dos clasificadas mas con las eliminadas
var eliminadosAnteriores = ['Bea', 'Miriam'];
console.log(eliminadas.concat(eliminadosAnteriores));

// 4. Imprimir por pantalla el nombre del participante, su clasificación y el premio obtenido
var premios = [150, 100, 50];
var posiciones = ['1º', '2º', '3º'];

for (let i = 0; i < competicion.length; i++) {
    console.log(competicion[i], 'con puesto', posiciones[i], 'ha ganado', premios[i]);
}

//--------------------------------------------------------------------------------//
/* Generar un array con 100 números aleatorios comprendidos entre el 0 y el 100
guardarlos e imprimirlos por pantalla con su posición */
var generados = [];

function generarAleatorios(a) {
    for (let i = 0; i < 100; i++) {
        a[i] = Math.round(Math.random() * 100);
    }
}

generarAleatorios(generados);
console.log(generados);

/* a) Generar un nuevo array donde se guarden todos los números con la condición
de que no se puede repetir ningún número. */
var noRepetidos = [];

for (let i = 0; i < generados.length; i++) {
    /*if(!generados.includes(generados[i])) {
        noRepetidos.push(generados[i]);
    } */

    if (noRepetidos.indexOf(generados[i]) == -1) {
        noRepetidos.push(generados[i]);
    }
}

console.log(noRepetidos)

/* b) Una vez que tengamos el nuevo array con todos los números ordenarlos de
menor a mayor y mostrar el resultado por pantalla */

//console.log(noRepetidos.sort((a,b) => a-b));

console.log(noRepetidos.sort(function(a,b) {
    return a -b;
}));