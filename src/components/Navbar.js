import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../ressources/images/logo.svg'

function Navbar() {
	return (
		<div className="navbar-container">
			<ul className="navbar-block">
				<li className="navbar-item">
					<Link to="/" className="navbar-link">Home</Link>
				</li>
				<li className="navbar-item">
					<Link to="/portfolio" className="navbar-link">Portfolio</Link>
				</li>
				<li className="navbar-item">
					<Link to="/news" className="navbar-link">News</Link>
				</li>
			</ul>
			<div className="navbar-icon-container">
				<Link to="/" className="navbar-icon-link">
					<img className="navbar-icon" src={Logo} alt=''/>
				</Link>
			</div>
			<ul className="navbar-block">
				<li className="navbar-item">
					<Link to="/about-us" className="navbar-link">About Us</Link>
				</li>
				<li className="navbar-item">
					<Link to="/recruitment" className="navbar-link">Recruitment</Link>
				</li>
				<li className="navbar-item">
					<Link to="/contact" className="navbar-link">Contact</Link>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
