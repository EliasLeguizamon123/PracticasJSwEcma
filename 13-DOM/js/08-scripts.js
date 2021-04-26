//Traversing the DOM

const navegacion = document.querySelector('nav.navegacion');
const card = document.querySelector('.card');

// console.log(navegacion.childNodes); //Los espacios en blanco se convierten en elementos
// console.log(navegacion.children); //Lista los elementos sin espacios en blanco

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

// console.log(card.children[1].children[1].textContent);

// card.children[1].children[1].textContent = 'Utilizo Traversing the DOM para modificar este texto'

// card.children[0].src = 'img/hacer3.jpg'
// console.log(card.children[0]);

//Traversing del hijo al padre

// console.log(card.parentElement.parentElement); //se pueden agregar los parent element que sean necesarios

// console.log(card);
// console.log(card.nextElementSibling.nextElementSibling); //Selecciona el siguiente elemento

const ultimoCard = document.querySelector('.card:nth-child(4)'); //Seleccionar cualquier elemento dentro de las etiquetas card

console.log(ultimoCard.previousElementSibling); //Selecciona el elemento previo