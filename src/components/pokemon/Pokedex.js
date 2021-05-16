import React from 'react';
import PropTypes from 'prop-types';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemons }) => {
  return (
    <div className="pokedex">
      {pokemons.map((pokemon) => (
        <Pokecard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokedex;
