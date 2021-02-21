import react from 'react';
import {Link} from 'react-router-dom';
import  './styles.css';
import {FiLogIn} from 'react-icons/fi';
import {FiArrowLeft} from 'react-icons/fi';

export default function Login(){
    return(   
        <div className="login-container">
                <form>
                    <h1>Fazer login</h1>
                    <input placeholder="Seu ID" />
                    <input type="password" name="password" placeholder="Digite sua senha" />
                    <span class="lnr lnr-eye"></span>
                    <button className="button" type="submit">Entrar</button>
                    <Link to="/registrar">
                        <FiLogIn size={16} color="#E02041" />
                        Não sou cadastrado
                    </Link>
                    <Link to="/PasswordReset">
                        <FiLogIn size={16} color="#E02041" />
                        Esqueci minha senha
                    </Link>
                    <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Retornar à página inicial
                </Link>
                </form>           
        </div>

        
            
    );
}