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
                <strong>Nome Completo</strong>
                <strong>Telefone</strong>
                <strong>CPF</strong>
                <strong>Data de nascimento</strong>
                <strong>E-mail</strong>   
                
                <Link to="/">
                    <FiArrowLeft size={16} color="#E02041" />
                    Retornar à página inicial
                </Link>
            </form> 
        </div>        
    );
}