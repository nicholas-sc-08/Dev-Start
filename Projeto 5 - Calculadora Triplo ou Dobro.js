function dobro(x) {
    return x * 2
}

function triplo(x) {
    return x * 3
}

function executar(operacao, x) {
    if (operacao === "dobro") {
        return dobro(x)
    }
    if (operacao === "triplo") {
        return triplo(x)
    }
    
    
    console.log(operacao)
    console.log(x)
}

// Exemplos de uso
executar("dobro", 5)
executar("triplo", 8)
