console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 4))  // para function expression obriatoriamente a chamada deve ser após a declaração da função

// named function expression - pouco utilizada
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))  // para named function expression obriatoriamente a chamada deve ser após a declaração da função