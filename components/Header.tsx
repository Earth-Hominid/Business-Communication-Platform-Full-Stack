import { useState, useContext } from 'react';
import AuthContext from '@/context/AuthContext';
import TopNavigation from './navigation/top-bar/TopNavigation';
import BottomNavigation from './navigation/bottom-bar/BottomNavigation';
import NavToolBar from './navigation/tool-bar/ToolBar';

interface Props {
  mainPage: string;
  currentPage: string;
  mainPageTitle: string;
  currentPageTitle: string;
}

const Header: React.FC<Props> = ({
  mainPage,
  currentPage,
  mainPageTitle,
  currentPageTitle,
}) => {
  const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);

  // Demo account login extra code added:
  const { login } = useContext(AuthContext);

  const LoginDemoAccount = () => {
    let email = 'userone@gmail.com';
    let password = 'userone';

    login({ email, password });
  };

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
    } else {
      setNavigationMenuToggle(true);
    }
  };

  const handleNavigationMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    toggleNavigationButton();
  };

  const handleDemoAccountClick = () => {
    LoginDemoAccount();
  };

  return (
    <>
      <TopNavigation
        handleNavigationMenuClick={handleNavigationMenuClick}
        navigationMenuToggle={navigationMenuToggle}
        handleDemoAccountClick={handleDemoAccountClick}
      />
      {navigationMenuToggle ? (
        <BottomNavigation handleDemoAccountClick={handleDemoAccountClick} />
      ) : (
        ''
      )}
      <NavToolBar
        mainPage={mainPage}
        currentPage={currentPage}
        mainPageTitle={mainPageTitle}
        currentPageTitle={currentPageTitle}
      />
    </>
  );
};

export default Header;
