import tw from 'tailwind-styled-components';

export const Container = tw.div`
w-full
flex
flex-1
bg-yellow-50
border-t
border-b
border-gray-400
`;

export const SpacingContainer = tw.div`
  flex 
  flex-row 
  flex-1 
  items-center 
  text-gray-600s
  font-montserrat
  space-x-2
  text-sm
  md:text-base
  md:space-x-4
  py-1
  px-2
  mx-2
`;

export const MainPageText = tw.p`
  cursor-pointer
`;
export const CurrentPageText = tw.p`
  cursor-pointer
`;

export const IconHolder = tw.div`
  w-5
  h-5
  text-gray-600
`;
