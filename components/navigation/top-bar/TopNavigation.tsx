import LogoContainer from './LogoContainer';
import NavigationButtons from './NavigationButtons';
import DropdownContainer from './drop-down-menu/DropdownContainer';
import SearchBar from '../searchbar/Searchbar';

import { HeaderContainer, ButtonContainer } from './Styles';

const Navigation = ({
  handleNavigationMenuClick,
  navigationMenuToggle,
}: {
  handleNavigationMenuClick: Function;
  navigationMenuToggle: boolean;
}) => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer />
        <DropdownContainer />
        <ButtonContainer>
          <SearchBar />
        </ButtonContainer>

        <NavigationButtons
          handleNavigationMenuClick={handleNavigationMenuClick}
          navigationMenuToggle={navigationMenuToggle}
        />
      </HeaderContainer>
    </>
  );
};

export default Navigation;
