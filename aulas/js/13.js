/* Função para exibição/tratamento de erros */
function mostrarErro(input, spanErro, mensagem){
    // Define o texto da mensagem no elemento
    spanErro.textContent = mensagem;

    /* Se houver mensagem de erro (ou seja, mensagem não tá vazio) */
    if( mensagem !== "" ){
        // Aplica classe de erro, remove classe ok
        input.classList.add("erro");
        input.classList.remove("ok");
    } else {
        // Senão, aplica classe ok, remove classe erro
        input.classList.remove("erro");
        input.classList.add("ok");
    }
}