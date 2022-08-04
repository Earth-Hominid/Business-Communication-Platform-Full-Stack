import Link from 'next/link';
import { ArrowCircleLeftIcon } from '@heroicons/react/outline';

import {
  TopHeading,
  DirectionContainer,
  IconContainer,
  InformationContainer,
  StoreLogo,
} from './Styles';

const ToolBar = ({ queryTerm, linkTerm }) => {
  return (
    <TopHeading>
      <InformationContainer>
        <StoreLogo>{queryTerm}</StoreLogo>
      </InformationContainer>

      <Link href={linkTerm}>
        <DirectionContainer>
          <IconContainer>
            <ArrowCircleLeftIcon />
          </IconContainer>
          Volta
        </DirectionContainer>
      </Link>
    </TopHeading>
  );
};

export default ToolBar;
