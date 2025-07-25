import React from "react";

import LogoPng from "../../assets/images/logo_simple.png";


export default function AboutUs() {
	return (
		<section className="bg-white py-16 px-4">
			<div className="max-w-5xl mx-auto text-center">
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004a8c] mb-6">
					Sobre Nosotros
				</h2>

				<p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
					En <img src={LogoPng} alt="SERVINTEC" className="inline-block font-semibold text-[#005aab] h-[1em] mb-1"/>, creemos en el poder de la tecnología para conectar, innovar y transformar. Desde nuestros inicios, nos hemos dedicado a ofrecer soluciones integrales en redes, infraestructura y soporte tecnológico adaptadas a las necesidades de cada cliente.
				</p>

				<p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 leading-relaxed">
					Nuestro equipo está conformado por expertos apasionados que combinan experiencia técnica con un compromiso genuino por brindar un servicio cercano, confiable y eficiente.
				</p>
			</div>
		</section>
	);
}
