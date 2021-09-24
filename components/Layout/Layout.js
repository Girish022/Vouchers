import React from "react";
import { AppContext } from "../AppContext/AppContext";
import { useAppContext } from "../Hooks/useAppContext";
import MenuBar from "../MenuBar/MenuBar";



const Layout = ({ children }) => {

  const contextValue=useAppContext();


 
  return (
    <AppContext.Provider value={contextValue}>
      <MenuBar />
      {children}
    </AppContext.Provider>
  );
};

export default Layout;
