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

const ArticleCard = ({ article, handleDelete }) => {
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
              <Link href={`/articles/edit/${article.slug}`}>
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
                article.createdAt
              ).toDateString()}`}</FooterText>
            </FooterContainer>
          </CardContainer>
        </div>
      </MainContainer>
    </>
  );
};

export default ArticleCard;
