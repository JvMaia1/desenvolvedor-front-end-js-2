'use strict'

const formulario = document.querySelector('#form');
const nomeAluno = formulario.querySelector('#inputNome');
const input1 = formulario.querySelector('#input1');
const input2 = formulario.querySelector('#input2');
const resultado = document.querySelector('#resultado');
const dialogo = document.querySelector('#dialogo');
const listaDeResultados = document.querySelector('#listaDeResultados');

let aluno;

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    aluno = registrarAluno(formatarNome(nomeAluno.value), Number(input1.value), Number(input2.value));
    adicionarALista(aluno, listaDeResultados);
    limparCampos();
        
});

function formatarNome(nome){

    return String(nome).charAt(0).toUpperCase() + String(nome).slice(1);
};

function registrarAluno(nomeAluno, primeiraNota, segundaNota){
    let media = calcularMedia(primeiraNota, segundaNota);
    return {
        nome: nomeAluno,
        nota1: primeiraNota,
        nota2: segundaNota,
        media: media,
        situacao: checarSituacao(media),
    };
};

function calcularMedia(valor1, valor2){
    return (((valor1+valor2)/2).toFixed(2));
};

function checarSituacao (media){
    let situacao;

    if (media < 7){
        situacao = 'Reprovado';
    } else situacao = 'Aprovado';

    return situacao;
};

function limparCampos(){
    formulario.reset();
    input1.focus();
};

function adicionarALista(aluno, lista){
    let item = document.createElement('li');
    item.classList.add(aluno.situacao.toLowerCase());
    item.textContent = `Aluno: ${aluno.nome} - Media: ${aluno.media} - Situação: ${aluno.situacao}`;
    lista.appendChild(item)
    
};
