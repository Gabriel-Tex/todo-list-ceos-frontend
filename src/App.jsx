import { Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
<<<<<<< HEAD
import Cadastro from "./pages/Cadastro";
=======
>>>>>>> d4e4f6d2917c1a8bf385c2b874d730f1c21f7332
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/cadastro" element={<Cadastro />} />
=======
>>>>>>> d4e4f6d2917c1a8bf385c2b874d730f1c21f7332
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
