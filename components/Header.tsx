import { useState } from 'react';
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
