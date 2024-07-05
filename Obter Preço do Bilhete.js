function obterPrecoDoBilhete(idade) {
let preco = 4000
if (idade < 18 || idade > 60) {
  return preco / 2
}
else {
  return preco
}
}

console.log(obterPrecoDoBilhete(15)) // 2000
console.log(obterPrecoDoBilhete(30)) // 4000
console.log(obterPrecoDoBilhete(45)) // 4000
console.log(obterPrecoDoBilhete(75)) // 2000
