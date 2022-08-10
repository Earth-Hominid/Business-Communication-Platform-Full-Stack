import { Layout } from '@/components/Layout';
import { parseCookies } from '@/helpers/index';
import { API_URL } from 'config';
import EditArticleTemplate from '@/components/articles/edit-article/EditArticleTemplate';

type res = {
  id: string;
  title: string;
  store: string;
  category: string;
  description: string;
};

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/articles/${id}`);
  const article = await res.json();

  return {
    props: {
      article,
      token,
    },
  };
}
const EditArticlePage = ({ article, token }) => {
  return (
    <>
      <Layout
        title="Rede BS docs | Adicionar um relatório"
        description="Editar um relatório"
        keywords="aprendendo,administrar, supermercado, eletromóveis, Editar um relatório"
        background="bg-blue-50"
        mainPage="/account/dashboard"
        mainPageTitle="Painel da sua conta"
        currentPage="#"
        currentPageTitle="Editar relatório"
        styles=""
        width=""
      >
        <EditArticleTemplate article={article} token={token} />
      </Layout>
    </>
  );
};

export default EditArticlePage;
