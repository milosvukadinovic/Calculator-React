/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

const buttonPanel = ({ clickHandler }) => (
  <div>
    <div className="grid-container group-1">
      <Button name="AC" clickHandler={clickHandler} />
      <Button name="+/-" clickHandler={clickHandler} />
      <Button name="%" clickHandler={clickHandler} />
      <Button name="/" color="#F5913E" clickHandler={clickHandler} />
    </div>
    <div className="grid-container group-2">
      <Button name="7" clickHandler={clickHandler} />
      <Button name="8" clickHandler={clickHandler} />
      <Button name="9" clickHandler={clickHandler} />
      <Button name="X" color="#F5913E" clickHandler={clickHandler} />
    </div>
    <div className="grid-container group-3">
      <Button name="4" clickHandler={clickHandler} />
      <Button name="5" clickHandler={clickHandler} />
      <Button name="6" clickHandler={clickHandler} />
      <Button name="-" color="#F5913E" clickHandler={clickHandler} />
    </div>
    <div className="grid-container group-4">
      <Button name="1" clickHandler={clickHandler} />
      <Button name="2" clickHandler={clickHandler} />
      <Button name="3" clickHandler={clickHandler} />
      <Button name="+" color="#F5913E" clickHandler={clickHandler} />
    </div>
    <div className="grid-container group-5">
      <Button name="0" size="50%" clickHandler={clickHandler} />
      <Button name="." clickHandler={clickHandler} />
      <Button name="=" color="#F5913E" clickHandler={clickHandler} />
    </div>

  </div>
);


export default buttonPanel;
