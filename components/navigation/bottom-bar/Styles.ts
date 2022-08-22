import tw from 'tailwind-styled-components';

export const BottomNavigationMenu = tw.div`
 flex 
 justify-between 
 flex-col 
 w-full
 md:hidden
 bg-white
`;

export const ActionButtonHolder = tw.div`
  flex 
  flex-row
  space-x-2
  p-3
`;

export const NavigationMenu = tw.div`
`;

export const DemoAccountButton = tw.button`
  flex 
  items-center
  text-sm 
  font-semibold 
  bg-blue-500
  text-white
  hover:text-blue-500
  border-transparent
  border-2
  py-1 
  px-2 
  hover:bg-white
border-blue-500
  cursor-pointer
  rounded-md
  duration-300
  transition
  ease-in-out
`;

export const IconWrap = tw.div`
  h-5
  w-5 
  mr-1
`;

export const ButtonLink = tw.button`
  text-slate-500
  hover:text-indigo-600
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
  text-sm
  font-semibold
`;

export const SignUpButtonLink = tw.button`
  border-2
  text-white
  bg-sky-500
  border-sky-500
  px-4
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-sky-600
  hover:bg-white
  hover:border-2
  transition
  duration-300
  ease-in-out
  text-sm
  font-semibold
`;

export const LogoutButtonLink = tw.button`
  flex
  flex-row
  items-center
  border-2
  text-white
  bg-rose-500
  border-rose-500
  px-5
  rounded-3xl
  cursor-pointer
  hover:text-rose-600
  hover:bg-rose-50
  hover:border-2
  transition
  duration-300
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

export const BlueIconWrap = tw.div`
  h-9 
  w-6 
  md:w-9 
  cursor-pointer 
  md:p-1 
  md:hover:bg-blue-100
  md:hover:text-blue-600
  rounded-3xl 
  text-stone-600
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
  rounded-md 
  text-stone-600
  duration-150
  transition
  ease-in-out
`;

export const AddArticleButton = tw.button`
flex
flex-row
items-center
  border-2
  text-white
  bg-blue-500
  border-blue-500
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-blue-500
  hover:bg-blue-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;

export const AddReportButton = tw.button`
flex
flex-row
items-center
  border-2
  text-white
  bg-slate-500
  border-slate-500
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-slate-500
  hover:bg-blue-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;

export const DashboardButton = tw.button`
flex
flex-row
items-center
  border-2
  text-white
  bg-indigo-400
  border-indigo-400
  px-3
  py-1
  rounded-3xl
  cursor-pointer
  hover:text-indigo-500
  hover:bg-indigo-50
  hover:border-2
  transition
  duration-300
  ease-in-out
`;
