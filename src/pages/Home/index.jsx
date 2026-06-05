import React, { useState } from "react";
import "./style.css";
import Header from "../../components/layout/Header";
import TaskList from "../../components/task/TaskList";
import Footer from "../../components/layout/Footer";
import Profile from "../../assets/profile.svg";


export default function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    return (

        <div className="homepage">

            <Header 
                icon={Profile}
                redirectTo={"/profile"}
                showSearch={true}
                searchValue={searchQuery}  
                onSearchChange={(e) => setSearchQuery(e.target.value)} 
            />

            <main>

                <TaskList searchQuery={searchQuery} />

            </main>

            <Footer />
        </div>
    );
}