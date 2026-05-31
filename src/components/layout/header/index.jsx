import React from "react";
import "./style.css";
import GitHubIcon from "../../../assets/github.svg";
import Profile from "../../../assets/profile.svg";
import InputSearch from "../../../components/forms/inputSearch"

export default function Header() {
    return (

        <header>
            <div id="header-container">

                <div id="title-and-icon">
                    <a href="https://github.com/Gabriel-Tex/todo-list-ceos-frontend" target="_blank">
                        <img src={GitHubIcon} alt="github icon" />
                    </a>
                    <h1>TODO List</h1>
                </div>

                <a href="#">
                    <img src={Profile} alt="profile icon" />
                </a>
            </div>

            <InputSearch />
        </header>

    );
}