import './App.css';
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
	return (
		<div className="app-container">
			<Router>
				<div className="app-sidebar">
					<SideBar/>
				</div>
				<div className="app-body">
					<Navbar/>
					<Routes>
						<Route path="/" exact element={<Home/>}/>
						<Route path="/portfolio" element={<Portfolio/>}/>
						{/* <Route path="/portfolio/near-future-armored-truck" component={Truck}/>
						<Route path="/portfolio/jackrabbit-survey-drone" component={Jackrabbit}/>
						<Route path="/portfolio/pesticide-spreader" component={Spreader}/>
						<Route path="/portfolio/poliigon-materials" component={Poliigons}/>
						<Route path="/portfolio/stone-variants" component={Stone}/>
						<Route path="/portfolio/tec-9-semi-automatic-pistol" component={Tec9}/>
						<Route path="/portfolio/jomungandr-axe" component={Jormungandr}/> */}
						{/* <Route path="/news" component={News}/>
						<Route path="/about-us" component={About}/>
						<Route path="/recruitment" component={Recruitment}/>
						<Route path="/contact" component={Contact}/>
						<Route path="/terms" component={Terms}/> */}
					</Routes>
					<Footer/>
				</div>
			
		</Router>
		</div>
		
	);
}

export default App;
