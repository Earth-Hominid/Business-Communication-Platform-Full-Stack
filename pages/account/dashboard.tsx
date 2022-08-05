import { useContext, useState, useEffect } from 'react';
import AuthContext from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
import Welcome from '@/components/dashboard/welcome-page/Welcome';

const DashboardPage = ({ articles, token }) => {
  const [initialPage, setInitialPage] = useState(true);
  const [modal, setModal] = useState(false);
  const { user } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user]);

  return (
    <Layout
      title="Painel do usuário"
      description="Painel do usuário"
      keywords="Painel do usuário"
      background="dashboard-polka"
      mainPage="/"
      mainPageTitle="Rede BS docs"
      currentPage="#"
      styles="pb-10 p-2 sm:flex sm:justify-center"
      width="max-w-5xl"
      currentPageTitle={user !== null ? `Painel de ${user.username}` : ''}
    >
      <Welcome user={user} articles={articles} />
    </Layout>
  );
};

export default DashboardPage;

export const getServerSideProps = async ({ req }: { req: any }) => {
  const { token } = parseCookies(req);

  // Fetch all reports
  const res = await fetch(`${API_URL}/articles/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const articles = await res.json();

  return {
    props: {
      articles,
      token,
    },
  };
};
