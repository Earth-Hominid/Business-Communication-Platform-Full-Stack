import tw from 'tailwind-styled-components';

export const FormPageTitle = tw.h1`
  pt-5 
  mb-4 
  text-2xl 
  font-montserrat
  selection:font-bold 
  text-zinc-700 
  text-center
`;

export const FormContainer = tw.div`
  container
  max-w-4xl
  px-5
  md:py-2
`;

export const StyledForm = tw.form`
  py-2
  px-5
  md:py-5
  md:px-10
  flex
  flex-col
  justify-center
  bg-white
  border 
  border-slate-300 
  shadow-lg
  rounded-lg
`;

export const InsideContainer = tw.div`
  w-full
  py-6
  flex
  justify-center
  bg-white
  border 
  border-slate-300 
  shadow-lg
  rounded-md
  `;

export const InputLabelContainer = tw.div`
  relative 
  mt-4
  flex
  flex-1
`;

export const StyledInput = tw.input`
  flex
  flex-1
  h-12
  peer
  border-b-2 
  border-gray-300 
  focus:outline-none 
  focus:border-blue-500 placeholder-transparent
  invalid:border-pink-500
  invalid:text-pink-600
  focus:invalid:border-pink-500
  focus:invalid:ring-pink-500
`;

export const StyledTextArea = tw.textarea`
  flex
  flex-1
  h-12
  peer
  border-b-2 
  border-gray-300 
  focus:outline-none 
  focus:border-blue-500 placeholder-transparent
  invalid:border-pink-500
  invalid:text-pink-600
  focus:invalid:border-pink-500
  focus:invalid:ring-pink-500
`;

export const WideTextArea = tw.textarea`
  block 
  p-2.5 
  w-full 
  text-sm 
  text-gray-900 
  bg-gray-50 
  rounded-lg border 
  border-gray-300 
  focus:ring-blue-500 
  focus:border-blue-500 
  
`;

export const StyledLabel = tw.label`
text-stone-800 
  absolute 
  left-0  
  -top-3.5 
  text-sm
  md:text-base
  peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-600 peer-placeholder-shown:top-2 transition-all 
  peer-focus:-top-3.5
  peer-foucs:text-stone-600
  peer-focus:text-sm
`;

export const FormButton = tw.button`
  bg-blue-500 
  p-2 
  rounded-md 
  text-white 
  w-full 
  text-base 
  border-2
   border-transparent
  hover:bg-yellow-50
  hover:border-black
  hover:text-black
  ease-in-out
  transition
  duration-300
  font-montserrat
`;

export const ImageContainer = tw.div`
  flex 
  flex-col 
  my-5 
  text-gray-700
  font-roboto
  leading-relaxed
`;

export const ImageContainerHeading = tw.h2`
  font-montserrat
`;
export const ImageContainerText = tw.p`
  text-rose-500
`;

export const IconContainer = tw.div`
  h-6
  w-6
  mr-2
`;

export const ButtonHolder = tw.div`
  w-full 
  flex
  mt-2
  mb-40
`;

export const ImageButton = tw.button`
  bg-blue-500
  flex
  flex-row
  items-center
  justify-center
  text-white
  py-1
  px-3
  rounded-md
  transition
  ease-in-out
  duration-300
  border-2
  hover:bg-yellow-50
  hover:text-black
  hover:border-black
  border-transparent
  font-montserrat
`;
