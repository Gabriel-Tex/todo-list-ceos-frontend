import { useState } from "react"
import { cadastroRequest } from "../../services/cadastro"
import "./style.css"

function Cadastro() {

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
        <div className="cadastro-page">

            <section>
                <h1>Todo List</h1>

                <form onSubmit={fazerCadastro}>

                    <h2>Cadastro</h2>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br />

                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    /><br />

                    <button
                        type="submit"
                        id="btn_enviar"
                    >
                        Cadastrar
                    </button>

                    <a href="/" id="link_conta">
                        Já possui conta? Clique aqui
                    </a>

                </form>
            </section>

        </div>
    )
}

export default Cadastro