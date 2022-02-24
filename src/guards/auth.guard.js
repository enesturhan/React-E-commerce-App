import { Navigate, useLocation } from 'react-router';
import { AuthService } from '../services/auth.service';

//
export const AuthGuard = ({ children }) => {
	const isAuthenticated = AuthService.isAuthenticated();
	let location = useLocation();

	console.log('location', location);

	if (!isAuthenticated) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};
