import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from 'config/index';
import EditReportTemplate from '@/components/reports/edit-report/EditReportTemplate';
import { NextApiRequest } from 'next';

interface Props {
  token: string;
  report: {
    id: string;
    title: string;
    category: string;
    image: {
      formats: {
        thumbnail: {
          url: string;
        };
        large: {
          url: string;
        };
      };
    };
    content: string;
    date: string;
    description: string;
    slug: string;
    owner: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  };
}

export const getServerSideProps = async ({
  params: { id },
  req,
}: {
  params: { id: string };
  req: NextApiRequest;
}) => {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/reports/${id}`);
  const report = await res.json();

  return {
    props: {
      report,
      token,
    },
  };
};

const EditReportPage: React.FC<Props> = ({ report, token }) => {
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
