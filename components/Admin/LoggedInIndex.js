import { useTranslation } from "next-i18next";

const LoggedInIndex = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-5">
      <a className="link" href="/admin/refugee-database">
        {t("Refugee Database")}
      </a>
      <a className="link" href="/admin/translations">
        {t("Edit Translations")}
      </a>
      <a className="link" href="/api/auth/logout">
        {t("Logout")}
      </a>
    </div>
  );
}

export default LoggedInIndex;
