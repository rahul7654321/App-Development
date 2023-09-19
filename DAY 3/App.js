import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login";
import Reg from "./Components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/create' element={<Reg />} />
      </Routes>
    </Router>
  );
}

export default App;
