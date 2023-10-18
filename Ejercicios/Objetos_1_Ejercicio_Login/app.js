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
        return false;
    }

    return true;
}

/** 
 * @
*/
function comprobarApellido() {
    var a1 = document.getElementById('ape1').value;
    var a2 = document.getElementById('ape2').value;

    if (a1 & a2 > 30 || a1 & a2 < 2) {
        return false;
    }

    return true;
}

function comprobarFecha() {
    var fechaStr = document.getElementById('nac').value;
    
    if (fechaStr.includes('/')) {
        var f = fechaStr.split('/');
        
        if (f.length > 3) {
            return false;
        } else {

        }

    } else {
        return false;
    }

    return true;
}

function comprobarEmail() {
    var mail = document.getElementById('mail').value;

    if (mail.includes('@')) {
        var m = mail.split('@');

        if (m.length > 2) { // Mira que no haya mas de una @
            return false;

        } else {

            var usuario = m[0];
            var dominio = m[1];

            // Compruebo la posicion del @ mediante las longitudes de los campos
            if (usuario.length == 0 || dominio.length <= 3) {
                return false;
            } 
        }
    } else {
        return false;
    }

    return true;
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
            return false;
        }

    } else {
        return false;
    }

    return true;
}

// -----------------------------------------------------------------------------------------

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
    var mensajeError = validarErrores()

    if (mensajeError == '') {
        alert('Inicio sesion exitoso');
    } else {
        alert(mensajeError);
    }
}

function validarErrores() {
    var errorMsg = '';

    if (!comprobarNombre()) {
        errorMsg += "\nLongitud de nombre no permitido";
    }

    if (!comprobarApellido()) {
        errorMsg += "\nLongitud de apellidos no permitida";
    }

    if (!comprobarFecha()) {
        errorMsg += "\nFormato de fecha invalido";
    }

    if (!comprobarEmail()) {
        errorMsg += "\nPosición invalida del @, no se encuentra @ o hay más de un @";
    }

    if (!comprobarDNI()) {
        errorMsg += "\nDNI invalido o con formato erroneo";
    }

    return errorMsg;
}
