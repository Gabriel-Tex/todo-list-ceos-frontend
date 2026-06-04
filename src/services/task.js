const API_URL = "http://localhost:8000/api/tasks/";

function getToken() {
    return localStorage.getItem("token");
}

function getHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${getToken()}`
    };
}

// Listar tarefas
export async function getTasks() {
    const response = await fetch(API_URL, {
        method: "GET",
        headers: getHeaders()
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar tarefas");
    }

    return response.json();
}

// Buscar uma tarefa específica
export async function getTask(id) {
    const response = await fetch(`${API_URL}${id}/`, {
        method: "GET",
        headers: getHeaders()
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar tarefa");
    }

    return response.json();
}

// Criar tarefa
export async function createTask(task) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error("Erro ao criar tarefa");
    }

    return response.json();
}

// Atualizar tarefa
export async function updateTask(id, task) {
    const response = await fetch(`${API_URL}${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(task)
    });

    if (!response.ok) {
        throw new Error("Erro ao atualizar tarefa");
    }

    return response.json();
}

// Excluir tarefa
export async function deleteTask(id) {
    const response = await fetch(`${API_URL}${id}/`, {
        method: "DELETE",
        headers: getHeaders()
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir tarefa");
    }

    return true;
}