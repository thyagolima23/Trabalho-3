/*
Elaborar um programa que apresente como resultado o valor da fatorial dos
valores ímpares situados na faixa numérica de 1 a 10.
*/
alert("Bem-vindo!");
let i=1, j=0, fat=0;
do{ //abre chave do while com i
if(i%2==1){ //abre chave do if
  fat=1;
  j=1;
 do{ //abre chave do while com j
  fat=fat*j
  j++;
 } while(j<=i)
document.body.innerHTML+= `<p> o valor da fatorial dos valores ímpares é ${fat}</p>` 
}
i++
}while(i<=10)
