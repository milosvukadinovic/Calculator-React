import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="grid-container group-1">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="+" color="#F5913E" />
    </div>
    <div className="grid-container group-2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" color="#F5913E" />
    </div>
    <div className="grid-container group-3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" color="#F5913E" />
    </div>
    <div className="grid-container group-4">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" color="#F5913E" />
    </div>
    <div className="grid-container group-5">
      <Button name="0" size="50%" />
      <Button name="." />
      <Button name="=" color="#F5913E" />
    </div>
  </div>
);


export default ButtonPanel;
