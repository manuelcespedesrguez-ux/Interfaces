// Clases usando funciones
/*
class Persona() {
    String nombre;
    int edad;

    public Persona(String nombre, int e) {
        this.nombre = nombre
        edad = e
    }

    public saludar() {
    
    }
}
*/
function Persona(nombre, edad) {
    this.nombre =  nombre
    this.edad = edad

    this.saludar = function (){
        console.log('Hola soy ' + this.nombre + ' y tengo ' + this.edad + ' años')
    }
}

let manolo = new Persona("Sergio", 23)
manolo.saludar()


Persona.prototype.gritar = function() {
    console.log('I AM THE GLOBGLOGABGALAB')
}

manolo.gritar()