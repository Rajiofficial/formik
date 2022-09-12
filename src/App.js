import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './Componets/Register';
import Login from './pages/Login'

function App() {
  return (
    <div >
      <Router>
      <Routes>
<Route path="/" element={<Register/> }/>
<Route path="/login" element={<Login/>}/>


      </Routes>
      
      </Router>
    
    </div>
  );
}

export default App;
