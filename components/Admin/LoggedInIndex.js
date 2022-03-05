import { useTranslation } from "next-i18next";

const LoggedInIndex = () => {
  const { t } = useTranslation();

  return (
    <a className="link" href="/api/auth/logout">
      {t("Logout")}
    </a>
  );
}

export default LoggedInIndex;
