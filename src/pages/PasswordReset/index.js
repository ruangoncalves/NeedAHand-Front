import react from 'react';
import {Link} from 'react-router-dom';
import  './styles.css';
import {FiArrowLeft} from 'react-icons/fi';

export default function PasswordReset(){
    return(   
        <div className="pasReset-container">
            <form>
                <h1>Digite seu email</h1>
                <input placeholder="Seu email" />
                <button className="button" type="submit">Enviar</button>
                <Link to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Retornar a pagina inicial
                </Link>
            </form>            
        </div>       
    );
}