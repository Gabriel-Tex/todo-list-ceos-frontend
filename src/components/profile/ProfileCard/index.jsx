import React, { useState, useEffect } from "react";
import "./style.css";
import Avatar from "../../../assets/avatar.png"
import { profileRequest } from "../../../services/profile";

export default function ProfileCard() {

    // buscar informações do usuário
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadProfile() {
            try {
                const data = await profileRequest();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        }

        loadProfile();
    }, []);

    if (!user) {
        return <p>Carregando...</p>;
    }

    return (

        <div className="card">
            <div className="infos">
                <img src={Avatar} alt="avatar" />

                <div className="name-email-container">
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>

            </div>

            <p id="created-at" >created at: {new Date(user.date_joined).toLocaleString("pt-BR")}</p>
        </div>
    );
}
