import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import TwitterTimeline from "../components/TwitterTimeline";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("Leave Ukraine")} />}>
      <div className="flex flex-col lg:flex-row grow basis-0 w-full">
        <div className="flex flex-col items-center space-y-4 grow mb-7 lg:mb-0">
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
        <div className="grow-0 space-y-4 mx-auto">
          <TwitterTimeline />
        </div>
      </div>
    </Layout>
  );
}

export default Index;
