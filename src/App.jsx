import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ContainerDashboard,
  CreateForm,
  Dashboard,
  LoginPage,
  RegisterPage,
  TablePage,
} from "./page";
import NotFound from "./NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/dashboard" element={<ContainerDashboard/>}>
        <Route index element={<Dashboard />}/>
        <Route path="createForm" element={<CreateForm />}/>
        <Route path="table" element={<TablePage />}/>
      </Route>
      <Route path="register" element={<RegisterPage />}></Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};

export default App;
