'use strict';

/**
 * =========================================================
 *  NÚCLEO DA APLICAÇÃO (NAVEGAÇÃO E CONSOLE VIRTUAL)
 * =========================================================
 */

// Virtual Console para capturar console.logs e mostrar na tela
const consoleOutput = document.getElementById('console-logs');
const virtualConsole = document.getElementById('virtual-console');
const originalConsoleLog = console.log;

console.log = function(...args) {
    originalConsoleLog.apply(console, args);
    let msg = args.map(a => (typeof a === 'object' ? JSON.stringify(a) : a)).join(' ');
    let p = document.createElement('p');
    p.textContent = `> ${msg}`;
    consoleOutput.appendChild(p);
    virtualConsole.style.display = 'block';
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
};

function clearConsole() {
    consoleOutput.innerHTML = '';
}

// Navegação da Sidebar
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.lesson-btn');
    const sections = document.querySelectorAll('.lesson-section');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active de todos botoes
            buttons.forEach(b => b.classList.remove('active'));
            // Adiciona no clicado
            btn.classList.add('active');

            // Esconde todas sessoes
            sections.forEach(s => s.classList.remove('active'));
            // Mostra a sessao alvo
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Limpa o console virtual ao trocar de aba
            clearConsole();
            virtualConsole.style.display = 'none';
        });
    });

    // Inicia os listeners baseados no DOM persistente das aulas 11, 12 e Extra
    iniciarAula11();
    iniciarAula12();
    iniciarAulaExtra();
});

/**
 * =========================================================
 *  LÓGICA DAS AULAS 01 A 10 (Sob Demanda)
 * =========================================================
 */

function executarAula01() {
    clearConsole();
    console.log("Olá, mundo!"); // Comando e saida para o console 
    let ano = 2026;
    const aluno = "João";
    console.log(ano);
    console.log(aluno);
    
    let x = 21, y = 8, soma = x+y, subtracao = x-y, multiplicacao = x*y, divisao = Number((x/y).toFixed(1));
    console.log(`soma = ${soma}, subtração = ${subtracao}, multiplicação = ${multiplicacao}, divisão = ${divisao}.`);
    
    console.log("Organizando os valores em ordem crescente:");
    let index = [soma, subtracao, multiplicacao, divisao];
    index = index.sort((a, b) => a - b);
    index.forEach(item => console.log(item));

    let a = 100, b = 200, c = 300;
    let media = (a + b + c) / 3;
    console.log(`A média de ${a}, ${b} e ${c} é: ${media}`);
    console.log(`O aluno ${aluno} esta estudando programação no ano de ${ano}.`);
}

function executarAula02() {
    clearConsole();
    let uc = 1;
    let competencia = "Front end com JavaScript";
    console.log(`Estamos estudando na UC${uc}, e a materia é ${competencia}.`);
}

function executarAula03() {
    clearConsole();
    const jogos =  ['God of war 3', 'Minecraft', 'Forza horizon','Katana Zero',`The Witcher 3`,`Demon souls`,`Xadrez`];
    console.log(jogos);
    console.log(`${jogos[0]}, é um esclusivo de playstation`);
    console.log(jogos[1]);
    
    const caracteristicas = [`é um esclusivo de playstation`, `é o jogo mais vendido da historia`, `é um jogo de Xbox`, `é um jogo indie`,`é o maior jogo da saga`,`é o primeiro jogo do genero souls`,`é o mais antigo dentre esses jogos`];
    jogos.forEach((element, index) => {
        console.log(`${element} ${caracteristicas[index]}`);
    });
    
    console.log(`${jogos[1]}, ${jogos[4]} e ${jogos[6]} são três dos meus jogos favoritos`);
    
    const ferramentasDeTi = [
        ['HTML','CSS','JS'],
        ['Figma','Photoshop','Coreldraw','Illustrator'],
        ['PHP','Node Js','SQL','Java','Python','ASP.net']
    ];
    console.log('\nArray de arrays:');
    console.log(ferramentasDeTi);
    console.log(`Mostrando ${ferramentasDeTi[1][1]} e ${ferramentasDeTi[1][2]}.`);
}

