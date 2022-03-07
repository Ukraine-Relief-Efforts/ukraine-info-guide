import NewTabLink from "../NewTabLink";

const FooterLink = ({ href, children }) => (
  <p className="mb-4">
    <NewTabLink href={href} className="text-gray-600">
      {children}
    </NewTabLink>
  </p>
);

export default FooterLink;
