import { GetServerSideProps } from 'next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from '@/components/Layout';
import { API_URL } from 'config';
import ArticleTemplate from '@/components/articles/article-template/ArticleTemplate';

interface Props {
  slug: string;
  article: {
    id: string;
    title: string;
    category: string;
    image: {
      formats: {
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
  };
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { slug },
}) => {
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

const ArticlePage: React.FC<Props> = ({ article }) => {
  if (!article) return <div>Loading...</div>;

  return (
    <Layout
      title={`${article.title}`}
      description={`${article.description}`}
      keywords={`${article.title}`}
      background={`bg-white`}
      mainPage="/articles"
      mainPageTitle="Artigos"
      currentPage={`#`}
      currentPageTitle={`${article.title}`}
      styles="pb-10 lg:flex lg:justify-center"
      width="max-w-5xl"
    >
      <section className="min-h-screen">
        <ToastContainer />
        <ArticleTemplate article={article} />
      </section>
    </Layout>
  );
};

export default ArticlePage;
