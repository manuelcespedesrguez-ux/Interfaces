// eslint-disable-next-line no-useless-assignment
let edad: number = 20

const nombre: string = "Manolo"

edad = 60
console.log(nombre)
console.log(edad)

const numeros: number[] = [1, 2, 3, 7, ]
console.log(numeros)

const nombres: [string, boolean, number] = ['Manolo', true, 20]
console.log(nombres)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const valor: any = "esto es una frase"
console.log(valor)


const valorDesconocido: unknown = 20
console.log(valorDesconocido)

function suma(a:number, b:number): number{
    return a + b
}

suma(10, 20)

function saludar(): void{
    console.log("Hola, un saludo de Cuotaman")
}
console.log(saludar)

/* function error(mensaje:string): never{
    throw new Error(mensaje)
}
*/

const valorNulo: null = null
const valorIndefinido: undefined = undefined

console.log(valorNulo)
console.log(valorIndefinido)

// Altura ya es de tipo number por interferencia de datos
const altura: number = 180
console.log(altura)

function restar(a:number, b:number){
    return a-b
}
restar(10,20)

// Con esto puede ser tanto string como numero
const clavePrimaria: string | number = 'Abc1234'
console.log(clavePrimaria)

const estadoCivil: "casado" | "soltero" | "viudo" = 'soltero'
console.log(estadoCivil)

function saludar2(nombre:string, apodo?:string){
    if (apodo) {   
        return `Hola ${nombre} (${apodo})`
    } else {
        return `Hola ${nombre}`
    }
}
saludar2("Daniel", "CuotaMan")
saludar2("Daniel")

function isEven(number:number) {
    return number % 2 === 0
}
isEven(6)

/* function combinar(a:number, b:number);
function combinar(a:string, b:string);
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function combinar(a:any, b:any) {
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    }

    if (typeof a === "string" && typeof b === "string"){
        return a + b
    }
}

combinar(3, 4)
combinar("a", "b")

const persona: {nombre:string, edad:number, genero?:string} = {
    nombre: "Juan",
    edad: 20,
    genero: "Masculino"
}
console.log(persona)

interface Mascota{
    nombre: string,
    edad: number,
    especie: "Perro" | "Gato" | "Pájaro",
    raza?: string,
    saltar(centimetros:number): void
}

const mascota: Mascota = {
    nombre: "Pipo",
    edad: 7,
    especie: "Perro",
    raza: "Mastín",
    saltar: (centimetros) => console.log("Salto alto, " + centimetros)
}
console.log(mascota.nombre)
mascota.saltar(10)

class Moto {
    public cilindrada: number
    private marca: string
    protected cantidadGasolina: number

    constructor(marca: string){
        this.cilindrada = 125
        this.marca = marca
        this.cantidadGasolina = 0
    }

    public acelerar():void {
        // imagina que acelero
    }
}

const miMoto = new Moto('Honda')
console.log(miMoto)

interface Volador {
    volar(): void
}

interface Fumador {
    fumar(): void
}

interface Morible {
    morir():void
}

abstract class Animal implements Morible {
    abstract morir(): void
}

class Gaviota implements Volador, Fumador, Morible {
    volar() {
        console.log("Vuela, vuela ...")
    }
    fumar(){
        console.log("La gaviota fuma un peta")
    }
    morir() {
        console.log("MUERE!!!")
    }
}

console.log(new Gaviota())

function matar(cosa: Animal) {
    cosa.morir()
}
matar(new Gaviota())