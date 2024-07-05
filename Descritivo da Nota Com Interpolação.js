function obterDescritivoDaNota(nota, notaMaisAlta) {
 return `Você tem ${nota} como nota. Ou seja, ${notaMaisAlta - nota} pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido ${nota + 3}.`
}
console.log(obterDescritivoDaNota(10, 18)) // Você tem 10 como nota. Ou seja, 8 pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido 13.
console.log(obterDescritivoDaNota(15, 20)) // Você tem 15 como nota. Ou seja, 5 pontos a menos do que a nota mais alta. Se você tivesse estudado mais, poderia ter conseguido 18.
