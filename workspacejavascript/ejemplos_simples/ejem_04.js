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
    color: 'verde',
    categoria: {
        tipo_alimento: 'fruta',
        esFresca: true
    }
}


console.table(producto1)