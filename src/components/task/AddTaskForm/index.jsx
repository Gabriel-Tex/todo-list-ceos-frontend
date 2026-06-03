import React from "react";
import "./style.css";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

export default function TaskForm() {
    return (

        <form className="add-task" action="#">
            <Input 
                className="input-task"
                placeholder="Título da tarefa"
                type="text"
            />
            <Input 
                className="input-task"
                placeholder="Descrição da tarefa"
                type="text"
            />
            
            { /* Lembrar: criar uma opção de escolher prioridade */}
            
            <Button
                type="submit"
                children="Adicionar tarefa"
                className="btn-add-task"
            />

        </form>

    );
}

