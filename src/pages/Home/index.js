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
import eletricistaImg from '../../assets/eletricista.jpg';
import barmanImg from '../../assets/barman.jpg';
import jardineiroImg from '../../assets/jardineiro.jpg';

export default function Home(){
    return(   
        <div className="home-container">
            <header className="margemSup">
            <img className="logo" src={logoImg} />
                <div className="Publicar">
                <Link className="button" to="/Publicar">Publicar</Link>
                </div>
                <div className="Entrar">
                    <Link className="button" to="/Entrar">Entrar</Link>
                </div>
                <div className="Registrar">
                    <Link className="button" to="/Registrar">Cadastre-se</Link>
                </div>               
            </header>
            <section className="categorias">
                <div className="linha1"></div>
                <div className="dropdown1">
                    {/* <strong>Aulas</strong> */}
                    <img className="a" src={aulasImg} />
                    <div className="dropdown-content">
                        <b>
                            <a href="#">Acadêmicos</a>
                            <a href="#">Culinária</a>
                            <a href="#">Esportes</a>
                            <a href="#">Idiomas</a>
                            <a href="#">Música</a>
                            <a href="#">Tecnologia</a>
                        </b>
                    </div>
                </div>
                <div className="dropdown2">
                    {/* <strong>Manutencões</strong> */}
                    <img className="cm" src={consertosManutencoesImg}/>
                    <div className="dropdown-content">
                        <b>
                            <a href="#">Alarmes</a>
                            <a href="#">Assistência Eletros</a>
                            <a href="#">Chaveiro</a>
                            <a href="#">Eletricista</a>
                            <a href="#">Encanador</a>
                            <a href="#">Pedreiro</a>
                            <a href="#">Piscina</a>
                            <a href="#">Redes de Proteção</a>
                            <a href="#">Técnico de Informática</a>
                            <a href="#">Telhados</a>
                            <a href="#">Vidros</a>
                        </b>
                    </div>
                </div>
                <div className="dropdown3">
                    {/* <strong>Cuidados pessoais</strong> */}
                    <img className="cp" src={cuidadosPessoaisImg} />
                    <div className="dropdown-content">
                        <b>
                            <a href="#">Acompanhante para Idosos</a>
                            <a href="#">Acompanhante para PCD</a>
                            <a href="#">Acupuntura</a>
                            <a href="#">Babá</a>
                            <a href="#">Beleza/Estética</a>
                            <a href="#">Fisioterapia</a>
                            <a href="#">Massoterapia</a>
                            <a href="#">Nutricionista</a>
                            <a href="#">Terapias Alternativas</a>
                        </b>
                    </div>
                </div>
                <div className="dropdown4">
                    {/* <strong>Eventos</strong> */}
                    <img className="e" src={eventosImg} />
                    <div className="dropdown-content">
                        <b>
                            <a href="#">Animadores</a>
                            <a href="#">Barman</a>
                            <a href="#">Buffet</a>
                            <a href="#">Cerimonialista</a>
                            <a href="#">Churrasqueiro</a>
                            <a href="#">Decoração</a>
                            <a href="#">Doces</a>
                            <a href="#">Fotógrafo</a>
                            <a href="#">Garçom</a>
                            <a href="#">Salgados</a>
                            <a href="#">Segurança</a>
                            <a href="#">Som</a>
                            <a href="#">Sushiman</a>
                        </b>
                    </div>
                </div>
                <div className="dropdown5">
                    {/* <strong>Serviços gerais</strong> */}
                    <img className="sg" src={servicosGeraisImg} />
                    <div className="dropdown-content">
                        <b>
                            <a href="#">Automóvel</a>
                            <a href="#">Casa</a>
                            <a href="#">Estabelecimento Comercial</a>
                            <a href="#">Jardim</a>
                            <a href="#">Piscina</a>
                            <a href="#">Prédio</a>
                        </b>
                    </div>
                </div>
                <div className="dropdown6">
                    {/*<strong>Transportes</strong>*/}
                    <img className="t" src={transportesImg} />
                    <div className="dropdown-content">
                        <b>
                            <a href="#">Auxiliar de Carga</a>
                            <a href="#">Frete</a>
                            <a href="#">Motoboy</a>
                            <a href="#">Motorista</a>
                        </b>
                    </div>
                </div>              
                <div className="linha2"></div>
            </section>
            
            <ul>
                <li>
                    <b>Eletricista</b><br></br><br></br>
                    <img className="eletricistaImagem" src={eletricistaImg} 
                    width="350"
                    height="200"/>
                    <br></br><br></br>
                    <strong>Descrição:</strong><p>Serviços de instalação, manutenção, passagem de cabeamento, residencial e comercial.<br></br>
                    Possuo formação técnica e mais de 10 anos atuando na área.</p>
                    <strong>Profissional:</strong><p>Pedro de Souza</p>
                    <strong>Localidade:</strong><p>Indaial - SC</p>

                </li>
                <li>
                    <b>Jardineiro</b><br></br><br></br>
                    <img className="jardineiroImagem" src={jardineiroImg} 
                    width="350"
                    height="200"/>
                    <br></br><br></br>
                    <strong>Descrição:</strong><p>Limpeza de jardins.</p>
                    <strong>Profissional:</strong><p>Samuel Oliveira da Costa</p>
                    <strong>Localidade:</strong><p>Blumenau - SC</p>

                </li>
                <li>
                    <b>Barman</b><br></br><br></br>
                    <img className="barmanImagem" src={barmanImg} 
                    width="350"
                    height="200"/>
                    <br></br><br></br>
                    <strong>Descrição:</strong><p>Barman para festas, aniversários, eventos corporativos e casamentos.</p>
                    <strong>Profissional:</strong><p>Joel Silveira</p>
                    <strong>Localidade:</strong><p>Florianópolis - SC</p>

                    {/* <button type="button">
                        <FiTrash size={20} color="#E02041" />
                    </button> */}
                </li>
                <li>
                    <strong>TITULO</strong>
                    <p>descrição</p>

                    {/* <button type="button">
                        <FiTrash size={20} color="#E02041" />
                    </button> */}
                </li>
            </ul>
            
        </div>           
    );
}