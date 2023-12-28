import { Outlet } from 'react-router-dom'
import Header from 'components/Header/Header'
import {Container,} from "./Layout.styled"
import { Suspense } from 'react';

const Layout = () => {
	return (
		<>
	 		<Header />
			<Container>
				 <Suspense fallback={<div>Loading page...</div>}>
					<Outlet />
		 		 </Suspense>
		  	</Container>
		</>
	  );

}
export default Layout;


// return (
	// 	<div>
	// 		<Header />
	// 		<Outlet />
	// 	</div>
	// )

 /* <header>
			<Navigation>
			  <NavList>
				<NavItem>
				  <Link to="/">
					Home
				  </Link>
				</NavItem>
				<NavItem>
				  <Link to="/movies">
					Movies
				  </Link>
				</NavItem>
			  </NavList>
			</Navigation>
		  </header> */