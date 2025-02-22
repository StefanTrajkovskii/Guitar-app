import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasicsPage from './pages/basics/BasicsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basics" element={<BasicsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
