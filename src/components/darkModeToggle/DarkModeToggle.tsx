import React, {Dispatch, SetStateAction, useState} from "react";
import {faSun, faMoon} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './darkModeToggle.scss'

interface DarkModeToggleProps {
    darkModeToggle: boolean
    setDarkModeToggle:  Dispatch<SetStateAction<boolean>>
}


function DarkModeToggle(props: DarkModeToggleProps) {
    const icon = props.darkModeToggle ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />;
    const element = document.getElementsByTagName("body");
    if(props.darkModeToggle) {
        if(element) {
            element[0].classList.add("dark-mode");
        }
    } else {
        if(element) {
            element[0].classList.remove("dark-mode");
        }
    }

    return (
        <div className={props.darkModeToggle ? 'dark-mode-toggle-dark': 'dark-mode-toggle'}>
            <div onClick={() => {
                console.log('button called')
                props.setDarkModeToggle(!props.darkModeToggle)}
            }>{icon}</div>
        </div>
    )
}

export default DarkModeToggle;