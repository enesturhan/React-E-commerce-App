import './App.css';

import Layout from '../components/Layout';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../store/actions/product.actions';

function App() {
	// react-redux tarafında artık useDispatch ve useSelector hooklarını kullanıyor. Bir action çalıştırmak için useDispatch, state deki veriyi okumak için ise useSelector kullanıyoruz.
	// mapStatetoProps mapDispacthToProps kavramları yerini bu hooklar aldık. connect ile componente bağlanmada ortadan kalktı
	const dispatch = useDispatch();

	useEffect(() => {
		// app.js ilk açıldığında git products state güncelle.
		dispatch(fetchProduct());
	}, []);

	return (
		<div className="App">
			{/*  */}
			<Layout>
				<Outlet />
				{/* renderbody */}
			</Layout>
		</div>
	);
}

export default App;
