import { TitlePage } from "@/components/ui/title-page";
import ContactUs from "./_components/contact-us";
import { Contact } from "@/components/home/contact";

const AboutPage = () => {
  return (
    <>
      <TitlePage title={["C", "O", "N", "T", "A", "C", "T", "O"]} />

      <section>
        <ContactUs />
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
};

export default AboutPage;
