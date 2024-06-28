// Implemente a classe Tarefas 
class Tarefas {
    constructor() {
        this.tarefas = [];
    }

    importarCSV(csvString) {
   this.tarefas = csvString.split(", ")
   return this.tarefas
    }
    obterQuantidadeDeTarefas(){
      return this.tarefas.length
    }
    obterPrimeiraTarefa(){
      return this.tarefas[0]
    }
    obterUltimaTarefa(){
      return this.tarefas[this.tarefas.length - 1]
    }
   obterTarefasEmCSV(){
     this.tarefas = this.tarefas.join(", ")
     return this.tarefas.toLowerCase()
   }
}

document.write(`
<style>
.table {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid white;
}

.table thead {
  background-color: #0C54BE;
  color: white;
  border: 1px solid white;
}

.table th {
  padding: 15px;
}
.table td {
  padding: 10px;
}

.table tbody {
  font-size: 18px;
  border: 1px solid white;
}
.table tbody tr:nth-child(2n) {
  background-color: white;
}

.table tbody tr:nth-child(2n + 1) {
  background-color:  #DCE7F7;
}

/*********/

.select {
  padding: 8px 10px;
  border-radius: 6px;
  margin-top: 10px;
}

</style>
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <div>
        <h2><label for="dv-csv-lista-suspensa">Escolha a string CSV</label></h2>
        <select id="dv-csv-lista-suspensa" class="select"> 
            <option value="">Escolha</option>
            <option>Lavar louça, Varrer a casa, Planejar férias</option>
            <option>Apague as luzes, limpe a bicicleta, ligue para o melhor amigo, troque a lâmpada</option>
            <option>Cabelo seco, cozinha limpa</option>
        </select>
    </div><br><br>

    <div>
        <h2>Suas Tarefas</h2>
        <table class="table">
            <thead>
                <tr>
                    <th width="200px">Descrição</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody id="dv-corpo-tabela">
            </tbody>
        </table>
    </div>
</div>
`);

const dvListaSuspensa = document.querySelector("#dv-csv-lista-suspensa");
const dvCorpoTabela = document.querySelector("#dv-corpo-tabela");

const tarefas = new Tarefas();

function formatar() {
    dvCorpoTabela.innerHTML = "";
    tarefas.tarefas.forEach(function (tarefa) {
        dvCorpoTabela.insertAdjacentHTML("beforeend", `<tr>
            <th>Tarefa</th>
            <td>${tarefa}</td>
        </tr>`);
    });
     dvCorpoTabela.insertAdjacentHTML("beforeend", `<tr class="separator">
            <th>Número de tarefas</th>
            <td>${tarefas.obterQuantidadeDeTarefas()}</td>
        </tr>
        <tr>
            <th>Primeira Tarefa</th>
            <td>${tarefas.obterPrimeiraTarefa()}</td>
        </tr>
        <tr>
            <th>Última Tarefa</th>
            <td>${tarefas.obterUltimaTarefa()}</td>
        </tr>
        <tr>
            <th>Tarefas em letras minusculas</th>
            <td>${tarefas.obterTarefasEmCSV()}</td>
        </tr>
        `);
}

dvListaSuspensa.addEventListener("change", event => {
    tarefas.importarCSV(dvListaSuspensa.value)
    formatar();
});
