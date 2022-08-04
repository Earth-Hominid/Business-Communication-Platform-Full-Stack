import Image from 'next/image';
import WhiteHorse from '@/public/images/white-horse.jpg';
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

const ArticleTemplate = () => {
  return (
    <>
      <MainSection>
        <ArticleContainer>
          <ImageContainer>
            <Image
              className="absolute rounded-md"
              src={WhiteHorse}
              alt="white horse"
              priority={true}
              layout="responsive"
            />
          </ImageContainer>
          <TextContainer>
            <ArticleCategoryText>Atendimento ao Cliente </ArticleCategoryText>
            <ArticleTitle>
              Tudo o que você precisa para se tornar um profissional de
              atendimento ao cliente!
            </ArticleTitle>
            <DesktopAuthorContainer>
              <InlineRow>
                <i className="text-xs text-gray-700">Curso por</i>
                <DesktopAuthorHeading>Chris Doll</DesktopAuthorHeading>
              </InlineRow>
              <DesktopAuthorDescription>
                Chris Doll passou mais de uma década em funções gerenciais
                voltadas para o cliente.
              </DesktopAuthorDescription>
            </DesktopAuthorContainer>
          </TextContainer>
        </ArticleContainer>
        <MobileAuthorContainer>
          <InlineRow>
            <i className="text-xs text-gray-700">Curso por</i>
            <MobileAuthorHeading>Chris Doll</MobileAuthorHeading>
          </InlineRow>
          <MobileAuthorDescription>
            Chris Doll passou mais de uma década em funções gerenciais voltadas
            para o cliente.
          </MobileAuthorDescription>
        </MobileAuthorContainer>
      </MainSection>
    </>
  );
};

export default ArticleTemplate;
