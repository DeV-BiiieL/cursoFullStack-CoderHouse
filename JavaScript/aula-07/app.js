// const fruta = {
//     nome: 'Morango',
//     cor: 'Vermelho',
//     peso: 10,
//     tipo: 'Fruta'

// }
// fruta.nome = 'Uva'

// console.log(fruta)
// console.log(fruta.nome)
// fruta["cor"] = 'roxa'

// console.log(fruta.cor)
function fruta(nome, cor, peso) {
    this.nomeDaFruta = nome,
        this.cor = cor,
        this.peso = peso

    // this.informacaoDaFruta = function () {
    //     console.log(`Nome da fruta é ${this.nomeDaFruta} a cor dela é ${this.cor} e seu peso é ${peso}`)
    // }
}

const fruta1 = new fruta('morango', 'vermelho', 2)
const fruta2 = new fruta('uva', 'roxo', 3)

// fruta1.informacaoDaFruta()
// fruta2.informacaoDaFruta()

// console.log(fruta2.nomeDaFruta.length)
// console.log(fruta2.nomeDaFruta.toUpperCase())
// console.log(fruta2.nomeDaFruta.toLowerCase())



for (const item in fruta1) {
    console.log(`${item} = ${fruta1[item]}`)
}

