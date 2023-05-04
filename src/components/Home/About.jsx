import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import ProfileImage from '../../assets/trip.jpg';
import Type from "./Type";
import '../../styles2.css';


const About = () =>{
    return(
        <div id="about-me">
                   <div className="about-me-wording">

                   <h1> Hello there, I go by the names <span className="yellow">Mohamed Mohamed</span></h1>
                           
                           <br />
                           <br />
                           <h2> I am currently a Software Engineering student at University of Minnesota Coding BootCamp.</h2>
                           <br /><br />
                           <h3>Being a <b className="yellow">FullStack Web</b> developer,</h3>
                          <h4> I love problem solving and expanding my knowledge on new technologies.  </h4>
                       <br />
                       <Type/>  
                  
                                            
                    </div>
                    <div className="about-profile-image">
                       <img src={ProfileImage} alt="profile picture"/>
                    </div>
               
        </div>
    )

}

export default About;