import { children } from "react";
import { createContext, useState, useContext } from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
});
const login = (firstName, lastName, email) => {
    setUser({
        firstName,
        lastName,
        email
    });
};
const logout = ()=> {
    setUser(null);
};

return (
    <UserContext.Provider value={{user, login, logout, setUser}}>
        {children}
    </UserContext.Provider>
);
};

export const useUser = () => {
    return useContext(UserContext)
};