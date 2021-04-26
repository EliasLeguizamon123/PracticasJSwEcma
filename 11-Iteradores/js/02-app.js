// for( let i = 0; i <= 10; i ++ ) {
//     if (i === 5) {
//         console.log('Este es el nro 5');
//         break;
//     }
//     console.log(`Numero ${i}`);
// }

// for( let i = 0; i <= 10; i ++ ) {
//     if (i === 5) {
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Numero ${i}`);
// }

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 700},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 150, descuento: true},
    {nombre: 'Celular', precio: 400},
    {nombre: 'Joystick Xbox One', precio: 90}
];

for(let i = 0; i < carrito.length; i++){
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}