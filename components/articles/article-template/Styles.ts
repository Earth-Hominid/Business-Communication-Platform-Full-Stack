import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
  min-h-screen
`;

export const TopHeading = tw.div`
  flex
  flex-row
  w-full
  items-center
  py-6
  px-5
  justify-between
  text-xs
  uppercase
  font-[Montserrat]
  md:p-10
  lg:px-20
`;

export const InformationContainer = tw.div`
  flex 
  flex-row 
  space-x-4
  items-center
`;

export const HeadingTextContainer = tw.h2`
  text-[#EDBD77]
  font-bold
`;

export const StoreLogo = tw.div`
  rounded-md
  bg-[#EDBD77]
  text-white
  px-2
  py-1
`;

export const DirectionContainer = tw.div`
  flex
  flex-row
  items-center
  rounded-md
  bg-black
  text-[#FEF336]
  px-2
  py-1
  hover:bg-transparent
  hover:text-black
  duration-400
  transition
  ease-in-out
  cursor-pointer
`;

export const IconContainer = tw.div`
  w-5
  h-5
  mr-1
`;

export const PageTitle = tw.div`
  text-[#1A1A1A]
  text-2xl
  text-center
  leading-relaxed
  font-bold
  uppercase
  font-["AbrilFatface"]
  pb-2
  md:pb-10
  md:text-4xl
  md:mx-6
  mx-4
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
  font-['Merriweather']
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
