import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import AddReportTemplate from '@/components/reports/add-report/AddReportTemplate';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from '@/config/index';
import { NextApiRequest } from 'next';

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}

export default function AddReportPage({ token }: { token: string }) {
  const [dataForm, setDataForm] = useState({
    title: '',
    content: '',
    description: '',
    category: '',
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation
    const hasEmptyFields = Object.values(dataForm).some(
      (element) => element === ''
    );

    if (hasEmptyFields) {
      toast.error('Please fill in all empty fields.', { icon: false });
    }

    const res = await fetch(`${API_URL}/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataForm),
    });

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('Token not included', { icon: false });
        return;
      }
      toast.error('Could not create report.', { icon: false });
    } else {
      const report = await res.json();
      router.push(`/reports/${report.slug}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <>
      <Layout
        title="Rede BS docs | Adicionar um relatório"
        description="Adicionar um relatório"
        keywords="aprendendo,administrar, supermercado, eletromóveis, Adicionar um relatório"
        background="bg-slate-100"
        mainPage="/reports"
        mainPageTitle="Relatórios"
        currentPage={`#`}
        currentPageTitle="Adicionar relatório"
        styles="h-screen"
        width="w-full"
      >
        <AddReportTemplate
          token={token}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          dataForm={dataForm}
        />
      </Layout>
    </>
  );
}
