var array = [1, 2, 3, 4, 5];
var reduce = array.reduce(function(acumulado, atual, index, array){
    return acumulado + atual;
}, 0);//0 será seu acumulado na primeira passagem
/*
1- 0+1
2- 1+2
3- 3+3
4- 6+4
5- 10+5
 */
console.log(reduce);//retorna o conteúdo do array em uma única variável

var array1 = [1, 2, 3, 4, 5];

var reduceRight = array.reduceRight(function(acumulado, atual, index, array){
    return acumulado + atual;
}, 0);//0 será seu acumulado na primeira passagem

console.log(reduceRight);//retorna o conteúdo do array em uma única variável