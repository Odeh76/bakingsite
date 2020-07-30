import React from 'react'
import styled from 'styled-components';
import croissant from '../img/croissant.jpg'
function Products() {
    return (
        <ProductsStyle>
    <section>
        <div className="container">
            
            <img src={croissant} alt="croissant"/>
            <img src={croissant} alt="croissant"/>
            <img src={croissant} alt="croissant"/>
            <img src={croissant} alt="croissant"/>
            <img src={croissant} alt="croissant"/>
            <img src={croissant} alt="croissant"/>
        </div>
    </section>
        </ProductsStyle>
    )
}

export default Products

const ProductsStyle = styled.section`
.container {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
     img {    
        width: 375px;
        height: 250px;
        margin: auto;
     }

     img:hover {
         opacity: 0.3;
         cursor: pointer;
     }
`

