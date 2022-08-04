import AuthContext from '../../context/AuthContext';
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
  StyledButtonContainer,
  FormFooter,
  StyledLink,
  SmallHeaderContainer,
} from './Styles';

interface AuthContext {
  error: string;
  register: Function;
}

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const { register, error } = useContext(AuthContext);

  useEffect(() => {
    error && toast.error(error);
  });

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      email: { value: string };
      password: { value: string };
    };

    if (password !== passwordConfirm) {
      toast.error('As senhas não coincidem');
      return;
    }

    register({ username, email, password });
  };

  return (
    <Layout
      title="Página de registro"
      description="Página de registro"
      keywords="Página de registro"
      background="bg-slate-200"
      mainPage="/"
      mainPageTitle="Rede BS docs"
      currentPage="#"
      currentPageTitle="Página de registro"
      styles="p-2 sm:flex sm:justify-center"
    >
      <StyledContainer>
        <InsideContainer>
          <SmallHeaderContainer>
            Ao criar uma conta, você concorda com nossa
            <Link href="#">
              <StyledLink className="ml-2">Política de Privacidade.</StyledLink>
            </Link>
          </SmallHeaderContainer>

          <ToastContainer />
          <form onSubmit={handleSubmit} className="container">
            <StyledInput
              placeholder="Nome de usuário"
              id="username"
              type="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
            />
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
            <StyledInput
              placeholder="Confirme a senha"
              id="passwordConfirm"
              type="password"
              value={passwordConfirm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPasswordConfirm(e.target.value)
              }
            />
            <StyledButtonContainer>
              <StyledButton type="submit">Entrar</StyledButton>
            </StyledButtonContainer>
          </form>
          <FormFooter>
            Já é membro?
            <Link href="/account/login">
              <StyledLink className="ml-2">Entrar</StyledLink>
            </Link>
          </FormFooter>
        </InsideContainer>
      </StyledContainer>
    </Layout>
  );
};

export default RegisterPage;
