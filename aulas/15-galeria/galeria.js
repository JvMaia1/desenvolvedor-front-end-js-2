'use strict';
//Parâmetros de configuração para o simplelightbox
const OPCOESLIGHTBOX = {
    //Configurações para legenda
    caption: true,
    captionSelector: 'self', //usar a propria tag de link para obter a legenda
    captionType: 'attr', //Obter a legenda por meio de um atributo
    captionsData: 'title',
    captionDelay: 1000,
    captionPosition: 'top',

    //opçoes diversas
    scrollZoomFactor: 0.05,
    maxZoom: 1000,
    alertErrorMessage: 'a imagem sumiu🫡, se vira ai usuario maldito, ',
    download: 'Clique aqui para baixar'

};

const lightbox = new SimpleLightbox('.galeria a', OPCOESLIGHTBOX);
