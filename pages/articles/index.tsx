import { Layout } from '@/components/Layout';
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

export const getServerSideProps = async () => {
  // Fetch all articles
  const res = await fetch(`${API_URL}/articles`);

  const articles = await res.json();

  return {
    props: { articles },
  };
};
