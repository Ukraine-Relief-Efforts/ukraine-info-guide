import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next"
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Map from "../components/Map";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const BombSheltersPage = () => {
  const { t } = useTranslation();

  const kmlUrl = "/api/v1/shelter-kml";
  const kmlSource = "https://visitukraine.today/blog/101/bomb-shelters-shelters-and-defense-structures-in-the-regions-of-ukraine";

  return (
    <Layout hero={<Hero title={t("Bomb Shelters")} compact />}>
      <section className="w-full">
        <div className="w-full">
          <Map {...{ kmlUrl, kmlSource }} />
        </div>
      </section>
    </Layout>
  );
};

export default BombSheltersPage;
