import React from "react";

import img1 from "../bilder/1.png";
import img2 from "../bilder/2.png";
import img3 from "../bilder/3.png";
import img4 from "../bilder/4.png";

class Produktvy extends React.Component{
	render() {
		return (
			<main>
				<div id="produktbox">
					<h1 id="pusseltitel">Wasgij #04: A Day to Remember! (1000)</h1>
					<div id="produktbild">	
							<img id="produktimg" src={img1} alt="pussel1"/>
					</div>
					<div class="extrabild">
						<img class="extra" src={img2} alt="extra1"/>
					</div>
					<div class="extrabild">
						<img class="extra" src={img3} alt="extra2"/>
					</div>
					<div class="extrabild">
						<img class="extra" src={img4} alt="extra3"/>
					</div>
					<div id="köpsaker">
						<div id="köpruta">
							<h2 class="ktext">Köp</h2>
						</div>
						<div id="prisruta">
							<h2 class="ktext"><span style={{color:'red'}}>149 kr </span>(169 kr)</h2>
						</div>
						<div id="pinfo">
							<p id="ptext">I Jumbos Wasgij serie pusslar du inte det motiv du ser på bilden,
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
					</div>
				</div>
			</main>
		)
	}
}

export default Produktvy