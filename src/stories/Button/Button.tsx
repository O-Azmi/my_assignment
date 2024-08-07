import styled, { css } from 'styled-components';
import type { ButtonProps } from "./Button.types.ts";

const StyledButton = styled.button<{ size?: string, disabled?: boolean, secondary?: boolean, backgroundColor?: string }>`
  width: 8em;
  color: white;
  padding: 1em;
  border: 1px solid white;
  border-radius: 20px;
  font-weight: 500;
  
  ${({ size }) =>
    size === 'small' &&
    css`
      width: 6em;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
      width: 8em;
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      width: 10em;
    `};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

    ${props =>
    props.secondary &&
    css`
      color: black;
    `};
    ${props =>
    !props.disabled &&
    css`
    &:hover {
    border-color: black;
    transform: scale(1.1);
    transition: border-color 0.2s ease-in-out; 
    transition: transform 0.2s ease-in-out; 
}
    `};
`;

export default function Button({ backgroundColor, label, size, disabled, onClick, secondary }: ButtonProps) {
  return (
    <StyledButton
      size={size}
      style={{ backgroundColor: backgroundColor }}
      disabled={disabled}
      onClick={onClick}
      secondary={secondary}
      data-testid="myButton"

    >
      {label}
    </StyledButton>
  );
}

