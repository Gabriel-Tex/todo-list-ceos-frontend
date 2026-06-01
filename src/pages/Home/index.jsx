import React from "react";
import "./style.css";
import Header from "../../components/layout/Header";
import TaskList from "../../components/task/TaskList";
import Footer from "../../components/layout/Footer";
import Profile from "../../assets/profile.svg";

export default function Home() {
    return (

        <div className="homepage">

            <Header 
                icon={Profile}
                redirectTo={"/profile"}
                showSearch={true}
            />

            <main>

                <TaskList />

            </main>

            <Footer />
        </div>
    );
}