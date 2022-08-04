import tw from 'tailwind-styled-components';

export const MainContainer = tw.div`
  w-full
  p-3
  my-2
  border-transparent
  text-slate-800
  border
  hover:border-slate-500
  hover:bg-opacity-90
  hover:bg-yellow-50
  rounded-md
  hover:shadow-md
  font-montserrat
  hover:border-solid
  border-slate-300
  border-dashed
  transition
  duration-300
  ease-in-out
`;

export const CardContainer = tw.div`
  px-4
`;

export const Card = tw.div`
  bg-white
  w-full
  flex
  flex-row
  sm:max-w-lg
  shadow-md
  rounded-sm
  cursor-pointer
  hover:border-stone-900
  hover:border-dotted
  hover:border-2
`;

export const IconButton = tw.button`
  flex
  flex-row
  items-center
  justify-center
  py-1
  px-2
  space-x-1
  rounded-md
  hover:bg-slate-200
  hover:text-slate-900
`;

export const RedIconButton = tw.button`
  flex
  flex-row
  items-center
  justify-center
  py-1
  px-2
  space-x-1
  hover:bg-rose-200
  rounded-md
  hover:text-rose-600
`;

export const IconContainer = tw.div`
  h-6
  w-5
`;
export const SmallTitle = tw.h3`
  uppercase
  text-[5%]
  font-bold
  text-slate-500
  font-rubik
`;

export const LargeTitle = tw.h2`
  my-2
  text-xl
  font-bold
  underline
 
`;

export const ContentParagraph = tw.p`
  my-2
  text-slate-500
  font-rubik
`;

export const FooterContainer = tw.div`
  flex-row 
  flex-1
  items-center 
  flex
  justify-start
  space-x-2
`;

export const HeaderContainer = tw.div`
  flex
  justify-end
`;

export const FooterText = tw.p`
  text-slate-400
  font-bold 
  text-xs
  font-rubik
  mx-1
`;

export const IconText = tw.span`
  text-xs
`;

export const CategoryPin = tw.div`
  py-1
  px-3
  bg-slate-400
  rounded-3xl
  text-white
  font-montserrat
  uppercase
  text-[10px]
`;
