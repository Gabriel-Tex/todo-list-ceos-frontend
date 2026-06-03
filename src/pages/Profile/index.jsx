import React from "react";
import "./style.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/profile/ProfileCard";
import HomeIcon from "../../assets/homeicon.png";
import Button from "../../components/ui/Button";
import { logout } from "../../services/logout";
import { useNavigate } from "react-router-dom";


export default function Profile() {

    const navigate = useNavigate();

    async function handleLogout() {
        await logout();
        navigate("/login");
    }

    return (

        <div className="profile-page">

            <Header
                icon={HomeIcon}
                redirectTo={"/"}
                showSearch={false}
            />

            <main>

                <Card />

                <Button
                    type="button"
                    onClick={handleLogout}
                    children="Logout"
                    className="logout-button"
                />
            </main>

            <Footer />
        </div>
    );
}