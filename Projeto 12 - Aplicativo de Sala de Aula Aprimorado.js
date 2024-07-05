function adicionarNota(notas, nota) {
  notas.push(nota)
  return notas
}

function obterNumeroDeTestes(notas) {
 notas = notas.length
 return notas
}

function obterPrimeiraNota(notas) {
 notas = notas[0]
 return notas
}

function obterUltimaNota(notas) {
 notas = notas[notas.length - 1]
 return notas
}

function aProvaEhMuitoFacil(notas) {
 notas = notas.includes(20)
 return notas
}

function aNotaExiste(notas, nota) {
 notas = notas.includes(nota)
 return notas
}

function exportarCSV(notas) {
 notas = notas.join(", ")
 return notas
}
