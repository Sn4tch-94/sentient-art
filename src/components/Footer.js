import './Footer.css'
import React from 'react'

import artstation from '../ressources/images/socials/artstation.svg'
import twitter from '../ressources/images/socials/twitter.svg'
import facebook from '../ressources/images/socials/facebook.svg'
import instagram from '../ressources/images/socials/instagram.svg'
import email from '../ressources/images/socials/email.svg'

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-title">SENTIENT ART</div>
			<div className="footer-subtitle">Outsourcing Studio - Your Universes Made Concious</div>
			<div className="footer-icons">
				<a className="footer-icon-link" href="https://www.artstation.com/sentient-art" target="_blank" rel="noreferrer noopener">
					<img className="footer-icon-img" src={artstation} alt="" />
				</a>
				<a className="footer-icon-link" href="https://twitter.com/sentient_art" target="_blank" rel="noreferrer noopener">
					<img className="footer-icon-img" src={twitter} alt="" />
				</a>
				<a className="footer-icon-link" href="https://www.facebook.com/SentientArtStudio" target="_blank" rel="noreferrer noopener">
					<img className="footer-icon-img" src={facebook} alt="" />
				</a>
				<a className="footer-icon-link" href="https://www.instagram.com/Sentient_art_studio/" target="_blank" rel="noreferrer noopener">
					<img className="footer-icon-img" src={instagram} alt="" />
				</a>
				<a className="footer-icon-link" href="https://sentient-art.xyz/contact/">
					<img className="footer-icon-img" src={email} alt="" />
				</a>
			</div>
			<div className="footer-legals">
				Sentient Art © //
				<a className="footer-legal-link" href="https://sentient-art.xyz/contact/"> Terms of use </a>
				// Website made by
				<a className="footer-legal-link" href="https://github.com/Sn4tch-94"> Sn4tch-94</a>
			</div>
		</div>
	)
}

export default Footer
