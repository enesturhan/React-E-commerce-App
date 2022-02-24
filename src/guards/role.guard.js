import { Navigate, useLocation } from 'react-router';
import { AuthService } from '../services/auth.service';

//
export const RoleGuard = ({ children, roles }) => {
	console.log('roles', roles);

	const roleExist = AuthService.IsInRole(roles);
	let location = useLocation();

	console.log('location', location);

	if (!roleExist) {
		return <Navigate to="/unauthorized" state={{ from: location }} replace />;
	}

	return children;
};
