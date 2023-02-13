function buildMultiplicationTable(num) {
    const maxLength = Math.pow(num, 2).toString().length
    let table = ''

    for (let i = 0; i <= num; i++) {
        if (i === 0) {
            table += `${' '.padStart(maxLength)} `
        } else {
            table += `${i.toString().padStart(maxLength)} `
        }
    }

    table += '\n'

    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= num; j++) {
            const currentNumber = `${(i * j).toString().padStart(maxLength)} `

            if (j == 1) {
                table += currentNumber + currentNumber
            } else {
                table += currentNumber
            }
        }

        table += '\n'
    }

    return table
}

console.log(buildMultiplicationTable(10))