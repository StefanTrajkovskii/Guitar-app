import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasicsPage from './pages/basics/BasicsPage';
import AllChordsPage from './pages/chords/AllChordsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basics" element={<BasicsPage />} />
        <Route path="/chords" element={<AllChordsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
