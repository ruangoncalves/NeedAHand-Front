import react, {useState} from 'react';
import InputMask from 'react-input-mask';
import './styles.css';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

export default function MyAccount() {
    return(
        <div className="myaccount-container">
            <form className="InfoGeral">
                <strong>Nome</strong>
                <strong>Telefone</strong>
                <strong>Cpf</strong>
                <strong>Data de aniversário</strong>
                <strong>Email</strong>   
                
                <Link to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Retornar a pagina inicial
                </Link>
            </form> 
        </div>        
    );
}