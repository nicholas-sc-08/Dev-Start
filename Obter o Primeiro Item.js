function obterOPrimeiroItem(itens) {
 itens = itens[0]
 return itens
}

console.log(obterOPrimeiroItem(["Leite"])) // "Leite"
console.log(obterOPrimeiroItem(["Tomate", "Queijo"])) // "Tomate"
console.log(obterOPrimeiroItem([])) // undefined
