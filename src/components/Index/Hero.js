import React from "react";

import LogoPng from "../../assets/images/logo_simple.png";
import NetworkPng from "../../assets/images/network.jpg";

import '../styles/Hero.css'
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<div className="relative min-h-[calc(100vh-56px)] bg-cover bg-center" style={{ backgroundImage: `url('${NetworkPng}')` }}>
			<div className="absolute inset-0 bg-black/60"></div>

			<div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 max-w-3xl mx-auto">
				<img
					src={LogoPng}
					alt="SERVINTEC Logo"
					className="w-40 md:w-64 mb-6 mt-20 hero-logo"
				/>

				<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
					Transformamos tu mundo con tecnología
				</h1>

				<p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 mb-8">
					Soluciones integrales en tecnología y redes
				</p>

				<Link to='/contact'>
					<button className="bg-[#005aab] hover:bg-[#004a8c] text-white font-semibold px-8 py-3 rounded-full transition duration-300 mb-10">
						Contáctanos
					</button>
				</Link>
			</div>
		</div>
	);
}
