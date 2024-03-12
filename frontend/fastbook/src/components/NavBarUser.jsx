
import { useRef, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/Navbar.css";
import UserContext from "./context";

function NavbarUser() {
	const {user} = useContext(UserContext);
	console.log('Usuario:', user);
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
							<div>{user ? `Bienvenido, ${user.name}` : null }</div>
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