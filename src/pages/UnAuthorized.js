import React from 'react';
import { Link } from 'react-router-dom';

function UnAuthorized() {
	return (
		<div>
			Bu sayfaya giriş yetkiniz Yok
			<Link to="/"> Anasayfaya Dön</Link>
		</div>
	);
}

export default UnAuthorized;
