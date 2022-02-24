import React from 'react';
import { useParams } from 'react-router';

function UserDetail() {
	const params = useParams();

	console.log('params', params.id);

	return <div>UserDetail</div>;
}

export default UserDetail;
