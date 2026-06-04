import React, { useState, useEffect } from "react";
import "./style.css";
import Task from "../../task/Task";
import Button from "../../ui/Button";
import TaskForm from "../AddTaskForm";
import { getTasks } from "../../../services/task";

export default function TaskList() {
    
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function fetchMyData() {
            try {
                const data = await getTasks(); 
                
                if (Array.isArray(data)) {
                    setTasks(data); 
                } else {
                    setTasks([]); 
                }
            } catch (error) {
                console.error("Erro ao buscar tarefas:", error);
                setTasks([]); 
            }
        }

        fetchMyData();
    }, []); 

    return (
        <div id="task-list">
            <TaskForm />

            <div id="title-container">
                <h2 id="title-task-list"> Minhas Tarefas </h2>
            </div>


            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}