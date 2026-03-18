'use strict'

const formulario = document.querySelector('#form');
const input1 = formulario.querySelector('#input1');
const input2 = formulario.querySelector('#input2');
const resultado = document.querySelector('#resultado');
const dialogo = document.querySelector('#dialogo');
const caixaResultado = document.querySelector('#caixaResultado');

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    let media = calcularMedia(Number(input1.value), Number(input2.value));
    mostrarResultado(media);
    limparCampos();
        
});

function calcularMedia(valor1, valor2){
    return (((valor1+valor2)/2).toFixed(2));
};

function limparCampos(){
    formulario.reset();
    input1.focus();
};

function mostrarResultado(media){
    let situacao;

    if (media < 7){
        situacao = 'Reprovado';
    } else situacao = 'Aprovado';

    resultado.textContent = media;
    dialogo.textContent = situacao;
    mudarCores(situacao);
};

function mudarCores(situacao){
    caixaResultado.classList.remove('aprovado', 'reprovado')
    caixaResultado.classList.add(situacao.toLowerCase());
};