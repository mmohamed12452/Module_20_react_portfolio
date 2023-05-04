import React from "react";

import Typewriter from 'typewriter-effect';

const Type = () => {
    return(
        <Typewriter
        options={
            {
                string:[
                    "Java Enthusiast",
                    "React Developer",
                    "Problem Solver",
            
                ],
                autoStart:true,
                loop:true,
                deleteSpeed:60,
            }
        }
        />
    )
}


export default Type;