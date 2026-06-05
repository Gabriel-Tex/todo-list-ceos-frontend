import React, { useState } from "react";
import "./style.css";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import  {createTask}  from "../../../services/task";


export default function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("medium")
    const [finalDate, setFinalDate] = useState("")

    async function dispararEnvio(e) {
        e.preventDefault();

        const novoObjetoTask = {
            title,
            description,          
            priority,
            final_date: finalDate || null  
        };

        try {
            await createTask(novoObjetoTask);
            alert("Tarefa adicionada com sucesso!");
            
            // Limpando os campos
            setTitle("");
            setDescription("");
            setFinalDate("");
            setPriority("medium");

            if (onTaskAdded) onTaskAdded();
        } catch (error) {
            console.error("Erro ao cadastrar tarefa:", error);
            alert("Erro ao salvar tarefa no servidor.");
        }
    }

    return (

        <form className="add-task" onSubmit={dispararEnvio}>
            <Input 
                className="input-task"
                placeholder="Título da tarefa"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <Input
                className="input-task"
                placeholder="Descrição (opcional)"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <select
                className="input-task select-priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="low">Baixa</option>
                <option value="medium">Média</option>
                <option value="high">Alta</option>
            </select>

            <Input 
                className="input-task"
                type="date"
                value={finalDate}
                onChange={(e) => setFinalDate(e.target.value)}
            />  
            
            <Button
                type="submit"
                children="Adicionar tarefa"
                className="btn-add-task"
            />

        </form>

    );
}

