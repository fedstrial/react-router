import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
	return (
		<>
			<header className="pt-5">
				<nav className="d-flex gap-5 justify-content-center">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/products">Products</Link>
				</nav>
			</header>

			<main className="container my-5" id="main-content">
				<Outlet />
			</main>
		</>
	);
};

export default DefaultLayout;
