import React from "react";
import "./style.css";
import GitHubIcon from "../../assets/github.svg";
import Profile from "../../assets/profile.svg";
import Task from "../../components/ui/task";

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

                <input className="search" type="text" placeholder="Pesquisar" />
            </header>

            <main>
                <div id="task-list">
                    <form className="add-task" action="#">
                        { /*<input id="input-task" type="text" placeholder="Adicionar tarefa"/> */}
                        <button>Adicionar tarefa</button>
                    </form>

                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}

                </div>
            </main>

            <footer>
                <p>TODO List | PS da CEOS</p>
            </footer>
        </div>
    );
}

const tasks = [
    {
        id: 1,
        title: "Fazer num sei o quê",
        description: "1 -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim autem, officiis itaque quis possimus, labore quia ipsa beatae natus adipisci tempore, molestiae velit magni sunt veritatis modi. Illo, ipsam nihil?",
        created_at: "xx-xx-xxxx",
        updated_at: "xx-xx-xxxx",
    },
    {
        id: 2,
        title: "Fazer sei la o quê la",
        description: "2 -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim autem, officiis itaque quis possimus, labore quia ipsa beatae natus adipisci tempore, molestiae velit magni sunt veritatis modi. Illo, ipsam nihil?",
        created_at: "xx-xx-xxxx",
        updated_at: "xx-xx-xxxx",
    },
    {
        id: 3,
        title: "Lavar louça",
        description: "3 -Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim autem, officiis itaque quis possimus, labore quia ipsa beatae natus adipisci tempore, molestiae velit magni sunt veritatis modi. Illo, ipsam nihil?",
        created_at: "xx-xx-xxxx",
        updated_at: "xx-xx-xxxx",
    },
]