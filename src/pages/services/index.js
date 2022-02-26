import Hero from "../../Components/Hero/Hero";
import Layout from "../../Components/Layout/Layout";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("Services")} />}>
      <p>{t("Services we provide")}</p>
    </Layout>
  );
};

export default ServicesPage;
