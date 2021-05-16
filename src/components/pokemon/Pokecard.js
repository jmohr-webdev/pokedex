import React from 'react';
import PropTypes from 'prop-types';

const Pokecard = ({ pokemon }) => {
  const { name, types } = pokemon;
  const type = types[0].type.name;
  console.log(type);

  return (
    <div className={`pokecard ${type}`}>
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
