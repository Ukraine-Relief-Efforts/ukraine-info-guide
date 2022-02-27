import { useTranslation, Trans } from "react-i18next";
import Hero from "../../Components/Hero/Hero";
import Layout from "../../Components/Layout/Layout";
import { GITHUB_URL } from "../../configs/constants";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("About us")} />}>
      <p>
        <Trans t={t} i18nKey="Join us <1>on Github</1>">
          Join us <a
            href={GITHUB_URL}
            className="link"
          >on Github</a>
        </Trans>
      </p>
    </Layout>
  );
};

export default AboutPage;
