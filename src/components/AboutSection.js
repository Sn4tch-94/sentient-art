import "./AboutSection.css"

import tencent from '../ressources/tencent.png'
import epic from '../ressources/epic.svg'
import midgard from '../ressources/midgar.svg'
import warp_frog from '../ressources/warp_frog.svg'
import poliigon from '../ressources/poliigon.svg'

function AboutSection() {
	return (
		<div className="about-container">
			<div className="about-background-title">About</div>
			<div className="about-title">About Sentient Art</div>
			<div className="about-description">
				Sentient Art is a AAA outsourcing studio specialized in Hard Surface models, 
				Vehiclees, leveraging Real Time Rendering, driven by passion for life-like 
				details and realistic modeling. The Sentient Art team has been selected with 
				the utmost care for its exceptional work. Our attention to details enables us 
				to stand out and offer high-quality standards.
			</div>
			<div className="about-client-logos">
				<img className="about-client-logo" src={tencent} alt=""  />
				<img className="about-client-logo" src={epic} alt=""  />
				<img className="about-client-logo" src={midgard} alt=""  />
				<img className="about-client-logo" src={warp_frog} alt=""  />
				<img className="about-client-logo" src={poliigon} alt=""  />
			</div>
			<div className="about-work-together">
				<div className="about-work-together-title">Let's work together</div>
				<div className="about-work-together-subtitle">Expand your production capabilities with sentient art</div>
				<button className="about-work-together-button">
					Let's work together
					<i class="fas fa-chevron-right"></i>
				</button>
			</div>
		</div>
	)
}

export default AboutSection
