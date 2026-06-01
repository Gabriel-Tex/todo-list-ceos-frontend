import LoginForm from "../../components/auth/LoginForm"
import "./style.css"

export default function Login() {
    return (
        <div className="login-page">

            <main>

                <h1 id="main-title">
                    Todo List
                </h1>

                <LoginForm />

            </main>

        </div>
    )
}
