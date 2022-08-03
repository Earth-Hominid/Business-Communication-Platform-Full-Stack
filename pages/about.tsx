import { Layout } from '@/components/layout/Layout';

export default function AboutPage() {
  return (
    <Layout
      mainPage="/"
      mainPageTitle="Rede BS Docs"
      currentPage="/about"
      currentPageTitle="Rede BS Docs"
      title="Sobre nós"
      description="Sobre nós"
      keywords="Sobre nós"
    >
      <div className="flex flex-col m-5 p-5">
        <p className="text-left font-rubik text-lg leading-relaxed text-gray-600">
          A Rede BS docs foi criada para ajudar os trabalhadores a preencher
          suas lacunas de conhecimento e avançar em suas carreiras.
        </p>
      </div>
    </Layout>
  );
}
