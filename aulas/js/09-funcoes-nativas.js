'use strict'

let separador = '\n---------------------------------------------------\n\n';

//console.log('Teste');

//funçoes são blocos de codigo nativos, já prontos.

//Textos (strings)
console.log(separador+'textos');

let frase = '     JavaScript é INCRIVEL!        ';

console.log(frase.toUpperCase());

console.log(frase.toLowerCase());

console.log(frase.includes('Java'));

console.log(frase.includes('Php'));

console.log(frase.replace('INCRIVEL', 'Demais da conta'));

console.log(frase.trim());

console.log(frase.trim().replace('INCRIVEL', 'Demais da conta'));

console.log(frase.trim().replaceAll(' ', '-'));

//Números
console.log(separador+'Numeros');

let preco = 19.54673

console.log(preco);

console.log(preco.toFixed(2));

console.log(Math.round(preco));

console.log(Math.ceil(19.1));

console.log(Math.floor(19.1));

console.log(Math.max(19.1,25,13,41));

console.log(Math.min(19.1,25,13,41));

//Arrays
console.log(separador+'Numeros');
const filiaisSp = ['São Paulo', 'Mogi das Cruzes', 'Ubatuba'];

const filiaisRj = ['Rio de janeiro', 'Petrópolis'];

const filiaisSudeste = filiaisSp.concat(filiaisRj);

console.log(filiaisSudeste);

for(const filial of filiaisSudeste){
    console.log(filial);
        
}

//Internacionalização

console.log(separador+'Internacionalização: ');

//formatador monetario

let valor = 17256.7467;
let valor2 = 6436.757;

const formatadorDePreco = new Intl.NumberFormat('pt-br', {
    style: "currency",
    currency: "brl"

});

console.log(formatadorDePreco.format(valor));
console.log(formatadorDePreco.format(valor2));

