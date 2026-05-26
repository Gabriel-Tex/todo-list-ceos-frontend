import React from "react";
import "./style.css"
import GitHubIcon from "../../assets/github.svg"
import Profile from "../../assets/profile.svg"

export default function Home() {
    return (

        <div className="page">

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

                <input className="search" type="text" placeholder="Pesquisar"/>
            </header>

            <main>
                <div id="task-list">
                    <form className="add-task" action="#">
                       { /*<input id="input-task" type="text" placeholder="Adicionar tarefa"/> */ }
                        <button>Adicionar tarefa</button>
                    </form>
                    

                    <div className="task">
                        <p>task</p>
                    </div>

                    <div className="task">
                        <p>task</p>
                    </div>

                    <div className="task">
                        <p>task</p>
                    </div>
                </div>
            </main>

            <footer>
                <p>TODO List | PS da CEOS</p>
            </footer>
        </div>
    );
}