// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// quando coloca como constante seu objeto vai estar sempre atribuído a um endereço fixo, o valor pode mudar.
// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa) // está congelando o objeto pessoa, não consegue mais alterar o objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)