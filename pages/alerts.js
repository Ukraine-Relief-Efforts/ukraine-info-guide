import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MissileAlerts from "../components/MissileAlerts";
import TelegramAlertLinks from "../components/TelegramAlertLinks";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const AlertsPage = () => {
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
      <div>
        <MissileAlerts />
      </div>
      <div className="my-10">
        <TelegramAlertLinks
          title={t("Join us on telegram to view older alerts")}
        />
      </div>
    </Layout>
  );
}

export default AlertsPage;
