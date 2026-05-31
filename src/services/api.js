const API_URL = "http://localhost:8000"

export async function loginRequest(email, senha) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            email,
            senha
        })
    })

    if (!response.ok) {
        throw new Error("Erro ao fazer login")
    }

    return response.json()
}