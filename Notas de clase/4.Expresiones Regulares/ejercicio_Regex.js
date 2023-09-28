/* 1) Realiza una expresión regular para comprobar un número entero positivo */
let regex1 = /^[\d]+$/;
console.log(regex1.exec(123456)); // Funciona
console.log(regex1.exec(-123456)); // No funciona
console.log(regex1.test(-1000)); // No funciona
console.log(regex1.test(1000)); // Funciona

/* 2) Realiza una expresión regular para comprobar un número entero negativo */
let regex2 = /^-[\d]+$/;
console.log(regex2.exec(-123456)); // Funciona
console.log(regex2.exec(12,3456)); // No funciona  
console.log(regex2.test(-1000)); // Funciona
console.log(regex2.test(1000)); // No funciona

/* 3) Realiza una expresión regular para comprobar una matrícula de coche española */
let matricula = /^[0-9]{4}[B-DF-HJ-NP-TV-Z]{3}/;
console.log(matricula.exec('6192LHN')); // Funciona
console.log(matricula.exec('LHN6192LHN6192')); // No funciona
console.log(matricula.test('5807FYX')); // Funciona
console.log(matricula.test('5807FYO')); // No funciona
console.log(matricula.test('W5807YX')); // No funciona

/* 4) Realiza una expresión regular para comprobar un dni (no validar si la 
    letra es correcta solo si está bien formado) */
let dni = /^[\d]{8}[A-HJ-NP-TV-Z]{1}$/;
console.log(dni.exec('05986125P')); // Funciona
console.log(dni.exec('E05986125P')); // No funciona
console.log(dni.test('05983163N')); // Funciona
console.log(dni.test('05983163I')); // No funciona
console.log(dni.test('05983163NSR')); // Funciona

/* 5) Realiza una expresión regular para comprobar si un número es binario */
let binario = /^[0-1]+$/;
console.log(binario.exec('11101010101')); // Funciona
console.log(binario.exec('12345,3780101')); // No funciona
console.log(binario.test('010101011')); // Funciona
console.log(binario.test('01010101123')); // No funciona

/* 6) Realiza una expresión regular para comprobar un número octal */
let octal = /^[0-7]+$/;
console.log(octal.exec('12457')); // Funciona
console.log(octal.exec('895421')); // No funciona
console.log(octal.test('8651021,54')); // No funciona

/* 7) Realiza una expresión regular para comprobar si un número es hexadecimal */
let hexadecimal = /^[0-9A-F]+$/;
console.log(hexadecimal.exec('12457EFA')); // Funciona
console.log(hexadecimal.exec('895421CD')); // Funciona
console.log(hexadecimal.test('8651021,54')); // No funciona

/* 8) Realizar una expresión regular para validar un usuario de discord el formato 
    que tiene que tener es un nombre que puede contener letras minúsculas y numero 
    pero no _ con una longitud mínima de 5 y máximo 15. Una almohadilla y un
    número de longitud 6. */
let discord = /^[A-Za-z0-9]{5,15}[#][0-9]{6}/;
console.log(discord.exec('N3ssi#123456')); // Funciona
console.log(discord.exec('1n3s_123456')); // No funciona
console.log(discord.test('ne55i#123456')); // Funciona  

/* 9) Realizar un método js que reciba un String y mediante expresión regular comprobar 
    que la primera letra sea mayúscula y tenga una longitud entre 3 y 20. Si la primera 
    letra no es mayúscula devolver el string con la primera en mayus. */
function comprobarString(cadena) {
    const regex = /^[A-Z]{1}[a-z]{2,19}$/;

    if (!regex.test(cadena)) {
        cadena = cadena.charAt(0).toUpperCase() + cadena.slice(1); // El slice coge el trozo de la cadena restante
        if (!regex.test(cadena)) {
            return false;
        }
    } else {
        return true;
    }

}

comprobarString('ines');
comprobarString('Ines');

/* 10) Realizar una expresión que valide una fecha, pero con algunas excepciones, que 
    los días y los meses sean correctos solo que este bien formado con el siguiente 
    formato: dd/mm/aaaa */
let fecha = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/;
console.log(fecha.exec('12/12/2020')); // Funciona
console.log(fecha.exec('12/12/20')); // No funciona
console.log(fecha.test('02/03/2001')); // Funciona
console.log(fecha.test('12-12-20')); // No funciona


let newFecha = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])(\/)[1-9]{4}$/;