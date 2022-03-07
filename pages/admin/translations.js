import { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import {
  AdminLayout,
  TranslationEditor,
} from "../../components/Admin";
import LanguagePicker from "../../components/Navbar/LanguagePicker";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["translation"])),
  }
});

const AdminPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [lang, setLang] = useState(router.locale);

  return (
    <AdminLayout title={t("Edit Translations")}>
      <div className="flex flex-col text-center">
        <div className="mb-5 flex justify-center">
          <LanguagePicker onChange={setLang} />
        </div>
        {lang === "en"
          ? t("English cannot be edited")
          : <TranslationEditor t={t} lang={lang} />
        }
      </div>
    </AdminLayout>
  );
}

export default AdminPage;
