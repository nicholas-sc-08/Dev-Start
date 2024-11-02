function obterMesagemVotacao(idade) {
    if (idade >= 16) {
        return "Você está autorizado a votar"
    }
    return "Você não está autorizado a votar"
}
console.log(obterMesagemVotacao(20))
console.log(obterMesagemVotacao(10))
//if sem else (com mais de uma opção) só é conciderado válido dentro de uma função, se tiver fora de uma função e o if tiver mais de uma opção será obrigatoriamente o uso do else. 
