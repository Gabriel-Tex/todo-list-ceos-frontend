import React from "react";
import "./style.css";

export default function Button({
    children,
    onClick,
    type = "button",
}) {
    return (
        <button
            type={type}
            onClick={onClick}
        > {children} </button>
    );
}
