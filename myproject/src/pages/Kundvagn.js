import React from "react";

import img1 from "../bilder/1.png";
import img10 from "../bilder/pussel10.png";

class Kundvagn extends React.Component{
	render() {
		return (
			<main>
				<div id="kundruta">
					<h2 id="kundtext">Kundvagn</h2>
				</div>
				<div class="vagnruta">
					<div class="bild3">
						<img class="img3" src={img1} alt="pussel1"/>
						<h2 class="titeltxt">Wasgij #04: A Day to Remember! (1000)</h2>
						<p class="beskrivningtxt">I Jumbos Wasgij serie pusslar du inte det motiv du ser på bilden,
						utan det människorna på bilden ser! Ett extra roligt pussel för
						dig som gillar pusselutmaningar. Bröllopsceremonin är nästan avslutad
						och fotografen vill fånga det lyckliga parets glädje med alla sina
						nära och kära omkring sig. När fotografen räknar ner "3...2..."
						blir brudgummen chockad över att se något bakom linsen, något
						som är på väg att förstöra detta magiska ögonblick! Föreställ
						dig att du är brudgummen, vars käke har sjunkit under midjan,
						vad kan vara på väg att förstöra hans dag?
						</p>
					</div>
					<div class="antalruta">
						<h3 class="kundtext2"> - 1 +</h3>
					</div>
					<div class="prisruta2">
						<h3 class="prisrutatext"><span style={{color:'red'}}>149 kr </span>(169 kr)</h3>
					</div>
				</div>
				<div class="vagnruta">
					<div class="bild3">
						<img class="img3" src={img10} alt="pussel1"/>
						<h2 class="titeltxt">Wasgij? Destiny #04: The Wasgij Games! (1000)</h2>
						<p class="beskrivningtxt">Wasgij serien Destiny pusslar du inte det motiv
						du ser på bilden av pusselasken, istället lägger du motivet i en annan
						tidsepok! Ett extra roligt pussel för dig som gillar pusselutmaningar.
						Colosseum är slutsålt och fans från hela världen har samlats för att
						bevittna sporthistoria, när idrottare tävlar om att vinna guld i Wasgij-spelen.
						Men hur annorlunda skulle Wasgij-spelen se ut idag? Kommer det fortfarande att
						vara blod, svett och tårar som symboliserar dessa spel? Eller kommer den
						moderna eran att vara mer lättsam? Pussla och ta dig in i framtiden!
						</p>
					</div>
					<div class="antalruta">
						<h3 class="kundtext2"> - 1 +</h3>
					</div>
					<div class="prisruta2">
						<h3 class="prisrutatext"><span style={{color:'red'}}>149 kr </span>(169 kr)</h3>
					</div>
				</div>
				<div id="summa">		
					<div class="summaruta">
						<h2 class="summatext">Pris: 298kr</h2>
					</div>
					<div class="summaruta">
						<h2 class="summatext">Pris utan moms: 223.5kr</h2>
					</div>
					<form>
						<div id="fraktruta">
							<input id="frakt1" type="radio" checked name="fraktSvar"/>
								<label class="fraktbeskrivning" for="frakt1">Postnord: 49kr</label><br/>
							<input id="frakt2" type="radio" name="fraktSvar"/>
								<label class="fraktbeskrivning" for="frakt2">DHL 59kr</label><br/>
							<input id="frakt3" type="radio" name="fraktSvar"/>
								<label class="fraktbeskrivning" for="frakt3">Hemleverans: 175kr</label>
						</div>
						<button type="submit" id="köp">Betala</button>
					</form>
				</div>
			</main>
		)
	}
}

export default Kundvagn