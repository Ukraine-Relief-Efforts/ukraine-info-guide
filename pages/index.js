import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import IconPicker from "../components/IconPicker";
import features from "../configs/features";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const Description = ({ t }) => (
  <p className="opacity-70 max-w-md mt-5 text-center">
    {t("Information collected from governments and other sources about the situation in Ukraine and how to leave")}
  </p>
);

const IndexPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const options = [];
  options.push({
    name: t("Border Crossings"),
    icon: "/HomePageIcons/border-crossing.svg",
    onClick: () => router.push("/border-information"),
  });
  if (features.bombShelters)
    options.push({
      name: t("Bomb Shelters"),
      icon: "/HomePageIcons/bomb-shelters.svg",
      onClick: () => router.push("/bomb-shelters"),
    });
  if (features.foodAndShelterPage)
    options.push({
      name: t("Food and Shelter"),
      icon: "/HomePageIcons/food-and-shelter.svg",
      onClick: () => router.push("/food-and-shelter"),
    });
  options.push({
    name: t("Missile Alerts"),
    icon: "/HomePageIcons/missile-alert.svg",
    onClick: () => router.push("/alerts"),
  });
  options.push({
    name: t("Resources"),
    icon: "/HomePageIcons/resources.svg",
    onClick: () => router.push("/resources"),
  });

  const curfews = [
    { region: t("Kyiv region"), time: "19:00 - 7:00" },
    { region: t("Dnipropetrovsk region"), time: "20:00 - 6:00" },
    { region: t("Cherkasy region"), time: "22:00 - 6:00" },
    { region: t("Vinnytsia region"), time: "22:00 - 7:00" },
    { region: t("Zhytomyr region"), time: "22:00 - 6:00" },
    { region: t("Zaporizhzhia region"), time: "22:00 - 6:00" },
    { region: t("Ivano-Frankivsk region"), time: "22:00 - 8:00" },
    { region: t("Mykolaiv region"), time: "22:00 - 6:00" },
    { region: t("Odessa region"), time: "19:00 - 6:00" },
    { region: t("Poltava region"), time: "22:00 - 6:00" },
    { region: t("Rivne region"), time: "22:00 - 6:00" },
    { region: t("Kharkiv region"), time: "18:00 - 6:00" },
    { region: t("Cherkasy region"), time: "22:00 - 6:00" },
    { region: t("Chernihiv region"), time: "22:00 - 6:00" },
    { region: t("Kherson region"), time: "22:00 - 6:00" },
    { region: t("Khmelnytsky region"), time: "22:00 - 6:00" },
  ];

  return (
    <Layout hero={
      <Hero title={t("Leave Ukraine")} subcomponent={<Description t={t} />} />}
    >
      <div className="flex flex-col w-full mb-10">
        <IconPicker options={options} />
      </div>
      <div className="flex flex-col items-center mt-10">
        <p className="font-semibold text-xl mb-2">{t("Curfews")}</p>
        {
          curfews.map(({ region, time }, index) => (
            <div key={index}>
              {region} - {time}
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

export default IndexPage;
