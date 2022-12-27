import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home";
import AddStudents from "./Pages/AddStudents";
import EditStudent from "./Pages/EditStudent";


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudents />} />
          <Route path="/edit-student/:studentId" element={<EditStudent />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
