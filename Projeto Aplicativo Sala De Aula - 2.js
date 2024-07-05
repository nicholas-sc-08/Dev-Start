function adicionarNota(notas, nota) {
notas.push(nota)
return notas
}

function obterTotalDeNotas(notas) {
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
