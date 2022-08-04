import Link from 'next/link';
import { Layout } from '../layout/Layout';
import {
  MainSection,
  MainText,
  LinkText,
  ParagraphText,
  IconHolder,
} from './Styles';
import { ExclamationIcon } from '@heroicons/react/outline';

const NotFound = () => {
  return (
    <Layout
      title="404 Not Found"
      keywords="404 Not Found"
      description="404 Not Found"
      mainPage="/"
      mainPageTitle="Rede BS Docs"
      currentPage="#"
      currentPageTitle="404. Não encontrado"
    >
      <MainSection>
        <div className="flex flex-row space-x-2 items-center mb-2">
          <IconHolder>
            <ExclamationIcon />
          </IconHolder>
          <MainText>404. Não encontrado.</MainText>
        </div>
        <ParagraphText className="not__found__paragraph">
          Parece que a página que você está procurando não está neste servidor.
        </ParagraphText>
        <Link href="/">
          <LinkText>
            Clique aqui para navegar até nossa página inicial.
          </LinkText>
        </Link>
      </MainSection>
    </Layout>
  );
};

export default NotFound;
