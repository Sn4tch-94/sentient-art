import "./ProductionSection.css"

function ProductionSection() {
	return (
		<div className="production-container">
			<div className="services">
				<div className="services-title">Our Services</div>
				<div className="services-body">
					We provide digital art creations, digital content solutions and 
					technical tools for the video game industry and real time projects. 
					Each project is unique and we cater specifically to the demand at hand, 
					to provide a production process and guarantee customer care and offer 
					a high-end product!
				</div>
				<div className="services-about">
					<i className="fas fa-plus"></i>
					About our production
				</div>
			</div>
			<div className="team">
				<div className="team-title">Our Team</div>
				<div className="team-body">
					Our projects are managed in teams, in which each artist brings his their 
					singular view to the collective end-product. Our team currently consists 
					of 15 veterans and keeps growing: join us, become a member of an amazing 
					crew and embark on a fulfilling adventure.
				</div>
				<div className="team-about">
					<i className="fas fa-plus"></i>
					About our team
				</div>
			</div>
		</div>
	)
}

export default ProductionSection
