var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var fechaA = document.getElementById("fechaAlta");
var fechaB = document.getElementById("fechaBaja");
var ocultos = document.getElementById("ocultos");

var olas = document.getElementById("ola");

const btnAlta = document.getElementById("alta");
const btnMod = document.getElementById("mod");

btnAlta.addEventListener("click", function () {
    ocultos.style.visibility = "visible";
    btnMod.style.visibility = "visible";
});

function _Init() {
    ocultos.style.visibility = "hidden";
    btnMod.style.visibility = "hidden";
}

function formato(fecha) {
    var date = new Date();
    let dd = date.getDay();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}

function cambiarEstado() {
    
}

function validar() {

}

_Init();