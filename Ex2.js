function Fibonacci(num){
    // Variáveis
    let a = 0;
    let b = 1;
    let temp;
    // Verifica os primeiros 2 numeros da sequencia
    if (num === a || num === b){
        return `${num} Pertence á sequencia de fibonacci!!`;
    }
    // Calcula a sequencia
    while(b<num){
        temp = a+b;
        a = b;
        b=temp;
    }
    // Se o numero for igual a B ele pertence á sequencia
    if(b === num){
        return `${num} Pertence á sequencia de fibonacci!!`
    }else{
        return`${num} Não pertence á sequencia :(`
    }
};
// Exemplo
let numero = 8;
console.log(Fibonacci(numero));