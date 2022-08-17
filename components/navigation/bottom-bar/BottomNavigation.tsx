import { useContext } from 'react';
import { useRouter } from 'next/router';
import AuthContext from '@/context/AuthContext';
import Link from 'next/link';
import SearchBar from '../searchbar/Searchbar';
import MenuAccordian from './accordian/MenuAccordian';
import {
  DocumentAddIcon,
  DocumentReportIcon,
  DesktopComputerIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

import {
  BottomNavigationMenu,
  ActionButtonHolder,
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
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/account/login');
  };

  const handleSignupClick = () => {
    router.push('/account/register');
  };

  const BusinessObject = {
    title: 'Rede BS',
    datapoints: [{ name: 'Sobre nós', id: '1', url: '/about/' }],
  };

  const LearningObject = {
    title: 'Aprendendo',
    datapoints: [
      {
        name: 'Atendimento ao Cliente',
        id: '1',
        url: '/atendimento-ao-cliente',
      },
      {
        name: 'Cadeia de mantimentos',
        id: '2',
        url: '/supply-chain',
      },
    ],
  };

  const StoreObject = {
    title: 'Supermercado',
    datapoints: [
      {
        name: 'Hortifruti',
        id: '1',
        url: '/hortifruti',
      },
    ],
  };

  const { user, logout } = useContext(AuthContext);

  return (
    <BottomNavigationMenu>
      <ActionButtonHolder>
        <SearchBar />
      </ActionButtonHolder>
      <ActionButtonHolder>
        {user ? (
          <>
            <Link href="/articles/add">
              <AddArticleButton>
                <IconWrap>
                  <DocumentAddIcon />
                </IconWrap>
                Artigo
              </AddArticleButton>
            </Link>
            <Link href="/reports/add">
              <AddReportButton>
                <IconWrap>
                  <DocumentReportIcon />
                </IconWrap>
                Relatório
              </AddReportButton>
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
        <MenuAccordian props={StoreObject} />
        <MenuAccordian props={LearningObject} />
        <MenuAccordian props={BusinessObject} />
      </NavigationMenu>
    </BottomNavigationMenu>
  );
};

export default BottomNavigation;
