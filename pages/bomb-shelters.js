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

  const kmlUrl = "/api/v1/country-kml";
  const kmlSource = "https://www.google.com/maps/d/u/0/viewer?mid=1s5tABxCBpgKYxMi1GHqt8zFAisiz7qRF&hl=en_US&ll=47.42056877966478%2C28.175586786855995&z=6";

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
