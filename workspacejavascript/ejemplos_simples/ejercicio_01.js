// crea un array de alumnos, cada alumno tiene un nombre y una nota
let alumnos = [
    {nombre: 'Juan', nota: 5},
    {nombre: 'Jose', nota: 4},
    {nombre: 'Ana', nota: 2}

]

// Añade un nuevi alumno 'Roberto' con nota 2.5
alumnos.push( {nombre: 'Roberto', nota:2.5} )

// Muestra la nota de ana 
console.log(alumnos.at(2).nota)

//  Muestra cuantos alumnos (numero) hay
console.log(alumnos.length)

// Crea una funcion que admita un array de alumnos como param
// Nos devuelve el nº de alumnos aprobados (usa un for)
function numeroAprobado(alumnos) {
    let contador = 0
    for (let alumno of alumnos) {
        if(alumno.nota >= 5) {
            contador++
        }
    }
    return contador
}

console.log(numeroAprobado(alumnos))


// programacion declarativa
console.log( alumnos.filter( a => a.nota>=5).length )

// nota media alumnos
// Crea una funcion que admita un array de alumnos
// y devuelva la nota media de todos ellos
function notaMedia(alumnos) {
    let suma = 0
    for(let alumno of alumnos) {
        suma += alumno.nota
    }
    return suma / alumnos.length
}

console.log(notaMedia(alumnos))

// Programacion deckarativa
const media = alumnos.reduce((total, alumno) => total + alumno.nota, 0) / alumnos.length
console.log(media)