function executarAula04() {
    clearConsole();
    const pessoa = {
        nome: 'João', idade: 24, cidade: 'São paulo', estado: 'SP'
    };
    console.log(`O ${pessoa.nome} reside na cidade de ${pessoa.cidade} - ${pessoa.estado} e tem ${pessoa.idade} anos`);
    
    const livros = [
        { titulo: 'Cronicas de gelo e fogo', ano: 1993 },
        { titulo: 'Desenvolvimento web Js', ano: 2025 },
        { titulo: 'O Aprendiz de alquimista', ano: 2016 }
    ];
    console.log(`O livro ${livros[0].titulo} é do ano de ${livros[0].ano}`);

    const alunoObj = {
        nomeCompleto:'João Vitor Hélio Costa Maia',
        dataNascimento: '18/10/2001',
        listaTelefones: [{ tipo: 'Celular', numero:'(11)932615470' }, { tipo: 'Fixo', numero:'(11)26218571' }],
        endereco:{ rua:'Tupaciguara', numero: '12', bairro: 'Parque penha' }
    }
    console.log(`Dados do aluno:\nNome: ${alunoObj.nomeCompleto}\nRua: ${alunoObj.endereco.rua}`);
}

function executarAula05() {
    clearConsole();
    console.log('--- Condicionais ---');
    let numero = 50;
    if(numero >= 20) console.log('A variavel numero é maior ou igual a 20');
    
    let a = 10, b = '10';
    console.log("10 === '10': " + (a === b));

    let valorCompra = 300;
    console.log(`O valor de compra é ${valorCompra}R$. Operações de desconto disponíveis internamente.`);
}

function executarAula06() {
    clearConsole();
    const senhaBd = 'senhadificil123';
    const loginBd = 'username.raro';
    let senhaInformada = 'senhadificil123';
    let loginInformado = 'username.raro';
    if ((loginInformado === loginBd) && (senhaInformada === senhaBd)){
        console.log('Logado com sucesso (&&)');
    } else { 
        console.log('Login ou senha invalidos');
    }

    let feriado = true, fimDeSemana = true;
    if(feriado || fimDeSemana) console.log('Não tem aula (||)');
    
    let estaChovendo = true;
    if(!estaChovendo){
        console.log('Beleza vou pra praia☀️😎 (!)');
    } else {
        console.log('Nessa chuva vou ficar em casa deitado😴 (!)');
    }
}

function executarAula07() {
    clearConsole();
    let opcao = 2; // Simulação do prompt 1 a 3
    console.log('Opções de Switch Case: 1. Financeiro | 2. Vendas | 3. Suporte.');
    console.log(`Você escolheu a opção ${opcao}`);
    switch(opcao){
        case 1: console.log('== Financeiro =='); break;
        case 2: console.log('== Vendas == Aproveite a promoção!'); break;
        case 3: console.log('== Suporte =='); break;
        default: console.log('Não compreendi'); break;
    }
}

function executarAula08() {
    clearConsole();
    let contador = 1;
    while(contador <= 5){
        console.log('Valor da variavel (while): '+contador);
        contador ++;
    };

    console.log('For Loop:');
    for(let i = 1; i <= 3; i++) console.log('i vale: '+i);

    const cpusIntel = ['i9', 'i7', 'i5']
    for (const cpu of cpusIntel) console.log(cpu);
    
    const pessoaObj = { nome: 'Ronaldo', idade: 40 };
    for(const prop in pessoaObj) console.log(prop+': '+pessoaObj[prop]);
}

function executarAula09() {
    clearConsole();
    let frase = '     JavaScript é INCRIVEL!        ';
    console.log(frase.toUpperCase());
    console.log(frase.trim().replaceAll(' ', '-'));

    let precoInfo = 19.54673;
    console.log(precoInfo.toFixed(2));
    console.log(Math.round(precoInfo));
    console.log(Math.max(19.1,25,13,41));

    let valorFormat = 17256.7467;
    const formatadorDePreco = new Intl.NumberFormat('pt-br', { style: "currency", currency: "brl" });
    console.log(formatadorDePreco.format(valorFormat));
}

