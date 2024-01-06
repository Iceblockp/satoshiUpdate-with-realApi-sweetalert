
import React from "react";
import Container from "./components/Container";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import CreateForm from "./components/CreateForm";






const App = () => {
  return (
    <Container>

     


      <Routes>
        <Route path='/' element={
        
        <Dashboard />} ></Route>
        <Route path='createForm' element={
        
        <CreateForm />} ></Route>
  
        <Route path='account' element={
                <Login />
              } ></Route>
        <Route path='other' element={<div>
          other
        </div>} ></Route>
        <Route path='next' element={<div>
          next
        </div>} ></Route>
      </Routes>

    </Container>
  );
};

export default App;
