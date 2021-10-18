import './index.css'
import React from 'react'
// ReactDom sera usado apenas nesse arquivo
import ReactDom from 'react-dom'

import App from './App.jsx'


// metodo render
ReactDom.render(

  // o conponente <App> vai ter todos os componentes dentro dele 
  <App></App>,

  // página JSX
  // <h1>Olá React!</h1>,


  // mandou para o arquivo App.jsx   **
  // <div>
    
  //    elemento
  //   <Primeiro />

  //   instanciamento do componente 
  //   parâmentro/propriedades titulo e subtitulo 
  //   <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtitulo" /> 
   

  //   <ComFilhos>
  //     <ul>
  //       <li>Rayza</li>
  //       <li>Rayza</li>
  //       <li>Rayza</li>
  //       <li>Rayza</li>
  //     </ul>
  //   </ComFilhos>

  //   <Card titulo="Primeiro Componente">
  //     <Primeiro/>
  //   </Card>

  //   <Card titulo="Exercicio X">
  //     Conteudo
  //   </Card>

  // </div>,

  document.getElementById('root')
)