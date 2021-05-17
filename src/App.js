import React from 'react';
import PokemonState from './context/pokemon/PokemonState';
import Pokebar from './components/layout/Pokebar';
import Pokedex from './components/pokemon/Pokedex';
import './styles/style.css';

function App() {
  return (
    <PokemonState>
      <div className="App">
        <Pokebar />
        <div className="container">
          <Pokedex />
        </div>
      </div>
    </PokemonState>
  );
}

export default App;
