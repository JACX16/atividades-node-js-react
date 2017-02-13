//MÉTODOS ESPECIAIS

var array1 = [1, 2, 3, 4, 5];
//console.log(array1.indexOf(x,y));//x é o elemento a ser buscado e y o índice de íncio da buscado

console.log(array1.indexOf(3));
//retorna o índice do elemento caso ele exista no array1, caso contrário retornaraá -1


console.log(array1.indexOf(2,2));//retorna false pois 2 esta no índice 1

var index= array1.lastIndexOf(2);
//retorna o índice do elemento buscado, começa do final, caso não ache retorna -1

console.log(Array.isArray([]));//verifica se o parâmetro é um array 

