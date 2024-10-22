import React from "react";
import { useUser } from "./UserContext";

function LoginForm() {
    const {user, login, logout, setUser} = useUser();
    
    const handlelogin = () => {
        login("John", "Doe", "john@gmail.com");
    };
    
    const handleUpdateUse = () => {
        updateUser ("Bekele", "Merga", "bm@gmail.com");
    }
    const handleSetUserButtonClick = () => {
        setUser({firstName: "Me", lastName: "You", email:"me@you.com"});
    };
        return (
    <div> 
        <h2>LoginForm </h2>
        <button onClick={handlelogin}>Sign in</button>
        <button onClick={()=>logout()}>Sign out</button>
        <button onClick={handleUpdateUse}> Update user</button>
        <button onClick={handleSetUserButtonClick}>test setUser</button>
        </div>
    );
}

export default LoginForm;