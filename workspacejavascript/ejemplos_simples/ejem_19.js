//funciones de orden superior
//dado un array de numeros me quedo solo con los positivos

const numeros = [2, -5, 3, 6, -1];

for (numero of numeros) {
  if (numero > 0) {
    console.log(numero);
  }
}

// paradigma de programacion declarativa
//pilla positivos
const resultado = numeros.filter((num) => num > 0);
console.log(resultado);

//pilla pares
const par = numeros.filter((num) => num % 2 === 0);
console.log(par);

// mostrar el cuadrado de los numeros que hay en el siguiente array
const enteros = [2, 6, 1]
const cuadrados = enteros.map( (num) => num * num )
console.log(cuadrados)

// Mostrar todos estos nombres en mayusculas
const nombres = ["Antonio", "Pepe", "Sergio", "Ángel"]
const nombresMayus = nombres.map( (nom) => nom.toUpperCase() )
console.log(nombresMayus)

// Mostrar los positivos duplicados
const datos = [6, 1, 4, -3, 2, -6]
const datosPosDuplicados = datos
      .filter( (datin) => datin >= 0)
      .map( (datin) => datin * 2)
console.log(datosPosDuplicados)

// Mostrar cada hobbie entre las etiquetas <li> y </li>
const hobbies = ["Beber", "Gamblear", "Programar"]
const hobbiesHTML = hobbies.map( hobbie => `<li>${hobbie}</li>` )
console.log(hobbiesHTML)

// Dados los números, súmalos
const nums = [2, 5, 1, 2] 
const suma = nums.reduce( (num1, num2) => num1 + num2, 0)
console.log(suma)

