import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="bg-[#f8fafc] py-16 sm:py-20 px-4" id="contacto">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004a8c] mb-6 sm:mb-10">
                    Contáctanos
                </h2>

                <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12">
                    ¿Tienes un proyecto en mente? Escríbenos y nos pondremos en contacto contigo lo antes posible.
                </p>

                <motion.form
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-md grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
                >
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005aab]"
                            placeholder="Tu nombre"
                        />
                    </div>

                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005aab]"
                            placeholder="ejemplo@correo.com"
                        />
                    </div>

                    <div className="col-span-1 sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                        <textarea
                            rows="5"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005aab]"
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <div className="col-span-1 sm:col-span-2 text-center">
                        <button
                            type="submit"
                            className="bg-[#005aab] hover:bg-[#004a8c] text-white font-semibold px-8 py-3 rounded-full transition duration-300 w-full sm:w-auto"
                        >Enviar mensaje</button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
