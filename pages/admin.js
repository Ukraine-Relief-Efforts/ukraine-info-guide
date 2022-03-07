import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useSession } from "next-auth/react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Spinner from "../components/Spinner";
import {
  LoggedInIndex,
  LoggedOutIndex,
} from "../components/Admin";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const AdminPage = () => {
  const { t } = useTranslation();
  const { data: session, status } = useSession();

  return (
    <Layout hero={
      <Hero title={t("Admin Panel")} />}
    >
      <div className="flex flex-col mb-10">
        {status === "loading"
          ? <Spinner />
          : session?.user
            ? <LoggedInIndex />
            : <LoggedOutIndex />
        }
      </div>
    </Layout>
  );
}

export default AdminPage;
