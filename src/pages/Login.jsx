import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../contexts/AccountContext';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './Login.module.css';

function Login({ onClose }) {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || ''); 
  const [senha, setSenha] = useState('');
  const { setAccountItems } = useContext(AccountContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost/ecommerce-pub/my-ecommerce-backend/api/verificar_login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();
      console.log('Resposta da API:', data);

      if (data.user) {
        setAccountItems([data.user]);
        navigate('/Minha-Conta');
      } else {
        setError(data.message || 'Erro desconhecido');
      }
    } catch (error) {
      console.error('Erro:', error);
      setError('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };
  const handleFechar = () => {
    navigate(-1); // Volta para a página anterior no histórico
};
  return (
    <form onSubmit={handleLogin} className={classes.loginForm}>
      <div className={classes.loginContent}>
        <h2>LOGIN</h2>
        {error && <div className={classes.errorMessage}>{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <div className={classes.btnLogin}>
          <button type="submit" className={classes.btnEntrar} disabled={loading}>
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
          <button type="button" className={classes.btnFechar} onClick={handleFechar}>Fechar</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
