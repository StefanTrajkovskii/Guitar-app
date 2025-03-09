import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, TextField, Button } from '@mui/material';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showNameDialog, setShowNameDialog] = useState(false);
  const [name, setName] = useState(() => localStorage.getItem('userName') || 'Guitarist');

  const handleNameSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('userName', name.trim());
      setShowNameDialog(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Name Input Dialog */}
      <Dialog 
        open={showNameDialog} 
        onClose={() => {
          if (name.trim()) handleNameSubmit();
        }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Change Your Name</h2>
          <TextField
            autoFocus
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && name.trim()) {
                handleNameSubmit();
              }
            }}
            placeholder="Your name"
            className="mb-12"
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleNameSubmit}
            disabled={!name.trim()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3"
          >
            SAVE NAME
          </Button>
        </div>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Welcoming header - larger on desktop, comfortable on mobile */}
          <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-4">
            Welcome,{' '}
            <button 
              onClick={() => setShowNameDialog(true)}
              className="hover:text-purple-600 transition-colors duration-200"
            >
              {name}! 🎸
            </button>
          </h1>
          <p className="text-lg md:text-xl text-purple-600 mb-6">
            Ready to start your guitar journey?
          </p>
          
          {/* Main navigation cards - stack on mobile, grid on larger screens */}
          <div className="flex flex-col gap-4 mt-8 md:grid md:grid-cols-2 lg:grid-cols-4">
            {/* Each card is full-width on mobile, grid on larger screens */}
            <button 
              onClick={() => navigate('/basics')}
              className="bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-purple-50 focus:outline-none focus:ring-2 
                         focus:ring-purple-300 min-h-[120px]
                         flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Basics</h2>
              <p className="text-gray-600 text-sm md:text-base">Learn about your guitar and how to hold it</p>
            </button>

            <button 
              onClick={() => navigate('/chords')}
              className="bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-purple-50 focus:outline-none focus:ring-2 
                         focus:ring-purple-300 min-h-[120px]
                         flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">All Chords</h2>
              <p className="text-gray-600 text-sm md:text-base">Master guitar chords with interactive lessons</p>
            </button>

            <button 
              className="bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-purple-50 focus:outline-none focus:ring-2 
                         focus:ring-purple-300 min-h-[120px]
                         flex flex-col items-center justify-center"
              onClick={() => navigate('/practice')}
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Practice</h2>
              <p className="text-gray-600 text-sm md:text-base">Track your progress and achievements</p>
            </button>

            <button 
              className="bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-purple-50 focus:outline-none focus:ring-2 
                         focus:ring-purple-300 min-h-[120px]
                         flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Resources</h2>
              <p className="text-gray-600 text-sm md:text-base">Helpful guides and tips</p>
            </button>
          </div>

          {/* Motivational quote - adjusted for mobile */}
          <div className="mt-8 md:mt-12 px-4">
            <p className="text-base md:text-lg text-purple-600 italic">
              "Every expert was once a beginner. Let's take this journey one step at a time! 💜"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
