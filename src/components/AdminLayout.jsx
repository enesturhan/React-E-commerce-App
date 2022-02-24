import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function AdminLayout({ children }) {
	const menus = [
		{
			title: 'Kullanıcılar',
			url: 'users',
		},
		{
			title: 'Yönetim Paneli',
			url: '',
		},
		{ title: 'User Detail', url: 'users/1' },
	];

	return (
		<>
			<Header bg="dark" variant="dark" menus={menus} isAdmin={true} />
			<Container>
				<main>{children}</main>
			</Container>
			<Footer>
				<div>Created By NbuyDesign</div>
			</Footer>
		</>
	);
}

export default AdminLayout;
