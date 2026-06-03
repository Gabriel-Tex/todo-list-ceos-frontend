const API_URL = "http://localhost:8000/api/logout/";

export async function logout() {
    const refresh = localStorage.getItem("refresh");

    try {
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh,
            }),
        });
    } catch (error) {
        console.error(error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
}