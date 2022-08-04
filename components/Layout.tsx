import Head from 'next/head';
import Header from './Header';
import Footer from './footer/Footer';
import Showcase from './homepage/showcase/Showcase';
import { useRouter } from 'next/router';

interface Props {
  title: string;
  keywords: string;
  description: string;
  background: string;
  children?: React.ReactNode;
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
  styles: string;
}

export const Layout: React.FC<Props> = ({
  description,
  children,
  title,
  keywords,
  background,
  mainPage,
  currentPage,
  mainPageTitle,
  currentPageTitle,
  styles,
}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header
        mainPage={mainPage}
        currentPage={currentPage}
        mainPageTitle={mainPageTitle}
        currentPageTitle={currentPageTitle}
      />
      {router.pathname === '/' && <Showcase />}
      <div className={`${background} ${styles}`}>
        <div className="max-w-5xl">{children}</div>
      </div>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: 'Rede BS docs | Plataforma de aprendizagem Rede BS',
  description:
    'A plataforma de aprendizado Rede BS foi criada para ajudá-lo a ter sucesso em sua função na Rede BS',
  keywords: `aprendendo,administrar, supermercado, eletromóveis
  `,
};
