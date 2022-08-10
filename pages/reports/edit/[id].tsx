import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from 'config';
import EditReportTemplate from '@/components/reports/edit-report/EditReportTemplate';

type res = {
  id: string;
  title: string;
  store: string;
  category: string;
  description: string;
};

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/reports/${id}`);
  const report = await res.json();

  return {
    props: {
      report,
      token,
    },
  };
}
const EditReportPage = ({ report, token }) => {
  return (
    <>
      <Layout
        title="Rede BS docs | Editar um relatório"
        description="Editar um relatório"
        keywords="aprendendo,administrar, supermercado, eletromóveis, Editar um relatório"
        background="bg-gray-100"
        mainPage="/account/dashboard"
        mainPageTitle="Painel da sua conta"
        currentPage="#"
        currentPageTitle="Editar relatório"
        styles=""
        width=""
      >
        <EditReportTemplate report={report} token={token} />
      </Layout>
    </>
  );
};

export default EditReportPage;
