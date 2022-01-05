import "./HeroSection.css"

import hero_1 from '../ressources/hero_1.jpeg'
import hero_2 from '../ressources/hero_2.jpeg'
import hero_3 from '../ressources/hero_3.jpeg'
import hero_4 from '../ressources/hero_4.jpeg'

function HeroSection() {
	return (
		<div className="hero-container">
			<div className="hero-images">
				<img className="hero-image" src={hero_3} alt=""/>
				<div className="hero-image-gradient"></div>
			</div>
			<div className="hero-content">
				<div className="hero-content-title">SENTIENT ART</div>
				<div className="hero-content-subtitle-1">Your Universes made Concious</div>
				<div className="hero-content-subtitle-2">Premium Outsourcing Studio</div>
				<button className="hero-content-button">
					See our work
					<i class="fas fa-chevron-right"></i>	
				</button>
			</div>
			<div className="hero-scroll">
				<button className="hero-scroll-button" onClick={() => window.scrollTo({top: 600})}>SCROLL</button>
				<div className="hero-scroll-line"></div>
			</div>
		</div>
	)
}

export default HeroSection
