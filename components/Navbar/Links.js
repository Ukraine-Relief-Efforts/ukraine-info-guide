import AuthenticatedUserProfile from "../AuthenticatedUserProfile";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import LanguagePicker from "./LanguagePicker";
import Link from "./Link";
import features from "../../configs/features";

const getConfig = (t) => [
  { title: t("Leave Ukraine"), url: "", inTopBar: false },
  { title: t("Border Info"), url: "", inTopBar: true },
  { title: t("Food and Shelter"), url: "", inTopBar: true },
  { title: t("Polish Asylum Form"), url: "", inTopBar: false },
  { title: t("Resources"), url: "", inTopBar: true },
  { title: t("About"), url: "", inTopBar: false },
  { title: t("Services"), url: "", inTopBar: false },
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
