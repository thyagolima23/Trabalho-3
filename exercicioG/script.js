/*
Apresentar os resultados das potências de 3, variando do expoente 0 até o
expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e
elevado a 1 é ele próprio. Deverá ser apresentado, observando a seguinte
definição:
3
0 = 1
31 = 3
32 = 9
(...)
315 14348907
*/
alert("Bem-vindo!"); 

let num=3

for(let i = 0;i<=15;i++){
     document.body.innerHTML+=`<p>${num}<sup>${i}</sup> = ${num**i} </p>`
}