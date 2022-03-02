import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import IconPicker from "../components/IconPicker";

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

const Index = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const options = [
    {
      name: t("Border Crossings"),
      icon: "/HomePageIcons/border-crossing.svg",
      onClick: () => router.push("/border-information"),
    },
    {
      name: t("Food and Shelter"),
      icon: "/HomePageIcons/food-and-shelter.svg",
      onClick: () => router.push("/food-and-shelter"),
    },
    {
      name: t("Missile Alerts"),
      icon: "/HomePageIcons/missile-alert.svg",
      onClick: () => router.push("/alerts"),
    },
    {
      name: t("Resources"),
      icon: "/HomePageIcons/resources.svg",
      onClick: () => router.push("/resources"),
    },
  ];

  return (
    <Layout hero={
      <Hero title={t("Leave Ukraine")} subcomponent={<Description t={t} />} />}
    >
      <div className="flex flex-col w-full mb-10">
        <IconPicker options={options} />
      </div>
    </Layout>
  );
}

export default Index;
