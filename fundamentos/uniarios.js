let num1 = 1
let num2 = 2

num1++ // acrescenta uma unidade ao valor
console.log(num1)
--num1  // pré-fixada - tem prioridade numa expressão
console.log(num1)

console.log(++num1 === num2--) // a somatória foi feita antes da subtração, então no momento da comparação os dois são iguais
console.log(num1 === num2)