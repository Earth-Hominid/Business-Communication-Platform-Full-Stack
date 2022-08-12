import Link from 'next/link';

import {
  PaginationContainer,
  InsideContainer,
  IconHolderLeft,
  IconHolderRight,
  PaginationLink,
} from './Styles';
import {
  ArrowCircleLeftIcon,
  ArrowCircleRightIcon,
} from '@heroicons/react/outline';

const Pagination = ({ page, lastPage }) => {
  return (
    <PaginationContainer>
      <InsideContainer>
        {page > 1 && (
          <Link href={`/articles?page=${page - 1}`}>
            <a>
              <PaginationLink>
                <IconHolderLeft>
                  <ArrowCircleLeftIcon />
                </IconHolderLeft>
                Anterior
              </PaginationLink>
            </a>
          </Link>
        )}

        {page < lastPage && (
          <Link href={`/articles?page=${page + 1}`}>
            <a>
              <PaginationLink>
                Próximo
                <IconHolderRight>
                  <ArrowCircleRightIcon />
                </IconHolderRight>
              </PaginationLink>
            </a>
          </Link>
        )}
      </InsideContainer>
    </PaginationContainer>
  );
};

export default Pagination;
