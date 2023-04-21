import React from 'react';

import styled from 'styled-components';

interface InputComponent extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    htmlFor?: string;
}

const Input = ({ type = 'text', label, htmlFor, placeholder, ...props } : InputComponent) => {
    let InputType: React.ReactNode;

    switch(type) {
        case 'textarea':
            InputType = <StyledTextarea id={htmlFor} placeholder={placeholder}></StyledTextarea>
            break;
        default:
            InputType = <StyledInput type={type} id={htmlFor} placeholder={placeholder} {...props} />
    }
    
    return <StyledContainer>
                <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>
                {InputType}
            </StyledContainer>
}

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledLabel = styled.label`
    font-weight: bold;
`;

const StyledInput = styled.input`
    margin: .5rem 0;
    border: 2px solid #5C5AE0;
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .24);
    background-color: #efefef;
`;

const StyledTextarea = styled.textarea`
    margin: .5rem 0;
    border: 2px solid #5C5AE0;
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, .24);
    background-color: #efefef;
`;

export default Input;