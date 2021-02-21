import react from 'react';
import {Link} from 'react-router-dom';
import  './styles.css';
import {FiArrowLeft} from 'react-icons/fi';

export default function PasswordReset(){
    return(   
        <div className="pasReset-container">
            <form>
                <h1>Recupere sua senha</h1>
                <input placeholder="Seu e-mail" />
                <button className="button" type="submit">Enviar</button>
                <Link to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Retornar à página inicial
                </Link>
            </form>            
        </div>       
    );
}