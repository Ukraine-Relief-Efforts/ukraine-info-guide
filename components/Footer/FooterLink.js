import Link from "next/link";

const FooterLink = ({ href, children }) => (
  <p className="mb-4">
    <Link href={href}>
      <a className="text-gray-600">{children}</a>
    </Link>
  </p>
);

export default FooterLink;
