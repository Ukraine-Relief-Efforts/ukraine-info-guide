import Link from "./Link";

const Links = ({ t }) => {
  return (
    <>
      <Link title={t("Leave Ukraine")} url="/" />
      <Link title={t("Border info")} url="/border-information" />
      <Link title={t("About")} url="/about" />
      <Link title={t("Services")} url="/services" />
    </>
  );
}

export default Links;
