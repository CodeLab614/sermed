import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/home/contact";
import { SmoothScrollHero } from "@/components/home/hero";
import { TitleParallax } from "@/components/ui/title-parallax";
import { ListServices } from "@/components/ui/list-services";

export default function Home() {
  return (
    <div>
      <section>
        <SmoothScrollHero />
      </section>
      <section>
        <ListServices />
      </section>
      <section>
        <TitleParallax
          imageWallpaper="https://img.freepik.com/foto-gratis/collage-concepto-experiencia-cliente_23-2149367138.jpg?t=st=1726843346~exp=1726846946~hmac=d9d58010222afe7fbcf10ab8aa74c1bb1cdd08f39cfe0480dc0c09e1be5c340f&w=1380"
          subTitle="Testimonios"
          title="Lo que dicen nuestros clientes"
        >
          <Testimonials />
        </TitleParallax>
      </section>
      <section>
        <TitleParallax
          imageWallpaper="https://img.freepik.com/foto-gratis/estetoscopio-sobre-carpeta_23-2147652325.jpg?t=st=1726843193~exp=1726846793~hmac=ff592d85e81c1168f1e4acc91e98ef35a91875405abe0c1d2c4a8099b744008d&w=1380"
          subTitle="Contacto"
          title="Contactanos"
        >
          <Contact />
        </TitleParallax>
      </section>
    </div>
  );
}
