import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/kasaLogo.svg";
import "./header.scss";

export default function Header() {
	return (
		<header>
			<nav>
				<img src={logo} alt="Kasa" />
				<ul>
					<li>
						{/* <NavLink to="/" activeclassname="active"> */}
						Accueil
						{/* </NavLink> */}
					</li>
					<li>
						{/* <NavLink to="/a-propos" activeclassname="active"> */}A propos
						{/* </NavLink> */}
					</li>
				</ul>
			</nav>
		</header>
	);
}
