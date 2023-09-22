class Banco {
    nombre = '';
    saldo = 0;

    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    ingresarDinero(dinero) {
        this.saldo += dinero;
    }

    retirarDinero(dinero) {
        this.saldo -= dinero;
    }
}

var cuenta = new Banco('Santander', 1000);
console.log(cuenta.ingresarDinero(30));
console.log(cuenta.retirarDinero(40));