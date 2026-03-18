'use strict'

/*
Operadores logicos:

&& -> e (and)
|| -> ou (or)
! -> negação (not)

*/

const separador = '----------------------------------\n\n';
console.log('Exemplo &&');

//Banco de dados ficticio
const senhaBd = 'senhadificil123';
const loginBd = 'username.raro';

//Dados de login ficticios
let senhaInformada = 'senhadificil123';
let loginInformado = 'username.raro';

//Testes

senhaInformada = '';
loginInformado = '';

//Condicional && para confirmar login
if ((loginInformado === loginBd) && (senhaInformada === senhaBd)){
    console.log('Logado com sucesso');

} else { 
    console.log('Login ou senha invalidos');
    
}

console.log(separador +'Exempllo ||');


let feriado = true, fimDeSemana = true;

//Basta uma das condiçoes serem verdadeiras
if(feriado || fimDeSemana){
    //se for fim de semana ou feriado não tem aula
    console.log('Não tem aula');
    
    //Se não for nenhum dos dois hávera aula
} else {
    console.log('Tem aula');
    
}

console.log(separador +'nExemplo !');

let estaChovendo = true;

//Se não esta chovendo, vou para a praia
if(!estaChovendo){
    console.log('Beleza vou pra praia☀️😎');
    
} else {
    console.log('Nessa chuva vou ficar em casa deitado😴');

}

//--------------------------------------------------------------------------------------
console.log(separador+'Exercicio 1:');

let eligibilidadeParaEntrar;

const visitante = {
    nome: 'Ronaldo',
    idade: 18,
    tipoDeConvidado: 'comum'
}

const elegivel = !(visitante.idade < 18) && (visitante.tipoDeConvidado === 'vip' || visitante.tipoDeConvidado === 'comum');

if (elegivel){
    eligibilidadeParaEntrar = 'Bem vindo '+visitante.nome+', você ';
    console.log(`Aqui esta sua pulseira ${visitante.tipoDeConvidado}`);
    
} else {
    eligibilidadeParaEntrar = 'Desculpe,'+visitante.nome+', você não ';
    
}

console.log(`${eligibilidadeParaEntrar} pode entrar no evento.`);


