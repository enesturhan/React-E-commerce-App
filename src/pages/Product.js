import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	Card,
	Button,
	Container,
	CardGroup,
	Row,
	Col,
	Badge,
} from 'react-bootstrap';
import { addToCart } from '../store/actions/cart.actions';

function Product() {
	const products = useSelector((store) => store.productState.products);
	console.log('products', products);

	const dispatch = useDispatch();

	const onAddToCard = (item) => {
		const cartItem = {
			quantity: 1,
			productId: item.ID,
			name: item.Name,
			price: item.Price,
		};

		dispatch(addToCart(cartItem));
	};

	return (
		<Container
			style={{
				display: 'flex',
				padding: '20px',
				flexWrap: 'wrap',
				justifyContent: 'flex-start',
			}}
		>
			{products.map((item, index) => {
				return (
					<Card
						key={index}
						style={{ width: '18rem', marginBottom: '2rem', marginLeft: '2rem' }}
					>
						<Card.Img height={'200'} variant="top" src="/images/bottle.jpg" />
						<Card.Body>
							<Card.Title>
								{item.Categories.map((x) => `${x.Name} `)}
							</Card.Title>
							<Card.Text>
								{item.Name}
								{/* <Badge>2</Badge> */}
								<div className="text-danger">{item.Price} TL</div>
							</Card.Text>
							<Button onClick={() => onAddToCard(item)} variant="primary">
								Sepete Ekle
							</Button>
						</Card.Body>
					</Card>
				);
			})}
		</Container>
	);
}

export default Product;
