import { faqs } from "@/assets/data";

import { Faq } from "@/components/ui/faq";
import { TitlePage } from "@/components/ui/title-page";

const FaqPage = () => {
  return (
    <div>
      <TitlePage title={["F", "A", "Q"]} />
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="text-4xl font-medium text-center mb-2">
            Preguntas frecuentes
          </h2>
          <p className="text-gray-500 text-center">
            Estas son las preguntas más frecuentas sobre SERMED. Si no
            encuentras lo que buscas te dejmos los datos de contacto en nuestr
            página de CONTACTO.
          </p>
        </div>
        <ul className="space-y-1">
          {faqs.map((faq) => (
            <li key={faq.id}>
              <Faq question={faq.question} answer={faq.answer} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FaqPage;
