import React from "react";
import TwitterIcon from "../images/Twitter Icon.png"
import InstagramIcon from "../images/Instagram Icon.png"
import GitHubIcon from "../images/GitHub Icon.png"
import FacebookIcon from "../images/Facebook Icon.png"

export default function Footer(){
    return(
        <div className="footer">
            <a href="https://twitter.com/Tushar_Malhan_" target="_blank"
            rel="noopener noreferrer">
                <img src={TwitterIcon}></img>
            </a>
            <a href="https://www.instagram.com/tushar_malhan_/" target="_blank"
            rel="noopener noreferrer">
                <img src={InstagramIcon}></img>
            </a>
            <a href="https://github.com/AbraTM/JS-Projects.git" target="_blank"
            rel="noopener noreferrer">
                <img src={GitHubIcon}></img>
            </a>
            <a>
                <img src={FacebookIcon}></img>
            </a>
        </div>
    )
}