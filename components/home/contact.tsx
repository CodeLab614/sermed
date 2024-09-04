"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ContactData = {
  name: "SERMED",
  email: "emailsermed@mail.com",
  place:
    "Plaza IZA, C. Valle del Sol 1961-Local 2, Partido Senecú, 32469 Juárez, Chih.",
  map: "https://www.google.com/maps/place/SERMED+Consultorio+M%C3%A9dico+24+horas/@31.6942547,-106.3763022,17z/data=!3m1!4b1!4m6!3m5!1s0x86e75d26b49267eb:0x5256f9921d237296!8m2!3d31.6942502!4d-106.3737273!16s%2Fg%2F11h8jn3g9q?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D",
  phone: "+526566278671",
  website: "https://www.cermed.ro",
  imageSrc:
    "https://img.freepik.com/foto-gratis/hermosa-joven-doctora-mirando-camara-oficina_1301-7807.jpg?t=st=1725418528~exp=1725422128~hmac=93d901921d79de0c2ede73152c5f85cd87179d16cff8733ffa6b83baca1292d6&w=740",
};

export const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-screen-2xl overflow-hidden duration-500 ease-in-out">
        <div className="flex flex-col md:flex-row">
          <motion.figure
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="flex-shrink-0 w-full md:w-1/4 p-6 duration-500 ease-in-out"
          >
            <Image
              src={ContactData.imageSrc}
              alt={ContactData.name}
              width={200}
              height={200}
              className="w-full h-auto object-cover rounded-full ring-4 ring-white"
            />
          </motion.figure>
          <div className="flex-1 p-6 md:p-8">
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.75 }}
              className="text-center md:text-left mb-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                {ContactData.name}
              </h2>
            </motion.div>
            <div className="text-center md:text-left mb-6">
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.85 }}
                className="text-gray-700 text-lg"
              >
                <strong>Email:</strong>{" "}
                <Link
                  href={`mailto:${ContactData.email}`}
                  className="text-primary hover:underline"
                >
                  {ContactData.email}
                </Link>
              </motion.p>
            </div>
            <div className="text-center md:text-left mb-6">
              <motion.p
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.95 }}
                className="text-gray-700 text-lg flex items-center"
              >
                <i className="fi fi-brands-whatsapp mr-2"></i>
                <Link
                  href={`https://wa.me/${ContactData.phone}?text=!Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios!`}
                  className="text-primary hover:underline transition-transform transform hover:scale-105 duration-500 ease-in-out"
                >
                  {ContactData.phone}
                </Link>
              </motion.p>
            </div>
            <motion.div
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="text-center md:text-left mb-6"
            >
              <p className="text-gray-700 text-lg mb-4">
                <strong> Direccion:</strong> {ContactData.place}
              </p>
              <Link
                href={ContactData.map}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-lg transition-transform transform hover:scale-105 duration-500 ease-in-out"
              >
                Ver en Mapa
              </Link>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.17464085700152!2d-106.37387136754376!3d31.694192098345397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d26b49267eb%3A0x5256f9921d237296!2sSERMED%20Consultorio%20M%C3%A9dico%2024%20horas!5e0!3m2!1sen!2smx!4v1723250045580!5m2!1sen!2smx"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
