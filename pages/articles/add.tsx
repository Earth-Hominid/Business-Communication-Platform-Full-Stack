import { Layout } from '@/components/Layout';
import AddTemplate from '@/components/add-template/AddArticleTemplate';

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
        styles="pb-10 flex justify-center h-screen"
      >
        <AddTemplate />
      </Layout>
    </>
  );
}
