
import { useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import UserContext from "./context";

function Navbar() {
	const {user} = useContext(UserContext);
	console.log('Usuario:', user);
	console.log('Nombre:', user.name);
	console.log('ID:', user.id);
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
				<div>{user ? `Bienvenido, ${user.name}` : 'No has iniciado sesión'}</div>
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