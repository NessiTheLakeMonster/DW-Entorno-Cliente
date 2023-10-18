export class Pokemon {
    constructor(id,nombre){
        this.id = id
        this.nombre = nombre
    }

    mostrarInfo(){
        console.log('id: ',this.id, ' nombre: ',this.nombre)
    }
}