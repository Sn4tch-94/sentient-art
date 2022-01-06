import "./Portfolio.css"

import { Link } from 'react-router-dom'

import truck from "../ressources/images/truck/truck_1.jpeg"
import jackrabbit from "../ressources/images/jackrabbit/jackrabbit_1.jpeg"
import spreader from "../ressources/images/spreader/spreader_1.jpeg"
import poliigon from "../ressources/images/poliigon/poliigon_1.jpeg"
import stone from "../ressources/images/stone/stone_1.jpeg"
import tec_9 from "../ressources/images/tec-9/tec-9_1.jpeg"
import jormungandr from "../ressources/images/jormungandr/jormungandr_1.jpeg"

const projects = [
	{
		name: "Near Future Armored Truck",
		image: truck,
		path: "/portfolio/near-future-armored-truck"
	},
	{
		name: "Jackrabbit Survey Drone",
		image: jackrabbit,
		path: "/portfolio/jackrabbit-survey-drone"
	},
	{
		name: "Pesticide Spreader",
		image: spreader,
		path: "/portfolio/pesticide-spreader"
	},
	{
		name: "Poliigon Materials",
		image: poliigon,
		path: "/portfolio/poliigon-materials"
	},
	{
		name: "Stone Variants",
		image: stone,
		path: "/portfolio/stone-variants"
	},
	{
		name: "Tec-9 Semi Automatic Pistol",
		image: tec_9,
		path: "/portfolio/tec-9-semi-automatic-pistol"
	},
	{
		name: "'Jörmungandr' Axe",
		image: jormungandr,
		path: "/portfolio/jormungandr-axe"
	}
]

function Portfolio() {
	return (
		<div className="portfolio">
			<div className="portfolio-container">
				<div className="portfolio-title">PORTFOLIO</div>
				<div className="portfolio-subtitle">- By Sentient Art</div>
				<div className="portfolio-projects">
					{
						projects.map((item, index) => (
							<Link to={item.path} className="portfolio-project" key={index}>
								<img className="portfolio-project-image" src={item.image} alt=""/>
								<div className="portfolio-project-gradient"></div>
								<div className="portfolio-project-title">{item.name}</div>
							</Link>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default Portfolio
