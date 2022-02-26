import React from 'react'
import LoginButton from '../LoginButton/LoginButton'
import LogoutButton from '../LogoutButton/LogoutButton'
import AuthenticatedUserProfile from '../AuthenticatedUserProfile/AuthenticatedUserProfile'

function Header() {
    const styleClasses = {
        container: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "1rem 0"
        }
    }
    return (
        <div style={styleClasses.container}>
            <LoginButton />
            <LogoutButton />
            <AuthenticatedUserProfile />
        </div>
    )
}

export default Header