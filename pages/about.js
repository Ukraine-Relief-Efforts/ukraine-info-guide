import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { GITHUB_URL } from "../configs/constants";

const githubI18nKey = (() => {
	const t = (s) => s;
	return t("Join us <1>on Github</1>");
})();

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("About us")} />}>
      <p>
        <Trans t={t} i18nKey={githubI18nKey}>
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
