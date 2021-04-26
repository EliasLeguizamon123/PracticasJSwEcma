//For Of
const pendientes = ['Tarea', 'Comer', 'Proyectos', 'Estudiar'];

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 700},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 150},
    {nombre: 'Celular', precio: 400},
    {nombre: 'Joystick Xbox One', precio: 90}
];

for( let pendiente of pendientes ){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre);
}