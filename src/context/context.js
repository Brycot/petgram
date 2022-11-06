import React, { createContext, useState } from "react";
import { useApolloClient } from "@apollo/client";
const AppContext = createContext(null);

const AppProvider = (props) => {
  const client = useApolloClient();
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("token");
  });

  const activateAuth = (token) => {
    window.sessionStorage.setItem("token", token);
    setIsAuth(!isAuth);
  };

  const removeAuth = () => {
    window.sessionStorage.removeItem("token");
    client.resetStore();
    setIsAuth(false);
  };

  return (
    <AppContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
