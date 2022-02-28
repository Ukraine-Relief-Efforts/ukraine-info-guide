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
        <Link href="/about">
          <a className="link">{t("About us")}</a>
        </Link>
        <Link href="/services">
          <a className="link">{t("Services we provide")}</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
