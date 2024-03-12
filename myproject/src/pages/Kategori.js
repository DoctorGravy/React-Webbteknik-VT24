import React from "react";
import { NavLink} from "react-router-dom";

import img1 from "../bilder/1.png";
import img2 from "../bilder/pussel2.png";
import img3 from "../bilder/pussel3.png";
import img4 from "../bilder/pussel4.png";
import img5 from "../bilder/pussel5.png";
import img6 from "../bilder/pussel6.png";
import img9 from "../bilder/pussel9.png";
import img10 from "../bilder/pussel10.png";
import img11 from "../bilder/pussel11.png";
import img12 from "../bilder/pussel12.png";

class Kategori extends React.Component{
	render() {
		return (
			<div id="bakgrund2">
				<NavLink to="/Produktvy">
					<div class="pbakgrund2">
						<div class="bild2">
							<img class="img2" src={img1} alt="pussel1"/>
						</div>
						<p class="bildtext2">Wasgij #04: A Day to Remember! (1000)</p>
						<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
					</div>
				</NavLink>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img2} alt="pussel2"/>
					</div>
					<p class="bildtext2">Jan Van Haasteren: Ballroom Dancing (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img3} alt="pussel3"/>
					</div>
					<p class="bildtext2">Wasgij? Mystery #04: Live Entertainment! (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img4} alt="pussel4"/>
					</div>
					<p class="bildtext2">Jan Van Haasteren: Motorbike Race (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img3} alt="pussel13"/>
					</div>
					<p class="bildtext2">Heye: Marino Degano - Cats Life (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img4} alt="pussel14"/>
					</div>
					<p class="bildtext2">Trefl: View of Cappadocia (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>119 kr</span>(149 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img5} alt="pussel15"/>
					</div>
					<p class="bildtext2">Trefl: Neon Color Line - Far out Dogs (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>99 kr</span>(149 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img6} alt="pussel16"/>
					</div>
					<p class="bildtext2">Peliko: Tjäder (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>119 kr</span>(149 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img9} alt="pussel9"/>
					</div>
					<p class="bildtext2">Wasgij? Mystery #08: The Final Hurdle! (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img10} alt="pussel9"/>
					</div>
					<p class="bildtext2">Wasgij? Destiny #04: The Wasgij Games! (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img11} alt="pussel11"/>
					</div>
					<p class="bildtext2">Wasgij? Mystery #19: Bingo Blunder! (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
				<div class="pbakgrund2">
					<div class="bild2">
						<img class="img2" src={img12} alt="pussel12"/>
					</div>
					<p class="bildtext2">Jan Van Haasteren: Pool Pile-Up (1000)</p>
					<p class="reapristext2"><span style={{color:'red'}}>149 kr</span>(169 kr)</p>
				</div>
			</div>
		)
	}
}

export default Kategori