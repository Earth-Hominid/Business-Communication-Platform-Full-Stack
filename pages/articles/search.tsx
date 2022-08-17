import qs from 'qs';
import { useRouter } from 'next/router';
import { Layout } from '@/components/Layout';
import { API_URL } from '@/config/index';
import ArticleItem from '@/components/articles/article-item/ArticleItem';

interface Article {
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
}

interface Props {
  page: number;
  total: number;
  articles: Array<Article>;
}

type queryTerm = { queryTerm: string };

export const getServerSideProps = async ({
  query: { term },
}: {
  query: { term: string };
}) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { title_contains: term },
        { description_contains: term },
        { category_contains: term },
        { content_contains: term },
      ],
    },
  });

  // Fetch all articles
  const articleResponse = await fetch(`${API_URL}/articles?${query}`);
  const articles = await articleResponse.json();

  return {
    props: { articles },
  };
};

const ArticleSearchPage: React.FC<Props> = ({ articles }) => {
  const router = useRouter();
  const queryTerm = `PROCURAR RESULTADOS: ${router.query.term}`;
  const linkTerm = '/articles/';

  if (!articles) return <div>Loading...</div>;

  return (
    <>
      <Layout
        title="Procurar Resultados"
        description="A Rede BS publica regularmente artigos para melhorar ainda mais a formação de seus funcionários."
        keywords="artigos, educação empresarial, educação em vendas no varejo, gestão de inventário, treinamento de atendimento ao cliente"
        background="bg-[#F4F0E8]"
        mainPage="/"
        mainPageTitle="Rede BS Docs"
        currentPage={'#'}
        currentPageTitle={`Procurar Resultados: ${router.query.term}`}
        styles="pb-10 flex justify-center"
        width="max-w-5xl"
      >
        <section className="min-h-screen">
          {articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default ArticleSearchPage;
