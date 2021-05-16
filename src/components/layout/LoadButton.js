import React from 'react';
import PropTypes from 'prop-types';

const LoadButton = ({ count }) => {
  return <button className="btn btn-load">Load More</button>;
};

LoadButton.propTypes = {
  count: PropTypes.number.isRequired,
};

export default LoadButton;
