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
          imageWallpaper="/images/wallpaper-testimonials.webp"
          subTitle="Testimonios"
          title="Lo que dicen nuestros clientes"
        >
          <Testimonials />
        </TitleParallax>
      </section>
      <section>
        <TitleParallax
          imageWallpaper="/images/wallpaper-home.webp"
          subTitle="Contacto"
          title="Contactanos"
        >
          <Contact />
        </TitleParallax>
      </section>
    </div>
  );
}
