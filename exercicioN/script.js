/*
Elaborar um programa que efetue a leitura sucessiva de valores numéricos e
apresente no final o total do somatório, a média e o total de valores lidos. O
programa deve fazer as leituras dos valores enquanto o usuário estiver
fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário
fornecer um valor negativo (menor que zero).
*/
alert("Bem-vindo!");
let v=0, a=-1, s=0, m=0;
do{
v=parseInt(prompt("Informe o valor"));
a++
if(v>0){
s=s+v
}
m=s/a


}while(v>0);

document.body.innerHTML+= `<p> o somatório é: ${s} <br>
A Média é: ${m} <br>
0 A quantidade de números digitados é: ${a}
 </p>`