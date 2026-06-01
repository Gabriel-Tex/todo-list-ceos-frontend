import React from "react";
import "./style.css";
import Avatar from "../../../assets/avatar.png"

export default function ProfileCard() {
    return (

        <div className="card">
            <div className="infos">
                <img src={Avatar} alt="avatar" />

                <div className="name-email-container">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>

            </div>

            <p id="created-at" >created at: {user.created_at}</p>
        </div>
    );
}

const user = {
    id: 1,
    name: "Username",
    email: "email@email.com",
    created_at: "xx-xx-xxxx",
};
