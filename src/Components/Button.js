import React from 'react';
import PropTypes from 'prop-types';

const button = ({ name }) => (
  <div className="button">
    <h2>{name}</h2>
  </div>

);

button.propTypes = {
  name: PropTypes.string.isRequired,
};


export default button;
