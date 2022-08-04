import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '@/components/Layout';
// import Homepage from '@/components/homepage/Homepage';
import { API_URL } from '@/config/index';
import ArticleItem from '@/components/articles/article-item/ArticleItem';

const HomePage: NextPage = () => {
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
        >
          <Homepage />
          {articlesData.length === 0 && <h3>No courses available</h3>}

          {articlesData.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </Layout>
      </div>
    </>
  );
};

export default HomePage;

export async function getServerSideProps() {
  // fetch courses
  let res = await fetch(`${API_URL}/api/articles?populate=*`);
  let articles = await res.json();
  let articlesData = articles.data;

  return {
    props: { articlesData },
  };
}
