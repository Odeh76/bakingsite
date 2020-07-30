import React from 'react'
import homepic from '../img/homepic.jpg'
import styled from 'styled-components';
function Home() {
    return (
        <HomeStyle>
        <section>
        <h1>Baking is our specialty</h1>
        <button>Connect</button>
            <img src={homepic} alt=""/>
        </section>
        </HomeStyle>
    )
}

export default Home

const HomeStyle = styled.section`
    section {
        width: 100%;
        height: 100vh;
    }

    img {
        display: flex;
        width: 90%;
        height: 80vh;
        margin: auto;
        border-radius: 12%;
    }

    h1 {
        color: #333333;
        padding: 1rem;
        margin: 0 0 0 1rem;
        font-family: georgia, serif;
        font-style: italic;
        color: var(--darkGrey)
    }

    button {
        font-size: 1.4rem;
        border-radius: 0.5rem;
        border: 1px solid var(--lightPink);
        padding: 0.5rem 0.5rem;
        cursor: pointer;
        background-color: var(--mainGrey);
        color: var(--lightPink);
        display: inline-block;
        margin: 0.2rem 0.5rem 0.2rem 0.5rem;
        transition: all 0.3s ease-in-out;
        &:hover {
          background: var(--lightGray);
          color: var(--blackMain);
          transition: all 0.3s ease-in-out;
          font-style: italic;
          font-weight: 400;
        }

        &:focus {
            outline: 0;
            transition: all 0.3s ease-out;
            color: var(--blackMain);
        }
    }
`