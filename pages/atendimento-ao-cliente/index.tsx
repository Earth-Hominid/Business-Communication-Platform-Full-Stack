import { Layout } from '@/components/Layout';
import qs from 'qs';
import ArticleItem from '@/components/articles/article-item/ArticleItem';
import { API_URL, PER_PAGE } from '@/config/index';

type articles = {
  id: string;
  title: string;
  content: string;
  description: string;
  slug: string;
  owner: string;
  category: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  image: string;
};

type queryTerm = { queryTerm: string };
type term = string;

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  // Fetch all articles
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: 'Atendimento ao Cliente' },
        { category_contains: 'Atendimento ao Cliente' },
      ],
    },
  });

  const res = await fetch(`${API_URL}/articles?${query}&_sort=title:ASC`);

  const articles = await res.json();

  return {
    props: { articles },
  };
};

const HortifrutiPage: React.FC<{ articles: Array<string> }> = ({
  articles,
}) => {
  const background = 'bg-white';
  const queryTerm = 'Artigos';
  const linkTerm = '/';

  if (!articles) return <div>Loading...</div>;

  return (
    <>
      <Layout
        title="Artigos da Rede BS"
        description="A Rede BS publica regularmente artigos para melhorar ainda mais a formação de seus funcionários."
        keywords="supermercado, hortifruti, frutas, legumes, artigos, educação empresarial, educação em vendas no varejo, gestão de inventário, treinamento de atendimento ao cliente"
        background={background}
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="#"
        currentPageTitle="Atendimento ao Cliente"
        styles="pb-10 flex justify-center"
        width="max-w-5xl"
      >
        <section className="min-h-screen">
          {articles.length === 0 && <h3>Nenhum artigo para mostrar</h3>}

          {articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default HortifrutiPage;
