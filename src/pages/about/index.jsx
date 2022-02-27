import { useTranslation, Trans } from "react-i18next";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import { GITHUB_URL } from "../../configs/constants";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>About Us - Leave Ukraine</title>
          <meta
            property="og:title"
            content="About Us - Leave Ukraine"
            data-rh="true"
          ></meta>
          <meta
            property="og:description"
            content="Information about website and the team behind it."
            data-rh="true"
          ></meta>
        </Helmet>
        <Layout hero={<Hero title={t("About Us")} />}>
          <p>
            <Trans t={t} i18nKey="Join us <1> on Github</1>">
              Join us
              <a href={GITHUB_URL} className="link">
                on Github
              </a>
            </Trans>
          </p>
        </Layout>
      </div>
    </HelmetProvider>
  );
};

export default AboutPage;
