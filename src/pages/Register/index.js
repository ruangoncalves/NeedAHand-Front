import react, {useState} from 'react';
import InputMask from 'react-input-mask';
import './styles.css';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';

export default function Register() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [profile, setProfile] = useState(0);

    async function handleRegister(e){
        e.preventDefault();

        const dados = {
            //profile,
            nome,
            cpf,
            dataNascimento,
            email,
            telefone,
            senha,
        };

        try {
            const response = await api.post('Users', dados);

            alert(`Cadastro realizado com sucesso, seu ID é: ${response.dados.id}`);
        }
        catch (err){
            alert(`Não foi possível efetuar o cadastro. ${err}`);
        }
    }

    return(
        <div className="register-container">
            <form onSubmit={handleRegister}>
                <h1>Cadastre-se</h1>
                <input placeholder="Nome completo"
                    value={nome}
                    onChange={e => setNome(e.target.value)} 
                />
                <InputMask mask="(99) 99999-9999" placeholder="Telefone"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)} 
                />
                <InputMask mask="999.999.999-99" placeholder="CPF"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)} 
                />
                <InputMask mask="99/99/9999" placeholder="Data de nascimento"
                    value={dataNascimento}
                    onChange={e => setDataNascimento(e.target.value)} 
                />
                <input placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)} 
                />
                <input type="password" name="password" placeholder="Digite sua senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)} 
                />
                {/* <span className="lnr lnr-eye"></span>     */}
                <button className="button" type="submit">Registrar</button>
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