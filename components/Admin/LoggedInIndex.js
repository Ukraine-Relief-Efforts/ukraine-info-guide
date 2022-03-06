import Link from "next/link";
import { signOut } from "next-auth/react";
import { useTranslation } from "next-i18next";

const LoggedInIndex = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center space-y-5">
      <Link href="/admin/refugee-database">
        <a className="link">
          {t("Refugee Database")}
        </a>
      </Link>
      <Link href="/admin/translations">
        <a className="link">
          {t("Edit Translations")}
        </a>
      </Link>
      <a className="link" onClick={signOut}>
        {t("Logout")}
      </a>
    </div>
  );
}

export default LoggedInIndex;
