const fila = new Queue();

fila.enqueue("Silas");
fila.enqueue("Sabrina");
fila.enqueue("Levi");
fila.enqueue("Kadmo");

console.log(fila.toString());

console.log(fila.size());
fila.dequeue();

console.log(fila.toString());

console.log(fila.size());