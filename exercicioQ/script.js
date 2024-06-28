/*
Elaborar um programa que possibilite calcular a área total de uma residência
(sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O
programa deve solicitar a entrada do nome, a largura e o comprimento de um
determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e
também uma mensagem solicitando ao usuário a confirmação de continuar
calculando novos cômodos. Caso o usuário responda "Cancelar", o programa
deve apresentar o valor total acumulado da área residencial.
*/
alert("Bem-vindo!"); 
let totalArea= 0;
let resposta = '';

do{
      // Solicitar ao usuário o nome, largura e comprimento do cômodo 
      let nome=prompt("Digite o nome do cômodo:");

      let largura, comprimento;
      do{
           largura=parseFloat(prompt(`Digite a largura do cômodo ${nome} (em metros):`));
           if (isNaN(largura) || largura <=0){
                alert ("Por favor, insira um valor válido para a largura.");
           }
  }while (isNaN(largura) || largura <=0);

  do{
        comprimento=parseFloat(prompt(`Digite o comprimento do cômodo ${nome} (em metros):`));
        if(isNaN(comprimento) || comprimento <=0){
            alert("Por favor, insira um valor válido para o comrimento.");
        }
  } while(isNaN(comprimento) || comprimento <=0);

  // Calcular a área do cômmodo
  let area=largura*comprimento;

  // Acumular área total
  totalArea+=area;

  //Exibir a área do cômodo
       document.body.innerHTML+=`<p>\nÁrea do cômodo ${nome}: ${area} metros quadrados </p>`;

  // Perguntar ao usuário se deseja continuar
  resposta=prompt("Deseja calcular outro cômodo? (Digite 'Cancelar' para encerrar)");

}while(resposta.toLowerCase() !=="cancelar");

  // Exibir o valor total acumulado da área residencial
document.body.innerHTML+=`<p>\nÁrea total da residencia: ${totalArea} metros quadrados </p>`;