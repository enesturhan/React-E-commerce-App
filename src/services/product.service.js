import { BaseHttpService } from './base.httpservice';

export const ProductService = {};

ProductService.getAllProducts = async () => {
	let response = await BaseHttpService.get(
		'https://services.odata.org/OData/OData.svc/Products?$expand=Categories,Supplier&$format=json'
	);

	return response;
};
