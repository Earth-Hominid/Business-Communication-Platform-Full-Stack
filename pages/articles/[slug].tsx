import { Layout } from '@/components/Layout';
import ArticleItem from '@/components/articles/article-item/ArticleItem';
import { API_URL } from '@/config/index';

type ArticlesAPIResponse = {
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
