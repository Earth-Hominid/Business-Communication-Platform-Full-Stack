import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import {
  MainSection,
  TopHeading,
  PageTitle,
  Caption,
  StoreLogo,
  HeadingTextContainer,
  ImageContainer,
  ArticleTextContainer,
  ArticleText,
  ArticleHolder,
  InformationContainer,
} from './Styles';

type article = {
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

const ArticleTemplate: React.FC<{ article: article }> = ({ articleData }) => {
  const loaderProp = ({ src }) => {
    return src;
  };

  let article = articleData;

  return (
    <MainSection>
      <TopHeading>
        <InformationContainer>
          <StoreLogo>{article.category}</StoreLogo>
          <HeadingTextContainer>
            {new Date(article.created_at).toLocaleDateString('en-US')}
          </HeadingTextContainer>
        </InformationContainer>
      </TopHeading>

      <PageTitle>{article.title}</PageTitle>
      <ArticleHolder>
        <ImageContainer>
          <Image
            className="absolute rounded-md"
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
        <Caption>
          <ReactMarkdown>{article.description}</ReactMarkdown>
        </Caption>
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
