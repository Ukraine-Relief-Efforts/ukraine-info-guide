import LanguagePicker from "./LanguagePicker";
import Link from "./Link";

const Links = ({ t }) => {
  return (
    <>
      <Link title={t("Leave Ukraine")} url="/" />
      <Link title={t("Border Info")} url="/border-information" />
      <Link title={t("Polish Asylum Form")} url="/poland-form" />
      <Link title={t("About")} url="/about" />
      <Link title={t("Services")} url="/services" />
      <LanguagePicker />
    </>
  );
};

export default Links;
