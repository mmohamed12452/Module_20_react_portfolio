import React from "react";


import { Container, Row, Col } from "react-bootstrap";

import About from '../components/Home/About';

const Home = () => {
    return(
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
            
                    <About/>
                </Container>
            </Container>
        </section>

    )
}

export default Home;
