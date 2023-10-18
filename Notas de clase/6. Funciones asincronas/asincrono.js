console.log("Inicio");

setTimeout(function() {
  console.log("Esto se ejecutará después de 2 segundos.");
}, 2000);

console.log("Fin");

/**
 * PROMESAS
 * En JavaScript, puedes utilizar promesas para manejar operaciones asincrónicas
 * y ejecutar código cuando una operación se completa con éxito o falla.
 */
const miPromesa = new Promise((resolve, reject) => {
  // Simula una operación asincrónica, como una solicitud HTTP
  setTimeout(() => {
    const exito = true; // Cambia a `false` para simular un error

    if (exito) {
      resolve("La operación se completó con éxito.");
    } else {
      reject("La operación ha fallado.");
    }
  }, 2000); // Simula un retraso de 2 segundos
});

/**
 * Consumir una promesa
 * Puedes utilizar los métodos then() y catch() para manejar el resultado de una promesa
 * cuando se resuelve con éxito o cuando se produce un error:
 */
miPromesa
  .then((resultado) => {
    console.log("Éxito:", resultado);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


//Ejercicio 1
//Crea una promesa que se resuelva después de un cierto retraso y 
// muestra un mensaje en la consola cuando se resuelve.
function retrasarPromesa(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promesa resuelta después de ${ms} milisegundos.');
    }, ms);
  });
}

retrasarPromesa(2000)
  .then((mensaje) => {
    console.log(mensaje);
  });

  //Ejercicio 2
  //Promesa de Número Aleatorio: Crea una promesa que genere un número 
  //aleatorio entre 1 y 6, simulando un dado, y se resuelva con el número generado.
function randonNum() {
  return new Promise((resolve) => {
    var random = Math.floor(Math.random() * 6) + 1;
    resolve('Número generado automaticamente:' + random);
  });
}

randonNum()
  .then((msg) => {
    console.log(msg)
  })