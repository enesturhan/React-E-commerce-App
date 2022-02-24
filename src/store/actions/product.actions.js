import { ProductService } from '../../services/product.service';

export const fetchProduct = () => async (dispatch) => {
	let response = await ProductService.getAllProducts();

	console.log('response', response);

	dispatch({ type: 'getProducts', payload: response.data.value });
};
