const numero = Number(prompt('Digite um número:'))

if (numero >= 10 && numero <= 50) {
    console.alert('Está entre 10 e 50 ' + numero)
} else {
    console.log('Esta fora do intervalo ' + numero)
}