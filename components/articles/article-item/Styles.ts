import tw from 'tailwind-styled-components';

export const MainSection = tw.div`
  flex 
  flex-col
  pb-10
  border-b
  border-gray-200
  mx-4
`;

export const ArticleContainer = tw.div`
  grid 
  grid-cols-2
  gap-1
  w-full
  m-2
  p-2.5
  sm:p-6
`;

export const TextContainer = tw.div`
  flex
  flex-col
  text-left
  pl-2
`;

export const ArticleCategoryText = tw.h3`
  text-slate-500
  hover:text-black
  text-xs
  cursor-pointer
  font-roboto
  uppercase
  leading-normal
  ease-in-out
  duration-300
  transition
`;

export const ArticleTitle = tw.h2`
  mt-1
  text-black
  hover:text-slate-500
  font-bold
  cursor-pointer
  font-montserrat
  sm:text-lg
  ease-in-out
  duration-300
  transition
`;

export const ImageContainer = tw.div`
  h-auto
  sm:w-64
  md:w-80
  md:mx-2
  lg:w-96
  lg:mx-12
`;

export const MobileAuthorContainer = tw.div`
  w-full 
  flex 
  flex-col 
  text-left
  m-2
  p-2
  sm:hidden
`;

export const MobileAuthorHeading = tw.h3`
  text-xs
  text-slate-500
  hover:text-black
  ml-1
  cursor-pointer
  uppercase
  font-montserrat
  ease-in-out
  duration-300
  transition
`;

export const MobileAuthorDescription = tw.h3`
  text-sm
  text-black
  mt-1
  leading-normal
  font-montserrat
`;

export const DesktopAuthorContainer = tw.div`
  hidden
  sm:flex
  flex-col
  mt-4
`;

export const DesktopAuthorHeading = tw.h3`
  text-xs
  text-slate-500
  hover:text-black
  ml-1
  cursor-pointer
  uppercase
  font-montserrat
  ease-in-out
  duration-300
  transition
`;

export const DesktopAuthorDescription = tw.h3`
  text-sm
  text-black
  mt-2
  leading-normal
  font-montserrat
  prose
`;

export const InlineRow = tw.div`
  flex-row 
  flex
`;
