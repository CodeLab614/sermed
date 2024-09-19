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
          imageWallpaper="https://img.freepik.com/foto-gratis/estetoscopio-sobre-carpeta_23-2147652325.jpg?t=st=1726755862~exp=1726759462~hmac=3dd23cc6d0c1d6cf726d92635e0d35a24a8c75db4820d7d23c4e5239570b61a6&w=1380"
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
