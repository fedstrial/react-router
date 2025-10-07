import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${id}`)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				console.error("Error fetching product:", error);
			});
	}, [id]);

	return product ? (
		<div className="text-center">
			<h1 className="fw-bold">{product?.title}</h1>
			<img
				src={product?.image}
				alt={product?.title}
				style={{ height: "400px", objectFit: "contain" }}
			/>
			<p className="mt-4">{product?.description}</p>
			<p className="fw-bold">Price: ${product?.price}</p>
		</div>
	) : (
		<p>Loading product details...</p>
	);
};

export default Product;
