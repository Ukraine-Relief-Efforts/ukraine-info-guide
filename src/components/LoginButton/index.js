import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

const LoginButton = () => {
  /**
   * To check if the user is authenticated, deconstruct the
   * response of useAuth0
   */
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  return (
    !isAuthenticated && (
      <button className="authentication-button" onClick={() => loginWithRedirect()}>
        {t("Login")}
      </button>
    )
  );
};

export default LoginButton;
