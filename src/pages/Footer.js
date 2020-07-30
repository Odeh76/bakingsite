import React from 'react'
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import styled from 'styled-components';
import {FaGoogle, FaFacebookF, FaInstagram} from 'react-icons/fa'
function Footer() {
    return (
        <FooterStyle>

       <section>
           <footer>
               <div>
                <Router>

               Tots and Victor &copy;
               All rights reserved
               <Link to=""><FaGoogle /></Link>
               <Link to=""><FaInstagram /></Link>
               <Link to=""><FaFacebookF /></Link>
                </Router>
               </div>
               <p>
               Designed and built by Abdullah Odeh
               </p>
           </footer>
       </section>
        </FooterStyle>
    )
}

export default Footer

const FooterStyle = styled.section`
    height: 20vh;
    width: 100%;
    background-color: var(--lightPink);

    p {
        font-size: 7px;
        float: right;
    }
`
