// Consumir lista de repositório dentro do GitHub
// Metodos de ciclo de vida do componente, useEffect
import React, { useState,useEffect } from 'react';

// Qdo for utilizar Hooks, não se usa classes e sim função 
// uma classe não tem propriedades proprias 
export default function App() {

// uma variável no estado repositories 
  const [ repositories, setRepositories] = useState([])
  //   { id: 1, name: 'repo-1' },
  //   { id: 2, name: 'repo-2' },
  //   { id: 3, name: 'repo-3' },
  // ]);

  // function handleAddRepository() {
    // adcionar um novo repositorio
    // Math.random(), gera um id sempre diferente
  //   setRepositories([ ...repositories, 
  //     {id: Math.random(), name: "Novo repo"}
  //   ]);
  // }

  useEffect (async() => {
    const response = await fetch('http://api.github.com/users/diego3g/repos');
    // transforma essa informaçao em json
    const data = await response.json();
    // carregar a informação 
    // vai carregar uma unica vez, não vai executar novamente 
    setRepositories(data);
  }, []);


  // ele vai estar ouvindo a informação do estado chamado repositorio
  // 
  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      // if (repo.id === id) {
      //  return { ...repo, favorite: !repo.favorite }
      // } else {
      //   return repo
      // }
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });
    
    setRepositories(newRepositories);
  }

  return (
    // fragment
    // <>
      <ul>
        { repositories.map(repo => ( 
        <li key={repo.id}>
          {repo.name} 
          {/* verificação */}
          {repo.favorite && <span>(Favorito)</span>}
          <button onClick={ () => handleFavorite(repo.id)}>Favoritar</button>
        </li>
        ))}
      </ul>
      // <button onClick={handleAddRepository}>
      //     Adicionar repositorio
      // </button>
    // </>
  );
}