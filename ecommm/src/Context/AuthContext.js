import React from "react";
import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

const user = {
  name: "Masum",
  passowrd: "Jenny"
};

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);

  const loginHandler = (name, password) => {
    if (user.name === name && user.password === password) {
      setLogin(true);
    }
  };

  return (
    <AuthContext.Provider value={{ loginHandler, login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
