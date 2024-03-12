import React from "react";
import { NavLink} from "react-router-dom";

import cart from "../bilder/Cart.png";
import Vector from "../bilder/Vector.png";

class Header extends React.Component {
	render() {
		return (
			<header>
				<div id="title">
					<h1 id="logotext"><NavLink to="/"><span style={{color:'#0030AD'}}>Pussel</span>butiken.se</NavLink></h1> 
					<input id="search" type="text" placeholder="Sök bland våra pussel.." />
					<img src={Vector} id="rolf" alt="logg in dude"/>
					<h1 id="loggain"><NavLink to="Loggain"><span style={{color: '#757575'}}>Logga In</span></NavLink></h1>
					<h1 id="registrera">Skapa Konto</h1>
					<NavLink to="Kundvagn"><img src={cart} id="cart" alt="vagn"/></NavLink>
				</div>
				<nav>
					<p class="kat">Antal Bitar</p>
					<p class="kat">Tillverkare</p>
					<p class="kat">Motiv</p>
					<p class="kat">Eget Motiv</p>
					<p class="kat">Fler Pussel Typer</p>
					<div class="dropdown" >
						<button class="dropknapp">Övrigt</button>
						<div class="dropdown-innehåll">
							<NavLink to="Kategori">Erbjudanden</NavLink>
							<NavLink to="Underkonstruktion">Nya Produkter</NavLink>
						</div>
					</div> 
				</nav>
			</header>
		)
	}
}

export default Header;