import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { useState } from "react";
import User from "./User";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
