import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { Layout } from '@/components/Layout';
import Homepage from '@/components/homepage/Homepage';
import { API_URL } from '@/config/index';
import ArticleItem from '@/components/articles/article-item/ArticleItem';

const HomePage: NextPage = ({ articles }) => {
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
          styles="pb-10 flex justify-center"
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
