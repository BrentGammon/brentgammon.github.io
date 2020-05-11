import React from "react";
import './header.scss';
import ImageContainer from "../imageContainer/ImageContainer";
import profileImage from '../../images/profile.jpeg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"

interface HeaderProps {
    darkMode: boolean
}
function Header(props: HeaderProps) {
    return (
        <div className={props.darkMode ? 'header-dark' : 'header'}>
            <ImageContainer imageUrl={profileImage} imageAlt={'Brent Gammon'} />
            <h1>Brent Gammon</h1>
            <h2>Software Engineer @ <a href={"https://www.motabilityoperations.co.uk/"}>Motability Operations </a></h2>
            <div className={'links'}>
                <a href="https://www.linkedin.com/in/brent-gammon-606027b9/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://twitter.com/Brent_Gammon"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href=" https://github.com/BrentGammon"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}

export default Header;