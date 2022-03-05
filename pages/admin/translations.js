import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { AdminLayout } from "../../components/Admin";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const AdminPage = () => {
  const { t } = useTranslation();

  return (
    <AdminLayout title={t("Edit Translations")}>
      <div className="flex flex-col mb-10">
      </div>
    </AdminLayout>
  );
}

export default AdminPage;
