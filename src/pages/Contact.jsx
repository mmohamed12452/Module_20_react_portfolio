import React from "react";
import '../styles2.css';

const Contact = () => {
    return(
        <div>
         <section id = "Contact">
    <h2>My contact</h2>
    <form action="">
        <fieldset>
            <legend>Contact me through this form</legend>
       
        <label for="name"> Name </label>
        <br/>
        <input type="text" name="name" id="name" placeholder="enter your name"/>
        <br/><br/>
        <label for = "number">Phone Number   </label>
        <br/>
        <input type="number" name="number" id="phone_number"placeholder="Enter phone number"/>
        <br/><br/>
        <label for = "email"> Email  </label>
        <br/>
        <input type="email" name="email" id="email" placeholder="Enter your email "/ >
        <br/><br/>
        <br/>
        <label for="message">Write your Message here</label>
        <br/>
        <textarea name="messagem" id="messagem" cols="30" rows="10" placeholder="Leave your message in this box"></textarea>
        <br/>
        <button type="submit">SEND MESSAGE</button>
    </fieldset>
    </form>
    </section>
        </div>   

    )
}

export default Contact;