import React from "react";
import { UserProvider } from "./UserContext";
import LoginForm from "./LoginForm";
import Profile from "./Profile";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <LoginForm />
      <Profile />
    </UserProvider>
  );
}

export default App;
