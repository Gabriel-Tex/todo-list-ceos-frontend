import { useState } from "react"
import { loginRequest } from "../../services/api"
import "./Login.css"

function Login() {

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
        <main>
            
            <section>
                <h1>Todo List</h1>
                <form onSubmit={fazerLogin}>

                    <h2>Login</h2>

                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br></br>

                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    /><br></br>

                    <button type="submit" id='btn_enviar'>
                        Entrar
                    </button>
                    <a href="#" id="link_conta">Não tem conta?Clique aqui</a>
                </form>
            </section>

        </main>
    )
}

export default Login