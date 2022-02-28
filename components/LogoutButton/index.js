import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "next-i18next";

const LogoutButton = () => {
  /**
   * To check if the user is authenticated, deconstruct the
   * response of useAuth0
   */
  const { logout, isAuthenticated } = useAuth0();
  const { t } = useTranslation();

  return (
    isAuthenticated && (
      <button className="authentication-button" onClick={() => logout()}>
        {t("Logout")}
      </button>
    )
  );
};

export default LogoutButton;
