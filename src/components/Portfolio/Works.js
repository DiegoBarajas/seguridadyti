import React, { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const projects = [
  {
    id: 1,
    title: "Instalación de red en oficina",
    images: [
        "https://placehold.co/600x400",
        "https://placehold.co/600x200",
        "https://placehold.co/800x400",
    ],
  },
  {
    id: 2,
    title: "Montaje de racks",
    images: [
        "https://placehold.co/800x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x200",
    ],
  },
  {
    id: 3,
    title: "CCTV para negocio",
    images: [
        "https://placehold.co/800x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x200",
    ],
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const closeModal = () => setActiveProject(null);

  return (
        <section className="bg-white py-20 px-4" id="portafolio">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004a8c] mb-10">
                Nuestro Portafolio
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
                Mira algunos de nuestros proyectos recientes en instalación de redes, soluciones tecnológicas y soporte empresarial.
                </p>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer"
                        onClick={() => setActiveProject(project)}
                    >
                    <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 w-full bg-black/60 text-white text-sm sm:text-base px-4 py-3 text-left">
                        {project.title}
                    </div>
                    </motion.div>
                ))}
                </div>
            </div>

            {/* Modal con Slider */}
            {activeProject && (
                <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
                    <div className="bg-white max-w-3xl w-full rounded-lg overflow-hidden relative">
                    
                        {/* Carrusel de imágenes */}
                        <Carousel
                            infiniteLoop
                            showThumbs={false}
                            showStatus={false}
                            className="rounded-lg"
                        >
                            {activeProject.images.map((img, i) => (
                            <div key={i}>
                                <img
                                    src={img}
                                    alt={`Slide ${i}`}
                                    className="max-h-[75vh] object-contain"
                                />
                            </div>
                            ))}
                        </Carousel>

                        {/* Título y botón inferior */}
                        <div className="p-4 text-center">
                            <div className="text-lg font-semibold text-[#005aab] mb-4">
                            {activeProject.title}
                            </div>
                            <button
                                onClick={closeModal}
                                className="bg-[#005aab] hover:bg-[#004a8c] text-white font-semibold px-6 py-2 rounded-full transition duration-300"
                            >
                            Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}
