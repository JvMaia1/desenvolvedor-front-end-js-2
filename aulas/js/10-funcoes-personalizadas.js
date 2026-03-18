'use strict'

let separador = '\n---------------------------------------------------\n\n';

//console.log('teste');

//Aprendendo a usar funçoes personalizadas

//função anonima, criada associada a uma constante

const exemplo1 = function(){
    console.log('Olá, sou uma função anonima');
    
};

exemplo1(); //chamar, importante primeiro declarar a função para só depois chama-la

//outra sintaxe possivel, funçao nomeada, criada de forma livre

function exemplo2(){
    console.log('Olá, sou uma função declarada/nomeada');
    
};

exemplo2();// chamada, nessa abordagem, a ordem de declaração/chamada não importa./

//outra sintaxe possivel, 'arrow function'

const exemplo3 = () => {
    console.log('Olá, sou uma arrow function');
    
};

exemplo3();//chamada, importante primeiro declarar a função para só depois chama-la

//funções com parametros

/*aqui trabalhamos com parametros opcionais. é um parametro opcional quando possui um valor padrao definido nos parenteses da função. neste caso, se o valor nao for informado ao chamar a função, passa a valer o valor padrão definido */

console.log(separador+'Função com parâmetro/argumento');

function saudacao(nome='pessoa',sobrenome =''){
    
    console.log('Olá, '+nome+' '+sobrenome);

}

saudacao('Tiago')
saudacao('Michele')
saudacao('Bernardo')
saudacao('Bruno','Mars');

console.log(separador+'Função com retorno');

/* trabalhando com parametros obrigatorios*/

function multiplicar(valor1, valor2){
    //guardando em variavel local
    let resultado = valor1 * valor2;
    return resultado;
    
}

// ação 1: chama a função e passa valores
// ação 2: recebe/mostra o resultado retornado pela função
console.log('Resultado 1: '+multiplicar(10,5));
console.log('Resultado 2: '+multiplicar(200,6));

// Chama a função, passa valores, recebe retorno e guarda 
let resutado3 = multiplicar(100,5);

console.log(resutado3);// aqui apenas mostramos o resultado

console.log(separador+'Simplificando com Arrow function');

//versao 1: sintaxe declarada/nomeada
/*function somar(valor1, valor2){
    return valor1 + valor2;

}
*/

//segunda versao: arrow function
/*
const somar=(valor1,valor2)=> {
    return valor1 + valor2;
}
*/

//versao 3: arrow funcition com retorno implincito
const somar = (valor1, valor2) => valor1 + valor2;
console.log(somar(12, 24));

const alunos = ['Bastianinha','Jalim','Oreia'];

//foreach com função anonima
alunos.forEach(function(aluno){
    console.log(aluno.toUpperCase());
    
});

console.log(separador);

//foreach com arrow function
alunos.forEach((aluno) => console.log(aluno.toUpperCase()));

/* */

console.log(separador+'Formatação de valores monetarios');

function formatarMoeda(valor, moeda = 'BRL', digitos = 3){
    //Determinando os parametros do recurso de formatação
    const opcoes = {
        style: 'currency',
        currency: moeda,
        minimumFractionDigits: digitos
    };
    //Aplicando e retornando o valor formatado
    return new Intl.NumberFormat('pt-br', opcoes).format(valor);
};

let preco = 5000;
let desconto = preco*0.1;//10%
let precoFinal = preco-desconto;

//brincando com os parametros da função
console.log('Preço original: '+formatarMoeda(preco));
console.log('Descoto: '+formatarMoeda(desconto));
console.log('Preço final: '+formatarMoeda(precoFinal, 'USD'));












