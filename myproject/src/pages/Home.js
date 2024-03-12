import React from "react";
import { NavLink} from "react-router-dom";

import img1 from "../bilder/1.png";
import img2 from "../bilder/pussel2.png";
import img3 from "../bilder/pussel3.png";
import img4 from "../bilder/pussel4.png";
import img5 from "../bilder/pussel5.png";
import img6 from "../bilder/pussel6.png";
import img7 from "../bilder/pussel7.png";
import img8 from "../bilder/pussel8.png";

class Home extends React.Component{
	render() {
		return (
			<main>
				<div class="bakgrund">
					<p class="kategoritext">Erbjudanden</p>
					<p class="kategorilänk" ><NavLink to="Kategori" >Se Fler Erbjudande</NavLink></p>
					<NavLink to="Produktvy">
						<div class="pbakgrund">
							<div class="bild">
								<img class="img1" src={img1} alt="pussel1"/>
							</div>
							<p class="bildtext">Wasgij #04: A Day to Remember! (1000)</p>
							<p class="reapristext"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
						</div>
					</NavLink>
					
					<div class="pbakgrund">
						<div class="bild">
							<img class="img1" src={img2} alt="pussel2"/>
						</div>
						<p class="bildtext">Jan Van Haasteren: Ballroom Dancing (1000)</p>
						<p class="reapristext"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
					</div>
					<div class="pbakgrund">
						<div class="bild">
							<img class="img1" src={img3} alt="pussel3"/>
						</div>
						<p class="bildtext">Wasgij? Mystery #04: Live Entertainment! (1000)</p>
						<p class="reapristext"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
					</div>
					<div class="pbakgrund">
						<div class="bild">
							<img class="img1" src={img4} alt="pussel4"/>
						</div>
						<p class="bildtext">Jan Van Haasteren: Motorbike Race (1000)</p>
						<p class="reapristext"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
					</div>
				</div>
				<div class="bakgrund">
					<p class="kategoritext">Nya Produkter</p>
					<p class="kategorilänk"><NavLink to="Underkonstruktion">Se Fler Nya Produkter</NavLink></p>
					<div class="pbakgrund">
						<div class="bild">
							<img class="img1" src={img5} alt="pussel5"/>
						</div>
						<p class="bildtext">EuroGraphics: Military Helicopters (500)</p>
						<p class="pristext">169 kr</p>
					</div>
					<div class="pbakgrund">
						<div class="bild">
							<img class="img1" src={img6} alt="pussel6"/>
						</div>
						<p class="bildtext">Piatnik: Francois Ruyer - Christmas Jet (1000)</p>
						<p class="pristext">149 kr</p>
					</div>
					<div class="pbakgrund">
						<div class="bild">
							<img class="img1" src={img7} alt="pussel7"/>
						</div>
						<p class="bildtext">Cobble Hill: The Purrfect Bookshelf (1000)</p>
						<p class="pristext">149 kr</p>
					</div>
					<div class="pbakgrund">
						<div class="bild">
							<img class="img1" src={img8} alt="pussel8"/>
						</div>
						<p class="bildtext">Cobble Hill: Star Quilt Seasons (1000)</p>
						<p class="pristext">149 kr</p>
					</div>
				</div>
			</main>
		)
	}
}

export default Home;