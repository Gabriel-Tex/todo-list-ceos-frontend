import { useState } from "react"
import "./style.css"
import Input from "../../ui/input"
import { loginRequest } from "../../../services/api"
import Button from "../../ui/button";


export default function LoginForm() {

    const [username, setUsername] = useState("")
    const [senha, setSenha] = useState("")

    async function fazerLogin(e) {
        e.preventDefault()

        try {

            const data = await loginRequest(username, senha)

            console.log(data)// Pra debbug aq, tira dps

            localStorage.setItem(
                "token",
                data.access_token
            )

            alert("Login realizado!")

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

            <a id="link-account" href="#">
                <p>Não tem conta? Clique aqui.</p>
            </a>

        </form>
    )
}