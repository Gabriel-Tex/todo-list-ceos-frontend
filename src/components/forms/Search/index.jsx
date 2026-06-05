import React from "react";
import "./style.css";

export default function InputSearch({ value, onChange }) {
    return (
        <input
            className="search"
            type="text"
            placeholder="Pesquisar"
            value={value}
            onChange={onChange}
        />
    );
}