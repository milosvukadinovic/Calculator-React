import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div>
    <div className="grid-container group-1">
      <Button name="AC" size="false" color="#E0E0E0" />
      <Button name="+/-" size="false" color="#E0E0E0" />
      <Button name="%" size="false" color="#E0E0E0" />
      <Button name="+" size="false" color="#F5913E" />
    </div>
    <div className="grid-container group-2">
      <Button name="7" size="false" color="#E0E0E0" />
      <Button name="8" size="false" color="#E0E0E0" />
      <Button name="9" size="false" color="#E0E0E0" />
      <Button name="X" size="false" color="#F5913E" />
    </div>
    <div className="grid-container group-3">
      <Button name="4" size="false" color="#E0E0E0" />
      <Button name="5" size="false" color="#E0E0E0" />
      <Button name="6" size="false" color="#E0E0E0" />
      <Button name="-" size="false" color="#F5913E" />
    </div>
    <div className="grid-container group-4">
      <Button name="1" size="false" color="#E0E0E0" />
      <Button name="2" size="false" color="#E0E0E0" />
      <Button name="3" size="false" color="#E0E0E0" />
      <Button name="+" size="false" color="#F5913E" />
    </div>
    <div className="grid-container group-5">
      <Button name="0" size="true" color="#E0E0E0" />
      <Button name="." size="false" color="#E0E0E0" />
      <Button name="=" size="false" color="#F5913E" />
    </div>
  </div>
);


export default ButtonPanel;
