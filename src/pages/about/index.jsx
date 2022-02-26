import Hero from "../../Components/Hero/Hero";
import Layout from "../../Components/Layout/Layout";
import NewTabLink from "../../Components/NewTabLink/NewTabLink";
import { useTranslation, Trans } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("About us")} />}>
      <p>
        <Trans t={t} i18nKey="Join us <1>on Github</1>">
          Join us <a
            href="https://github.com/Ukraine-Relief-Efforts"
            className="link"
          >on Github</a>
        </Trans>
      </p>
    </Layout>
  );
};

export default AboutPage;
