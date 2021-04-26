const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('Pago aceptado');
}
else if (!usuario){
    console.log('Usuario no registrado');
} else if (!puedePagar){
    console.log('Saldo insuficiente');
}