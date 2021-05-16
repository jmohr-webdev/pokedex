import React from 'react';
import PropTypes from 'prop-types';

const LoadButton = ({ fetchMorePokemon }) => {
  const handleClick = () => {
    fetchMorePokemon();
  };

  return (
    <button className="btn btn-load" onClick={() => handleClick()}>
      Load More
    </button>
  );
};

LoadButton.propTypes = {
  pokemons: PropTypes.array,
};

export default LoadButton;
