/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 'dois', null, function(){}, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(array)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getArrayX(array,x){
    return array[x];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayX = [1, 'dois', {a:1}, undefined, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(getArrayX(arrayX,0));
console.log(getArrayX(arrayX,1));
console.log(getArrayX(arrayX,2));
console.log(getArrayX(arrayX,3));
console.log(getArrayX(arrayX,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var allBooks = {
        'Livro 01':{ qtdPg:110, autor:'AAA', editora: 'JK' },
        'Livro 02':{ qtdPg:220, autor:'BBB', editora: 'MG' },
        'Livro 03':{ qtdPg:330, autor:'CCC', editora: 'SP' }
    };
   if(!nome){
       return allBooks;
   }
   return allBooks[nome];//os indices do objeto sao strings então acessamos como um array
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nome='Livro 01';
console.log(' O livro '+nome+' tem '+book(nome).qtdPg+' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(' O autor do livro '+nome+' é '+book(nome).autor+' .');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(' O autor do livro '+nome+' foi publicado pela editora '+book(nome).editora+' .');