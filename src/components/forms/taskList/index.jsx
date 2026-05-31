import React from "react";
import "./style.css";
import Task from "../../ui/task";
import Button from "../../ui/button";


export default function TaskList() {
    return (

        <div id="task-list">
            <form className="add-task" action="#">
                { /*<input id="input-task" type="text" placeholder="Adicionar tarefa"/> */}
                <Button
                    type="submit"
                    children="Adicionar tarefa"
                />
                
            </form>

            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}

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