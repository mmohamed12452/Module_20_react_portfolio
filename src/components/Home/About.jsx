import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProfileImage from '../../assets/trip.jpg';
import Type from "./Type";

const About = () =>{
    return(
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <p className="home-about-body">
                            Hello there, I go by the names <span className="yellow">Mohamed Mohamed</span>
                            <br />
                            <br />
                             I am currently a Software Engineering student at University of Minnesota Coding BootCamp.
                            <br /><br />
                            Being a <b className="yellow">FullStack Web</b> developer,
                            I love problem solving and expanding my knowledge on new technologies.  
                        </p> 
                        <Type/>  
                                            
                    </Col>
                    <Col md={4}>
                       <img src={ProfileImage} className="img-fluid" alt="profile picture" id="profile-picture"/>
                    </Col>
                </Row>
            
            </Container>
        </Container>
    )

}

export default About;