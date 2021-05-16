import React from 'react';
import PropTypes from 'prop-types';

const Pokecard = ({ name, url }) => {
  return (
    <div className="pokecard">
      <div className="pokename">
        <h4>{name}</h4>
      </div>
    </div>
  );
};

Pokecard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Pokecard;
