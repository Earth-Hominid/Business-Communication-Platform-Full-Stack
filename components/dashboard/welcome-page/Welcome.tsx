import { HeaderContainer, MainSection, Title } from './Styles';
import ArticleCard from '../article-card/ArticleCard';
import { API_URL } from '@/config/index';

const Welcome = ({ articles, user, deleteArticle }) => {
  return (
    <MainSection>
      <HeaderContainer>
        <Title>Bem-vindo de volta {user && user.username}!</Title>
      </HeaderContainer>

      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          handleDelete={deleteArticle}
        />
      ))}
    </MainSection>
  );
};

export default Welcome;
