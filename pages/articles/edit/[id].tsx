import type { NextApiRequest } from 'next';
import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from 'config/index';
import EditArticleTemplate from '@/components/articles/edit-article/EditArticleTemplate';

interface Props {
  token: string;
  article: {
    id: string;
    title: string;
    category: string;
    image: {
      formats: {
        thumbnail: {
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

  const res = await fetch(`${API_URL}/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
      token,
    },
  };
};
const EditArticlePage: React.FC<Props> = ({ article, token }) => {
  return (
    <>
      <Layout
        title="Rede BS docs | Editar um artigo"
        description="Editar um artigo"
        keywords="aprendendo,administrar, supermercado, eletromóveis, Editar um artigo"
        background="bg-blue-50"
        mainPage="/account/dashboard"
        mainPageTitle="Painel da sua conta"
        currentPage="#"
        currentPageTitle="Editar artigo"
        styles=""
        width=""
      >
        <EditArticleTemplate article={article} token={token} />
      </Layout>
    </>
  );
};

export default EditArticlePage;
