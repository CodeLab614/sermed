import { CardTestimonial } from "@/components/ui/card-testiominal";

const testimonials = [
  {
    name: "Lorenza Garza",
    comment:
      "Un servicio 100 % profesional. Desde la enfermera, hasta los medicos, quedamos muy contentos con la atencion.☺️",
  },
  {
    name: "Alicia Moncada",
    comment: "Excelente atencion, muy atentos los medicos. Super recomendable.",
  },
  {
    name: "Allexander Vocha Alvarado",
    comment: "Excelente atención y servicio",
  },
  {
    name: "Kenton White",
    comment:
      "Mis agradecimientos al personal de SERMED ya que nos atendieron muy bien y muy profesional, me impresionó que rápidamente realizaron pruebas de laboratorio  y detectaron el problema en ese momento. Recomendable!",
  },
  {
    name: "Omar Dóñez",
    comment:
      "A nosotros nos atendieron en día festivo, pude pagar con tarjeta de crédito y a un precio razonable. A mí me pareció una excelente opción para cuando necesitas una consulta en fin de semana o a deshoras cuando otros consultorios no están abiertos.",
  },
  {
    name: "JN HÉROES DE LA REVOLUCIÓN 1297",
    comment:
      "Excelente servicio!!! La atención desde la llegada es súper amable y cálida por parte de la enfermera! El registro súper sencillo debido a que cuentan con base de datos.",
  },
];

export const Testimonials = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {testimonials.map((testimonial, index) => {
        return <CardTestimonial testimonial={testimonial} key={index} />;
      })}
    </div>
  );
};
