import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Layout from "../components/Layout";
import CountryDataView from "../components/CountryDataView";
import Hero from "../components/Hero";
import useCountryData from "../hooks/useCountryData";
import {
  POLAND,
  MOLDOVA,
  ROMANIA,
  HUNGARY,
} from "../configs/constants";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const BorderInformationPage = () => {
  const { t } = useTranslation();

  return (
    <Layout
      hero={
        <Hero
          title={t("Missile Alerts")}
          subtitle={<p>
            Receive live notifications on your phone from access Ukraine
          </p>}
        />
      }
    >
      <p>{t("We offer Telegram channels in 9 languages for live notifications of missile and air alerts")}</p>
      <p>{t("Choose your language below")}:</p>
    </Layout>
  );
};

export default BorderInformationPage;
