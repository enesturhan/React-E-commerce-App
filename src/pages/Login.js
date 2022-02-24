import React from 'react';
import { useNavigate } from 'react-router';
import { AuthService } from '../services/auth.service';

function Login() {
	const navigate = useNavigate();
	// useNavigate ile js tarafında bir sayfadan başka bir sayfaya yönlenebiliriz.

	const login = async () => {
		const param = {
			username: 'mert',
			password: '1234',
		};

		await AuthService.login(param, (response, error) => {
			console.log('error', error);

			if (error) {
				alert(error.message);
			} else {
				navigate(response.url);
			}
		});
	};

	return (
		<div>
			<button onClick={login}>oturum aç</button>
		</div>
	);
}

export default Login;
