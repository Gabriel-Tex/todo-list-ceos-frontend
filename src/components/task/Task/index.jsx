import React, { useState } from "react";
import "./style.css";
import Checkbox from "../../ui/Checkbox";


export default function Task({ task, onStatusChange, onDelete, onEdit }) {

    const prioridadeLabel = {
        low: "Baixa",
        medium: "Média",
        high: "Alta"
    };

    const [editando, setEditando] = useState(false);

    const [titulo, setTitulo] = useState(task.title);
    const [descricao, setDescricao] = useState(task.description || "");
    const [prioridade, setPrioridade] = useState(task.priority);
    const [prazo, setPrazo] = useState(task.final_date || "");

    function abrirEdicao() {
        setTitulo(task.title);
        setDescricao(task.description || "");
        setPrioridade(task.priority);
        setPrazo(task.final_date || "");
        setEditando(true);
    }

    async function salvarEdicao(e) {
        e.preventDefault();
        await onEdit(task.id, {
            title: titulo,
            description: descricao,
            priority: prioridade,
            final_date: prazo || null,
            status: task.status
        });
        setEditando(false);
    }

    return (
        <div className={`task ${task.status === "completed" ? "task-completed" : ""}`}>

            <div className="task-header">
                <div className="task-title">

                    <h1>{task.title}</h1>

                    <span className={`priority-badge priority-${task.priority}`}>
                        {prioridadeLabel[task.priority] || task.priority}
                    </span>

                </div>

                <div className="task-actions">
                    <Checkbox
                        checked={task.status === "completed"}
                        onChange={() => onStatusChange && onStatusChange(task)}
                    />
                    <button className="btn-task btn-edit" onClick={abrirEdicao} title="Editar">✏️</button>
                    <button className="btn-task btn-delete" onClick={() => onDelete && onDelete(task.id)} title="Excluir">🗑️</button>
                </div>
            </div>

            {editando && (
                <form className="edit-form" onSubmit={salvarEdicao}>
                    <input
                        className="edit-input"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Título"
                        required
                    />
                    <input
                        className="edit-input"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Descrição"
                    />
                    <select
                        className="edit-input"
                        value={prioridade}
                        onChange={(e) => setPrioridade(e.target.value)}
                    >
                        <option value="low">Baixa</option>
                        <option value="medium">Média</option>
                        <option value="high">Alta</option>
                    </select>
                    <input
                        className="edit-input"
                        type="date"
                        value={prazo}
                        onChange={(e) => setPrazo(e.target.value)}
                    />
                    <div className="edit-buttons">
                        <button type="submit" className="btn-task btn-save">Salvar</button>
                        <button type="button" className="btn-task btn-cancel" onClick={() => setEditando(false)}>Cancelar</button>
                    </div>
                </form>
            )}

            {!editando && (
                <div className="content">
                    {task.description && <p>{task.description}</p>}
                    <div className="dates">
                        <p>Criado em: {new Date(task.created_at).toLocaleDateString("pt-BR")}</p>
                        {task.final_date && (
                            <p>Prazo: {new Date(task.final_date + "T00:00:00").toLocaleDateString("pt-BR")}</p>
                        )}
                    </div>
                </div>
            )}


        </div>
    );
}

