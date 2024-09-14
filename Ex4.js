const faturamento ={
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19848.53,
};
//Calcula o faturamento total.
const faturamentoTotal = faturamento.SP + faturamento.RJ+ faturamento.MG+ faturamento.ES+faturamento.Outros;
//Calcula a Porcentagem.
const calcularPercen = (valorEstado, total)=>(valorEstado/total)*100;
console.log(`Percentual de SP:${calcularPercen(faturamento.SP, faturamentoTotal).toFixed(0)}%`);
console.log(`Percentual de RJ:${calcularPercen(faturamento.RJ,faturamentoTotal).toFixed(0)}%`);
console.log(`Percentual de MG:${calcularPercen(faturamento.MG,faturamentoTotal).toFixed(0)}%`);
console.log(`Percentual de ES:${calcularPercen(faturamento.ES,faturamentoTotal).toFixed(0)}%`);
console.log(`Percentual de Outros:${calcularPercen(faturamento.Outros,faturamentoTotal).toFixed(0)}%`);