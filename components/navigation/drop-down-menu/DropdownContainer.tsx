import { useRef, useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/solid';

import { LibraryIcon } from '@heroicons/react/outline';

import {
  MainContainer,
  SubContainer,
  HomeText,
  LargeIconHolder,
  IconHolder,
} from './Styles';

const DropdownContainer = () => {
  const dropdownRef = useRef<HTMLElement>(null);
  const [openMenu, setOpenMenu] = useState(false);

  const open = () => setOpenMenu(true);
  const close = () => setOpenMenu(false);

  const handleMenuClick = () => {
    if (openMenu) {
      close();
    } else {
      open();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', toggle);
    return () => {
      document.removeEventListener('mousedown', toggle);
    };
  }, []);

  const toggle = (e: MouseEvent) => {
    const { current } = dropdownRef;
    if (current && !current.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <MainContainer ref={dropdownRef}>
        <SubContainer onClick={handleMenuClick}>
          <LargeIconHolder>
            <LibraryIcon />
          </LargeIconHolder>
          <HomeText>Biblioteca</HomeText>
          {openMenu ? (
            <IconHolder>
              <ChevronDownIcon />
            </IconHolder>
          ) : (
            <IconHolder>
              <ChevronRightIcon />
            </IconHolder>
          )}
        </SubContainer>
        {openMenu ? <DropdownMenu /> : ''}
      </MainContainer>
    </>
  );
};

export default DropdownContainer;
