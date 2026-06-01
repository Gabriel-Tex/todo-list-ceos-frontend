const API_URL = "http://localhost:8000/api/login/"

//Função de login
export async function loginRequest(username, password) {
    const response = await fetch(`${API_URL}`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username,
            password
        })
    })

    if (!response.ok) {
        throw new Error("Não foi possivel fazer o login")
    }

    return response.json()
}
