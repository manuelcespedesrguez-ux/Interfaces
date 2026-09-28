let saludo = "Hola"
let saludo2 = "Hola"
let saludo3 = "Hola"

console.log(saludo3)


let entero = 73
let decimal = 3.1415
let negativo = -10

console.log(decimal)


let casada = false
casada = true

console.log(casada)


let nulo = null
console.log(nulo)

let noDefinido = undefined
console.log(undefined)


let cosa // undefined
console.log(cosa)


// JSON -> javascript object notation
// objeto de js
let estudianteManolo = {
    nombre: 'Manolo',
    edad: 22,
    aprobado: false
}
// si fuera un json
/* 
{
    "nombre": "Manolo",
    "edad": 22,
    "aprobado": false
} 
*/

// array
let enteros = [1, 4, 7, 9]
let cosas = ["hola", false, 7, 9.4, { nombre: 'Jose', edad: 23 }]

console.log(cosas[2])

// funciones

function saludo() {
    return 'Hola que tal?'
}

let saludo_2 = () => {
    return 'Hola que tal'
}

// symbol 
// bigint

let valor = 6
let valor_textual = String(valor)  // "6"

let texto = "22"
let valor_numerico = Number(texto) // 22