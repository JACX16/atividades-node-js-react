'use strict'


import React from 'react'
import {render} from 'react-dom' //importação do objeto render shorthandlernotation
import { AppContainer} from 'react-hot-loader'
import App from './app'

//importações
//var React = require('react') // sem caminho busca em node modules
//var ReactDOM = require('react-dom')
//var Title = require('./app')//importação de caminho para local file app
//var sum = require('./app')

//console.log('Webpack is crazy!')
//console.log(sum(10,30))

const renderApp = (NextApp) => {//atualização
    //Renderização no dom
    render(
        <AppContainer>
        <NextApp/>
        </AppContainer>,
        document.querySelector('[data-js="app"]')//define marca tag onde será renderizado o element
    )
}//fim renderApp

renderApp(App)//primeira chamada com o file imported

if (module.hot){//verificar se ele existe hot loader ativo para dev
    module.hot.accept('./app', () => {//function para atualização do App
        const NextApp = require('./app').default //próxima atualização do file
        renderApp(NextApp)

    })//fim if
}