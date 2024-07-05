function converterParaFormatoCSV(notas) {
 notas = notas.join(";")
 return notas
}
console.log(converterParaFormatoCSV([10, 15, 13, 19])) // "10;15;13;19"
console.log(converterParaFormatoCSV([7, 13, 20, 15])) // "7;13;20;15"
