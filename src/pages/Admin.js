import React from 'react';
import { Outlet } from 'react-router';
import AdminLayout from '../components/AdminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function Admin() {
	return (
		<div>
			<AdminLayout>
				<Outlet />
			</AdminLayout>
		</div>
	);
}

export default Admin;
