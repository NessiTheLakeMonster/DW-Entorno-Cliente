export class Pokemon {
    constructor(id, nombre) {
        this.id = id
        this.nombre = nombre
        this.movimientos = []
    }

    mostrarInfo() {
        console.log('id: ', this.id, ' nombre: ', this.nombre)
    }
}

export class Movimiento {
    constructor(nombre) {
        this.nombre = nombre
    }
}