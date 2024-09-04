"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { ActionSendEmail } from "@/actions/contact";

export const ContactUs = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await ActionSendEmail({ name, email, message });
      toast.success("Mensaje enviado correctamente");
    } catch (error) {
      console.log(error);
      toast.error("Ocurrió un error al enviar el mensaje");
    } finally {
      setName("");
      setEmail("");
      setMessage("");
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-light-medical-blue py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="w-full h-full lg:w-1/2 p-4"
          >
            <div className="rounded-lg overflow-hidden">
              <Image
                src="https://res.cloudinary.com/jotredev/image/upload/v1725418342/SERMED/disturbing_apayoq.jpg"
                alt="SERMED"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Formulario de Contacto
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isLoading}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="Correo Electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Mensaje
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Escribe tu mensaje..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isLoading}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors"
                  disabled={isLoading}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
