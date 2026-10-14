class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
}

class Alumno extends Persona{
    static maxNumAlumnos = 7
    static {
    // Inicializacion estatica
    console.log('Inicio estático')
    }
    #notaPorDefecto = 4
    constructor(nombre, edad, nota) {
        super(nombre, edad)
        this.nota = nota
    }
}

let estudiante1 = new Alumno("Anxito", 20, 7)
let estudiante2 = new Alumno("Amouranth", 25, 8)

estudiante1.maxNumAlumnos = 55
estudiante1.nota

console.log(estudiante2.maxNumAlumnos)

console.log(estudiante1 instanceof Alumno)
console.log(estudiante1 instanceof Persona)
console.log(estudiante1 instanceof Array)
console.log(estudiante1 instanceof Object)
