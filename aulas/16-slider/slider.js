'use strict'

//paremetros de configuração
const OPCOES = {
    type: 'loop',
    autoplay: true,
    speed: 3000,
    padding: '6rem',
    gap: '2rem',
    autoWidith: true,
    perPage: 2,
    breakpoints:{
        768: {perPage:1}
    },
};

//Criando objeto slider
const slider = new Splide('.splide', OPCOES);

//montando/exeutando slider
slider.mount();
