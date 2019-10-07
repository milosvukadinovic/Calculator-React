/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, size, color, clickHandler,
}) => {
  const style = {
    background: color,
    width: size,
    borderRight: '1px solid #fff',

  };

  const handleClick = () => clickHandler(name);

  return (
    <div className="button" style={style} onClick={handleClick}>
      <h2>{name}</h2>
    </div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
Button.defaultProps = { color: '#E0E0E0', size: '25%' };


export default Button;
