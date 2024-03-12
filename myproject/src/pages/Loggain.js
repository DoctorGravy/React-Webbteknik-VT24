import React from "react";
import { NavLink} from "react-router-dom";


import imgf from "../bilder/facebook.png";

class Loggain extends React.Component{
	render() {
		return (
			<main>
					<div id="loggainbox">
						<p id="loggain2">Logga In</p>
						<p id="loggaintext">Fortsätt till<br/> Pusselbutiken</p>
						<form>
							<p class="formtext">Epost:</p>
							<input type="email" class="loggainruta" name="användarn" onfocus="focuss(this)" onblur="blurr(this)"/>
							<p class="formtext">Lösenord:</p>
							<input type="password" class="loggainruta" name="lösen" onfocus="focuss(this)" onblur="blurr(this)"/><br/>
							<button type="submit" id="knapp">Logga In</button>
							<input id="komi" type="checkbox" name="komi" checked/>
								<label id="komih" for="komi">Fortsätt vara inloggad</label>
						</form>
					<NavLink to="https://www.facebook.com/pusselbutiken/?ref=embed_page" target="_blank" rel="noreferrer"><img src={imgf} id="fb" alt="face"/></NavLink>
					</div>
			</main>
		)
	}
}

export default Loggain