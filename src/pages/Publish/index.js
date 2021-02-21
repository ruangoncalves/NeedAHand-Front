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
                <input placeholder="País" />
                <input placeholder="UF" />
                <input placeholder="Cidade" />
                <input placeholder="Profissional" />
                <select id="Categoria">
                    <option>Aulas</option>
                    <option>Manutenções</option>
                    <option>Transportes</option>
                    <option>Serviços gerais</option>
                    <option>Cuidados pessoais</option>
                    <option>Eventos</option>
                </select>
                <select id="Sub categoria">
                    <option>SubCategoria</option>
                </select>

                <button className="button" type="submit">Publicar</button>
                <Link to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Retornar à página inicial
                </Link>
                <br></br>
                <br></br>
            </form> 
        </div>        
    );
}