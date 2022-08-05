import AuthContext from '@/context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/Layout';

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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error } = useContext(AuthContext);

  useEffect(() => {
    error && toast.error(error);
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <Layout
      title="Página de login"
      description="Página de login"
      keywords="Página de login"
      background="bg-slate-200"
      mainPage="/"
      mainPageTitle="Rede BS docs"
      currentPage="#"
      currentPageTitle="Página de login"
      styles="p-2 sm:flex sm:justify-center"
      width="max-w-5xl"
    >
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
    </Layout>
  );
};

export default LoginPage;
