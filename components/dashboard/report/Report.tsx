import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import {
  MainContainer,
  SmallTitle,
  LargeTitle,
  ContentParagraph,
  FooterContainer,
  IconContainer,
  FooterText,
  IconButton,
  RedIconButton,
  IconText,
} from './Styles';
import Image from 'next/image';

const ReportTemplate = ({ report, handleDelete }) => {
  const data = report.attributes;

  return (
    <>
      <MainContainer>
        <div>
          <SmallTitle>{`${data.category} / ${data.store}`}</SmallTitle>
          <Link href={`/reports/${report.slug}`}>
            <a>
              <LargeTitle> {data.title}</LargeTitle>
            </a>
          </Link>

          <ContentParagraph>{data.description}</ContentParagraph>
          <FooterContainer>
            <Link href={`/reports/edit/${report.slug}`}>
              <a>
                <IconButton>
                  <IconContainer>
                    <PencilIcon />
                  </IconContainer>
                  <IconText>Editar</IconText>
                </IconButton>
              </a>
            </Link>
            <RedIconButton onClick={() => handleDelete(report.id)}>
              <IconContainer>
                <TrashIcon />
              </IconContainer>
              <IconText> Excluir</IconText>
            </RedIconButton>

            <FooterText>{`Publicados: ${new Date(
              data.createdAt
            ).toDateString()}`}</FooterText>
          </FooterContainer>
        </div>
      </MainContainer>
    </>
  );
};

export default ReportTemplate;
