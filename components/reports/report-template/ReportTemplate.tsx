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
  ReportTextContainer,
  ReportText,
  ReportHolder,
  InformationContainer,
} from './Styles';

type report = {
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
};

const ReportTemplate: React.FC<{ reportData: report }> = ({ reportData }) => {
  const loaderProp = ({ src }) => {
    return src;
  };

  let report = reportData;

  return (
    <MainSection>
      <TopHeading>
        <InformationContainer>
          <StoreLogo>{report.category}</StoreLogo>
          <HeadingTextContainer>
            {new Date(report.created_at).toLocaleDateString('en-US')}
          </HeadingTextContainer>
        </InformationContainer>
      </TopHeading>

      <PageTitle>{report.title}</PageTitle>
      <ReportHolder>
        <ImageContainer>
          <Image
            className="absolute rounded-md"
            src={
              report.image
                ? report.image.formats.large.url
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
          <ReactMarkdown>{report.description}</ReactMarkdown>
        </Caption>
        <ReportTextContainer>
          <ReportText>
            <ReactMarkdown>{report.content}</ReactMarkdown>
          </ReportText>
        </ReportTextContainer>
      </ReportHolder>
    </MainSection>
  );
};

export default ReportTemplate;
