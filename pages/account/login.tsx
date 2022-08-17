import { Layout } from '@/components/Layout';
import Login from '@/components/account/Login';

const LoginPage = () => {
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
      <Login />
    </Layout>
  );
};

export default LoginPage;
