

function* foo(){
  var index = 0;
  while (index <= 2)
    yield index++;//como funciona o yield

}
//Once a generator function is defined, it can be used by constructing an iterator as shown.

var iterator = foo();
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }


function listarTodasAsPropriedades(o){     
	var objectoASerInspecionado;     
	var resultado = [];
	
	for(objectoASerInspecionado = o; objectoASerInspecionado !== null; objectoASerInspecionado = Object.getPrototypeOf(objectoASerInspecionado)){  
		resultado = resultado.concat(Object.getOwnPropertyNames(objectoASerInspecionado));  
	}
	
	return resultado; 
}
//getPrototypeOf(Objeto); //retorna o prototype (isto é, o valor da propriedade interna [[Prototype]]) do objeto especificado.

function* outroGerador(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* gerador(i){
  yield i;
  yield* outroGerador(i);
  yield i + 10;
}

var gen = gerador(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20