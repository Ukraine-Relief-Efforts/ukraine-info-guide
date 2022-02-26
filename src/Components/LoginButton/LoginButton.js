import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from "react-i18next";

const LoginButton = () => {
    /**
    * To check if the user is authenticated, deconstruct the 
    * response of useAuth0
    */
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { t } = useTranslation();

    const styleClasses = {
        button: {
            backgroundColor: "blue",
            padding: "0.5rem 1rem",
            color: "white",
            borderRadius: "12px",
            marginRight: "2rem"
        }
    }
    return (
        !isAuthenticated && (
            <button style={styleClasses.button} onClick={() => loginWithRedirect()}>
                {t("Login")}
            </button>
        )
    )
}

export default LoginButton

