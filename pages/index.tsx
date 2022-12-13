import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import { API_URL } from '@/config/index';
import ArticleItem from '@/components/articles/article-item/ArticleItem';

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

const HomePage: NextPage<Props> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Rede BS Docs</title>
        <meta
          name="description"
          content="Bem-vindo à plataforma de aprendizado da Rede BS."
        ></meta>
      </Head>
      <div>
        <Layout
          title="Rede BS Docs"
          description="Plataforma de aprendizado da Rede BS"
          keywords=""
          background="bg-white"
          mainPage="/"
          mainPageTitle="Rede BS Docs"
          currentPage=""
          currentPageTitle="Rede BS Docs"
          styles="pb-10 flex justify-center min-h-screen"
          width="max-w-5xl"
        >
          {articles.length === 0 && <h3>No articles available</h3>}

          {articles.map((article: any) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </Layout>
      </div>
    </>
  );
};

export default HomePage;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/articles?_limit=3`);
  const articles = await res.json();

  return {
    props: { articles },
    revalidate: 1,
  };
}
