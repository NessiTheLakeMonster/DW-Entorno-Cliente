class Alumno {
    nombre = '';
    asignaturas =  [];

    constructor(nombre) {
        this.nombre = nombre;
    }

    notaMedia() {
        
    }
}

class Profesor {
    nombre = '';
    dni = '';
    alumnos = [];

    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
}

class Asignatura {
    nombre = '';
    nota = 0;

    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

}