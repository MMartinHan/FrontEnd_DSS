
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>FastBook</h3>
			<nav ref={navRef}>
				<a href="/catalogo">Catalogo</a>
				<a href="/mis_prestamos">Mis Prestamos</a>
				<a href="/">Cerrar Cesion</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;