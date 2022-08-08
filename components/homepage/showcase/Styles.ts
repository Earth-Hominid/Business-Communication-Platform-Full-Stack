import tw from 'tailwind-styled-components';

export const MainSection = tw.section`
 w-full
 flex
 flex-col
 relative
 bg-[#FEF336]
 min-h-[250px]
 md:min-h-[300px]
 border-b-2	
 border-gray-300
`;

export const TextContainer = tw.div`
  m-5  
  sm:mx-12
  sm:mt-8
  md:mx-20
  md:mt-8
  lg:mx-32
  lg:mt-12
  font-[Montserrat]
`;

export const HeadingText = tw.h1`
  text-3xl
  md:text-4xl
  lg:text-4xl
  font-extrabold
  leading-normal
  text-black
   text-left
`;

export const SubheadingText = tw.h2`
  text-gray-600
  text-xl
  md:text-2xl
  md:mt-10
  lg:text-3xl
  lg:mt-12
  my-5
   text-left
`;
