import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useUser } from "@auth0/nextjs-auth0"
import Hero from "../components/Hero";
import Layout from "../components/Layout";
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
  const { user, error, isLoading } = useUser();

  if (isLoading)
    return <Spinner />;

  return (
    <Layout hero={
      <Hero title={t("Admin Panel")} />}
    >
      <div className="flex flex-col mb-10">
        {error && <p>{error}</p>}
        {isLoading
          ? <Spinner />
          : user
            ? <LoggedInIndex />
            : <LoggedOutIndex />
        }
      </div>
    </Layout>
  );
}

export default AdminPage;
