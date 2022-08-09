import { useContext, useState, useEffect } from 'react';
import AuthContext from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
import Welcome from '@/components/dashboard/welcome-page/Welcome';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReportSection from '@/components/reports/dashboard/ReportSection';

export const getServerSideProps = async ({ req }: { req: any }) => {
  const { token } = parseCookies(req);

  // Fetch all articles
  const articleResponse = await fetch(`${API_URL}/articles/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const articles = await articleResponse.json();

  // Fetch all reports

  const reportResponse = await fetch(`${API_URL}/reports/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const reports = await reportResponse.json();

  return {
    props: {
      articles,
      reports,
      token,
    },
  };
};

const DashboardPage = ({ articles, reports, token }) => {
  const [initialPage, setInitialPage] = useState(true);
  const [modal, setModal] = useState(false);

  const { user } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  });

  const deleteArticle = async (id: string) => {
    if (confirm('Are you sure you want to delete?')) {
      const res = await fetch(`${API_URL}/articles/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push('/account/dashboard');
      }
    }
  };

  const deleteReport = async (id: string) => {
    if (confirm('Are you sure you want to delete?')) {
      const res = await fetch(`${API_URL}/reports/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        router.push('/account/dashboard');
      }
    }
  };

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
      <Welcome
        user={user}
        articles={articles}
        deleteArticle={deleteArticle}
        deleteReport={deleteReport}
        reports={reports}
      />
    </Layout>
  );
};

export default DashboardPage;
