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
import React from 'react';

interface Props {
  handleDelete: Function;
  report: {
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

const ReportCard: React.FC<Props> = ({ report, handleDelete }) => {
  return (
    <>
      <MainContainer>
        <div>
          <HeaderContainer>
            <CategoryPin>Relatório</CategoryPin>
          </HeaderContainer>
          <CardContainer>
            <SmallTitle>{`${report.category}`}</SmallTitle>
            <Link href={`/reports/${report.slug}`}>
              <a>
                <LargeTitle> {report.title}</LargeTitle>
              </a>
            </Link>

            <ContentParagraph>{report.description}</ContentParagraph>
            <FooterContainer>
              <Link href={`/reports/edit/${report.id}`}>
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
                report.created_at
              ).toDateString()}`}</FooterText>
            </FooterContainer>
          </CardContainer>
        </div>
      </MainContainer>
    </>
  );
};

export default ReportCard;
