import styled, { css } from 'styled-components';
import type { LabelProps } from "./Label.types.ts";

const StyledLabel = styled.label<{disabled?: boolean, font?: string, isvalid?: boolean}>`
 font-family: 'Times New Roman', Times, serif;
 padding-bottom: 0.2em;
 color: #3a4556;
 outline: none;
 ${({ font }) =>
    font === 'default' &&
    css`
      font-weight: 500;
    `};

  ${({ font }) =>
    font === 'bold' &&
    css`
      font-weight: 800;
    `};

  ${({ font }) =>
    font === 'italic' &&
    css`
      font-style: italic;
    `};
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};
     ${props =>
    props.isvalid &&
    css`
      color: #ff0000;
    `};
   
`;
const Container = styled.div`
    display:flex;
    flex-direction: column;
`
const InputField = styled.input<{ isvalid?: boolean }> `
    border-radius: 5px;
    padding: .8em;
    width: 17em;
    border: 2px solid #3a4556;
    margin-bottom: 1.3em;
   
    ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `};

    ${props =>
    props.isvalid &&
    css`
      border: 2px solid red;
      &:focus {
        outline: none; 
    }
    `};
`;
export default function Label({ label, disabled, font, isvalid }: LabelProps) {
    return (
        <Container>
            <StyledLabel 
                font={font}
                disabled={disabled}
                data-testid="myLabel"
                isvalid={isvalid}
            >
                {label}
            </StyledLabel>
            <InputField 
                disabled={disabled} 
                isvalid={isvalid} 
                data-testid="myInputField"
            />
        </Container>
    );
}
