import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("Services")} />}>
      <p>{t("Services we provide")}</p>
    </Layout>
  );
};

export default ServicesPage;
