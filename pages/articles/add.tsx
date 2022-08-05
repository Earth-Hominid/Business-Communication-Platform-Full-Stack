import { Layout } from '@/components/Layout';
import AddArticleTemplate from '@/components/add-template/AddArticleTemplate';

export default function AddReportPage() {
  return (
    <>
      <Layout
        title="Rede BS docs | Adicionar um relatório"
        description="Adicionar um artigo"
        keywords="aprendendo,administrar, supermercado, eletromóveis, Adicionar um artigo"
        background="bg-blue-50"
        mainPage="/articles"
        mainPageTitle="Artigos"
        currentPage={`#`}
        currentPageTitle="Adicionar artigo"
        styles="h-screen"
        width="w-full"
      >
        <AddArticleTemplate />
      </Layout>
    </>
  );
}
