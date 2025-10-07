import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = () => {
		axios
			.get("https://fakestoreapi.com/products")
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="text-center">
			<h1 className="fw-bold">Our Products</h1>

			<div className="d-flex flex-wrap gap-4 justify-content-center mt-5">
				{products ? (
					products.map((product) => (
						<div
							className="card"
							style={{ width: "18rem" }}
							key={product.id}
						>
							<img
								className="card-img-top"
								src={product.image}
								alt="Card image cap"
								style={{
									height: "400px",
									objectFit: "contain",
								}}
							/>
							<div className="card-body">
								<h5 className="card-title">{product.title}</h5>
								<p className="card-text">
									{product.description}
								</p>
								<Link to={`${product.id}`} className="btn btn-primary">
									Product Page
								</Link>
							</div>
						</div>
					))
				) : (
					<p>Loading products...</p>
				)}
			</div>
		</div>
	);
};

export default Products;
