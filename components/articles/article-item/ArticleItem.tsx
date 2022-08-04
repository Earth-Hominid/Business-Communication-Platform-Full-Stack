import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import {
  ImageContainer,
  MainSection,
  ArticleContainer,
  TextContainer,
  ArticleCategoryText,
  ArticleTitle,
  MobileAuthorContainer,
  MobileAuthorHeading,
  MobileAuthorDescription,
  DesktopAuthorHeading,
  DesktopAuthorDescription,
  InlineRow,
  DesktopAuthorContainer,
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

const ArticleItem = ({ article }) => {
  return (
    <>
      <MainSection>
        <ArticleContainer>
          <ImageContainer>
            <Image
              src={
                article.image
                  ? article.image.formats.medium.url
                  : '/images/report-default.jpeg'
              }
              className="absolute rounded-md"
              alt="imagem do artigo"
              priority={true}
              height="100"
              width="200"
              layout="responsive"
            />
          </ImageContainer>
          <Link href={`/articles/${article.slug}`}>
            <TextContainer>
              <ArticleCategoryText>{article.category}</ArticleCategoryText>
              <ArticleTitle>{article.title}</ArticleTitle>
              <DesktopAuthorContainer>
                <InlineRow>
                  <i className="text-xs text-gray-700"></i>
                  <DesktopAuthorHeading></DesktopAuthorHeading>
                </InlineRow>
                <DesktopAuthorDescription>
                  <ReactMarkdown>{article.description}</ReactMarkdown>
                </DesktopAuthorDescription>
              </DesktopAuthorContainer>
            </TextContainer>
          </Link>
        </ArticleContainer>
        <MobileAuthorContainer>
          <InlineRow>
            <i className="text-xs text-gray-700"></i>
            <MobileAuthorHeading></MobileAuthorHeading>
          </InlineRow>
          <MobileAuthorDescription>
            <ReactMarkdown>{article.description}</ReactMarkdown>
          </MobileAuthorDescription>
        </MobileAuthorContainer>
      </MainSection>
    </>
  );
};

export default ArticleItem;
