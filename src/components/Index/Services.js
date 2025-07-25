import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Wifi, Settings } from "lucide-react";

const services = [
    {
        icon: <Cpu className="w-10 h-10 text-[#005aab]" />,
        title: "Infraestructura de TI",
        description: "Diseño e implementación de redes seguras y escalables para tu empresa.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-[#005aab]" />,
        title: "Ciberseguridad",
        description: "Protegemos tus datos con soluciones robustas y monitoreo constante.",
    },
    {
        icon: <Wifi className="w-10 h-10 text-[#005aab]" />,
        title: "Redes Inalámbricas",
        description: "Cobertura Wi-Fi profesional para oficinas, almacenes y espacios públicos.",
    },
    {
        icon: <Settings className="w-10 h-10 text-[#005aab]" />,
        title: "Soporte Técnico",
        description: "Mantenimiento preventivo y correctivo con atención personalizada.",
    },
];

export default function Services() {
    return (
        <section className="bg-gray-50 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-[#004a8c]">
                Nuestras Soluciones
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                    >
                        <div className="mb-4 flex justify-center">{service.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-base">{service.description}</p>
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
    );
}
