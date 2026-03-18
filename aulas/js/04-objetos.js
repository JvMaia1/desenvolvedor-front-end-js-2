'use strict'
console.log('Trabalhando com objetos');

const pessoa = {
    nome: 'João',
    idade: 24,
    cidade: 'São paulo',
    estado: 'SP'

};

console.log(pessoa.nome);

console.log(pessoa.idade);

console.log(pessoa.cidade);

console.log(pessoa.estado);

console.log(`\no ${pessoa.nome} reside na cidade de ${pessoa.cidade} - ${pessoa.estado} e tem ${pessoa.idade} anos`);

console.log(pessoa['nome']); //Sintaxe alternativa

console.log('\nExemplo 2:');

const livro = {
    titulo: 'Cronicas de gelo e fogo', 
    autor: 'George R.R Martin',
    volumes: ['As Cronicas de gelo e fogo','Furia dos Reis','A Tormenta de Espadas','A Dança Dos Dragões','Os Ventos do norte']
};

console.log(livro);

console.log(livro.titulo);
console.log(livro.volumes[0]);

//Array de objetos

const livros = [
    {
        titulo: 'Cronicas de gelo e fogo',
        ano: 1993
    },
    
    {
        titulo: 'Desenvolvimento web Js',
        ano: 2025
    },

    {
        titulo: 'O Aprendiz de alquimista',
        ano: 2016
    }
];

//Printando o ano dos livros

console.log(`O livro ${livros[0].titulo} é do ano de ${livros[0].ano}`);

//Exercicio: objetos

const aluno = {
    nomeCompleto:'João Vitor Hélio Costa Maia',
    dataNascimento: '18/10/2001',
    listaTelefones: [{
        tipo: 'Celular',
        numero:'(11)932615470'
    },
    {
        tipo: 'Fixo',
        numero:'(11)26218571'
    }],
    endereco:{
        rua:'Tupaciguara',
        numero: '12',
        completmento: 'A',
        bairro: 'Parque penha'
    }
}

console.log(
    `\nDados do aluno\nNome: ${aluno.nomeCompleto}\nData de nascimento: ${aluno.dataNascimento}\nLista de telefones:\n${aluno.listaTelefones[0].tipo}:${aluno.listaTelefones[0].numero}\n${aluno.listaTelefones[1].tipo}:${aluno.listaTelefones[0].numero}\nEndereço: Rua: ${aluno.endereco.rua}, Nº: ${aluno.endereco.numero}, Bairro: ${aluno.endereco.bairro}`);

let novoNumero = {
    tipo: 'Fixo',
    numero: '(11)4002-8922'
}

aluno.listaTelefones.push(novoNumero);

console.log('\nLista de telefones:');

aluno.listaTelefones.forEach(element => {
    console.log(`${element.tipo}:${element.numero}`);
});
