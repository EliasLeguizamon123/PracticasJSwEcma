const producto1 = '                        Monitor de 20 pulgadas                             ';

console.log(producto1);
console.log(producto1.length);

//Elminiar espacios en blanco al principio
console.log(producto1.trimStart());
//Elminiar espacios en blanco al final
console.log(producto1.trimEnd());

//Ambos
console.log(producto1.trimStart().trimEnd());
// o pusede ser
console.log(producto1.trim());

