import Navbar from "../components/Navbar";
import Hero from "../components/Index/Hero";
import AboutUs from "../components/Index/AboutUs";
import Services from "../components/Index/Services";
import Benefits from "../components/Index/Benefits";
import Footer from "../components/Footer";


export default function App() {
	window.scrollTo({ top: 0, behavior: 'smooth' });

  	return (
		<>
			<title>SERVINTEC | Inicio</title>
			
			<Navbar />
			<Hero />
			<AboutUs />
			<Services />
			<Benefits />
			<Footer />
		</>
  	);
}
