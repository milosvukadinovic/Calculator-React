import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, size, color }) => {
  const style = {
    background: color,
    width: size,
    borderRight: '1px solid #fff',

  };

  return (
    <div className="button" style={style}>
      <h2>{name}</h2>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};
Button.defaultProps = { color: '#E0E0E0', size: '25%' };


export default Button;
