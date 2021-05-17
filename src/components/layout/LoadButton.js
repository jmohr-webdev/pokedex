import React, { useContext } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';

const LoadButton = () => {
  const pokemonContext = useContext(PokemonContext);
  const { fetchPokemon } = pokemonContext;

  const handleClick = () => {
    fetchPokemon();
  };

  return (
    <button className="btn btn-load" onClick={() => handleClick()}>
      Load More
    </button>
  );
};

export default LoadButton;
