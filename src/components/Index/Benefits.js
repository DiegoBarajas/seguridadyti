import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
    "Más de 10 años de experiencia en tecnología y redes",
    "Soporte técnico rápido y personalizado",
    "Soluciones escalables y a la medida",
    "Atención humana, cercana y profesional",
    "Seguridad y confidencialidad garantizadas",
    "Asistencia remota y presencial en todo momento",
];

export default function Benefits() {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004a8c] mb-10">
                ¿Por qué elegirnos?
                </h2>

                <motion.ul
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-3xl mx-auto"
                >
                {
                    benefits.map((item, index) => (
                        <motion.li
                            key={index}
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="w-7 h-7 flex items-center justify-center mt-1">
                                <CheckCircle className="text-[#005aab] w-6 h-6" />
                            </div>
                            <span className="text-lg text-gray-700">{item}</span>
                        </motion.li>
                    ))
                }
                </motion.ul>
            </div>
        </section>
    );
}
