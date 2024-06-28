/*
Elaborar um programa que apresente os valores de conversão de graus Celsius
em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e
finalizando em 100 graus Celsius. O programa deverá apresentar os valores das
duas temperaturas.
*/
alert("Bem-vindo!");
let C= 10
while(C<=100){
       F=((9*C)+160)/5;
        document.body.innerHTML+=`O valor em ${C} C° equivale à ${F} F°<br>`
 C+=10
} 
