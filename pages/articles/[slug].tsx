import { Layout } from '@/components/Layout';
import { API_URL } from 'config';
import ArticleTemplate from '@/components/articles/article-template/ArticleTemplate';

type res = {
  id: string;
  title: string;
  category: string;
  image: URL;
  content: string;
  date: string;
  description: string;
};

export const getServerSideProps = async ({ query: { slug } }) => {
  // fetch articles
  const res = await fetch(`${API_URL}/articles?slug=${slug}
  `);

  const articles = await res.json();

  return {
    props: {
      article: articles[0],
    },
  };
};

const ArticlePage: React.FC<{ article: Array<string> }> = ({ article }) => {
  if (!article) return <div>Loading...</div>;

  return (
    <Layout
      title={`${article.title}`}
      description={`${article.description}`}
      keywords={`${article.title}`}
      background={`bg-[#F4F0E8]`}
      mainPage="/articles"
      mainPageTitle="Artigos"
      currentPage={`#`}
      currentPageTitle={`${article.title}`}
    >
      <section className="h-screen">
        <ArticleTemplate article={article} />
      </section>
    </Layout>
  );
};

export default ArticlePage;
