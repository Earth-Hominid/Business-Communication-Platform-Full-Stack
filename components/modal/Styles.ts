import tw from 'tailwind-styled-components/dist/tailwind';

export const StyledModalBody = tw.div`pt-4`;

export const StyledModalHeader = tw.div`
  flex
  justify-end
  text-xl
`;

export const StyledModal = tw.div`
  bg-yellow-50
  w-full
  p-8
  h-[500px]
  mx-5
  max-w-xl
  border-md
  border-black
  border-dotted
  border-2
  shadow-lg
`;

export const StyledModalOverlay = tw.div`
 absolute
 top-0
 left-0
 w-screen
 h-screen
 flex
 justify-center
 items-center
 bg-white
`;

export const IconContainer = tw.div`
  h-6 
  w-6
`;

export const ModalTitle = tw.h2`
  text-lg
  text-black
  font-bold
  text-center
`;
