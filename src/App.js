import React, { useEffect, useState } from 'react';
import Pokebar from './components/layout/Pokebar';
import Pokedex from './components/pokemon/Pokedex';
import LoadButton from './components/layout/LoadButton';
import fetchPokemon from './utilities/fetchPokemon';
import './styles/style.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetchPokemon().then((data) => {
      setPokemons(data);
    });
  }, []);

  const fetchMorePokemon = () => {
    const startIndex = pokemons.length + 1;
    fetchPokemon(startIndex, limit).then((data) => {
      setPokemons(pokemons.concat(data));
    });
  };

  return (
    <div className="App">
      <Pokebar />
      <div className="container">
        <Pokedex pokemons={pokemons} />
        <LoadButton fetchMorePokemon={fetchMorePokemon} />
      </div>
    </div>
  );
}

export default App;
