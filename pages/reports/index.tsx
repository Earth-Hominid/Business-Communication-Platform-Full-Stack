import { Layout } from '@/components/Layout';
import { API_URL } from '@/config/index';
import { parseCookies } from '@/helpers/index';
import ReportItem from '@/components/reports/report-item/ReportItem';
import { NextApiRequest } from 'next';
const PER_PAGE = 5;

interface Report {
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
      medium: {
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
}

interface Props {
  page: number;
  total: number;
  reports: Array<Report>;
}

export const getServerSideProps = async ({ req }: { req: NextApiRequest }) => {
  const { token } = parseCookies(req);

  // Fetch all articles
  const res = await fetch(`${API_URL}/reports`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const reports = await res.json();

  return {
    props: { reports },
  };
};

const ReportPage: React.FC<Props> = ({ reports }) => {
  const background = 'bg-gray-50';
  const queryTerm = 'Relatórios';
  const linkTerm = '/';

  if (!reports) return <div>Loading...</div>;

  return (
    <>
      <Layout
        title="Artigos da Rede BS"
        description="A Rede BS publica regularmente artigos para melhorar ainda mais a formação de seus funcionários."
        keywords="artigos, educação empresarial, educação em vendas no varejo, gestão de inventário, treinamento de atendimento ao cliente"
        background={background}
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="/reports"
        currentPageTitle="Relatórios"
        styles="pb-10 flex justify-center"
        width="max-w-5xl"
      >
        <section className="">
          {reports.length === 0 && <h3>No reports to show</h3>}

          {reports.map((report) => (
            <ReportItem key={report.id} report={report} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default ReportPage;
