import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import UnAuthorized from './pages/UnAuthorized';
import { Provider } from 'react-redux';
import { mystore } from './store/mystore';
import Product from './pages/Product';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={mystore}>
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="unauthorized" element={<UnAuthorized />} />
					<Route
						path="admin"
						element={
							<AuthGuard>
								<Admin />
							</AuthGuard>
						}
					>
						<Route path="" element={<Dashboard />} />
						<Route
							path="users"
							element={
								<RoleGuard roles={['admin']}>
									<Users />
								</RoleGuard>
							}
						/>
						<Route path="users/:id" element={<UserDetail />} />
					</Route>
					<Route path="" element={<App />}>
						<Route path="" element={<Product />} />
						<Route path="home" element={<Product />} />
						<Route
							path="about"
							element={
								<AuthGuard>
									<About />
								</AuthGuard>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
