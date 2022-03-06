import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  AdminLayout,
  RefugeeDatabase,
} from "../../components/Admin";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const RefugeeDatabasePage = () => {
  const { t } = useTranslation();

  return (
    <AdminLayout title={t("Refugee Database")}>
      <RefugeeDatabase />
    </AdminLayout>
  );
}

export default RefugeeDatabasePage;
