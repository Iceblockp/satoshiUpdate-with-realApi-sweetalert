
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
    
    
    
    
    <Routes>

      <Route path='/' element={
        <Login />
              } ></Route>

        


        <Route path='dashboard' element={
        <Container><Dashboard /></Container>} ></Route>
        <Route path='createForm' element={
        
        <Container><CreateForm /></Container>} ></Route>
  
        
        <Route path='register' element={<Register />} ></Route>
        <Route path='table' element={<Container><Table /></Container>} ></Route>

   
      </Routes>

  );
};

export default App;
