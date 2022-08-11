import tw from 'tailwind-styled-components/dist/tailwind';

export const FormContainer = tw.div`
  flex
  flex-col
  items-center
`;

export const SubmitInput = tw.input`
  bg-blue-500
  w-full
  text-white
  font-bold
  font-montserrat
  py-1
  rounded-md
  text-lg
  mt-10
  transition
  duration-300
  ease-in-out
  border-transparent
  border-2
  hover:border-black
  hover:text-black
  hover:bg-yellow-50
  cursor-pointer
`;

export const FileInput = tw.input`
  font-montserrat
`;
