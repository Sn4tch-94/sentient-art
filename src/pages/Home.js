import "./Home.css"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import WorkSection from "../components/WorkSection"

export default function Home() {
	return (
		<div className="home">
			<HeroSection/>
			<AboutSection/>
			<WorkSection/>
		</div>
	)
}
