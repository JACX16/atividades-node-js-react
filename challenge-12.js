(function(){/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/

console.log( 'Propriedades de "person":' );
var person={
  name: 'Daniel',
  lastname: 'Bracho',
    age: 18,
}
/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log(Object.keys(person));//converte o objeto em um array

/*
Crie um array vazio chamado `books`.
*/
var books=[];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/

console.log( '\nLista de livros:' );
books.push({ name: 'geo', pages: 100});
books.push({ name: 'hist', pages: 200});
books.push({ name: 'math', pages: 300});
/*
Mostre no console todos os livros.
*/
console.log(books);

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
console.log( '\nLivros em formato string:' );
books=JSON.stringify(books);
console.log(books);
/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/

console.log( '\nAgora os livros são objetos novamente:' );
books=JSON.parse(books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i=0; i<books.length; i++){//percore os itens do array books que contem os objetos
    for(var prop in books[i]){//percorre as propriedades do objeto na posição i
        console.log(prop+' : '+books[i].prop);// propriedade e seu conteúdo
    }
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName=[];
myName.push('J');
myName.push('O');
myName.push('Ã');
myName.push('O');

console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join());

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
console.log(myName.reverse());

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/

console.log(myName.sort());

})();//fim IIFE

//(function(){
//body code
//})();
