import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import {
  MainContainer,
  HeaderContainer,
  SmallTitle,
  LargeTitle,
  ContentParagraph,
  FooterContainer,
  IconContainer,
  FooterText,
  IconButton,
  RedIconButton,
  IconText,
  CategoryPin,
  CardContainer,
} from './Styles';
import Image from 'next/image';

interface Props {
  handleDelete: Function;
  article: {
    id: string;
    title: string;
    category: string;
    image: {
      formats: {
        thumbnail: {
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
  };
}

const ArticleCard: React.FC<Props> = ({ article, handleDelete }) => {
  return (
    <>
      <MainContainer>
        <div>
          <HeaderContainer>
            <CategoryPin>Artigo</CategoryPin>
          </HeaderContainer>
          <CardContainer>
            <SmallTitle>{`${article.category}`}</SmallTitle>
            <Link href={`/articles/${article.slug}`}>
              <a>
                <LargeTitle> {article.title}</LargeTitle>
              </a>
            </Link>

            <ContentParagraph>{article.description}</ContentParagraph>
            <FooterContainer>
              <Link href={`/articles/edit/${article.id}`}>
                <a>
                  <IconButton>
                    <IconContainer>
                      <PencilIcon />
                    </IconContainer>
                    <IconText>Editar</IconText>
                  </IconButton>
                </a>
              </Link>
              <RedIconButton onClick={() => handleDelete(article.id)}>
                <IconContainer>
                  <TrashIcon />
                </IconContainer>
                <IconText> Excluir</IconText>
              </RedIconButton>

              <FooterText>{`Publicados: ${new Date(
                article.created_at
              ).toDateString()}`}</FooterText>
            </FooterContainer>
          </CardContainer>
        </div>
      </MainContainer>
    </>
  );
};

export default ArticleCard;
