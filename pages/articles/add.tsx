import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import AddArticleTemplate from '@/components/articles/add-article/AddArticleTemplate';
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

export default function AddArticlePage({ token }: { token: string }) {
  const [dataForm, setDataForm] = useState({
    title: '',
    category: '',
    description: '',
    content: '',
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

    const res = await fetch(`${API_URL}/articles`, {
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
      toast.error('Could not create article.', { icon: false });
    } else {
      const article = await res.json();
      router.push(`/articles/${article.slug}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  return (
    <>
      <Layout
        title="Rede BS docs | Adicionar um artigo"
        description="Adicionar um artigo"
        keywords="aprendendo,administrar, supermercado, eletromóveis, Adicionar um artigo"
        background="bg-blue-50"
        mainPage="/articles"
        mainPageTitle="Artigos"
        currentPage={`#`}
        currentPageTitle="Adicionar artigo"
        styles="h-screen"
        width="w-full"
      >
        <AddArticleTemplate
          token={token}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          dataForm={dataForm}
        />
      </Layout>
    </>
  );
}
