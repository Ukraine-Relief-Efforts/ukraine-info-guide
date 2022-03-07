import { signIn } from "next-auth/react";
import { useTranslation } from "next-i18next";

const LoggedOutIndex = () => {
  const { t } = useTranslation();

  return (
    <a className="link" onClick={() => signIn("cognito")}>
      {t("Login")}
    </a>
  );
}

export default LoggedOutIndex;
