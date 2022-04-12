import LanguagePicker from "./LanguagePicker";
import Link from "./Link";
import { getReportMissingPersonsLink } from "../../configs/constants";
import features from "../../configs/features";

const getConfig = (t) => [
  {
    title: t("UA Safety"),
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
    title: t("Report Missing Persons"),
    url: getReportMissingPersonsLink,
    inTopBar: false,
    enabled: true,
  },
  {
    title: t("Bomb Shelters"),
    url: "/bomb-shelters",
    inTopBar: true,
    enabled: features.bombShelters,
  },
  {
    title: t("Food and Shelter"),
    url: "/food-and-shelter",
    inTopBar: true,
    enabled: features.foodAndShelterPage,
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
    inTopBar: !features.foodAndShelterPage && !features.bombShelters,
    enabled: true,
  },
  {
    title: t("About us"),
    url: "/about",
    inTopBar: false,
    enabled: true,
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
      <div style={{ marginTop: vertical ? "25px" : undefined }}>
        <LanguagePicker />
      </div>
    </>
  );
};

export default Links;
