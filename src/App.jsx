
import React from "react";
import Container from "./components/Container";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import CreateForm from "./components/CreateForm";
import Table from './components/Table'







const App = () => {
  return (
    <Container>

     


      <Routes>
        <Route path='/' element={
        
        <Dashboard />} ></Route>
        <Route path='createForm' element={
        
        <CreateForm />} ></Route>
  
        <Route path='login' element={
                <Login />
              } ></Route>
        <Route path='register' element={<Register />} ></Route>
        <Route path='table' element={<Table />} ></Route>

      </Routes>

    </Container>
  );
};

export default App;
