import { useContext, useState, useEffect } from 'react';
import AuthContext from '@/context/AuthContext';
import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from '@/config/index';
import { useRouter } from 'next/router';
import Welcome from '@/components/dashboard/welcome-page/Welcome';
import qs from 'qs';
import ReportTemplate from '@/components/dashboard/report/Report';

const DashboardPage = ({ reports }) => {
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
      currentPageTitle={user !== null ? `Painel de ${user.username}` : ''}
    >
      <Welcome user={user} reports={reports} />
    </Layout>
  );
};

export default DashboardPage;

export const getServerSideProps = async ({ req }: { req: any }) => {
  const { token } = parseCookies(req);

  const queryDeep = qs.stringify(
    {
      populate: '*',
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  // Fetch all reports
  const res = await fetch(`${API_URL}/api/reports/me?populate=*`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await res.json();

  const reports = responseData.data.attributes.data;

  console.log(reports);

  return {
    props: {
      reports,
    },
  };
};
