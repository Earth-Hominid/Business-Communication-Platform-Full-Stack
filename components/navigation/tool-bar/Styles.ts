import tw from 'tailwind-styled-components';

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

export const StoreLogo = tw.div`
  rounded-md
  bg-[#EDBD77]
  text-white
  px-2
  py-1
`;
