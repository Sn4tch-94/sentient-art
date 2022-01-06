import './App.css';
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

import SideBar from './components/SideBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import News from './pages/News';
// import AboutUs from './pages/AboutUs';
import Recruitment from './pages/Recruitment';

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
						{/* <Route path="/portfolio/near-future-armored-truck" element={<Truck/>}/>
						<Route path="/portfolio/jackrabbit-survey-drone" element={<Jackrabbit/>}/>
						<Route path="/portfolio/pesticide-spreader" element={<Spreader/>}/>
						<Route path="/portfolio/poliigon-materials" element={<Poliigons/>}/>
						<Route path="/portfolio/stone-variants" element={<Stone/>}/>
						<Route path="/portfolio/tec-9-semi-automatic-pistol" element={<Tec9/>}/>
						<Route path="/portfolio/jomungandr-axe" element={<Jormungandr/>}/> */}
						<Route path="/news" element={<News/>}/>
						{/* <Route path="/about-us" element={<News/>}/> */}
						<Route path="/recruitment" element={<Recruitment/>}/>
						{/* <Route path="/contact" element={<Contact/>}/> */}
						{/* <Route path="/terms" element={<Terms/>}/> */}
					</Routes>
					<Footer/>
				</div>
			
		</Router>
		</div>
		
	);
}

export default App;
