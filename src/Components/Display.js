import React from 'react';
import PropTypes from 'prop-types';

const display = ({ value }) => (
  <div className="display">
    <div className="displayValue">{value}</div>
  </div>
);

display.propTypes = { value: PropTypes.string };
display.defaultProps = { value: '0' };

export default display;
