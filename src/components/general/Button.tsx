import styled from "styled-components";

interface ColorSet {
    active: string;
    idle: string;
}

interface ColorSets {
    [propKey: string]: ColorSet;
}

interface ButtonProps {
    colors: ColorSet;
}

interface ButtonComponent {
    label: string;
    type?: string;
    onClick?: React.MouseEventHandler;
}

const Button = ({ label, type = 'positive', onClick } : ButtonComponent) => {
    const colors: ColorSets = {
        positive: { active: '#3E8042', idle: '#5AB85F' },
        negative: { active: '#BD4235', idle: '#FA5745' },
        neutral: { active: '#2E3DAB', idle: '#3D50E0' }
    };

    const colorSet: ColorSet = colors[type];
    
    return <StyledButton onClick={onClick} colors={colorSet}>{label}</StyledButton>
}

const StyledButton = styled.button<ButtonProps>`
    max-width: 100%;
    width: 300px;
    border: none;
    background-color: ${({ colors: { idle } }) => idle};
    
    border-radius: 3px;
    color: #fff;
    padding: .5rem 1rem;
    box-shadow: 0 0 6px 2px rgba(0, 0, 0, .255);
    margin: 1rem;
    height: 4rem;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color .2s ease-in-out;

    &:hover, &:focus {
        background-color: ${({ colors: { active } }) => active};
    }
`;

export default Button;