// Definição da classe
class Estatistica {
    constructor(nota){
        this.nota = nota;
    }
    obterNumeroTotalDeNotas(){
        return this.nota.length;
    }
    obterPrimeiraNota(){
        return this.nota[0];
    }
    obterUltimaNota(){
        return this.nota[this.nota.length - 1];
    }
    obterSomaDasNotas(){
        this.nota = this.nota.reduce(function(a, b){
            return a + b
        })
        return this.nota
    }
    obterNotaMedia(){
        let some = 0;
        let total = 0;
        this.nota.forEach(function(nota){
            some = some += nota
            total++
        })
        return some / total
    }
    exportarCsv(){
        return this.nota.join(", ")
    }
}
