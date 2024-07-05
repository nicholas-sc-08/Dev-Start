function obtenhaMensagem(numero){
 if (numero < 0) {
   return "Número inválido"
 }
 if (numero === 0) {
   return "Você não tem nenhum item em sua lista de compras"
 } 
 if (numero === 1) {
   return "Você tem 1 item em sua lista de compras"
 } 
 if (numero > 1) {
   return "Você tem mais de 1 item em sua lista de compras"
 }
}
