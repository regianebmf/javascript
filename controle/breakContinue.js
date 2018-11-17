const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// para o loop

for (y in nums) {
    if (y == 5) {
        continue    // interrompe e vai para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}


externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // colocando um rótulo (externo) ele executa o break no laço do rótulo
        console.log(`Par = ${a},${b}`)
    }
}     // não use, pois é uma estrutura antiga