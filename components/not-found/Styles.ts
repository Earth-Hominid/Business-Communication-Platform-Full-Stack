import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
  p-6
  m-4
  text-xl
  min-h-screen
`;

export const MainText = tw.h1`
  text-gray-800
  font-bold
`;

export const ParagraphText = tw.p`
  text-gray-500
  mb-2
`;

export const LinkText = tw.p`
  font-bold
  underline
  cursor-pointer
  text-yellow-700
  hover:text-blue-500
`;

export const IconHolder = tw.div`
  h-6 
  w-6
`;
