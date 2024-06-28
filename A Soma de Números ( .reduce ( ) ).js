function somaNumeros(numeros) {
numeros = numeros.reduce(function(a, b){
  return a + b
})
return numeros
}

console.log(somaNumeros([10, 20, 30])) // 60
console.log(somaNumeros([2, 4, 2, 10])) // 18
