import './App.css';
import { BrowserRouter as Router, Routes, Route}  from 'react-router-dom'

import SideBar from './components/SideBar'
import Navbar from './components/Navbar'

function App() {
	return (
		<div className="app-container">
			<Router>
				<div className="app-sidebar">
					<SideBar/>
				</div>
				<div className="app-body">
					<Navbar/>
				</div>
			
		</Router>
		</div>
		
	);
}

export default App;
