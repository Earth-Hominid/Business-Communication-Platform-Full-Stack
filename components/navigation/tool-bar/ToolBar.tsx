import Link from 'next/link';
import {
  Container,
  MainPageText,
  CurrentPageText,
  SpacingContainer,
  IconHolder,
} from './Styles';

import { ChevronDoubleRightIcon } from '@heroicons/react/outline';
import React from 'react';

interface Props {
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
}

const ToolBar: React.FC<Props> = ({
  mainPage,
  currentPage,
  mainPageTitle,
  currentPageTitle,
}) => {
  return (
    <>
      <Container>
        <SpacingContainer>
          <Link href={mainPage}>
            <MainPageText>{mainPageTitle}</MainPageText>
          </Link>
          {currentPageTitle == 'Rede BS Docs' ? (
            ''
          ) : (
            <>
              <IconHolder>
                <ChevronDoubleRightIcon />
              </IconHolder>
              <Link href={currentPage}>
                <CurrentPageText>{currentPageTitle}</CurrentPageText>
              </Link>
            </>
          )}
        </SpacingContainer>
      </Container>
    </>
  );
};

export default ToolBar;
