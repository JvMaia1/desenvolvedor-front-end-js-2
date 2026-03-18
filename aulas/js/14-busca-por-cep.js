'use strict'

import { mostrarErro } from "./funcoes.js";

const formulario = document.querySelector('form');

const divGrupoEndereco = formulario.querySelector('#grupo-endereco');
const blocoCep = formulario.querySelector('.cep-bloco');

const inputCep = blocoCep.querySelector('input');
const spanErroCep = blocoCep.querySelector('#erro-cep');
const pResultado = blocoCep.querySelector('#resultado');

const inputLogradouro = divGrupoEndereco.querySelector('#logradouro');
const inputBairro = divGrupoEndereco.querySelector('#bairro');
const inputCidade = divGrupoEndereco.querySelector('#cidade');
const inputEstado = divGrupoEndereco.querySelector('#estado');

let gifAmpulheta = document.createElement('img');

gifAmpulheta.src = './img/ampulheta.gif';
gifAmpulheta.classList.add('ampulheta');

// \D -> captura somento de digitos numéricos
// /g -> indica que a referencia é global (vale pra tudo qeu for digitado)
//na pratica, garante que só vai capturar números
inputCep.addEventListener('input', function(){
    divGrupoEndereco.hidden = true;
    pResultado.className = '';
    pResultado.textContent ='';

    let cepSomenteNumeros = inputCep.value.replace(/\D/g, '');;
    
    validarInputCep(cepSomenteNumeros);
    let cepComMascara = mascararCep(cepSomenteNumeros);
    
    inputCep.value = cepComMascara;

    //começar a buscar o CEP...
    if (cepSomenteNumeros.length == 8){
        buscarCep(cepSomenteNumeros);

    };

});

//Mascarando cep
function mascararCep(cep){
    //Permitir a entrada de somento 8 digitos 
    //slice(0, 8) -> 0 é o ponto de partida a ser cortado
    //e o 8 na pratica é a quantidade total de caracteres, não incluindo o 8
    cep = cep.slice(0, 8)
    //console.log(cepSomenteNumeros);

    //Máscara (aplicar o hifen)
    let CepComMascara;
    if(cep.length >5){
        //colocamos hifen entre os 5 primeiros e os 3 ultimos digitos
        CepComMascara =
        cep.slice(0, 5) + '-' + cep.slice(5);
    } else {
        //sendo apenas os 5 primeiros, mentemos 
        CepComMascara = cep;
    };

    //parte 2: aplicar a mascara no campo (html)
    return CepComMascara;
    
};

//função para buscar o cep
async function buscarCep(cep){
    pResultado.textContent =`Buscando...`
    pResultado.appendChild(gifAmpulheta)
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    try {
        //Abrindo uma comunicação com ma API passando o cep na url
        const repostaApiViaCep = await fetch(url);

        //Após a resposta, transformamos os dados em formato de objeto JSON
        const dados = await repostaApiViaCep.json();

        //colocando os dados nos inputs usando desestruturação de objeto

        mostrarResultado(dados);

    } catch(erro){
        console.error('Erro ao buscar CEP' +erro);
        pResultado.textContent = 'Erro ao buscar o cep';
        pResultado.classList.add('nao-encontrado');
    };

    //Abrir uma comuniucação com a apo, passando o cep em uma irl especial
    //Aguardar a resposta da api
    //Resposta veio? transforma os dados em formato de objeto json
    //Tratar eventuais erros
    //Apresentar os dados no HTML
};

function mostrarResultado(dados){
    const {logradouro, bairro, localidade, uf} = dados;

    inputLogradouro.value = logradouro;
    inputBairro.value = bairro;
    inputCidade.value = localidade;
    inputEstado.value = uf;
    
    if(dados.erro){
        //se o cep não foi encontrado
        pResultado.textContent = 'Cep não encontrado 🤣'
        pResultado.classList.add('nao-encontrado');
        return;
    };

    //Exibimos a div nos campos de endereço
    divGrupoEndereco.hidden = false;
    pResultado.textContent = 'CEP encontrado 😁';
    pResultado.classList.add('sucesso');
};
//função que valida o cep e mostra os erros se houverem
function validarInputCep(cep){
    //validações
    if(cep === ''){
        mostrarErro(inputCep, spanErroCep, 'Digite um cep');
        return;
    };

    if(cep.length !== 8){
        mostrarErro(inputCep, spanErroCep, 'O Cep deve ter 8 numeros');
        return;
    };

    mostrarErro(inputCep, spanErroCep, '');
};

