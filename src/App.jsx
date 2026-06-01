import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
