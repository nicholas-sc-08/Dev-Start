function localizacaoDaLoja(loja, coordenadas) {
 return `${loja} localiza-se na ${coordenadas[0]}, ${coordenadas[1]}`
} 
console.log(localizacaoDaLoja("O supermercado", [5.123, 2.374]))
console.log(localizacaoDaLoja("A academia", [-2.207, 9.319]))
