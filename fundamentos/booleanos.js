let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros ...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // pega o valor, não se a atribuição deu certo

console.log('os falsos ....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar ....')
console.log(!!('' || null || 0 || ' '))  // se pelo menos um valor for verdadeiro, ele retorna verdadeiro

let nome = ''

console.log(nome || 'Desconhecido') // como o nome está vazio, ele vai retornar o valor verdadeiro que é a palavra Desconhecido