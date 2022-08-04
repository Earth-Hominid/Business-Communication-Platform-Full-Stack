import tw from 'tailwind-styled-components/dist/tailwind';

export const StyledContainer = tw.div`
  mt-10
  min-h-screen
`;
export const InsideContainer = tw.div`
  flex 
  flex-col
  items-center
  flex-1
  min-w-full
  px-5
  py-8
  sm:px-10
  md:px-12
  sm:py-10
  md:py-12
  border
  border-transparent
  border-zinc-200
  rounded-md
  bg-white
  hover:border-slate-500
  shadow-lg
  transition
  duration-150
  ease-in-out
`;
export const HeaderContainer = tw.div`
  mb-4
  text-2xl
  font-montserrat
  text-slate-500
  uppercase
`;

export const StyledInput = tw.input`
  my-3
  block 
  w-full 
  px-3 
  py-2  
  border-slate-300 
  text-sm 
  shadow-sm 
  placeholder-slate-400
  border
  rounded-md
  text-slate-500
  bg-blue-50
  focus:outline-none 
  focus:border-gray-500 
  focus:ring-1
  focus:rounded-md
  focus:ring-gray-500
  focus:bg-blue-50
  invalid:border-pink-500 
  invalid:text-pink-600
  focus:invalid:border-pink-500 
  focus:invalid:ring-pink-500
`;

export const StyledButtonContainer = tw.div`
  flex
  flex-col
  justify-center
  w-full
  mt-8
`;

export const StyledButton = tw.button`
  flex
  flex-row
  items-center
  justify-center
  font-bold
  font-montserrat
  text-lg
  py-1
  bg-sky-500
  rounded-3xl
  text-white
  transition
  duration-300
  ease-in-out
  hover:bg-white
  hover:text-sky-500
  border-2
  border-transparent
  hover:border-sky-500
  mb-20
`;

export const FormFooter = tw.div`
  flex 
  flex-row 
  items-center
  font-montserrat
  text-slate-500
`;

export const StyledLink = tw.a`
cursor-pointer
text-blue-500
underline
font-bold
duration-150
transition
ease-in-out
hover:text-sky-500
`;

export const SmallHeaderContainer = tw.div`
  font-montserrat
  md:text-sm
  text-left
  flex
  w-full
  flex-1
  flex-wrap
  leading-relaxed
  items-center
  mb-4
  text-xs
  mt-3
`;
