import React from 'react';
import PropTypes from 'prop-types';

const Pokecard = ({ pokemon }) => {
  const { name, types, sprites } = pokemon;
  const type = types[0].type.name;
  const imageUrl =
    sprites.other.dream_world.front_default || sprites.front_default;

  return (
    <div className={`pokecard ${type}`}>
      <img className="pokesprite" src={`${imageUrl}`} alt={`${name}`} />
      <div className={`pokename ${type}`}>
        <h4>{name}</h4>
      </div>
    </div>
  );
};

Pokecard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default Pokecard;
