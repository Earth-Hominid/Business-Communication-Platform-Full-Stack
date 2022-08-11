import {
  HeadingText,
  TextContainer,
  MainSection,
  SubheadingText,
} from './Styles';

const AboutShowcase = () => {
  return (
    <>
      <MainSection>
        <TextContainer>
          <HeadingText>
            Iluminando inteligência de negócios e pesquisa de varejo.
          </HeadingText>
          <SubheadingText>
            A <b className="font-extrabold text-gray-900">Rede BS docs</b> foi
            criada para ajudar os trabalhadores a preencher suas lacunas de
            conhecimento e avançar em suas carreiras.
          </SubheadingText>
        </TextContainer>
      </MainSection>
    </>
  );
};

export default AboutShowcase;
