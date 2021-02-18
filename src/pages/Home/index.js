import react from 'react';
import  './styles.css';
import {Link} from 'react-router-dom';
import { FiTrash} from 'react-icons/fi';
import aulasImg from '../../assets/Aulas.png';
import consertosManutencoesImg from '../../assets/ConsertosManutencoes.png';
import cuidadosPessoaisImg from '../../assets/CuidadosPessoais.png';
import eventosImg from '../../assets/Eventos.png';
import servicosGeraisImg from '../../assets/ServicosGerais.png';
import transportesImg from '../../assets/Transportes.png';
import logoImg from '../../assets/LogoPrincipal.png';

export default function Home(){
    return(   
        <div className="home-container">
            <header className="margemSup">
            <img className="logo" src={logoImg} />
                <div className="Entrar">
                    <Link className="button" to="/Entrar">Entrar</Link>
                </div>
                <div className="Registrar">
                    <Link className="button" to="/Registrar">Registrar</Link>
                </div>               
            </header>
            <section className="categorias">
                <div className="linha1"></div>
                <div className="dropdown1">
                    <img className="a" src={aulasImg} />
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown2">
                    <img className="cm" src={consertosManutencoesImg} />
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown3">
                    <img className="cp" src={cuidadosPessoaisImg} />
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown4">
                    <img className="e" src={eventosImg} />
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown5">
                    <img className="sg" src={servicosGeraisImg} />
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                <div className="dropdown6">
                    <img className="t" src={transportesImg} />
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>              
                <div className="linha2"></div>
            </section>
            <section className="titulo">
                <h1>Anúncios</h1>
                <Link className="button" to="/Publicar">Publicar</Link>
            </section>
            
            <ul>
                <li>
                    <strong>TITULO</strong>
                    <p>descrição</p>

                    <button type="button">
                        <FiTrash size={20} color="#E02041" />
                    </button>
                </li>
                <li>
                    <strong>TITULO</strong>
                    <p>descrição</p>

                    <button type="button">
                        <FiTrash size={20} color="#E02041" />
                    </button>
                </li>
                <li>
                    <strong>TITULO</strong>
                    <p>descrição</p>

                    <button type="button">
                        <FiTrash size={20} color="#E02041" />
                    </button>
                </li>
                <li>
                    <strong>TITULO</strong>
                    <p>descrição</p>

                    <button type="button">
                        <FiTrash size={20} color="#E02041" />
                    </button>
                </li>
            </ul>
            
        </div>           
    );
}