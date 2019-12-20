import React from 'react';
import StyledButton from './Button.style';

const Button = ({ type, text, clicked }) => (
  <StyledButton type={type} onClick={clicked}>
    {text}
  </StyledButton>
);

export default Button;
