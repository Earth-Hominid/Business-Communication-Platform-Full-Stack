import { useState } from 'react';
import TopNavigation from '../top-navigation/TopNavigation';
import BottomNavigation from '../bottom-navigation/BottomNavigation';
import NavToolBar from '../nav-tool-bar/NavToolBar';

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

  const toggleNavigationButton = () => {
    if (navigationMenuToggle) {
      setNavigationMenuToggle(false);
    } else {
      setNavigationMenuToggle(true);
    }
  };

  const handleNavigationMenuClick = () => {
    toggleNavigationButton();
  };

  return (
    <>
      <TopNavigation
        handleNavigationMenuClick={handleNavigationMenuClick}
        navigationMenuToggle={navigationMenuToggle}
      />
      {navigationMenuToggle ? <BottomNavigation /> : ''}
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
