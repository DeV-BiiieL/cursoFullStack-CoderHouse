// const entrada = Number(prompt('Insira um numero'))

// while (entrada != 'sair') {
//     alert('O usurario inseriu ' + entrada)
//     entrada = prompt('Inserir um dado')
// }
function factorialize(num) {
    let result = Number(prompt('Insira um numero'));
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
factorialize(5);
console.log(result)