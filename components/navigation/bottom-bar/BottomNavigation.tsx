import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import SearchBar from '../searchbar/Searchbar';
import {
  SunIcon,
  MoonIcon,
  DocumentAddIcon,
  DesktopComputerIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import MenuAccordian from './accordian/MenuAccordian';
import {
  BottomNavigationMenu,
  ActionButtonHolder,
  ThemeButton,
  IconWrap,
  NavigationMenu,
  LogoutButtonLink,
  ButtonLink,
  SignUpButtonLink,
  CreateSubforumButton,
  CreatePostButton,
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
        url: '/lojas/eletromoveis',
      },
      { name: 'Farmácia', id: '2', url: '/lojas/farmacia' },
      { name: 'Supermercado', id: '3', url: '/lojas/supermercado' },
    ],
  };

  const { user, logout } = useContext(AuthContext);

  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <SearchBar />
      </ActionButtonHolder>
      <ActionButtonHolder>
        <ThemeButton>
          <IconWrap>
            <SunIcon />
          </IconWrap>
          Theme
        </ThemeButton>
        {/* {session ? (
          <>
            <ButtonLink>Demo Account</ButtonLink>
          </>
        )} */}
        {user ? (
          <>
            <Link href="/reports/addreport">
              <CreateSubforumButton>
                <IconWrap>
                  <DocumentAddIcon />
                </IconWrap>
                Relatório
              </CreateSubforumButton>
            </Link>

            <Link href="/account/dashboard">
              <CreatePostButton>
                <IconWrap>
                  <DesktopComputerIcon />
                </IconWrap>
                Conta
              </CreatePostButton>
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
