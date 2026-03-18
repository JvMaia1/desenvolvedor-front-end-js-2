'use strict'

let separador = '---------------------------------------\n\n';
//alert(separador+'Ok');

/* simulando chat bot*/

//alert('Boas vindas ao ChatBot da empresa XYZ\nComo posso ajudar? Escolha');
//alert('1. Financeiro\n2. Vendas\n3. Suporte\n');

let opcao; //entrada do usuario
opcao = prompt('Boas vindas ao ChatBot da empresa XYZ\nComo posso ajudar? Escolha:\n1. Financeiro\n2. Vendas\n3. Suporte\n')

switch(opcao){
    case 1:
        alert('== Financeiro ==');
        alert('Se estiver devendo vai pro serasa...');
        break;
    
    case 2:
        alert('== Vendas ==');
        alert(' Aproveite a promoção, Ayr frier por apenas 199,00R$!');   
        alert('Qual produto lhe interessa?');
        break;
    
    case 3:
        alert('== Suporte == ');
        alert('Digite sua duvida e em breve um atendente entrara em contato..');
        break;
    
    default:
        alert('Não compreendi, aguarde e um dos nosso atendentes ira te ajudar.');
        break;
        
 }

 