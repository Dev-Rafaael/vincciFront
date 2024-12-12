import { useState, useContext } from 'react';
import { AccountContext } from '../contexts/AccountContext';
import { useNavigate } from 'react-router-dom';
import classes from './Cadastrar.module.css';
import InputMask from 'react-input-mask';

const Cadastro = () => {
    const [cpf, setCpf] = useState("");
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [sexo, setSexo] = useState("");
    const [telefone, setTelefone] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [rua, setRua] = useState("");
    const [numeroEndereco, setNumeroEndereco] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [estado, setEstado] = useState("Sao Paulo"); 
    const { setAccountItems } = useContext(AccountContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);  
    const handleContratarClick = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); 
    
        const itemParaConta = {
            cpf,
            nome_completo: nomeCompleto, 
            email,
            senha,
            sexo,
            telefone,
            data_nascimento: dataNascimento, 
            rua,
            numero_endereco: numeroEndereco,
            cep,
            bairro,
            cidade,
            estado
        };

        try {
          const response = await fetch('http://localhost/ECOMMERCE-PUB/my-ecommerce-backend/api/cadastrar_usuario.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(itemParaConta),
          });
  
          if (!response.ok) {
              throw new Error('Erro ao cadastrar: ' + response.statusText);
          }
  
          const data = await response.json();

          if (data.success) { 
         
            navigate('/Login', { state: { email,senha } }); 
        } else {
            setError(data.message || 'Erro desconhecido');
        }
          if (!data) {
              throw new Error('Resposta vazia da API');
          }
  
        
      } catch (error) {
          console.error('Erro ao cadastrar:', error);
          setError('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
      } finally {
        setLoading(false); 
      }
  };
  const handleFechar = () => {
    navigate(-1); // Volta para a página anterior no histórico
};
    return (
        <>
        <main className={classes.cadastroIdentificacao}>   
        
            <div className={classes.ContentIdentificacao}>
            <h2>CADASTRO</h2>
                <form className={classes.formIdentificacao}  onSubmit={handleContratarClick}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder='Digite Seu Nome Completo'
                        value={nomeCompleto}
                        onChange={(e) => setNomeCompleto(e.target.value)}
                        required
                    />
                    <article>
                    <div className={classes.inline}>  
                        <label htmlFor="cpf">CPF</label>
                            <InputMask mask="999.999.999-99" value={cpf} onChange={(e) => setCpf(e.target.value)} required>
                                {(inputProps) => <input {...inputProps} type="text" placeholder="Digite Seu CPF" />}
                            </InputMask>
                        </div>
                    <div className={classes.inline}> 
                        <label htmlFor="data">Data de Nascimento</label>
                            <input type="date" name="data" id="data" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                    </div>
                    </article>
                    <article>
                        <div className={classes.inline}>
                        <label htmlFor="email">E-Mail</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='Digite Seu E-Mail'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className={classes.inline}>
                        <label htmlFor="senha">Senha</label>
                            <input
                                type="password"
                                name="senha"
                                id="senha"
                                placeholder='Digite uma senha'
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                  </div>
                    </article>
                    <article >  
                    <div className={classes.inline}>
                        <label htmlFor="sexo">Sexo</label>
                            <select name="sexo" id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)} required>
                                <option value="" disabled>Selecione uma Opção</option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                            </div>
                        <div className={classes.inline}>    
                        <label htmlFor="telefone">DDD + Celular   </label>
                            <InputMask mask="(99) 99999-9999" value={telefone} onChange={(e) => setTelefone(e.target.value)} required>
                                {(inputProps) => <input {...inputProps} type="text" placeholder="(11) 91092-8922" />}
                            </InputMask>
                            </div>
                    </article>
                </form>
             <div className={classes.btnCadastro}>
                <button type="submit" className={classes.btnCadastrar} onClick={handleContratarClick}  disabled={loading}>
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                </button>
                <button type="button" className={classes.btnFechar} onClick={handleFechar}>Fechar</button>
            </div>
            </div>
           
        </main>
        </>
    );
};

export default Cadastro;