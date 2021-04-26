const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}

const puntaje = 500;

// if (puntaje > 300) { // ejecuta este codigo y se olvida de lo demas
//     console.log('New score');
// }else if(puntaje > 400) {
//     console.log('Excelent');
// }

// debe ser asi

// if (puntaje > 400) { // Para ejecutar todo
//     console.log('Excelent');
    
// }else if(puntaje > 300) {
//     console.log('New score');
// }

function revisarPuntaje(){
    if (puntaje > 400) { // Para ejecutar todo
        console.log('Excelent');
        return;
    } 
    if (puntaje > 300) {
        console.log('New score');
        return;
    }
}

revisarPuntaje()