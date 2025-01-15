function somaNotasIguaisOuAcimaDe6(notas) {
 let soma = 0
 notas.forEach(function(nota){
   if (nota >= 6){
     soma = soma += nota
   }
 })
 return soma
}
