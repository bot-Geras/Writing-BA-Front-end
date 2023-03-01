import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NoMatch } from './pages/Error/NoMatch';
import { Signup } from './pages/Signup/Signup';
import './App.css';

function App() {
  return (
    <div className="App font-poppins">
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="*" element={<NoMatch />} />

    </Routes>
    </div>
  );
}

export default App;
