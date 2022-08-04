import { HeaderContainer, MainSection, Title } from './Styles';
import ArticleCard from '../article-card/ArticleCard';

const Welcome = ({ user, articles }) => {
  const deleteReport = (id: string) => console.log(id);

  return (
    <MainSection>
      <HeaderContainer>
        <Title>Bem-vindo de volta {user && user.username}!</Title>
      </HeaderContainer>

      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          handleDelete={deleteReport}
        />
      ))}
    </MainSection>
  );
};

export default Welcome;
