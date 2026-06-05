import React from "react";
import "./style.css";
import GitHubIcon from "../../../assets/github.svg";
import InputSearch from "../../forms/Search"
import { Link } from "react-router-dom";

export default function Header({
    icon,
    redirectTo,
    showSearch,
    searchValue,
    onSearchChange
}) {
    return (

        <header>
            <div id="header-container">

                <div id="title-and-icon">
                    <a href="https://github.com/Gabriel-Tex/todo-list-ceos-frontend" target="_blank">
                        <img src={GitHubIcon} alt="github icon" />
                    </a>
                    <h1>TODO List</h1>
                </div>

                <Link to={redirectTo}>
                    <img src={icon} alt="navigation icon" />
                </Link>
            </div>

            {showSearch && <InputSearch
                value={searchValue}
                onChange={onSearchChange}
            />}
        </header>

    );
}