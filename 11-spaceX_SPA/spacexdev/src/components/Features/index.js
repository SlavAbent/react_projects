import React from 'react';
import logo from '../../logo.svg'
import './features.css'
const Features = () => (
    <section class="features">
		<h2 class="features-title">
			Falcon 1 <br/>Overview
		</h2>
		<div class="overview">

			<table class="table">
				<caption class="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td class="table-column">HEIGHT</td>
						<td class="table-column">22.25 m / 73 ft</td>
					</tr>
					<tr>
						<td class="table-column">DIAMETER</td>
						<td class="table-column">1.68 m / 5.5 ft</td>
					</tr>
					<tr>
						<td class="table-column">MASS</td>
						<td class="table-column">30,146 kg / 66,460 lb</td>
					</tr>
					<tr>
						<td class="table-column">PAYLOAD TO LEO</td>
						<td class="table-column">450 kg / 992 lb</td>
					</tr>
				</thead>
			</table>
			<img
				src={logo}
				alt="rocket"
				class="rocket"
				data-rellax-speed="14"
			/>
			<article>
				<h3 class="features-subtitle">DESCRIPTION</h3>
				<p class="features-text">
					The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
				</p>
			</article>
		</div>
	</section>
)

export default Features;