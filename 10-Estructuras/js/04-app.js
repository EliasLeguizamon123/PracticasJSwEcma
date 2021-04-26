const dinero = 300;
const totalPagar = 300;
const tarjeta = true;
const cheque = true;

if(dinero >= totalPagar){
    console.log('Es posible pagar');
}else if(tarjeta){
    console.log('Tenemos un cheque, podemos pagar');
}else if(tarjeta){
    console.log('Es posible pagar por que tengo la tarjeta');
}else{
    console.log('Fondos insuficientes');
}