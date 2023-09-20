var nombre1 = 'José';
var nombre2 = 'María';
var nombre3 = 'Sonia';

var apellido1_1 = 'Hernández';
var apellido1_2 = 'Ruíz';
var apellido1_3 = 'Patón';

var apellido2_1 = 'Morales';
var apellido2_2 = 'García';
var apellido2_3 = 'González';

console.log('Hola', nombre1, apellido1_1, apellido2_1);
console.log('Hola', nombre2, apellido1_2, apellido2_2);
console.log('Hola', nombre3, apellido1_3, apellido2_3);

var edad1 = 18;
var edad2 = 14;
var edad3 = 20;

var mayorEdad1 = true;
var mayorEdad2 = true;
var mayorEdad3 = true;

function comprobarMayorEdad(edad, comprobar) {
    if (edad >= 18) {
        comprobar == true;
        console.log('soy mayor de edad');
    } else {
        comprobar == false;
        console.log('no soy mayor de edad');
    }
}

comprobarMayorEdad(edad1, mayorEdad1);
comprobarMayorEdad(edad2, mayorEdad2);
comprobarMayorEdad(edad3, mayorEdad3);

function sumarEdades() {
    var anosTotales = edad1 + edad2 + edad3;
    return anosTotales;
}

console.log(sumarEdades());

function finalizar() {
    if (mayorEdad1 == true) {
        console.log(nombre1, apellido1_1, apellido2_1, 'es mayor de edad');
    } else {
        console.log(nombre1, apellido1_1, apellido2_1, 'no es mayor de edad');
    }

    if (mayorEdad2 == true) {
        console.log(nombre2, apellido1_2, apellido2_2, 'es mayor de edad');
    } else  {
        console.log(nombre2, apellido1_2, apellido2_2, 'no es mayor de edad');
    }

    if (mayorEdad3 == true) {
        console.log(nombre3, apellido1_3, apellido2_3, 'es mayor de edad');
    } else {
        console.log(nombre3, apellido1_3, apellido2_3, 'no es mayor de edad');
    }
}

console.log(finalizar());