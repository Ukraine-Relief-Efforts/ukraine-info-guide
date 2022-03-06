import Link from "next/link";
import { useTranslation } from "next-i18next";

const LoggedOutIndex = () => {
  const { t } = useTranslation();

  return (
    <Link href="/api/auth/login?returnTo=/admin">
      <a className="link">
        {t("Login")}
      </a>
    </Link>
  );
}

export default LoggedOutIndex;
