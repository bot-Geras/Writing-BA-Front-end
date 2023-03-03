import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NoMatch } from "./pages/Error/NoMatch";
import { Signup } from "./pages/Signup/Signup";
import { Login } from "./pages/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NoMatch />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
