import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("Leave Ukraine")} />}>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/border-information" className="link">
          {t("Information about border crossings")}
        </Link>
        <Link href="/about" className="link">
          {t("About us")}
        </Link>
        <Link href="/services" className="link">
          {t("Services we provide")}
        </Link>
      </div>
    </Layout>
  )
}

export default Index;
