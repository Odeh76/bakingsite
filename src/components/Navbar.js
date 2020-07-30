import React from 'react'
import styled from 'styled-components'
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
function Navbar() {
    
    return (
        <Wrapper>
            <Router>
            <nav>
                <ul>
                    <Link className="link-style" to="/home">Home</Link>
                    <Link className="link-style" to="/about">About</Link>
                    <Link className="link-style" to="/services">Services</Link>
                    <Link className="link-style" to="/contact">Contact</Link>
                </ul>
            </nav>
            </Router>
        </Wrapper>
    )
}

export default Navbar

const Wrapper = styled.nav`
    nav {
        display: flex;
        text-align: center;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 15vh;
        background-color: var(--lightPink);
        border-radius: 20%;
        text-transform: uppercase;
    }

   

    .link-style {
        display: inline-block;
        text-decoration: none;
        padding: 1rem;
        width: 25px
        align-items: center;
        color: var(--darkGrey);
    }

    .link-style:hover {
        font-weight: 500;
    }
`;