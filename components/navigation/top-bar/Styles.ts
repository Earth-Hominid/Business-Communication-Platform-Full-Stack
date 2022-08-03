import tw from 'tailwind-styled-components';

export const HeaderContainer = tw.header`
  flex
  bg-white
  shadow-sm
  py-2
  sticky
  top-0
  z-50
`;

export const ImageContainer = tw.div`
  relative 
  h-12
  w-24
  md:h-16
  md:w-32
  flex-shrink-0
  cursor-pointer
`;

export const ExtendedContainer = tw.div`
  flex 
  items-center 
  w-full 
  flex-row
  flex-1
  justify-end
  mr-2
`;

export const ButtonContainer = tw.div`
  flex-1
  items-center
  justify-end
  hidden
  md:inline-flex
  space-x-3
`;

export const HamburgerContainer = tw.div`
 md:hidden
`;

export const SignUpButtonLink = tw.button`
  hidden md:inline-flex
  text-white
  bg-sky-500
  border-transparent
  px-2
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-sky-600
  hover:bg-white
  hover:border-sky-500
  border-2
  transition
  duration-300
  ease-in-out
`;

export const LoginButtonLink = tw.button`
  hidden md:inline-flex
  border-2
  text-slate-600
  bg-white
  border-transparent
  rounded-lg
  cursor-pointer
  hover:text-indigo-600
  hover:bg-white
  hover:border-2
  hover:border-indigo-600
  transition
  duration-300
  ease-in-out
  py-1
  px-2
  
`;

export const LogoutButtonLink = tw.button`
  hidden md:inline-flex
  border-2
  text-white
  bg-rose-500
  border-rose-500
  px-5
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-rose-600
  hover:bg-rose-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;

export const ButtonLink = tw.button`
  text-stone-700
  hover:text-indigo-600
  hidden 
  md:inline-flex 
  hover:bg-white
  px-2 
  py-1 
  rounded-lg
  cursor-pointer
  hover:border-indigo-600
  border-transparent
  border-2
  hover:border-2
  duration-300
  transition
  ease-in-out
`;

export const OrangeIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-orange-100
  md:hover:text-orange-600
  rounded-3xl
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const CyanIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-cyan-100
  md:hover:text-cyan-700
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const BlueIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-blue-100
  md:hover:text-blue-600
  rounded-3xl 
  text-slate-500
  duration-150
  transition
  ease-in-out
`;

export const SkyIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-sky-100
  md:hover:text-sky-600
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const IndigoIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-indigo-100
  md:hover:text-indigo-600
  rounded-3xl 
  text-slate-500
  duration-150
  transition
  ease-in-out
`;
export const GreenIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-green-100
  md:hover:text-green-600
  rounded-3xl 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;
