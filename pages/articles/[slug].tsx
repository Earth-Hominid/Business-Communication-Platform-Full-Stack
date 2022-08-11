import { Layout } from '@/components/Layout';
import { API_URL } from 'config';
import ArticleTemplate from '@/components/articles/article-template/ArticleTemplate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ArticleInterface {
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

const ArticlePage: React.FC<{ article: ArticleInterface }> = ({ article }) => {
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
      styles="pb-10 lg:flex lg:justify-center"
      width="max-w-5xl"
    >
      <section className="min-h-screen">
        <ToastContainer />
        <ArticleTemplate articleData={article} />
      </section>
    </Layout>
  );
};

export default ArticlePage;
