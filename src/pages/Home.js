import "./Home.css"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"

export default function Home() {
	return (
		<div className="home">
			<HeroSection/>
			<AboutSection/>
		</div>
	)
}
