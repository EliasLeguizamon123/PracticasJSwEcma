// const enlace = document.createElement('A');

// //add text
// enlace.textContent = 'nuevo enlace';

// //add href
// enlace.href = '/nuevo-enlace';

// enlace.target = '_blank';

// console.log(enlace);

// //Seleccionar la navegacion

// const navegacion = document.querySelector('.navegacion');

// // navegacion.appendChild(enlace); //insertar ultimo

// navegacion.insertBefore(enlace, navegacion.children[1]); //insertar antes

//crear un card de forma dinamica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto'
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock'
parrafo2.classList.add('Titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '800$ por persona';
parrafo3.classList.add('precio');

//agregar los children dentro de un div = info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//agregar una imagen tambien
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'

//crear el card
const card = document.createElement('div');
card.classList.add('card')

//asignar la imagen
card.appendChild(imagen);

//asignar la info
card.appendChild(info);

//insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');

contenedor.insertBefore(card, contenedor.children[0])
