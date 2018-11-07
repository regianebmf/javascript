function teste1(num) {
    if(num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

// para uma única sentença, vc pode deixar sem {} no if, mas por padrão, melhor colocar
// nesse caso, o 'Final' sempre aparecerá pq ele não está relacionado ao if, já que não está nas chaves

function teste2(num) {
    if(num > 7); {
        console.log(num)
    }
}

teste2(6)
teste2(8)

// quebrou o código com o ; após o if, então o console roda independente do resultado do if