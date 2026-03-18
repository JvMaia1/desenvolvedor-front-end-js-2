'use strict';

/* Função para exibição/tratamento de erros */
export function mostrarErro(input, spanErro, mensagem){
    // Define o texto da mensagem no elemento
    spanErro.textContent = mensagem;

    /* Se houver mensagem de erro (ou seja, mensagem não tá vazio) */
    if( mensagem !== "" ){
        // Aplica classe de erro, remove classe ok
        input.className = '';
        input.classList.add("erro");
    } else {
        // Senão, aplica classe ok, remove classe erro
        input.className = '';
        input.classList.add("ok");
    }
};