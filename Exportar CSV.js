function exportaCSV(usuarios) {
 usuarios = usuarios.join(", ")
 return usuarios
}

console.log(exportaCSV(["Alice", "Bruno", "Sara", "Augusto"])) // "Alice, Bruno, Sara, Augusto"
console.log(exportaCSV(["Samuel", "Alexandre", "Carla"])) // "Samuel, Alexandre, Carla"
