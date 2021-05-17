import React from 'react';
import PokemonState from './context/pokemon/PokemonState';
import Pokebar from './components/layout/Pokebar';
import Pokedex from './components/pokemon/Pokedex';
import LoadButton from './components/layout/LoadButton';
import './styles/style.css';

function App() {
  // const [pokemons, setPokemons] = useState([]);
  // const [limit, setLimit] = useState(20);

  // useEffect(() => {
  //   fetchPokemon().then((data) => {
  //     setPokemons(data);
  //   });
  // }, []);

  // const fetchMorePokemon = () => {
  //   const startIndex = pokemons.length + 1;
  //   fetchPokemon(startIndex, limit).then((data) => {
  //     setPokemons(pokemons.concat(data));
  //   });
  // };

  return (
    <PokemonState>
      <div className="App">
        <Pokebar />
        <div className="container">
          <Pokedex />
          <LoadButton />
        </div>
      </div>
    </PokemonState>
  );
}

export default App;
