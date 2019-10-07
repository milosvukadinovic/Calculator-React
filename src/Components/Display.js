import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (
  <div className="display">
    <div className="displayValue">{value}</div>
  </div>
);

Display.propTypes = { value: PropTypes.string };
Display.defaultProps = { value: '0' };

export default Display;
