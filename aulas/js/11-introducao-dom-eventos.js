'use strict'

console.log('Dom e eventos');

//selecionando os elementos
const bBotaoSoma = document.querySelector('#somar');
const pValor = document .querySelector('#valor');
const bBotaoSubtrair = document.querySelector('#subtrair');

let contador = 0;


//Função para checar valor do contador pra nao ficar negativo
function checarValor (contador){
    if (contador <= 0){
        bBotaoSubtrair.disabled = true;
    } else if (contador >= 5){
        bBotaoSoma.disabled = true;
    } else {
        bBotaoSubtrair.disabled = false, bBotaoSoma.disabled = false
    };
    
};

checarValor(contador);

//Monitorando o evento de click nos botões e alterando o valor
bBotaoSoma.addEventListener('click', function(){
    contador ++;
    pValor.textContent = contador;
    checarValor(contador);
    
});

bBotaoSubtrair.addEventListener('click', function(){
    contador --;
    pValor.textContent = contador;
    checarValor(contador);
    
});

//Fazendo com que o texto possa sumir ou aparecer dependendo do estado atual

const pTextoQueSome = document.querySelector('#textoQueSome');
const bMostrarEsconder = document.querySelector('#mostrarOuEsconder');

bMostrarEsconder.addEventListener('click', function(){
    pTextoQueSome.classList.toggle('oculto'); 

    if(pTextoQueSome.classList.contains('oculto')){
        bMostrarEsconder.textContent = 'Mostrar';
    
    } else bMostrarEsconder.textContent = 'Esconder';

});

//Exemplo 3
//Fazendo com que a imagem mude de acordo com o botão

const imgFoto = document.querySelector("#foto");

const botoesDeFoto = document.querySelectorAll("[data-imagem]");

for (const botao of botoesDeFoto){
    botao.addEventListener("click", function(){
        const imagem = botao.getAttribute("data-imagem");
        const textoAlt = botao.dataset.alt;

        imgFoto.src = imagem;
        imgFoto.setAttribute('alt', textoAlt);
})};

//exemplo 4
//fazendo com que o contador de caracteres conte

const caixaDeTexto = document.querySelector('#mensagem');
const spanContador = document.querySelector('#contador');
const contadorRegressivo = document.querySelector("#regressivo");

caixaDeTexto.addEventListener('input', function(){
    let totalCaracteres = caixaDeTexto.value.length;
    let quantidadeMaxima = caixaDeTexto.getAttribute("maxlength");

    spanContador.textContent = totalCaracteres;
    contadorRegressivo.textContent = (quantidadeMaxima - totalCaracteres);

    if(totalCaracteres >=100){
        spanContador.classList.add('excesso');
        caixaDeTexto.style.border = "solid 4px red";
        caixaDeTexto.style.background = "pink";

    } else {
        spanContador.classList.remove('excesso')
        caixaDeTexto.style.border = "";
        caixaDeTexto.style.background = "";

    };
});

//exemplo 5
//detectando a tecla pressionada

const pTecla = document.querySelector('#tecla b');

document.addEventListener('keyup', function(event){
    const teclaPressionada = event.key;
    pTecla.textContent = teclaPressionada;

    if(teclaPressionada === 'a'){
        pTecla.style.color = 'purple';
    } else {
        pTecla.style.color = '';
    };
});

//exemplo 6
//fazendo a lista de taferas se tornar funcional
//selecionando a div para melhorar o desempenho

const divRelacaoTarefas = document.querySelector('#relacao-tarefas');
const inputTarefa = divRelacaoTarefas.querySelector('#tarefa');
const spanTotalTarefas = divRelacaoTarefas.querySelector('#total');
const botaoAdicionar = divRelacaoTarefas.querySelector('#adicionar');
const listaTarefas = divRelacaoTarefas.querySelector('#lista');

botaoAdicionar.addEventListener('click', function(){
    //Capturar valor digitado
    let textoTarefa = inputTarefa.value;

    if (textoTarefa != ''){
        let item = document.createElement('li');

        item.textContent = textoTarefa;
        listaTarefas.appendChild(item);

        spanTotalTarefas.textContent = listaTarefas.children.length;

        inputTarefa.value ='';
        inputTarefa.focus();

        item.tabIndex = 0;

        item.addEventListener('keypress', function(event){
        if (event.key === 'Enter' || event.key === ' ' || event.keycode === 32){
            item.classList.toggle('feito');
            };
        });

        item.addEventListener('click', function(){
            item.classList.toggle('feito');
        });

    } else return;
    
});

//mapeamento do evento: detecta o enter e simula um click no botao adicionar

inputTarefa.addEventListener('keypress', function(event){
    if (event.key == 'Enter'){
        botaoAdicionar.click();
    };
});

//exemlo 7
//tornando a barra de progresso funcional

const secaoProgresso = document.querySelector('#progresso');
const barraProgresso = secaoProgresso.querySelector('#barra');
const bCarregar = secaoProgresso.querySelector('#carregar');
const bLimpar = secaoProgresso.querySelector('#limpar');

bCarregar.addEventListener('click', function(){
    barraProgresso.value +=10;
    
    if (barraProgresso.value >= 100){
        barraProgresso.classList.add('concluido');
    };
});


bLimpar.addEventListener('click', function(){
    barraProgresso.value =0;
    barraProgresso.classList.remove('concluido');
});

//exemplo 8
//criando formulario

const campoFormulario = document.querySelector('#form-exemplo');
const inputNome = campoFormulario.querySelector('#campo-nome');
const inputIdade = campoFormulario.querySelector('#campo-idade');
const outputFormulario = document.querySelector('#saida');
//const bEnviarFormulario = campoFormulario.querySelector('')

campoFormulario.addEventListener('submit', function(event){
    event.preventDefault();
    const nomeBruto = (inputNome.value).trim().toLowerCase();// converte em minusculo e remove os espaços no começo e fim para formataçao
    const nomeFormatado = nomeBruto
        .split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
        .join(' ');
    const idade = Number(inputIdade.value); //converte para numero a idade automaticamente

    outputFormulario.textContent = (`Olá, ${nomeFormatado}, você tem ${idade} anos`)

    campoFormulario.reset()
    inputNome.focus()
});

//exemplo 9 
//fazendo a senha ser exibida

function esconderSenha(){
    inputSenha.type = 'password';
    botaoMostrar.textContent= '👁 Mostrar senha';
};

const inputSenha = document.querySelector('#senha');
const botaoMostrar = document.querySelector('#mostrar-senha');

botaoMostrar.addEventListener('pointerdown', function(){
    inputSenha.type = 'text';
    botaoMostrar.textContent = 'Solte para esconder';
});


botaoMostrar.addEventListener('pointerup', function(){
    esconderSenha();
});

botaoMostrar.addEventListener('pointerleave', function(){
    esconderSenha();
});
