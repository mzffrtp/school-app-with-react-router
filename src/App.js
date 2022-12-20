import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home";
import AddStudents from "./Pages/AddStudents";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-students" element={<AddStudents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
