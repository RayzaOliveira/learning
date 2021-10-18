// parâmetro e propriedades
import React from 'react'

// o parametro (props) pode ter qualquer nome
export default props => (
  <> 
    {/* dentro de chaves ele enterpreta javascript
    usado para chamar os parametos/propriedades */}
    <h3>{props.titulo}</h3>
    <h2>{props.subtitulo}</h2>
  </> 
)