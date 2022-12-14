import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import {
  MainSection,
  TopContainer,
  DateText,
  PageTitle,
  DescriptionText,
  Caption,
  CategoryText,
  ImageContainer,
  ArticleTextContainer,
  ArticleText,
  ArticleHolder,
} from './Styles';

interface ArticleInterface {
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
}

const ArticleTemplate: React.FC<{ article: ArticleInterface }> = ({
  article,
}) => {
  const loaderProp = ({ src }: { src: any }) => {
    return src;
  };

  return (
    <MainSection>
      <TopContainer>
        <CategoryText>{article.category}</CategoryText>
        <PageTitle>{article.title}</PageTitle>
        <DateText>
          {new Date(article.created_at).toLocaleDateString('en-US')}
        </DateText>
        <DescriptionText>{article.description}</DescriptionText>
      </TopContainer>
      <ArticleHolder>
        <ImageContainer>
          <Image
            className="absolute lg:rounded-md"
            src={
              article.image
                ? article.image.formats.large.url
                : '/images/report-default.jpeg'
            }
            alt="imagem do artigo"
            priority={true}
            height="100"
            width="200"
            layout="responsive"
            loader={loaderProp}
          />
        </ImageContainer>

        <ArticleTextContainer>
          <ArticleText>
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </ArticleText>
        </ArticleTextContainer>
      </ArticleHolder>
    </MainSection>
  );
};

export default ArticleTemplate;
