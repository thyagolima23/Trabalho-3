/*
Elaborar um programa que apresente como resultado dos valores de uma
potência de uma base qualquer elevada a um expoente qualquer, ou seja, de
B^E, em que B é o valor da base e E o valor do expoente começando do zero.
Deve ser considerado que :

● qualquer número elevado a zero é 1,
● qualquer número elevado a 1 é ele próprio.
Considere apenas a entrada de valores inteiros e positivos.
*/
alert("Bem-vindo!");

      let base = parseInt(prompt("Insira a base (B) :"));
      let expoente = parseInt(prompt("Insira o expoente (E):"));

      if (isNaN(base)  || isNaN(expoente)  || base < 0  || expoente < 0){
          document.body.innerHTML+="Por favor, insira números inteiros e positivos.";

      }else{
      let potencia = 1;
      let contador = 0;

      // Usar um loop while para calcular B^E para cada valor de E de 0 até E
      while (contador <= expoente){
              // Imprimir o resultado de B^contador
              document.body.innerHTML+=`<p>${base}<sup>${contador}</sup> = ${potencia}</p>`;
              potencia = potencia * base;
              contador++;
 }
} 