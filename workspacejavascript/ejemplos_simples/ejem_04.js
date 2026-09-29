let persona1 = {
    nombre: 'Pepe',
    edad: 30,
    esCasado: false
}

console.log(persona1.edad)
console.log(persona1.esCasado)

persona1.esCasado = true

console.log(persona1)

persona1.altura = 1.8

console.table(persona1)

delete persona1.altura




let coche1 = {
    marca: 'Citröen',
    estado: 'parado',
    caracteristicas: {
        elevalunas: true,
        pintura_metalizada: true,
        num_puertas: 4
    },
    arrancar: function() {
        estado: 'arrancado'
    }
}

console.log(coche1.estado)
coche1.arrancar
console.log(coche1.estado)
console.log(coche1.caracteristicas.num_puertas)


let producto1 = {
    modelo: 'pera',
    info: {
        caducidad: '01/11/2026',
        peso: 1
    }
}


let producto2 = producto1

producto1.nombre = 'Jose'

console.log(producto1.nombre)
console.log(producto2.nombre)

let producto3 = { ...producto1 }

producto3.nombre = 'Fresa'

console.log(producto1.nombre) // Va a salir Jose
console.log(producto2.nombre) // Jose de nuevo
console.log(producto3.nombre) // Fresa