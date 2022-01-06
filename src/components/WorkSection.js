import "./WorkSection.css"
import { useState } from "react"

import tec_9 from "../ressources/images/tec-9/tec-9_1.jpeg"
import truck from "../ressources/images/truck/truck_1.jpeg"
import jackrabbit from "../ressources/images/jackrabbit/jackrabbit_1.jpeg"
import spreader from "../ressources/images/spreader/spreader_1.jpeg"
import poliigon from "../ressources/images/poliigon/poliigon_1.jpeg"
import stone from "../ressources/images/stone/stone_1.jpeg"

const sliderImages = [
	{
		name: "Tec-9 Semi Automatic Pistol",
		image: tec_9
	},
	{
		name: "Near Future Armored Truck",
		image: truck
	},
	{
		name: "Jackrabbit Survey Drone",
		image: jackrabbit
	},
	{
		name: "Pesticide Spreader",
		image: spreader
	},
	{
		name: "Poliigon Materials",
		image: poliigon
	},
	{
		name: "Stone Variants",
		image: stone
	},
	{
		name: "Tec-9 Semi Automatic Pistol",
		image: tec_9
	},
	{
		name: "Near Future Armored Truck",
		image: truck
	}
]

function WorkSection() {
	const [sliderIndex, setSliderIndex] = useState(0)
	const [sliderPosition, setSliderPosition] = useState(30 + (sliderIndex * 30))

	const sliderClick = (side) => {
		if (side === "left" && sliderIndex > 0) {
			setSliderIndex(sliderIndex - 1)
			setSliderPosition(35 + ((sliderIndex - 1) * 30))
		} else if (side === "right" && sliderIndex <= 4) {
			setSliderIndex(sliderIndex + 1)
			setSliderPosition(35 + ((sliderIndex + 1) * 30))
		} else if (side === "left") {
			setSliderPosition(190)
			if (sliderIndex === 0)
				setSliderIndex(5)
		} else if (side === "right") {
			setSliderPosition(30)
			if (sliderIndex === 5)
				setSliderIndex(0)
		}
	}

	return (
		<div className="work-container">
			<div className="work-background-title">Work</div>
			<div className="work-title">Our work</div>
			<div className="work-description">
				From life-like modelling to genuine creation, our teams are 
				proficient at designing Vehicles, Weapons, Props and any matter 
				of Hard Surface models. As the industry is rapidly changing, we’ve 
				made the conscious choice of specializing in real time rendering 
				technologies ensuring the best quality available while offering a 
				high flexibility and rapid iteration.
			</div>
			<div className="work-slider">
				<div className="work-slider-images">
					<img className="work-slider-image" src={sliderImages[sliderIndex].image} alt=""/>
					<div className="work-slider-image-gradient"></div>
					<div className="work-slider-image-title">{sliderImages[sliderIndex].name}</div>
				</div>
				<div className="work-slider-images">
					<img className="work-slider-image" src={sliderImages[sliderIndex + 1].image} alt=""/>
					<div className="work-slider-image-gradient"></div>
					<div className="work-slider-image-title">{sliderImages[sliderIndex + 1].name}</div>
				</div>
				<div className="work-slider-images">
					<img className="work-slider-image" src={sliderImages[sliderIndex + 2].image} alt=""/>
					<div className="work-slider-image-gradient"></div>
					<div className="work-slider-image-title">{sliderImages[sliderIndex + 2].name}</div>
				</div>
			</div>
			<div className="work-slider-controller">
				<button className="work-slider-controller-button" onClick={() => sliderClick("left")}>
					<i className="fas fa-chevron-left"></i>
				</button>
				<div className="work-slider-controller-bar"></div>
				<div className="work-slider-controller-bar-status" style={{left: sliderPosition}}></div>
				<button className="work-slider-controller-button" onClick={() => sliderClick("right")}>
					<i className="fas fa-chevron-right"></i>
				</button>
			</div>
			<button className="work-see-button">
					See our work
					<i className="fas fa-chevron-right"></i>
			</button>
		</div>
	)
}

export default WorkSection
