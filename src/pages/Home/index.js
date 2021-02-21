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
                    {/* <strong>Aulas</strong> */}
                    <img className="a" src={aulasImg} />
                    <div className="dropdown-content">
                        <a href="#">Acadêmicos</a>
                        <a href="#">Idiomas</a>
                        <a href="#">Música</a>
                        <a href="#">Tecnologia</a>
                        <a href="#">Culinária</a>
                        <a href="#">Esportes</a>
                    </div>
                </div>
                <div className="dropdown2">
                    {/* <strong>Manutencões</strong> */}
                    <img className="cm" src={consertosManutencoesImg} />
                    <div className="dropdown-content">
                        <a href="#">Chaveiros</a>
                        <a href="#">Telhados</a>
                        <a href="#">Vidros</a>
                        <a href="#">Jardim</a>
                        <a href="#">Eletricista</a>
                        <a href="#">Encanador</a>
                        <a href="#">Elétros</a>
                        <a href="#">Lavanderia</a>
                        <a href="#">Pedreiro</a>
                        <a href="#">Piscina</a>
                        <a href="#">Redes de proteção</a>
                        <a href="#">Informática</a>
                        <a href="#">Alarme</a>
                    </div>
                </div>
                <div className="dropdown3">
                    {/* <strong>Cuidados pessoais</strong> */}
                    <img className="cp" src={cuidadosPessoaisImg} />
                    <div className="dropdown-content">
                        <a href="#">Acompanhante idoso</a>
                        <a href="#">Acupuntura</a>
                        <a href="#">Beleza</a>
                        <a href="#">Fisioterapia</a>
                        <a href="#">Massoterapia</a>
                        <a href="#">Terapias alternativas</a>
                        <a href="#">Nutricionista</a>
                        <a href="#">Acompanhante PCD</a>
                        <a href="#">Baba</a>
                    </div>
                </div>
                <div className="dropdown4">
                    {/* <strong>Eventos</strong> */}
                    <img className="e" src={eventosImg} />
                    <div className="dropdown-content">
                        <a href="#">Animadores</a>
                        <a href="#">Churrasqueiro</a>
                        <a href="#">Decoração</a>
                        <a href="#">Fotógrafo</a>
                        <a href="#">Garçome</a>
                        <a href="#">Barman</a>
                        <a href="#">Segurança</a>
                        <a href="#">Doces</a>
                        <a href="#">Salgados</a>
                        <a href="#">Buffet</a>
                        <a href="#">Cerimonialista</a>
                        <a href="#">Som</a>
                        <a href="#">Sushiman</a>
                    </div>
                </div>
                <div className="dropdown5">
                    {/* <strong>Serviços gerais</strong> */}
                    <img className="sg" src={servicosGeraisImg} />
                    <div className="dropdown-content">
                        <a href="#">Casa</a>
                        <a href="#">Piscina</a>
                        <a href="#">Jardim</a>
                        <a href="#">Estabelecimento comercial</a>
                        <a href="#">Prédio</a>
                        <a href="#">Automóvel</a>
                    </div>
                </div>
                <div className="dropdown6">
                    {/*<strong>Transportes</strong>*/}
                    <img className="t" src={transportesImg} />
                    <div className="dropdown-content">
                        <a href="#">Frete</a>
                        <a href="#">Motoboy</a>
                        <a href="#">Motorista</a>
                        <a href="#">Auxiliar de carga</a>
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
                    <strong>Título:</strong><p>Eletricista Pedro</p> 
                    <strong>Descrição:</strong><p>Serviços de instalação, manutenção, passagem de cabeamento, residencial e comercial.<br></br>
                    Possuo formação técnica e mais de 10 anos atuando na área.                    
                    </p>
                    <strong>País:</strong><p>Brasil</p>
                    <strong>UF:</strong><p>Santa Catarina</p>
                    <strong>Cidade:</strong><p>Indaial</p>
                    <strong>Fornecedor:</strong><p>Pedro De Souza</p>
                    <strong>Categoria:</strong><p>Manutenções</p>
                    <strong>Categoria:</strong><p>Eletricista</p>

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