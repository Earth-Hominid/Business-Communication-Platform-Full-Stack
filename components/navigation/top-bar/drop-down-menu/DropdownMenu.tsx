import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import {
  PlusIcon,
  ChartSquareBarIcon,
  DesktopComputerIcon,
  DocumentAddIcon,
  DocumentReportIcon,
} from '@heroicons/react/outline';
import MenuList from './MenuList';

import { MenuContainer, MenuHeader, ButtonHolder, IconHolder } from './Styles';

const DropdownMenu = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <MenuContainer>
      {user ? (
        <>
          <Link href="/articles/add">
            <ButtonHolder>
              <IconHolder>
                <DocumentAddIcon />
              </IconHolder>

              <p className="ml-1">Adicionar um artigo</p>
            </ButtonHolder>
          </Link>
          <Link href="/reports/add">
            <ButtonHolder>
              <IconHolder>
                <ChartSquareBarIcon />
              </IconHolder>

              <p className="ml-1">Adicionar um relatório</p>
            </ButtonHolder>
          </Link>
          <Link href="/account/dashboard">
            <ButtonHolder>
              <IconHolder>
                <DesktopComputerIcon />
              </IconHolder>

              <p className="ml-1">Painel da sua conta</p>
            </ButtonHolder>
          </Link>
        </>
      ) : (
        <></>
      )}
      <MenuHeader>Categorias</MenuHeader>
      <Link href="/articles">
        <ButtonHolder>
          <p className="ml-1">Artigos</p>
        </ButtonHolder>
      </Link>
      {user ? (
        <>
          <Link href="/reports">
            <ButtonHolder>
              <p className="ml-1">Relatórios</p>
            </ButtonHolder>
          </Link>
        </>
      ) : (
        <></>
      )}
      <MenuList />
      <MenuHeader>Supermercado</MenuHeader>
      <Link href="/hortifruti">
        <ButtonHolder>
          <p className="ml-1">Hortifruti</p>
        </ButtonHolder>
      </Link>
      <MenuHeader>Aprendendo</MenuHeader>
      <Link href="/atendimento-ao-cliente">
        <ButtonHolder>
          <p className="ml-1">Atendimento ao Cliente</p>
        </ButtonHolder>
      </Link>
      <Link href="/supply-chain">
        <ButtonHolder>
          <p className="ml-1">Cadeia de mantimentos</p>
        </ButtonHolder>
      </Link>
      <MenuList />
      <MenuHeader>Rede BS</MenuHeader>
      <Link href="/about">
        <ButtonHolder>
          <p className="ml-1">Sobre nós</p>
        </ButtonHolder>
      </Link>
    </MenuContainer>
  );
};

export default DropdownMenu;
