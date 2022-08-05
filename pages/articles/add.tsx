import { Layout } from '@/components/Layout';
import AddArticleTemplate from '@/components/add-template/AddArticleTemplate';

export default function AddReportPage() {
  return (
    <>
      <Layout
        title="Rede BS docs | Adicionar um relatório"
        description="Adicionar um relatório"
        keywords="aprendendo,administrar, supermercado, eletromóveis, Adicionar um relatório"
        background="bg-blue-50"
        mainPage="/reports"
        mainPageTitle="Relatórios"
        currentPage={`#`}
        currentPageTitle="Adicionar artigo"
        styles="pb-10 px-4 pt-1  h-screen"
      >
        <AddArticleTemplate />
      </Layout>
    </>
  );
}
