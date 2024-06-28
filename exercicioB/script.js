/*
Apresentar os resultados de uma tabuada de um número qualquer, a qual deve
ser impressa no seguinte formato:
Considerando como exemplo o fornecimento do número 2 para o número
quaisquer, ter-se-ia a seguinte situação:

2 X 1 =2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
(...)
2 X 10 = 20
*/

alert("Bem-vindo!"); 
let num = parseInt(prompt('informe o valor'));

for(let i=0; i<=20; i++){
document.body.innerHTML+= `${num} x ${i}=${num*i} <br>`;
}
