import React from "react";
import "./style.css";
import Header from "../../components/layout/header";
import TaskList from "../../components/layout/task-list";
import Footer from "../../components/layout/footer";

export default function Home() {
    return (

        <div className="homepage">

            <Header />

            <main>

                <TaskList />

            </main>

            <Footer />
        </div>
    );
}