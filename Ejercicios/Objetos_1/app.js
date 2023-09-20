// Creacion del objeto
var persona = {
    nombre : '',
    apellido : '',
    email : '',
    dni : '',
    asignatura : ['DWC', 'DWS', 'DAW', 'DIW', 'EIE']
};

const usuario = 'ines@gmail.com';
const pwd = 'admin123';

function login() {
    var email = document.getElementById('nombre').value;
    var password = document.getElementById('pass').value;

    console.log(email, password);

    // Validar que ninguno de los campos este vacio
    if (email == '' || password == '') {
        //alert('Rellene los campos requeridos');
        document.getElementById('nombre').name;
        //mensajeError(password, 0, 0, 'Campo contraseña vacio');
    } else if (password.length < 8) {

    }

    if (usuario == email && pwd == password) {
        // Pasa a la siguiente pantalla
        window.location.href = 'index.html';
    } else {
        alert('Datos incorrectos');
        // Elimina los valores de los campos
        document.getElementById('nombre').value = '';
        document.getElementById('pass').value = '';
    }


}

// ----------------------------- Funciones comprobaciones de los campos ---------------------------

function comprobarNombre() {
    var n = document.getElementById('name').value;

    if (n > 30 || n < 3) {
        alert('Longitud de nombre no permitido');
    }
}

function comprobarApellido() {
    var a1 = document.getElementById('ape1').value;
    var a2 = document.getElementById('ape2').value;

    if (a1 & a2 > 30 || a1 & a2 < 2) {
        alert('Longitus de apellidos no permitida');
    }
}

function comprobarFecha() {
    var fechaStr = document.getElementById('nac').value;
    var fecha = new Date(fechaStr);
}

function comprobarEmail() {
    var mail = document.getElementById('mail').value;

    if (mail.includes('@')) {
        var m = mail.split('@');
        var usuario = m[0];
        var dominio = m[1];

        // Compruebo la posicion del @ mediante las longitudes de los campos
        if (usuario.length == 0 || dominio.length <= 3) {
            alert('El @ del email no puede estar ni al principio ni en los ultimos tres caracteres');
        } 

    } else {
        alert('El email debe incluir un @');
    }
}

function comprobarDNI() {
    // DNI --> 8 numeros y 1 letra
    var dni = document.getElementById('dni').value.toUpperCase();

    if (dni.length == 9 ) {  // (/^\d{8}[A-Z]$/.test(dni)) {
        const l = 'TRWAGMYFPDXBNJZSQVHLCKE';

        // Divido en substrings
        var numeros = dni.substring(0,8);
        var letra = dni.substring(8);

        var resto = numeros % 23;

        if (l[resto] != letra) {
            alert('El DNI es erroneo');
        }

    } else {
        alert('El DNI no tiene un formato válido');
    }
}

function limpiar() {
    document.getElementById('name').value = '';
    document.getElementById('ape1').value = '';
    document.getElementById('ape2').value = '';
    document.getElementById('nac').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('dni').value = '';
}

function guardar() {
    var validado = true;
    validado = validar();
}

function validar() {
    comprobarNombre();
    comprobarApellido();
    comprobarEmail();
    comprobarFecha();
    comprobarDNI();
}

// ejemplo le pasa el nombre el min y max y que slaga el error
function mensajeError (campo, min, max, msg, nombre) { // mas el nombre del campo
    if (campo.length < min) {
        msg = msg + 'Debe haber un minimo de ' + min + ' en el campo ' + nombre;
        
    }

    alert(msg);
}