const API_URL = "http://localhost:8000/api/profile/";

export async function profileRequest() {
    const token = localStorage.getItem("token");

    const response = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao buscar perfil");
    }

    return response.json();
}