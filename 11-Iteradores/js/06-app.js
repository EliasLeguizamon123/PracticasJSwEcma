//foreach 

// const pendientes = ['Tarea', 'Comer', 'Proyectos', 'Estudiar'];

// pendientes.forEach((pendiente, index)=>{
//     console.log(`${index} : ${pendiente}`)
// })

const carrito = [
    {nombre: 'Monitor 20 Pulgadas', precio: 500},
    {nombre: 'Television', precio: 700},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 150},
    {nombre: 'Celular', precio: 400},
    {nombre: 'Joystick Xbox One', precio: 90}
];

const arreglo = carrito.forEach( producto => producto.nombre );

// carrito.map((producto) => console.log(producto.nombre));

console.log(arreglo);