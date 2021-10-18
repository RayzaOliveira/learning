// import React from 'react'

// primeiro componente
// função que retorna uma string, "Primeiro"
// function Primeiro() {
//   return "Primeiro"

//   return(
// posso separar <h1> e <h2> colocando entre as tags <> ou <React.Fragment>
//     <div>
//       <h1>Primeiro Componente</h1>
//       <h2>Exemplo de um componente React</h2>
//     </div>
//   )
// }

// export default Primeiro


// Função Arrow
// Arrow function, menos string (código mais enxuto)
import React from 'react'

export default  () => (
    <>
      <h1>Primeiro Componente (Arrow)</h1>
      <h2>Exemplo de um componente React</h2>
    </>
)
  