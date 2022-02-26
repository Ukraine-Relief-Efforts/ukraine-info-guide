import Layout from "../../Components/Layout/Layout";
import Hero from "../../Components/Hero/Hero";
import BorderCrossingInfo from "../../Components/BorderCrossingInfo/BorderCrossingInfo";
import { useTranslation } from "react-i18next";

import dummyData from "../../dummydata/poland_data.json";

const BorderInformationPage = () => {
  const { t } = useTranslation();

  return (
    <Layout
      hero={
        <Hero
          title={t("How to cross Poland's border")}
          subtitle="👉 www.gov.pl 👈"
          subtitleLink="https://www.gov.pl/web/udsc/ukraina-en"
        />
      }
    >
      <BorderCrossingInfo data={dummyData} />
    </Layout>
  );
};

export default BorderInformationPage;
