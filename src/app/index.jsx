//console.log("hello")
//Es necesario importar el store
import {store} from './store/index'

//para ver el store se ejecuta la funcion getState()
//console.log(store.getState())

import React from 'react'
import ReactDOM from 'react-dom'
import {Main} from './components/Main'

ReactDOM.render(
    <Main />,document.getElementById("App")
)