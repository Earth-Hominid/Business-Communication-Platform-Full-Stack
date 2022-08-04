import tw from 'tailwind-styled-components';

export const SearchForm = tw.form`
  flex 
  flex-1
  items-center
  space-x-2
  border
  border-zinc-200
  rounded-md
  px-3
  py-1
  bg-zinc-50
`;

export const IconHolder = tw.div`
  h-6
  w-6
  text-gray-500
`;

export const PlaceholderInput = tw.input`
  text-gray-500
  flex
  flex-1
  py-1
  px-2
  border-md
  bg-zinc-50
  focus:outline-none 
  focus:border-gray-500 
  focus:ring-1
  focus:rounded-md
  focus:ring-gray-500
  focus:bg-yellow-50
`;

export const HiddenButton = tw.button``;
