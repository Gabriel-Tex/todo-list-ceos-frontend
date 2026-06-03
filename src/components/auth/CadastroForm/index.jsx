import { useState } from "react"
import "../style.css"
import Input from "../../ui/Input"
import { cadastroRequest } from "../../../services/cadastro"
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";


export default function CadastroForm() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate();

    async function fazerCadastro(e) {
        e.preventDefault()

        try {

            const data = await cadastroRequest(
                username,
                email,
                senha
            )

            navigate("/login");

        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar usuário")
        }
    }

    return (
        <form
            className="login-form"
            onSubmit={fazerCadastro}
        >
            <div className="input-container">

                <h2 id="login-title">
                    Cadastro
                </h2>

                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
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

            <Link to={"/login"} id="link-account">
                <p>Já tem conta? Clique aqui.</p>
            </Link>

        </form>
    )
}