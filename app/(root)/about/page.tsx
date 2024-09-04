import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { TitlePage } from "@/components/ui/title-page";

const AboutPage = () => {
  const data = [
    {
      title: "Sobre nosotros",
      content: (
        <div>
          <p className="mb-8">
            Somos una empresa 100% Juarense creada con el propósito de brindar
            atención médica de calidad y de manera oportuna a nuestra comunidad
            ofreciendo un trato cálido y humano a todos nuestros pacientes.
          </p>
        </div>
      ),
    },
    {
      title: "Área de servicio",
      content: (
        <div>
          <p className="mb-8">
            En SERMED ofrecemos el servicio de médicos a domicilio, ideal para
            personas que no puedas por algún motivo trasladarse en ese momento a
            recibir atención médica, les sea físicamente imposible salir de su
            domicilio o simplemente prefieren ser atendidos en la comodidad de
            su hogar.
          </p>
        </div>
      ),
    },
    {
      title: "Instalaciones",
      content: (
        <div>
          <video className="w-full" controls>
            <source
              src="https://res.cloudinary.com/jotredev/video/upload/v1725422207/SERMED/videos/instalaciones_cwspfc.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      ),
    },
  ];
  return (
    <>
      <TitlePage title={["N", "O", "S", "O", "T", "R", "O", "S"]} />
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </>
  );
};

export default AboutPage;
