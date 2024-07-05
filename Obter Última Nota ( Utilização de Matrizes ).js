function obterUltimaNota(notas) {
 let nota = notas[notas.length - 1]
 return nota
} 
console.log(obterUltimaNota([12, 15, 18])) // 18
console.log(obterUltimaNota([10, 20])) // 20
console.log(obterUltimaNota([8, 13, 20, 3, 14, 5])) // 5
