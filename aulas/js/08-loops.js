'use strict';

let separador = '\n---------------------------------------------------\n\n';
/*
Loops sao comandos de repetição baseados e controlados por uma condição

While - enquanto a condição for verdadeira, o bloco de código é executado

For - itera para cada elemento de uma coleção
*/

console.log(separador);

console.log('Exemplo 1 while:\n');

let contador = 1;

while(contador <= 5){
    console.log('Valor da variavel: '+contador);
    contador ++; //Adiciona +2 ao contador
};

//Loop For

console.log(separador+'Exemplo 2: For (para):');

for(let i = 1; i <= 10; i++){
console.log('i vale: '+i);

};

console.log(separador+'Exemplo 3: Acessar array');

const cpusIntel = ['i9', 'i7', 'i5', 'i3', 'Core2 Duo', 'Ryzen 5 3600', 'Ryzen 3 2600']

for(let i = 0; i < cpusIntel.length; i++ ){
    console.log(cpusIntel[i]);
    
};

console.log(separador+'Exemplo 4: for/of (exclusivo para arrays, exlusivo do js)');

for (const cpu of cpusIntel) {
    console.log(cpu);
    
};


console.log(separador+'Exemplo 5: for/in (Exclusivo para objetos) sempre usando [] para acessar as propriedades dentro do for in');

const pessoa = {
    nome: 'Ronaldo',
    idade: 40,
    cidade: 'São Paulo',
    estado: 'SP'
};

for(const prop in pessoa){
    console.log(prop+': '+pessoa[prop]);
    
    
}

console.log(separador+'Exemplo 6: Acessar array com for each:');

cpusIntel.forEach(cpu => {
    console.log(cpu);

});

console.log(separador+'Exercicio 1: Exercício: LOOP com ARRAY de OBJETOS');


let cliente1 = {
    nome: 'Dio',
    id:1
}

let cliente2 = {
    nome: 'Ozzy',
    id:2
}

let cliente3 = {
    nome: 'Ian',
    id:3
}

let clientes = [cliente1, cliente2, cliente3]

/*
let clientesB = [
    {
        nome: "",
        id: 9
    },
    {

    },
    {}
]
*/

clientes.forEach(cliente =>{
    console.log('Cliente: '+ cliente.nome+' id: '+ cliente.id);
    
})



