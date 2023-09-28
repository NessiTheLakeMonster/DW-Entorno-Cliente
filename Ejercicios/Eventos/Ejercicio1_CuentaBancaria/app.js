var msgIBAN = document.getElementById('mensajeIBAN');
var msgTarjeta = document.getElementById('mensajeTarjeta');
var msgCVV = document.getElementById('mensajeCVV');
const btn = document.getElementById('boton');

btn.addEventListener('click', function(event) {
    verificar();
})

document.getElementById('tarjeta').addEventListener('change', function(event) {
    document.getElementById('cvv').value = '';
})

function comprobarIBAN() {
    var i = document.getElementById('iban').value;

    let regexIBAN = /^[ES76]|[ES78]/;

    if (!regexIBAN.test(i)) {
        document.getElementById('iban').style.backgroundColor = 'red';
        msgIBAN.textContent = 'IBAN inválido';
    }
}

function comprobarCuenta() {
    var c = document.getElementById('cuenta').value;
    
    let regexCuenta = /^[0-9]{20}$/;

    if (!regexCuenta.test(c)) {
        //msg.textContent = 'Cuenta inválida';
    }
}

function comporbarNTarjeta() {
    var t = document.getElementById('tarjeta').value;

    let regexTarjeta = /^[0-9]{16}/;

    if (!regexTarjeta.test(t)) {
        msgTarjeta.textContent = 'Tarjeta inválida';
    }
}

function comprobarCVV() {
    var cvv = document.getElementById('cvv').value;

    let regexCVV = /^[0-9]{3}/;

    if (!regexCVV.test(cvv)) {
        msgCVV.textContent = 'CVV inválido';
    }
}

function verificar() {
    comprobarIBAN();
    comprobarCuenta();
    comporbarNTarjeta();
    comprobarCVV();
}

