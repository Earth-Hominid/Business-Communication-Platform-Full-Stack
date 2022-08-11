import { Layout } from '@/components/Layout';
import qs from 'qs';
import ArticleItem from '@/components/articles/article-item/ArticleItem';
import { API_URL } from '@/config/index';

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

export const getServerSideProps = async () => {
  // Fetch all articles
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: 'Cadeia de mantimentos' },
        { category_contains: 'Cadeia de mantimentos' },
      ],
    },
  });
  const term = 'Cadeia de mantimentos';
  const res = await fetch(`${API_URL}/articles?${query}`);

  const articles = await res.json();

  return {
    props: { articles },
  };
};

const SupplyChainPage: React.FC<{ articles: Array<string> }> = ({
  articles,
}) => {
  const background = 'bg-gray-100';
  const queryTerm = 'Artigos';
  const linkTerm = '/';

  if (!articles) return <div>Loading...</div>;

  return (
    <>
      <Layout
        title="Artigos da Rede BS"
        description="A Rede BS publica regularmente artigos para melhorar ainda mais a formação de seus funcionários."
        keywords="artigos, educação empresarial, educação em vendas no varejo, gestão de inventário, treinamento de atendimento ao cliente"
        background={background}
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage="/articles/supply-chain"
        currentPageTitle="Cadeia de mantimentos"
        styles="pb-10 flex justify-center"
        width="max-w-5xl"
      >
        <section className="min-h-screen">
          {articles.length === 0 && <h3>No articles to show</h3>}

          {articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default SupplyChainPage;
