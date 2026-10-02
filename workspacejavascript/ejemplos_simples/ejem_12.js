let producto = {
    nombre: 'Naranja',
    precio: 5
}

for (let propiedad in producto) {
    console.log(propiedad + ' = ' + producto[propiedad])
}

let nombresPersona = ['Pepe', 'Ángel', 'Marta', 'Antonio']
for (let indice in nombresPersona) {
    console.log(indice + ' = ' + nombresPersona[indice])
}

for (let persona of nombresPersona) {
    console.log(persona)
}