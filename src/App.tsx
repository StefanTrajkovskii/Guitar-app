import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasicsPage from './pages/basics/BasicsPage';
import AllChordsPage from './pages/chords/AllChordsPage';
import PracticePage from './pages/practice/PracticePage';
import ResourcesPage from './pages/resources/ResourcesPage';
import { PracticeTimerProvider, FloatingTimer, PracticeModal } from './contexts/PracticeTimerContext';
import { UserProvider } from './contexts/UserContext';

const App: React.FC = () => {
  return (
    <Router>
      <UserProvider>
        <PracticeTimerProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/basics" element={<BasicsPage />} />
            <Route path="/chords" element={<AllChordsPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/resources" element={<ResourcesPage />} />
          </Routes>
          <FloatingTimer />
          <PracticeModal />
        </PracticeTimerProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