function executarAula10() {
    clearConsole();
    const exemplo3 = () => { console.log('Olá, sou uma arrow function'); };
    exemplo3();
    
    function saudacao(nome='pessoa',sobrenome =''){
        console.log('Olá, '+nome+' '+sobrenome);
    }
    saudacao('Tiago');
    saudacao('Bruno', 'Mars');

    const somar = (valor1, valor2) => valor1 + valor2;
    console.log(`A soma de 12 e 24 é ${somar(12, 24)}`);
    
    const alunosList = ['Bastianinha','Jalim','Oreia'];
    alunosList.forEach((aluno) => console.log(aluno.toUpperCase()));
}


/**
 * =========================================================
 *  LÓGICA DAS AULAS 11, 12 e Extra (Eventos do DOM persistentes)
 * =========================================================
 */

function iniciarAula11() {
    // 1 - Contador
    const bBotaoSoma = document.querySelector('#somar');
    const pValor = document.querySelector('#valor');
    const bBotaoSubtrair = document.querySelector('#subtrair');
    let contador11 = 0;

    function checarValor(cont){
        bBotaoSubtrair.disabled = cont <= 0;
        bBotaoSoma.disabled = cont >= 5;
    };
    checarValor(contador11);

    bBotaoSoma?.addEventListener('click', function(){
        contador11 ++; pValor.textContent = contador11; checarValor(contador11);
    });
    bBotaoSubtrair?.addEventListener('click', function(){
        contador11 --; pValor.textContent = contador11; checarValor(contador11);
    });

    // 2 - Mostrar / Esconder
    const pTextoQueSome = document.querySelector('#textoQueSome');
    const bMostrarEsconder = document.querySelector('#mostrarOuEsconder');
    bMostrarEsconder?.addEventListener('click', function(){
        pTextoQueSome.classList.toggle('oculto'); 
        bMostrarEsconder.textContent = pTextoQueSome.classList.contains('oculto') ? 'Mostrar' : 'Esconder';
    });

    // 3 - Trocar Imagem
    const imgFoto = document.querySelector("#foto");
    const botoesDeFoto = document.querySelectorAll(".btn-img");
    botoesDeFoto.forEach(botao => {
        botao.addEventListener("click", function(){
            imgFoto.src = botao.getAttribute("data-imagem");
            imgFoto.alt = botao.dataset.alt;
        });
    });

    // 4 - Caracteres
    const caixaDeTexto = document.querySelector('#mensagem');
    const spanContador = document.querySelector('#contador-caractere');
    const contadorRegressivo = document.querySelector("#regressivo");
    caixaDeTexto?.addEventListener('input', function(){
        let total = caixaDeTexto.value.length;
        let max = caixaDeTexto.getAttribute("maxlength");
        spanContador.textContent = total;
        contadorRegressivo.textContent = (max - total);
        if(total >= 100){
            spanContador.classList.add('excesso');
            caixaDeTexto.style.border = "solid 4px red";
        } else {
            spanContador.classList.remove('excesso');
            caixaDeTexto.style.border = "";
        }
    });

    // 5 - Teclas
    const pTecla = document.querySelector('#tecla b');
    document.addEventListener('keyup', function(event){
        // Apenas atualizar se a aba 11 estiver ativa
        if(!document.getElementById('lesson-11').classList.contains('active')) return;
        
        pTecla.textContent = event.key;
        pTecla.style.color = event.key === 'a' ? 'purple' : '';
    });

    // 6 - Tarefas
    const divRelacaoTarefas = document.querySelector('#relacao-tarefas');
    const inputTarefa = divRelacaoTarefas?.querySelector('#tarefa');
    const spanTotalTarefas = divRelacaoTarefas?.querySelector('#total');
    const botaoAdicionar = divRelacaoTarefas?.querySelector('#adicionar');
    const listaTarefas = divRelacaoTarefas?.querySelector('#lista');

    botaoAdicionar?.addEventListener('click', function(){
        let txt = inputTarefa.value;
        if (txt != ''){
            let item = document.createElement('li');
            item.textContent = txt;
            listaTarefas.appendChild(item);
            spanTotalTarefas.textContent = listaTarefas.children.length;
            inputTarefa.value ='';
            item.tabIndex = 0;
            item.addEventListener('click', () => item.classList.toggle('feito'));
        }
    });

    // 7 - Progresso
    const barraProgresso = document.querySelector('#barra');
    const bCarregar = document.querySelector('#carregar');
    const bLimpar = document.querySelector('#limpar');
    bCarregar?.addEventListener('click', function(){
        barraProgresso.value += 10;
        if (barraProgresso.value >= 100) barraProgresso.classList.add('concluido');
    });
    bLimpar?.addEventListener('click', function(){
        barraProgresso.value = 0;
        barraProgresso.classList.remove('concluido');
    });

    // 8 - Formulário
    const formExemplo = document.querySelector('#form-exemplo');
    const outForm = document.querySelector('#saida');
    formExemplo?.addEventListener('submit', function(e){
        e.preventDefault();
        const nome = document.querySelector('#campo-nome').value.trim();
        const idade = document.querySelector('#campo-idade').value;
        outForm.textContent = `Olá, ${nome}, você tem ${idade} anos.`;
        formExemplo.reset();
    });

    // 9 - Senha
    const inputSenha = document.querySelector('#senha');
    const botaoMostrar = document.querySelector('#mostrar-senha');
    
    function esconderSenha(){
        inputSenha.type = 'password';
        botaoMostrar.textContent= '👁 Mostrar senha';
    }
    
    botaoMostrar?.addEventListener('pointerdown', function(){
        inputSenha.type = 'text';
        botaoMostrar.textContent = 'Solte para esconder';
    });
    botaoMostrar?.addEventListener('pointerup', esconderSenha);
    botaoMostrar?.addEventListener('pointerleave', esconderSenha);
}

