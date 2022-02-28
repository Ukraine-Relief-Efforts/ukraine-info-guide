import Link from "next/link";
import FooterHeader from "./FooterHeader";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="text-center lg:text-left text-gray-600">
      <div className="max-w-6xl mx-auto">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div>
              <FooterHeader>Useful links</FooterHeader>
              <FooterLink href="/border-information">Border Info</FooterLink>
              <FooterLink href="/#">Host a refugee</FooterLink>
            </div>
            <div>
              <FooterHeader>Contacts</FooterHeader>
              <FooterLink href="/#">Twitter</FooterLink>
              <FooterLink href="/#">Facebook</FooterLink>
              <FooterLink href="/#">Telegram</FooterLink>
              <FooterLink href="/#">Instagram</FooterLink>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© {new Date().getFullYear()} Copyright </span>
        <Link className="text-gray-600 font-semibold" href="/">
          LeaveUkraine
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
