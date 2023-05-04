import React from "react";
import '../styles2.css';
import ProjectOneImage from '../assets/Screenshot 2023-01-31 081752.png';
import ProjectTwoImage from '../assets/fitness.png';

const Projects = () => {
    return(
        <div>
             <section id = "Work">
    <h2>My Projects</h2>
    <div className="Project">
        <img src={ProjectOneImage}/>
        <div>
            <h2>PROJECT: <em> <a href="https://kimberlyjane57.github.io/seven-wonders/">SEVEN WONDERS OF THE WORLD</a> </em></h2>
            <br/>
            <h3>Project Description</h3>
            <br/>
            <p>My Project for seven wonders of the world is an app that will help you travel to the destinations that are listed in my presentation.</p>
        </div>
    </div>
    <br/>
    <div class="Project">
        <img src={ProjectTwoImage}/>
        <div>
            <h2>PROJECT: <em> <a href="https://github.com/Safi1317/Fitness-Blog/">FITNESS-TALKS</a> </em></h2>
            <br/>
            <h3>Project Description</h3>
            <br/>
            <p>We created "Fitness talks" based on the wellness of an group using a several fitness exercises to help them easily keep fit. Users have to sign in via their username and password afterward they will be able to see the websites homepage, and login page. The user can choose the workout on the fitness exercises on the homepage.</p>
        </div>
    </div>
    </section>
        </div>

    )

}

export default Projects;