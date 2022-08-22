import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  flex 
  flex-row 
`;

export const SubContainer = tw.div`
  flex 
  flex-row 
  items-center 
  lg:mx-6
  lg:min-w-[150px]
  xl:min-w-[200px]
  relative
  cursor-pointer
`;

export const HomeText = tw.p`
  flex-1
  hidden
  ml-2
  lg:inline
  text-gray-600
`;

export const LargeIconHolder = tw.div`
text-gray-500
  w-5 h-5 
  md:h-6 
  md:w-6
`;

export const IconHolder = tw.div`
  h-5 
  w-5 
  text-gray-500 
  rounded-3xl
`;

export const MenuContainer = tw.div`
  flex
  flex-col
  bg-white
  border
  border-zinc-400
  absolute
  max-w-xl
  top-14
  left-32
  rounded-md
  space-y-1
  p-2
  text-[Roboto]
`;

export const MenuHeader = tw.div`
  mt-3
  text-sm
  text-gray-400
  p-1
`;

export const ButtonHolder = tw.div`
  flex 
  flex-row
  text-gray-600
  hover:bg-yellow-100
  cursor-pointer
  w-full
  rounded-md
  items-center
  p-2
`;

export const MenuItem = tw.li`
  text-gray-500
  hover:bg-gray-300
  cursor-pointer
  w-full
  rounded-md
  p-1
`;

export const LoadingText = tw.p`
  text-gray-400
  font-semibold
  text-xs`;

export const ErrorText = tw.p`
  text-rose-500
  font-semibold
  text-xs`;
