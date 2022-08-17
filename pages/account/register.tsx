import { Layout } from '@/components/Layout';
import Register from '@/components/account/Register';

const RegisterPage = () => {
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
      width="max-w-5xl"
    >
      <Register />
    </Layout>
  );
};

export default RegisterPage;
