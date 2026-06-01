import CadastroForm from "../../components/auth/CadastroForm"
import "./style.css"

function Cadastro() {


    return (
            <div className="cadastro-page">
    
                <main>
    
                    <h1 id="main-title">
                        Todo List
                    </h1>
    
                    <CadastroForm />
    
                </main>
    
            </div>
    )
}

export default Cadastro