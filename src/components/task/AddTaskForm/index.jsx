import React, { useState } from "react";
import "./style.css";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import  {createTask}  from "../../../services/task";


export default function TaskForm() {
    const [title, setTitle] = useState("")
    const [priority, setPriority] = useState("low")
    const [finalDate, setFinalDate] = useState("")

    async function dispararEnvio(e) {
        e.preventDefault();

        const novoObjetoTask = {
            title: title,          
            priority: priority,
            final_date: finalDate   
        };

        try {
            await createTask(novoObjetoTask);
            alert("Tarefa adicionada com sucesso!");
            
            // Limpando os campos
            setTitle("");
            setFinalDate("");
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
                placeholder="Prioridade (Baixa, Média, Alta)"
                type="text"
                list="prioridades" 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            />

            <Input 
                className="input-task"
                type="date"
                value={finalDate}
                onChange={(e) => setFinalDate(e.target.value)}
            />

            <datalist id="prioridades">
                <option value="low" labe="Baixa"/>
                <option value="medium" label="Média" />
                <option value="high" label="Alta"/>
            </datalist>
            
            <Button
                type="submit"
                children="Adicionar tarefa"
                className="btn-add-task"
            />

        </form>

    );
}

