import { useState } from "react"
import "../style.css"
import Input from "../../ui/Input"
import { cadastroRequest } from "../../../services/cadastro"
import Button from "../../ui/Button";


export default function CadastroForm() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    async function fazerCadastro(e) {
        e.preventDefault()

        try {

            const data = await cadastroRequest(
                username,
                email,
                senha
            )


            alert("Usuário cadastrado com sucesso!")

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

            <a id="link-account" href="#">
                <p>Não tem conta? Clique aqui.</p>
            </a>

        </form>
    )
}