import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

import {
  ImageContainer,
  MainSection,
  ReportContainer,
  TextContainer,
  ReportCategoryText,
  ReportTitle,
  MobileAuthorContainer,
  MobileAuthorHeading,
  MobileAuthorDescription,
  DesktopAuthorHeading,
  DesktopAuthorDescription,
  InlineRow,
  DesktopAuthorContainer,
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
  image: string;
};

const ReportItem = ({ report }) => {
  return (
    <>
      <MainSection>
        <ReportContainer>
          <ImageContainer>
            <Image
              src={
                report.image
                  ? report.image.formats.medium.url
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
          <Link href={`/reports/${report.slug}`}>
            <TextContainer>
              <ReportCategoryText>{report.category}</ReportCategoryText>
              <ReportTitle>{report.title}</ReportTitle>
              <DesktopAuthorContainer>
                <InlineRow>
                  <i className="text-xs text-gray-700"></i>
                  <DesktopAuthorHeading></DesktopAuthorHeading>
                </InlineRow>
                <DesktopAuthorDescription>
                  <ReactMarkdown>{report.description}</ReactMarkdown>
                </DesktopAuthorDescription>
              </DesktopAuthorContainer>
            </TextContainer>
          </Link>
        </ReportContainer>
        <MobileAuthorContainer>
          <InlineRow>
            <i className="text-xs text-gray-700"></i>
            <MobileAuthorHeading></MobileAuthorHeading>
          </InlineRow>
          <MobileAuthorDescription>
            <ReactMarkdown>{report.description}</ReactMarkdown>
          </MobileAuthorDescription>
        </MobileAuthorContainer>
      </MainSection>
    </>
  );
};

export default ReportItem;
