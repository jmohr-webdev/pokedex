import React, { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import fetchPokemon from './utilities/fetchPokemon';
import './App.css';

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
      <Navbar />
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
