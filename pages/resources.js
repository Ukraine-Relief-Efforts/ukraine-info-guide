import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

import resourcesData from "../dummydata/resources.json";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const ResourcesPage = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("Useful resources")} />}>
      <div className="w-full flex flex-col items-start space-y-10 px-4 py-2">
        {Object.keys(resourcesData).map((key) => {
          return (
            <div key={key}>
              <div className="text-2xl font-bold">{t(key)}</div>
              <div>
                {resourcesData[key].map(({ url, title }) => {
                  return (
                    <div className="mt-4" key={url}>
                      <a href={url} className="link">
                        {title}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ResourcesPage;
