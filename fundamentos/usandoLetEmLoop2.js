const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()

// utilizando o let, a variável é tratada como escopo de bloco, portanto pega o valor do momento do loop