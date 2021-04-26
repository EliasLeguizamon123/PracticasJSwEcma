// for( let i = 0; i <= 200; i += 2 ) {
//     console.log(`Numero ${i}`);
// }

// for(let i = 0; i <=20; i ++){
//     if ( i % 2 === 0 ) {
//         console.log(`El nro ${i} es PAR`);
//     } else{
//         console.log(`El nro ${i} es IMPAR`);
//     }
// }

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 700},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 150},
    {nombre: 'Celular', precio: 400},
    {nombre: 'Joystick Xbox One', precio: 90}
]

for(let i =0; i <= carrito.length; i++){
    console.log(carrito[i].nombre);
}