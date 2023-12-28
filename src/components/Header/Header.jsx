import { NavLink } from 'react-router-dom';
import { HeaderIcon, HeaderStyles, NavigationStyles, NavigationItem } from './Header.styled';

const Header = () => {
	return (
		<HeaderStyles>
			<nav>
				<NavigationStyles>
					<NavigationItem>
						<NavLink to='/'>
                            <HeaderIcon  width="32" height="22">
                            <use href="../icons/icons.svg#home"></use>
                            </HeaderIcon>
                            Home
                        </NavLink>
					</NavigationItem>
					<NavigationItem>
						<NavLink to='/movies'>
                        <HeaderIcon className="header-icon" width="32" height="22">
                            <use href="../icons/icons.svg#movie"></use>
                        </HeaderIcon>
                        Movies
                        </NavLink>
					</NavigationItem>
					
				</NavigationStyles>
			</nav>
		</HeaderStyles>
	)
}

export default Header