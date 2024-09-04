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
          imageWallpaper="https://res.cloudinary.com/jotredev/image/upload/v1725423235/SERMED/wallpaper-testimonials_jn1u2u.webp"
          subTitle="Testimonios"
          title="Lo que dicen nuestros clientes"
        >
          <Testimonials />
        </TitleParallax>
      </section>
      <section>
        <TitleParallax
          imageWallpaper="https://res.cloudinary.com/jotredev/image/upload/v1725423093/SERMED/wallpaper-home_evo5yk.webp"
          subTitle="Contacto"
          title="Contactanos"
        >
          <Contact />
        </TitleParallax>
      </section>
    </div>
  );
}
