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

function comprobarDNI() {
    var dni = document.getElementById('dni').value;
    var resto = 0;
    const l = 'TRWAGMYFPDXBNJZSQVHLCKE';

    //8 numeros y 1 letra

    var numeros = dni.substring(0,7);
    var letra = dni.substring(8);

    resto = numeros % 23;

    if (l[resto] != letra) {
        alert('DNI esta mal');
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

}

// ejemplo le pasa el nombre el min y max y que slaga el error
function mensajeError (campo, min, max, msg, nombre) { // mas el nombre del campo
    if (campo.length < min) {
        msg = msg + 'Debe haber un minimo de ' + min + ' en el campo ' + nombre;
        
    }

    alert(msg);
}