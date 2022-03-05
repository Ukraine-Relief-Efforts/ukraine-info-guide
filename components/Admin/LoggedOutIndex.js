import { useTranslation } from "next-i18next";

const LoggedOutIndex = () => {
  const { t } = useTranslation();

  return (
    <a className="link" href="/api/auth/login?returnTo=/admin">
      {t("Login")}
    </a>
  );
}

export default LoggedOutIndex;
