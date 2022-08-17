import { HeaderContainer, MainSection, Title } from './Styles';
import ArticleCard from '../article-card/ArticleCard';
import ReportCard from '../report-card/ReportCard';

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

interface ReportInterface {
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
  deleteArticle: Function;
  deleteReport: Function;
  articles: Array<ArticleInterface>;
  reports: Array<ReportInterface>;
  user: {
    username: string;
  };
}

const Welcome: React.FC<Props> = ({
  articles,
  user,
  reports,
  deleteArticle,
  deleteReport,
}) => {
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
