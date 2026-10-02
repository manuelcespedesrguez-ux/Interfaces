let nivel = "pro"
switch(nivel) {
    case 'basico': console.log('nivel basico')
    break
    case 'pro': console.log('nivel pro')
    break
    case 'vip': console.log('nivel vip')
    break;
    default: console.log('Error, el nivel no es válido')
}
let num = 1
while (num <= 5) {
    console.log(num)
    num++
}

let cont = 1
do {
    console.log(cont)
    cont++
} while (cont <= 5)

for (let i = 1; i <= 5; i++) {
    console.log(i)
}