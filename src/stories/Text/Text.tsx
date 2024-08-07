import styled, { css } from 'styled-components';
import type { TextProps } from "./Text.types.ts";

const StyledText = styled.p<{disabled?: boolean, size: string, bold: string, underline?: boolean}>`
 font-family: 'Roboto', Times, serif;
 color: #3a4556;
 ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 1em;
    `};

  ${({ size }) =>
    size === 'medium' &&
    css`
    font-size: 1.7em;    
    `};

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 4em;
    `};

  ${({ bold }) =>
    bold === 'default' &&
    css`
      font-weight: 500;
    `};

  ${({ bold }) =>
    bold === 'bold' &&
    css`
      font-weight: 800;
    `};

    ${props =>
    props.underline &&
    css`
      border-bottom: 1px solid black;
    `};
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

`;


export default function Text({ label, disabled, size, bold, underline, color }: TextProps) {
    return (
            <StyledText
                size={size}
                disabled={disabled}
                bold={bold}
                underline={underline}
                data-testid="myText"
                style={{ color: color }}
                
            >
              {label}
            </StyledText>
 
    );
}
