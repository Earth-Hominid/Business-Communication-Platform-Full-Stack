import { useState, useEffect, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

import {
  InsideContainer,
  StyledContainer,
  StyledInput,
  StyledButton,
  HeaderContainer,
  StyledButtonContainer,
  FormFooter,
  StyledLink,
} from './Styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, clearError } = useContext(AuthContext);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    clearError();
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <StyledContainer>
      <InsideContainer>
        <HeaderContainer>Bem-vindo de volta!</HeaderContainer>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="container">
          <StyledInput
            placeholder="Email"
            id="email"
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <StyledInput
            placeholder="Senha"
            id="password"
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <StyledButtonContainer>
            <StyledButton type="submit">Entrar</StyledButton>
          </StyledButtonContainer>
        </form>
        <FormFooter>
          Novo na Rede BS?
          <Link href="/account/register">
            <StyledLink className="ml-2">Criar uma conta!</StyledLink>
          </Link>
        </FormFooter>
      </InsideContainer>
    </StyledContainer>
  );
};

export default Login;
