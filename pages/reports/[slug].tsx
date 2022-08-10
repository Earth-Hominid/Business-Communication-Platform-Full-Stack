import { Layout } from '@/components/Layout';
import { API_URL } from 'config';
import ReportTemplate from '@/components/reports/report-template/ReportTemplate';
import { ToastContainer } from 'react-toastify';
import { parseCookies } from '@/helpers/index';
import 'react-toastify/dist/ReactToastify.css';
import { NextApiRequest } from 'next';

interface ReportInterface {
  id: string;
  title: string;
  category: string;
  image: URL;
  content: string;
  date: string;
  description: string;
  slug: string;
  owner: string;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export const getServerSideProps = async ({
  req,
  query: { slug },
}: {
  req: NextApiRequest;
}) => {
  const { token } = parseCookies(req);
  // Fetch reports
  const res = await fetch(
    `${API_URL}/reports?slug=${slug}
  `,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const reports = await res.json();

  return {
    props: {
      report: reports[0],
    },
  };
};

const ReportPage: React.FC<{ report: ReportInterface }> = ({ report }) => {
  if (!report) return <div>Loading...</div>;

  return (
    <Layout
      title={`${report.title}`}
      description={`${report.description}`}
      keywords={`${report.title}`}
      background={`bg-[#F4F0E8]`}
      mainPage="/reports"
      mainPageTitle="Relatórios"
      currentPage={`#`}
      currentPageTitle={`${report.title}`}
      styles="pb-10 lg:flex lg:justify-center"
      width="max-w-5xl"
    >
      <section className="">
        <ToastContainer />
        <ReportTemplate reportData={report} />
      </section>
    </Layout>
  );
};

export default ReportPage;
