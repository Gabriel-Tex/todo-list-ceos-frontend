import React from "react";
import "./style.css";
import Arrow from "../../../assets/arrow.svg";
import Checkbox from "../../ui/checkbox";


export default function Task({ task }) {
    return (
        <div className="task">

            <div className="task-header">
                <div className="task-title">

                    <h1>{task.title}</h1>


                </div>

                <Checkbox />
            </div>



            <div className="content">
                <p>{task.description}</p>

                <div className="dates">
                    <p>updated at: {task.created_at}</p>

                    <p>created at: {task.updated_at}</p>
                </div>

            </div>


        </div>
    );
}

