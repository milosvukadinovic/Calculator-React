import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, size, color }) => {
  const isWide = JSON.parse(size) ? '50%' : '25%';

  const style = {
    background: color,
    width: isWide,
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
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};


export default Button;