function iniciarAula12() {
    const form12 = document.querySelector('#form12');
    const in1 = document.querySelector('#input12_1');
    const in2 = document.querySelector('#input12_2');
    const res12 = document.querySelector('#resultado12');
    const dialog12 = document.querySelector('#dialogo12');
    const cxRes = document.querySelector('#caixaResultado');

    form12?.addEventListener('submit', function(e){
        e.preventDefault();
        let media = (((Number(in1.value)+Number(in2.value))/2).toFixed(2));
        let sit = media < 7 ? 'Reprovado' : 'Aprovado';
        
        res12.textContent = `Média: ${media}`;
        dialog12.textContent = sit;
        
        cxRes.classList.remove('aprovado', 'reprovado');
        cxRes.classList.add(sit.toLowerCase());
        
        form12.reset();
        in1.focus();
    });
}

function iniciarAulaExtra() {
    const formExt = document.querySelector('#formExtra');
    const inNomeExt = document.querySelector('#inputNomeExtra');
    const inExt1 = document.querySelector('#inputExtra_1');
    const inExt2 = document.querySelector('#inputExtra_2');
    const listaResults = document.querySelector('#listaDeResultadosExtra');
    const contExt = document.querySelector('#contadorExtra');

    formExt?.addEventListener('submit', function(e){
        e.preventDefault();
        
        // Forma nome
        let nomeFmt = inNomeExt.value.trim();
        nomeFmt = nomeFmt.charAt(0).toUpperCase() + nomeFmt.slice(1);
        
        // Calcula 
        let media = (((Number(inExt1.value)+Number(inExt2.value))/2).toFixed(2));
        let situacao = media < 7 ? 'Reprovado' : 'Aprovado';
        
        // Cria item
        let item = document.createElement('li');
        item.classList.add(situacao.toLowerCase());
        item.textContent = `Aluno: ${nomeFmt} - Media: ${media} - Situação: ${situacao}`;
        
        listaResults.appendChild(item);
        contExt.textContent = listaResults.children.length;
        
        formExt.reset();
        inNomeExt.focus();
    });
}
