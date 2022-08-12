import tw from 'tailwind-styled-components/dist/tailwind';

export const PaginationContainer = tw.div`
  flex
  flex-col
  justify-center
  w-full
  text-xs
  my-8
`;

export const InsideContainer = tw.div`
  flex
  flex-row
  justify-between
  mx-10
  lg:mx-20
`;

export const PaginationButton = tw.button`
  py-1
  px-3
  bg-yellow-50
  border
  border-gray-500
  hover:bg-gray-500
  flex 
  flex-row
  justify-center
  items-center
  transition
  duration-300
  ease-in-out
  rounded-sm
`;

export const PaginationLink = tw.div`
  py-1
  px-3
  bg-yellow-50
  border
  border-gray-600
  hover:bg-blue-400
  hover:text-white
  hover:border-transparent
  flex 
  flex-row
  justify-center
  items-center
  transition
  duration-300
  ease-in-out
  rounded-sm
`;

export const IconHolderRight = tw.div`
  h-5 
  w-5
  ml-2
`;

export const IconHolderLeft = tw.div`
  h-5
  w-5
  mr-2
`;
