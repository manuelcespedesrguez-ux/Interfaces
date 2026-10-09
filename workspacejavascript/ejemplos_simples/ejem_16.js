class Persona {

    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad 
    }

    saludar() {
        console.log('Hola, soy ' + this.nombre + ' y tengo ' + this.edad + ' años.')
    }

}

let rosario = new Persona('Rosadito', 67)
rosario.saludar()