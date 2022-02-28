import AuthenticatedUserProfile from "../AuthenticatedUserProfile";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import LanguagePicker from "./LanguagePicker";
import Link from "./Link";
import features from "../../configs/features";

const getConfig = (t) => [
  { title: t("Leave Ukraine"), url: "/", inTopBar: false },
  { title: t("Border Info"), url: "/border-information", inTopBar: true },
  { title: t("Food and Shelter"), url: "/food-and-shelter", inTopBar: true },
  { title: t("Polish Asylum Form"), url: "/poland-form", inTopBar: false },
  { title: t("Resources"), url: "/resources", inTopBar: true },
  { title: t("About"), url: "/about", inTopBar: false },
  { title: t("Services"), url: "/services", inTopBar: false },
];

const Links = ({ t, vertical }) => {
  return (
    <>
      {
        getConfig(t).map(({ inTopBar, ...rest }) =>
          (vertical || inTopBar) && <Link {...rest} />
        )
      }
      {features.login &&
        <>
          <LoginButton />
          <LogoutButton />
        </>
      }
      <LanguagePicker />
      <AuthenticatedUserProfile />
    </>
  );
};

export default Links;
