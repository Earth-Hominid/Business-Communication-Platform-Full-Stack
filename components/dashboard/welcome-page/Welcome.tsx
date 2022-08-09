import { HeaderContainer, MainSection, Title } from './Styles';
import ArticleCard from '../article-card/ArticleCard';
import ReportCard from '../../dashboard/report-card/ReportCard';

const Welcome = ({ articles, user, reports, deleteArticle, deleteReport }) => {
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

      {reports.map((report) => (
        <ReportCard
          key={report.id}
          report={report}
          handleDelete={deleteReport}
        />
      ))}
    </MainSection>
  );
};

export default Welcome;
