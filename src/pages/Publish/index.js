import react from 'react';
import InputMask from 'react-input-mask';
import './styles.css';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

export default function Publish() {
    return(
        <div className="publish-container">          
            <form>
                <h1>Divulgue seu trabalho</h1>
                <input placeholder="Título" />
                <textarea placeholder="Descrição"></textarea>   
                <button className="button" type="submit">Publicar</button>
                <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Retornar a pagina inicial
                </Link>
            </form> 
        </div>        
    );
}