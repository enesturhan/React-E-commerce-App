import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { BaseHttpService } from '../services/base.httpservice';

function Users() {
	const [users, setUsers] = useState([]);

	// ngOnit
	useEffect(async () => {
		// apiden veri çekme işlemleri yapılır

		// let response = await axios.get(
		// 	'https://jsonplaceholder.typicode.com/users'
		// );
		// let data = response.data;

		let response = await BaseHttpService.get(
			'https://jsonplaceholder.typicode.com/users'
		);

		setUsers([...response.data]);
	}, []);

	return (
		<>
			{users && (
				<div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<td>UserName</td>
								<td>Email</td>
							</tr>
						</thead>
						<tbody>
							{users.map((user, index) => {
								return (
									<tr key={index}>
										<td>{user?.username}</td>
										<td>{user?.email}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
}

export default Users;
