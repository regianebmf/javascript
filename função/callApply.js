function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())  // chama a função diretamente
console.log(produto.getPreco())  // chama a partir de um objeto

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))  // chama a partir da função call
console.log(getPreco.apply(carro, [0.17, '$']))  // chama a partir da função apply

// a diferença é na passagem dos parâmetros