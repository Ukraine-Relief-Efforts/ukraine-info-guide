import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AdminLayout } from "../../components/Admin";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const RefugeeDatabasePage = () => {
  const { t } = useTranslation();

  return (
    <AdminLayout title={t("Refugee Database")}>
      <div className="flex flex-col mb-10">
        <p>{t("Refugee Database")}</p>
      </div>
    </AdminLayout>
  );
}

export default RefugeeDatabasePage;
