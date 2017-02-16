'use strict'

import React from 'react'

const App = React.createClass({
    render: function (){
        return <div><h1> <font size="10" color="#FF00BF"> <center>Aplication main baby ! ***</center></font> </h1></div>
    }
})

export default App
//função para ser exportada ao index
/*
function sum(val1, val2){
    return val1+val2
}

module.exports = sum


//Criação componente Title React
var Title = React.createClass({
    render: function (){
       // return React.createElement('h1', null, 'Título !')//sem module babel que transforma jsx para function
       return <h1> <font size="10" color="#FF00BF"> <center>HELLO BABY !</center></font> </h1>
      
    }
})
//module.exports = Title//exportação (module padrão Commom js) para index
export default Title //padrão de exportação do ECMAS6
*/
