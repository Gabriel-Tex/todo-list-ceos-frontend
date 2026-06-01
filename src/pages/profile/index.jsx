import React from "react";
import "./style.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Card from "../../components/profile/ProfileCard";
import HomeIcon from "../../assets/homeicon.png"

export default function Profile() {
    return (

        <div className="profile-page">

            <Header
                icon={HomeIcon}
                redirectTo={"/"}
                showSearch={false}
            />

            <main>

                <Card />

            </main>

            <Footer />
        </div>
    );
}