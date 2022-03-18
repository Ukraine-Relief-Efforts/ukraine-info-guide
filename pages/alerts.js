import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MissileAlerts from "../components/MissileAlerts";
import TelegramAlertLinks from "../components/TelegramAlertLinks";
import TelegramEmbed from "../components/TelegramEmbed";
import AndroidButton from "../components/AndroidButton";
import IosButton from "../components/IosButton";
import features from "../configs/features";

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
          subcomponent={
            <div className="flex flex-col sm:flex-row items-center mt-6">
              <AndroidButton />
              <IosButton />
            </div>
          }
        />
      }
    >
      <div className="text-center px-5" style={{ maxWidth: "60ch" }}>
        <p className="text-lg">
          {t("We offer apps and Telegram channels in multiple languages for live notifications of missile and air alerts across Ukraine")}
        </p>
        <div className="mt-10 mb-20">
          <TelegramAlertLinks
            title={t("Preferred language channel")}
          />
        </div>
        <TelegramEmbed />
        {features.liveMissileAlerts &&
          <>
            <div>
              <MissileAlerts />
            </div>
            <div className="my-10">
              <TelegramAlertLinks
                title={t("Join us on telegram to view older alerts")}
              />
            </div>
          </>
        }
      </div>
    </Layout>
  );
}

export default AlertsPage;
