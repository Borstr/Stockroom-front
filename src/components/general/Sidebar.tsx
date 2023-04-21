import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
    return <StyledSidebar>
        <h1>Magazyn</h1>
        <StyledList>
            <li><Link to='/zlecenia'>Zlecenia</Link></li>
            <li><Link to='/produkty'>Produkty</Link></li>
            <li><Link to='/dostawy'>Dostawy</Link></li>
        </StyledList>
    </StyledSidebar>
}

const StyledSidebar = styled.aside`
    width: 300px;
    background-color: #6966FF;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    box-shadow: 3px 0 8px 4px rgba(0, 0, 0, .32);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    color: #fff;

    & h1 {
        margin: 0;
    }


`;

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;

    & a {
        color: #fff;
        text-decoration: none;
        display: block;
        transition: background-color .2s ease-in-out;
        text-align: center;
        font-size: 2rem;
        border-radius: 3px;
        margin: 1rem 0;

        &:hover, &:focus {
            background-color: #4B49B8;
        }
    }

    & * {
        height: 4rem;
        height: 4rem;
        line-height: 4rem;
        width: 100%;
    }
`;

export default Sidebar;