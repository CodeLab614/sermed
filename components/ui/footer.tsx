import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} SERMED.</p>
        <ul className="flex justify-center gap-4 mt-4">
          <li>
            <Link href="https://www.facebook.com/sermed247/" target="_blank">
              <i className="fi fi-brands-facebook text-2xl"></i>
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/+526566278671?text=!Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios!"
              target="_blank"
            >
              <i className="fi fi-brands-whatsapp text-2xl"></i>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
