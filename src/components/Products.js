import React from 'react';
import product from '../data/product.json';

class Products extends React.Component {
	render() {
		const products = product;
		return (
			<ul>
				{products.map(function (product, index) {
					const { id, product_name, product_image, description, price } = product;
					return <li key={id}>{product_name}<br /><img src={`${product_image}`} alt={`${description}`} /><br />{price}</li>;
				})}
			</ul>
		)
	}

}

export default Products;
