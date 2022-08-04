import { useState, useContext } from 'react';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';
import {
  XIcon,
  MenuIcon,
  LibraryIcon,
  DocumentAddIcon,
  DesktopComputerIcon,
  FireIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';

import {
  HamburgerContainer,
  ExtendedContainer,
  ButtonContainer,
  SignUpButtonLink,
  LogoutButtonLink,
  LoginButtonLink,
  BlueIconWrap,
  IndigoIconWrap,
} from './Styles';

const NavigationButtons = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) => {
  const router = useRouter();

  const handleAccountClick = () => {
    router.push('/account/login');
  };

  const handleSignUpClick = () => {
    router.push('/account/register');
  };

  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <ExtendedContainer>
        <ButtonContainer>
          {user ? (
            <>
              <BlueIconWrap>
                <Link href="/reports/addreport">
                  <DocumentAddIcon />
                </Link>
              </BlueIconWrap>
              <IndigoIconWrap>
                <Link href="/account/dashboard">
                  <DesktopComputerIcon />
                </Link>
              </IndigoIconWrap>

              <LogoutButtonLink onClick={() => logout()}>Sair</LogoutButtonLink>
            </>
          ) : (
            <>
              <LoginButtonLink onClick={handleAccountClick}>
                Já é membro?
              </LoginButtonLink>
              <SignUpButtonLink onClick={handleSignUpClick}>
                Inscrever-se
              </SignUpButtonLink>
            </>
          )}
        </ButtonContainer>
        <HamburgerContainer>
          {navigationMenuToggle ? (
            <XIcon className="icon" onClick={handleNavigationMenuClick} />
          ) : (
            <MenuIcon className="icon" onClick={handleNavigationMenuClick} />
          )}
        </HamburgerContainer>
      </ExtendedContainer>
    </>
  );
};

export default NavigationButtons;
