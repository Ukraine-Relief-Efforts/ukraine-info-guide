import AuthenticatedUserProfile from "../AuthenticatedUserProfile/AuthenticatedUserProfile";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import LanguagePicker from "./LanguagePicker";
import Link from "./Link";

const Links = ({ t }) => {
  return (
    <>
      <Link title={t("Leave Ukraine")} url="/" />
      <Link title={t("Border Info")} url="/border-information" />
      <Link title={t("Food and Shelter")} url="/food-and-shelter" />
      <Link title={t("Polish Asylum Form")} url="/poland-form" />
      <Link title={t("About")} url="/about" />
      <Link title={t("Services")} url="/services" />
      <LoginButton />
      <LogoutButton />
      <AuthenticatedUserProfile />
      <LanguagePicker />
    </>
  );
};

export default Links;
