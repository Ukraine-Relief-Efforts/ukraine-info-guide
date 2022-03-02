import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import MissileAlerts from "../components/MissileAlerts";
import TelegramAlertLinks from "../components/TelegramAlertLinks";
import { localeToTelegramAlertChannel } from "../utils";
import features from "../configs/features";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const AlertsPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [scriptLoaded, setScriptLoaded] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (scriptLoaded || !ref.current)
      return;
    const channel = localeToTelegramAlertChannel(router.locale);
    const tag = document.createElement("script");
    tag.src = "https://telegram.org/js/telegram-widget.js?15"
    tag.setAttribute("data-telegram-post", `${channel}/47`);
    tag.setAttribute("data-width", "100%");
    ref.current.appendChild(tag);
    setScriptLoaded(true);
  });

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
      <div className="text-center px-5" style={{ maxWidth: "60ch" }}>
        <p className="text-lg">
          {t("We offer Telegram channels in 9 languages for live notifications of missile and air alerts across Ukraine")}
        </p>
        <div className="my-10">
          <TelegramAlertLinks
            title={t("Choose your language")}
          />
        </div>
        <div ref={ref} style={{ maxWidth: "400px", margin: "0 auto" }} />
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
