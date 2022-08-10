import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import SearchBar from '../searchbar/Searchbar';
import MenuAccordian from './accordian/MenuAccordian';
import {
  SunIcon,
  MoonIcon,
  DocumentAddIcon,
  DocumentReportIcon,
  DesktopComputerIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
  ThemeButton,
  IconWrap,
  NavigationMenu,
  LogoutButtonLink,
  ButtonLink,
  SignUpButtonLink,
  AddReportButton,
  AddArticleButton,
  DashboardButton,
} from './Styles';

const BottomNavigation = () => {
  const [lightTheme, setLightTheme] = useState(true);

  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/account/login');
  };

  const handleSignupClick = () => {
    router.push('/account/register');
  };

  const handleLightThemeToggle = () => {
    if (lightTheme) {
      setLightTheme(false);
    } else {
      setLightTheme(true);
    }
  };

  const handleThemeButtonClick = () => {
    handleLightThemeToggle();
  };

  const subforumObject = {
    title: 'Rede BS',
    datapoints: [{ name: 'Sobre nós', id: '1', url: '/about/' }],
  };

  const popularSubforumObject = {
    title: 'Aprendendo',
    datapoints: [
      {
        name: 'Eletromóveis',
        id: '1',
        url: '#',
      },
      { name: 'Farmácia', id: '2', url: '#' },
      { name: 'Supermercado', id: '3', url: '#' },
    ],
  };

  const { user, logout } = useContext(AuthContext);

  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <SearchBar />
      </ActionButtonHolder>
      <ActionButtonHolder>
        {/* <ThemeButton>
          <IconWrap>
            <SunIcon />
          </IconWrap>
          Theme
        </ThemeButton> */}
        {/* {session ? (
          <>
            <ButtonLink>Demo Account</ButtonLink>
          </>
        )} */}
        {user ? (
          <>
            <Link href="/reports/add">
              <AddReportButton>
                <IconWrap>
                  <DocumentReportIcon />
                </IconWrap>
                Relatório
              </AddReportButton>
            </Link>
            <Link href="/articles/add">
              <AddArticleButton>
                <IconWrap>
                  <DocumentAddIcon />
                </IconWrap>
                Artigo
              </AddArticleButton>
            </Link>

            <Link href="/account/dashboard">
              <DashboardButton>
                <IconWrap>
                  <DesktopComputerIcon />
                </IconWrap>
                Conta
              </DashboardButton>
            </Link>

            <LogoutButtonLink onClick={() => logout()}>
              <IconWrap>
                <LogoutIcon />
              </IconWrap>
              Sair
            </LogoutButtonLink>
          </>
        ) : (
          <>
            <ButtonLink onClick={handleLoginClick}>Já é membro?</ButtonLink>
            <SignUpButtonLink onClick={handleSignupClick}>
              Inscrever-se
            </SignUpButtonLink>
          </>
        )}
      </ActionButtonHolder>
      <NavigationMenu>
        <MenuAccordian props={popularSubforumObject} />
        <MenuAccordian props={subforumObject} />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
