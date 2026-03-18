'use strict';

console.log("beleza");

//Declarando array
const jogos =  ['God of war 3', 'Minecraft', 'Forza horizon','Katana Zero',`The Witcher 3`,`Demon souls`,`Xadrez`];

//Acesso apenas para o programador visando testes
console.log(jogos);

//Acesso usando template string e usando indice para especificar a informação
console.log(`${jogos[0]}, é um esclusivo de playstation`);
console.log(jogos[1]);
console.log(jogos[2]);
console.log(jogos[3]);

//Saida em formato de tabela, apenas para programadores
console.table(jogos)

//Array heterogeneo
//Não faça isso
let teste = "beleza";
let coisas = ['Senac', 10, '<h2>Sei la!</h2>', 15.434, teste];

console.log(coisas);

//Loop para printar cada objeto do array combinado com sua caracteristica

const caracteristicas = [`é um esclusivo de playstation`, `é o jogo mais vendido da historia`, `é um jogo de Xbox`, `è um jogo indie`,`è o maior jogo da saga`,`é o primeiro jogo do genero souls`,`è o mais antigo dentre esses jogos`];

jogos.forEach((element, index) => {
    console.log(`${element} ${caracteristicas[index]}`);
    console.log('\n');
});

//Exercicio arrays + template string
console.log(`Exercicio:`);

console.log(`${jogos[1]}, ${jogos[4]} e ${jogos[6]} são três dos meus jogos favoritos`);

//Criando uma matriz (array de arrays)

const ferramentasDeTi = [
    ['HTML','CSS','JS'],
    ['Figma','Photoshop','Coreldraw','Illustrator'],
    ['PHP','Node Js','SQL','Java','Python','ASP.net']
];

console.log('\nArray de arrays:');

console.log(ferramentasDeTi);
console.table(ferramentasDeTi);

//Acessando cada elemento de cada array interno

console.log(ferramentasDeTi[1][2]);

console.log('\n');

console.log('Exercicio 2:');

//Mostrando asp.net
console.log(ferramentasDeTi[2][5]);

//Mostrando HTML5
console.log(ferramentasDeTi[0][0]);

//Mostrando photoshop e php
console.log(`Mostrando ${ferramentasDeTi[1][1]} e ${ferramentasDeTi[1][2]}.`);




