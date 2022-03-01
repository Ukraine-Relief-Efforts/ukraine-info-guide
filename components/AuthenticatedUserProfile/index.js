import { useAuth0 } from "@auth0/auth0-react";

const AuthenticatedUserProfile = () => {
    /**
     * To check if the user is authenticated, deconstruct the
     * response of useAuth0
     */
    const { user, isAuthenticated } = useAuth0();
    const styleClasses = {
        container: {
            display: "flex",
            alignItems: 'center',
            padding: "1rem"
        },
        profilePicture: {
            borderRadius: "50%",
            width: "3rem",
            marginRight: "1rem"
        }
    }
    return (
        isAuthenticated && (
            <div style={styleClasses.container}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img style={styleClasses.profilePicture} src={user.picture} alt={user.name} />
                <p>{user.email}</p>
            </div>
        )
    )
}

export default AuthenticatedUserProfile
