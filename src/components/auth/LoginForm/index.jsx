import { useState } from "react"
import "../style.css"
import Input from "../../ui/Input"
import { loginRequest } from "../../../services/login"
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";



export default function LoginForm() {

    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate();

    async function fazerLogin(e) {
        e.preventDefault()

        try {

            const data = await loginRequest(username, senha)

            console.log(data);

            localStorage.setItem(
                "token",
                data.access
            )

            localStorage.setItem(
                "refresh",
                data.refresh
            );

            navigate("/");

        } catch (error) {
            console.log(error)
            alert("Erro no login")
        }
    }

    return (
        <form
            className="login-form"
            onSubmit={fazerLogin}
        >
            <div className="input-container">

                <h2 id="login-title">
                    Login
                </h2>

                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) =>
                        setSenha(e.target.value)
                    }
                />

            </div>

            <Button
                type="submit"
                children="Entrar"
            />

            <Link to={"/cadastro"} id="link-account">
                <p>Não tem conta? Clique aqui.</p>
            </Link>

        </form>
    )
}