function obterUltimoCaractere(nomes) {
 nomes = nomes.map(function(string){
   string = string[string.length - 1]
   return string
 })
 return nomes
}

console.log(obterUltimoCaractere(["Alice", "Bruno", "Samuel", "Augusto"])) // ["e", "o", "l", "o"]
console.log(obterUltimoCaractere(["samara", "alexandre", "carla"])) // ["a", "e", "a"]
