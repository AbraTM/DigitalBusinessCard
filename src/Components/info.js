import React from "react";
import Email from "../images/Mail.png"
import LinkedIn from "../images/linkedin.png"

export default function Info(){
    return(
        <div className="info">
            <img src="../profile.jpg" alt="Profile"></img>
            <h1>Tushar Malhan</h1>
            <h4>Frontend Developer</h4>
            <div className="links">
                <a href="mailto:tusharmalhan2564@gmail.com?" target="_top">
                    <button className="email-btn">
                        <img src={Email} alt=""></img>
                        <span>Email</span>
                    </button>
                </a>
                <a href={'//www.linkedin.com/in/tushar-malhan-9998ab256'} target="_blank" rel="noopener noreferrer">
                    <button className="linkedIn-btn">
                        <img src={LinkedIn} alt=""></img>
                        <span>LinkedIn</span>
                    </button>
                </a>
            </div>
        </div>
    )
}