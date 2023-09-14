// Definicion de variables
var nombre = 'Ines';

console.log('Hola', nombre);
console.log(typeof (nombre));

var edad = 31;
console.log(typeof (edad));
var mayorEdad = true;

saludame();

function saludame() {
    console.log('Hola', nombre);
}

// Condicionales
if (edad >= 18) {
    mayorEdad == true;
    console.log('soy mayor de edad');
} else {
    mayorEdad == false;
    console.log('no soy mayor de edad');
}

// Blucle for
for (let i = 0; i < 10; i++) {
    console.log('hola');
}


// While y do while
var i = 0;

do {
    console.log('hola');
    i++;
} while (i < 10);

i = 0;

while (i < 10) {
    console.log('hola');
    i++;
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}