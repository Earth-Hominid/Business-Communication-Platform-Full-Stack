import Link from 'next/link';
import {
  Container,
  MainPageText,
  CurrentPageText,
  SpacingContainer,
  IconHolder,
} from './Styles';

import { ChevronDoubleRightIcon } from '@heroicons/react/outline';

const ToolBar = ({
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
