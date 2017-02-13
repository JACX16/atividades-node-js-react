var isTruthy = function (x){

    return !!x;
};
isTruthy(false);
isTruthy(null);
isTruthy(undefined);
isTruthy(0);
isTruthy('');
isTruthy(NaN);

var carro = {marca:'LandHover', modelo:'Xturb', placa:'ABC-1234', ano:1990, cor:'red', qPortas:0, assentos:5, qtdPessoas:0 };
carro.mudarCor = function (novaCor){
    carro.cor=novaCor;
};
carro.obterCor = function (){
    return carro.cor;
}
carro.obterModel = function (){
    return carro.modelo;
}
carro.obterMarc = function (){
    return carro.marca;
}
carro.getMarcModel = function(){
    return ' Este carro é um '+carro.obterMarc+' '+carro.obterModel+'.';
}
carro.addPessoas = function (x){

    if(carro.qtdPessoas<carro.assentos){//se carro não lotado
        if((carro.qtdPessoas+x)<=carro.assentos){//se vagas suficientes
            carro.qtdPessoas+=x;
            return ' O carro já possui '+carro.qtdPessoas+' !';
        }else{//vagas não suficientes
            var vagas=carro.assentos-carro.qtdPessoas;
            if(vagas===1){
                return ' Só cabe mais uma pessoa.';
            }
            else{
                return ' Só cabem mais '+vagas+' pessoas.';
            }  
        }
    }//endIfMain
        return ' O carro já está lotado!';
};
