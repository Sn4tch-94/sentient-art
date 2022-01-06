import "./ServiceSection.css"

function ServicesSection() {
	return (
		<div className="service-container">
			<div className="service-title">
				<div className="service-title-background">Services</div>
				<div className="service-title-text">Let's work together</div>
			</div>
			<div className="service-body">
				We have an acute knowledge of the industry, accustomed to dealing with 
				productions and to deliver on due date. We strive to take up our customers’ 
				challenges. Satisfying our customers reveals our high-quality services and 
				passion. <strong>Each project is a challenge, and we are ready to take up yours.</strong>
			</div>
			<div className="service-list">
				<div className="service-list-left">
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Vehicle Design and Creation;
					</div>
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Props;
					</div>
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Weapons;
					</div>
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Optimization for real time engines;
					</div>
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Management and oversight of production;
					</div>
				</div>
				<div className="service-list-right">
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Environments;
					</div>
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Specific and technical objects;
					</div>
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Specific and technical buildings;
					</div>
					<div className="service-list-item">
						<i class="fas fa-check"></i>
						Integrating objects and environments in game engine;
					</div>
				</div>
			</div>
			<button className="service-button">
				Get in touch
				<i className="fas fa-chevron-right"></i>
			</button>
		</div>
	)
}

export default ServicesSection
