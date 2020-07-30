import React from 'react'
import testimg from '../img/testimg.png'
import styled from 'styled-components'
function About() {
    return (
        <AboutStyle>
        <h1>About us</h1>
        <section>
        <img src={testimg} alt="portrait"/>
        <div className="text-container">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum dolor aperiam accusamus sequi aliquid, ea illum molestiae iste explicabo labore voluptatibus omnis! Nulla, nisi laudantium voluptatibus tempora totam esse dignissimos, quisquam natus sunt velit, fugit debitis consectetur minima saepe? Omnis quisquam vitae asperiores nam in minima quis nulla ex tenetur illum labore ad perferendis, cumque laudantium adipisci magni ducimus laborum odio corrupti natus fugiat! Magni inventore amet labore, ipsam, possimus earum placeat optio molestias minus veritatis dolorem vitae. Reprehenderit, quidem dolor, sed facilis culpa officiis impedit temporibus sunt, <br /> <br /> nulla fuga aliquid. Officia nesciunt quis earum, repellat excepturi, facere accusamus cumque, distinctio error eligendi voluptas mollitia repellendus. Magni repudiandae temporibus, consequatur enim quisquam soluta sequi adipisci? Ad, mollitia perferendis. Fugit porro, tempora atque sit error iste veritatis. Autem numquam minima voluptatibus neque, quidem nesciunt, possimus, exercitationem accusamus aliquam fugiat tempore odio harum unde. Repellendus eos atque eius minima. Neque soluta porro similique libero error numquam id quibusdam quo laboriosam odio voluptas blanditiis sapiente quas animi, non beatae, maxime temporibus! Ut, vitae? Omnis unde, labore commodi consequuntur autem ea! Esse eveniet totam necessitatibus provident nihil numquam architecto dolor a dicta cum soluta, ullam magnam laborum quasi nobis blanditiis? Recusandae earum quia fugit.</p>
        </div>
        </section>
        </AboutStyle>

    )
}

export default About

const AboutStyle = styled.section`
    section {
        display: flex;
        width: 100%;
        height: 100vh;
    }

    img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        padding: 1rem;
    }

    .text-container {
        text-align: justify;
    }
`
