import { Layout } from '@/components/Layout';
import AboutShowcase from '@/components/about/AboutShowcase';

export default function AboutPage() {
  const background = 'bg-gray-100';
  return (
    <Layout
      mainPage="/"
      mainPageTitle="Rede BS Docs"
      currentPage="/about"
      currentPageTitle="Rede BS Docs"
      title="Sobre nós"
      description="Sobre nós"
      background={background}
      keywords="Sobre nós"
      styles="pb-10 flex justify-center"
      width="max-w-5xl"
    >
      <AboutShowcase />
      <div className="flex flex-col m-5 p-5 min-h-screen"></div>
    </Layout>
  );
}
