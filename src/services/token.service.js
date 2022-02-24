import jwt_decode from 'jwt-decode';

// https://www.learmoreseekmore.com/2021/07/intro-on-odata-v8-in-dotnet5-api.html?m=1

// https://services.odata.org/OData/OData.svc/Products?$expand=Categories,Supplier&$format=json

export const TokenService = {};

TokenService.DecodeAccessToken = (accessToken) => {
	return jwt_decode(accessToken);
};

TokenService.setToken = ({ accessToken, refreshToken }) => {
	console.log('accessToken', accessToken);

	const decoded = TokenService.DecodeAccessToken(accessToken);
	localStorage.setItem('username', decoded.username);
	localStorage.setItem('access_token', accessToken);
	localStorage.setItem('refresh_token', refreshToken);
};

TokenService.clearToken = () => {
	localStorage.removeItem('username');
	localStorage.removeItem('access_token');
	localStorage.removeItem('refresh_token');
};
