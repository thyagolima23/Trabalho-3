/*
Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a
20. Para verificar se o número é ímpar, efetue dentro do laço a verificação lógica
desta condição com a condicional if (if), verificando se o número é ímpar; sendo,
mostre-o, não sendo, passe para o próximo passo.
*/
alert("Bem-vindo!");
 // Loop de 0 a 20
 for(let i = 0; i <= 20; i++) {
       // Verifica se o número é ímpar
       if(i % 2 == 1) {
          alert(i); // Mostra o número ímpar;
       }
} 