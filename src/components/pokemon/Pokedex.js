import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemons }) => {
  return (
    <Fragment>
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <Pokecard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </Fragment>
  );
};

Pokedex.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default Pokedex;
