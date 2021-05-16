import React from 'react';
import PropTypes from 'prop-types';
import Pokecard from './Pokecard';
import LoadButton from '../layout/LoadButton';

const Pokedex = ({ pokemons }) => {
  return (
    <div className="pokedex">
      {pokemons.map((pokemon) => (
        <Pokecard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokedex;
