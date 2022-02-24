import axios from 'axios';

export const BaseHttpService = {};

BaseHttpService.get = async (url) => {
	try {
		let _headers = { ContentType: 'application/json' };
		// headerdan giden değer.

		const token = localStorage.getItem('access_token');

		if (token != undefined) {
			_headers = { ..._headers, Authorization: `Bearer ${token}` };
		}

		let response = await axios.get(url, _headers);
		return response;
	} catch (error) {
		console.log('Base Http Client Error', error);
	}
};

BaseHttpService.post = async (url, param) => {
	// header default
	let _headers = { ContentType: 'application/json' };
	// headerdan giden değer.

	const token = localStorage.getItem('access_token');

	if (token != undefined) {
		_headers = { ..._headers, Authorization: `Bearer ${token}` };
	}

	console.log('headers', _headers);

	try {
		let response = await axios.post(url, param, {
			headers: _headers,
		});

		return response;
	} catch (error) {
		console.log('Http Post Error', error);
	}
};
