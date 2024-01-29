import React, { createContext, useState } from "react";

export const dataContext = createContext();

const ContextProvider = ({ children }) => {
  const [draw, setDraw] = useState(true);
  const [registerData,setRegisterData] = useState([]);
  const [loginData,setLoginData] = useState(null);

  const press = () => {
    setDraw(!draw);
  };

  const addRegisterData = (data) => {
    setRegisterData(pre => [...pre,data]);
  }

  const addLoginData = (data) => {
    setLoginData(data);
  }

  



  return (
    <dataContext.Provider value={{draw, press,registerData,addRegisterData,loginData,addLoginData}}>
      {children}
    </dataContext.Provider>
  );
};

export default ContextProvider;
