const API_URL = "http://localhost:8000/api/register/";

// Função de cadastro
export async function cadastroRequest(username, email, password) {
    const response = await fetch(`${API_URL}`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username,
            email,
            password
        })
    });

    if (!response.ok) {
        throw new Error("Não foi possível cadastrar o usuário");
    }

    return response.json();
}