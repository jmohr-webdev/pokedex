import React, { useEffect, useState } from 'react';
import Pokebar from './components/layout/Pokebar';
import Pokedex from './components/pokemon/Pokedex';
import LoadButton from './components/layout/LoadButton';
import fetchPokemon from './utilities/fetchPokemon';
import './styles/style.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    if (localStorage.pokemons) {
      console.log('fetching from local storage');
      const pokemons = JSON.parse(localStorage.getItem('pokemons'));
      setPokemons(pokemons);
    } else {
      fetchPokemon().then((data) => {
        console.log('fetching from api');
        setPokemons(data);
        localStorage.setItem('pokemons', JSON.stringify(data));
      });
    }
  }, []);

  return (
    <div className="App">
      <Pokebar />
      <div className="container">
        <Pokedex pokemons={pokemons} />
        <LoadButton count={pokemons.length} />
      </div>
    </div>
  );
}

export default App;
