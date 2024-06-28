let notas = [10, 5, 15, 20]

let valorInicial = 0;

let soma = notas.reduce(function(total, atual) {
    console.log(`Total é ${total}`)
    console.log(`Atual é ${atual}`)
    console.log("---")
    return total + atual
}, valorInicial);

console.log(`A soma é ${soma}`)
