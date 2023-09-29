var msgIBAN = document.getElementById('mensajeIBAN');
var msgTarjeta = document.getElementById('mensajeTarjeta');
var msgCVV = document.getElementById('mensajeCVV');

const btn = document.getElementById('boton');
const navTrj = document.getElementById('trj');
const navData = document.getElementById('data');
const navMvm = document.getElementById('mvm');

btn.addEventListener('click', function(event) {
    verificar();
})

 //--------------------------------------------------
navTrj.addEventListener('mouseover', function(event) {
    navTrj.style.backgroundColor = '#555';
})

navTrj.addEventListener('mouseout', function(event) {
    navTrj.style.backgroundColor = '#333';
})

navData.addEventListener('mouseover', function(event) {
    navData.style.backgroundColor = '#555';
})

navData.addEventListener('mouseout', function(event) {
    navData.style.backgroundColor = '#333';
})

navMvm.addEventListener('mouseover', function(event) {
    navMvm.style.backgroundColor = '#555';
})

navMvm.addEventListener('mouseout', function(event) {
    navMvm.style.backgroundColor = '#333';
})
//----------------------------------------------------

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
    msgIBAN.textContent = '';
    document.getElementById('iban').style.backgroundColor = 'white';
    msgTarjeta.textContent = '';
    msgCVV.textContent = '';

    comprobarIBAN();
    comprobarCuenta();
    comporbarNTarjeta();
    comprobarCVV();
}