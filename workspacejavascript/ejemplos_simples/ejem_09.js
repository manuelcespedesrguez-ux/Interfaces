let datos = ['Pepe', 'Daniel', 'Angel', 'Marta', 'Antonio']
// Esta bien pero podria estar mejor
console.log(datos[2])
// asi nos da el ultimo nombre del array de forma que si no sabemos la longitud del array nos da el ultimo
console.log(datos[datos.length - 1])
// Otra forma
console.log(datos.at(-1))

datos.push('Miguel')

for(let profe of datos) {
    console.log(profe)
}

datos.forEach( function trabaja(profe) {
    console.log(profe)
});

datos.forEach( trabaja )

function trabaja(profe) {
    console.log(profe)
}

let valores = [4, 6, 2, 7]
console.log ( datos.filter(esPositivo) )


// crea una funcion que devuelva true si es positivo y false si es negativo lo que 
// le pasas como parametro
function esPositivo(num) {
    return num >= 0
}


let nombre = ['Juan', 'Maria', 'Luz', 'Ana Belen', 'Rosario', 'Pio']
// mostremos por pantalla las personas cuyo nombre tiene una longitud superior a 4

// usa la funcion de orden superior filter
console.log( 
    nombre.filter( (nombre)  =>  nombre.length > 4  )
)
// crea una funcion para filter el array

// una funcion que determune si el parametro pesado tiene mas de 4 caracteres
