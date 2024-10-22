import React from "react";
import {useUser} from "./UserContext";

function Profile() {
    const { user } = useUser();

    return (
        <div>
            {user ? (
                <div>
                    Hi, {user.firstName} {user.lastName}! Welcome.
                    <br />
                    Your email is: {user.email}
                </div>
            ) : (
                <div>Please log in to see your profile.</div>
            )}
        </div>
    );
}

export default Profile;