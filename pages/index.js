import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("Leave Ukraine")} />}>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/border-information">
          <a className="link">{t("Information about border crossings")}</a>
        </Link>
        <Link href="/food-and-shelter">
          <a className="link">{t("Food and Shelter")}</a>
        </Link>
        <Link href="/resources">
          <a className="link">{t("Resources")}</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
