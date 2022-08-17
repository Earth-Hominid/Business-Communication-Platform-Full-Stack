import { Layout } from '@/components/Layout';
import ArticleItem from '@/components/articles/article-item/ArticleItem';
import { API_URL } from '@/config/index';
import Pagination from '@/components/pagination/Pagination';
import { PER_PAGE } from '@/config/index';

interface ArticleInterface {
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
  articles: Array<ArticleInterface>;
}

export const getServerSideProps = async ({
  query: { page = 1 },
}: {
  query: { page: number };
}) => {
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;
  // Fetch total/count
  const countResponse = await fetch(`${API_URL}/articles/count`);
  const total = await countResponse.json();

  // Fetch all articles
  const articleResponse = await fetch(
    `${API_URL}/articles?_sort=created_at:ASC&_limit=${PER_PAGE}&_start=${start}`
  );

  const articles = await articleResponse.json();

  return {
    props: { articles, total, page: +page },
  };
};

const ArticlePage: React.FC<Props> = ({ articles, page, total }) => {
  const background = 'bg-gray-100';

  // Calculate last page
  const lastPage = Math.ceil(total / PER_PAGE);

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
        currentPage="/articles"
        currentPageTitle="Artigos"
        styles="pb-10 flex justify-center"
        width="max-w-5xl"
      >
        <section className="min-h-screen">
          <Pagination page={page} lastPage={lastPage} />
          {articles.length === 0 && <h3>Nenhum artigo disponível</h3>}

          {articles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </section>
      </Layout>
    </>
  );
};

export default ArticlePage;
