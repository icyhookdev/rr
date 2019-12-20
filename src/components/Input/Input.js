import React from 'react';
import StyledInput from './Input.style';

const Input = ({ name, change, value, placeholder, type }) => (
  <StyledInput
    type={type}
    onChange={change}
    value={value}
    placeholder={placeholder}
    name={name}
  />
);

export default Input;
