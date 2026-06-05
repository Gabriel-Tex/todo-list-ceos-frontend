import React, { useState, useEffect, useCallback } from "react";
import "./style.css";
import Task from "../../task/Task";
import Button from "../../ui/Button";
import TaskForm from "../AddTaskForm";
import { getTasks, patchTask, deleteTask, updateTask } from "../../../services/task";
import { useNavigate } from "react-router-dom";

export default function TaskList({ searchQuery = "" }) {

    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();


    const fetchMyData = useCallback(async () => {
        try {
            const data = await getTasks(searchQuery);
            setTasks(Array.isArray(data) ? data : []);

        }
        catch (error) {
            if (error.status === 401) {
                localStorage.removeItem("token");
                localStorage.removeItem("refresh");
                navigate("/login");
                return;
            }
            console.error("Erro ao buscar tarefas:", error);
            setTasks([]);
        }
    }, [searchQuery, navigate]);

    useEffect(() => {
        fetchMyData();
    }, [fetchMyData]);

    async function handleStatusChange(task) {
        const novoStatus = task.status === "completed" ? "pending" : "completed";

        try {
            setTasks((prev) =>
                prev.map((t) =>
                    t.id === task.id ? { ...t, status: novoStatus } : t
                )
            );

            await patchTask(task.id, { status: novoStatus });
        }
        catch (error) {
            console.error("Erro ao atualizar status:", error);
            setTasks((prev) =>
                prev.map((t) =>
                    t.id === task.id ? { ...t, status: task.status } : t
                )
            );
        }
    }

    async function handleDelete(id) {
        try {
            setTasks((prev) => prev.filter((t) => t.id !== id));
            await deleteTask(id);
        } catch (error) {
            console.error("Erro ao excluir tarefa:", error);
            fetchMyData();
        }
    }

    async function handleEdit(id, campos) {
        try {
            const atualizada = await updateTask(id, campos);
            setTasks((prev) => prev.map((t) => (t.id === id ? atualizada : t)));
        } catch (error) {
            console.error("Erro ao editar tarefa:", error);
        }
    }

    return (
        <div id="task-list">
            <TaskForm onTaskAdded={fetchMyData} />

            <div id="title-container">
                <h2 id="title-task-list"> Minhas Tarefas </h2>
            </div>


            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onStatusChange={handleStatusChange}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );
}