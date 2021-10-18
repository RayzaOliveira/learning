import './Card.css'
import React from 'react'

// componete - função
export default props => (
  
// className, para referenciar uma classe no CSS
// referenciou a classe com "Card"
<div className="Card">
  <div className="Conteudo">
    {props.children}
  </div>

  <div className="Footer">
    {props.titulo}
  </div>
</div>

)
