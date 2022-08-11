import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
  min-h-screen
`;

export const TopContainer = tw.div`
  m-8
  sm:m-10
  md:m-12
`;

export const CategoryText = tw.h6`
  text-[#FF8600]
 tracking-wide
  uppercase
  font-semibold
  text-[10px]
  font-montserrat
  mt-5
  mb-2
`;

export const PageTitle = tw.div`
  text-[#1A1A1A]
  text-2xl
  sm:text-3xl
  font-abrilfatface
  text-left
  tracking-wide
  leading-tight
`;

export const DateText = tw.h6`
italic
text-slate-600
 text-[9px]
 my-2
`;

export const DescriptionText = tw.div`
  italic
  text-stone-500
  font-merriweather
  my-5
  tracking-wide
  leading-relaxed
  sm:mx-16
  md:mx-20
`;

export const IconContainer = tw.div`
  w-5
  h-5
  mr-1
`;

export const ImageContainer = tw.div`
  w-full
  lg:w-[1100px]
`;

export const ArticleHolder = tw.div`
  flex
  flex-col
  justify-center
  items-center
`;

export const ArticleTextContainer = tw.div`
  m-10
  sm:max-w-lg
  md:max-w-xl
  lg:max-w-3xl
`;

export const ArticleText = tw.div`
  text-[#1a1a1a]
  leading-8
  font-merriweather
   prose
`;

export const Caption = tw.div`
  text-[10px]
  font-['Merriweather']
  mx-5
  mt-2
  leading-normal
  max-w-lg
  sm:max-w-xl
  sm:text-xs
  md:max-w-3xl
  lg:max-w-4xl
  prose
`;
