// Classe Tarefa
class Tarefa {
    constructor(titulo, estaCompleta) {
        this.titulo = titulo;
        this.estaCompleta = estaCompleta;
    }

    obterFormatacao() {
        let status = "";
        if (this.estaCompleta) {
            status = "✅";
        } else {
            status = "⏳";
        }
        return `[${status}] ${this.titulo}`;
    }
}

// Implemente a classe TarefaMarcar
// Não se esqueça de herdar da classe Tarefa
class TarefaMarcar extends Tarefa {
   marcarComoConcluida(){
       
   }
    
}

// Uso das classes
let tarefa = new Tarefa("Aprendizagem de Programação", false);
console.log(tarefa.obterFormatacao());

let tarefaMarcar = new TarefaMarcar("Aspirar o chão", false);
console.log(tarefaMarcar.obterFormatacao());

tarefaMarcar.marcarComoConcluida();

console.log(tarefaMarcar); // estaCompleta deve ser true
console.log(tarefaMarcar.obterFormatacao());
