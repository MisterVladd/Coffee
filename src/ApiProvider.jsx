import { Navigate, Outlet } from "react-router-dom";
import { createContext, useState, useMemo } from "react";
import { Header } from "./shared/components/header/Header";

export const ApiContext = createContext({});

export const ApiProvider = () => {
  //   const [token, setToken] = useState("");
  //   if (!token) {
  //     return <Navigate to="/403" replace />;
  //   }
  const value = useMemo(() => ({}), []);

  return (
    <ApiContext.Provider value={value}>
      <Header />
      <Outlet />
    </ApiContext.Provider>
  );
};
