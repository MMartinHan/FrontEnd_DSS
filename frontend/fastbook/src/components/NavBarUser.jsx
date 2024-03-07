
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";

function NavbarUser() {
	const navRef = useRef();

	const showNavbarUser = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>FastBook</h3>
			<nav ref={navRef}>
                <a href="/main_bibliotecario">Inicio</a>
				<a href="/add_author">Agregar Autor</a>
				<a href="/add_book">Agregar Libro</a>
                <a href="/prestamos">Prestamo</a>
				<a href="/">Cerrar Cesion</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbarUser}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbarUser}>
				<FaBars />
			</button>
		</header>
	);
}

export default NavbarUser;