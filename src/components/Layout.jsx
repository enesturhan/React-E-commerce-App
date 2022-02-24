import React from 'react';
import { Container } from 'react-bootstrap';
import CartMenu from './CartMenu';
import Footer from './Footer';
import Header from './Header';

// children layout componentler için özel isim niteliğindedir.

function Layout({ children }) {
	return (
		<>
			<CartMenu></CartMenu>
			<Header bg={'light'} variant={'light'} />
			<Container fluid>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}

export default Layout;
