import { useContext } from 'react';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';
import {
  XIcon,
  MenuIcon,
  DocumentAddIcon,
  DocumentReportIcon,
  DesktopComputerIcon,
} from '@heroicons/react/outline';
import { useRouter } from 'next/router';

import {
  HamburgerContainer,
  ExtendedContainer,
  ButtonContainer,
  SignUpButtonLink,
  LogoutButtonLink,
  LoginButtonLink,
  DemoAccountButton,
  BlueIconWrap,
  IndigoIconWrap,
  SlateIconWrap,
} from './Styles';

const NavigationButtons = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
  handleDemoAccountClick,
}: {
  handleNavigationMenuClick: Function;
  handleDemoAccountClick: Function;
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
                <Link href="/articles/add">
                  <DocumentAddIcon />
                </Link>
              </BlueIconWrap>
              <SlateIconWrap>
                <Link href="/reports/add">
                  <DocumentReportIcon />
                </Link>
              </SlateIconWrap>
              <IndigoIconWrap>
                <Link href="/account/dashboard">
                  <DesktopComputerIcon />
                </Link>
              </IndigoIconWrap>

              <LogoutButtonLink onClick={() => logout()}>Sair</LogoutButtonLink>
            </>
          ) : (
            <>
              <DemoAccountButton onClick={handleDemoAccountClick}>
                Demo Account
              </DemoAccountButton>
              <LoginButtonLink onClick={handleAccountClick}>
                Já é membro?
              </LoginButtonLink>
              <SignUpButtonLink onClick={handleSignUpClick}>
                Inscrever-se
              </SignUpButtonLink>
            </>
          )}
        </ButtonContainer>
        <HamburgerContainer onClick={handleNavigationMenuClick}>
          {navigationMenuToggle ? (
            <XIcon className="icon" />
          ) : (
            <MenuIcon className="icon" />
          )}
        </HamburgerContainer>
      </ExtendedContainer>
    </>
  );
};

export default NavigationButtons;
