import AuthenticatedUserProfile from "../AuthenticatedUserProfile";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import LanguagePicker from "./LanguagePicker";
import Link from "./Link";
import features from "../../configs/features";

const getConfig = (t) => [
  {
    title: t("Leave Ukraine"),
    url: "/",
    inTopBar: false,
    enabled: true,
  },
  {
    title: t("Border Info"),
    url: "/border-information",
    inTopBar: true,
    enabled: true,
  },
  {
    title: t("Food and Shelter"),
    url: "/food-and-shelter",
    inTopBar: true,
    enabled: true,
  },
  {
    title: t("Missile Alerts"),
    url: "/alerts",
    inTopBar: true,
    enabled: true,
  },
  {
    title: t("Polish Asylum Form"),
    url: "/poland-form",
    inTopBar: false,
    enabled: features.asylumForm,
  },
  {
    title: t("Resources"),
    url: "/resources",
    inTopBar: false,
    enabled: true,
  },
  {
    title: t("About us"),
    url: "/about",
    inTopBar: false,
    enabled: features.aboutPage,
  },
  {
    title: t("Services"),
    url: "/services",
    inTopBar: false,
    enabled: features.servicesPage,
  },
];

const Links = ({ t, vertical }) => {
  const config = getConfig(t).filter(({ enabled }) => enabled);

  return (
    <>
      {
        config.map(({ inTopBar, ...rest }) =>
          (vertical || inTopBar) && <Link {...rest} key={rest.url} />
        )
      }
      {features.login &&
        <>
          <LoginButton />
          <LogoutButton />
        </>
      }
      <div style={{ marginTop: vertical ? "25px" : undefined }}>
        <LanguagePicker />
      </div>
      <AuthenticatedUserProfile />
    </>
  );
};

export default Links;
