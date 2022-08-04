import Image from 'next/image';
import Link from 'next/link';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';
import ReactMarkdown from 'react-markdown';

import {
  MainSection,
  TopHeading,
  PageTitle,
  Caption,
  StoreLogo,
  DirectionContainer,
  HeadingTextContainer,
  ImageContainer,
  ArticleTextContainer,
  ArticleText,
  ArticleHolder,
  IconContainer,
  InformationContainer,
} from './Styles';

type article = {
  id: string;
  title: string;
  category: string;
  cover: URL;
  published_date: string;
  content: string;
  date: string;
  slug: string;
  description: string;
};

const ArticleTemplate: React.FC<{ article: string }> = ({ post }) => {
  const data = post.attributes;

  return (
    <MainSection>
      <TopHeading>
        <InformationContainer>
          <StoreLogo>{data.category}</StoreLogo>
          <HeadingTextContainer>
            {new Date(data.published_date).toLocaleDateString('en-US')}
          </HeadingTextContainer>
        </InformationContainer>

        <Link href="/articles/">
          <DirectionContainer>
            <IconContainer>
              <ArrowCircleLeftIcon />
            </IconContainer>
            Volta
          </DirectionContainer>
        </Link>
      </TopHeading>

      <PageTitle>{data.title}</PageTitle>
      <ArticleHolder>
        <ImageContainer>
          <Image
            className="absolute rounded-md"
            src={
              data?.cover.data
                ? data.cover.data.attributes.formats.medium.url
                : '/images/report-default.jpeg'
            }
            alt="report image"
            priority={true}
            height="100"
            width="200"
            layout="responsive"
          />
        </ImageContainer>
        <Caption>{data.description}</Caption>
        <ArticleTextContainer>
          <ArticleText>
            <div className="prose">
              <ReactMarkdown>{data.content}</ReactMarkdown>
            </div>
          </ArticleText>
        </ArticleTextContainer>
      </ArticleHolder>
    </MainSection>
  );
};

export default ArticleTemplate;
