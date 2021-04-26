//Sacar multiplos de 3=fizz multiplos de 5=buzz ambos 3 && 5= fizzbuzz
for(let i = 0; i<=100; i++){
    if (i % 15 === 0){
        console.log(`${i} FIZZBUZZ!`);
    }else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    }else if(i % 5 === 0){
        console.log(`${i} Buzz`);
    }
}