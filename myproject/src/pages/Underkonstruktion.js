import React from "react";

import vid1 from "../video/rickroll.mp4";

class Underkonstruktion extends React.Component{
	render() {
		return (
			<main>
				<div id="bakgrund3">
					<h1 id="konstruktion">Denna sida är under konstruktion!</h1>
					<div id="konstruktionruta">
						<video controls>
							<source src={vid1} type="video/mp4"/>
						Your browser does not support the video tag.
						</video>
						<div id="listlist">	
							<p style={{marginLeft:'1vw'}}>Pusseligredienser</p >
							<ol type="1">
								<li>Papper</li>
								<li>Lim</li>
								<li>Kartong</li>
							</ol>
						</div>
						<div>
							<table>
								<tr>
									<th>Tillvärkare</th>
									<th>Pris</th>
									<th>Rea</th>
								</tr>
								<tr>
									<td>Wasgij</td>
									<td>149kr</td>
									<td>Ja</td>
								</tr>
									<tr>
									<td>Jan Van Haasteren</td>
									<td>149kr</td>
									<td>Ja</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Underkonstruktion