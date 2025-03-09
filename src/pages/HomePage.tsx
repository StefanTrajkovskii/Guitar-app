import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, TextField, Button } from '@mui/material';
import { useUser } from '../contexts/UserContext';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showNameDialog, setShowNameDialog] = useState(false);
  const { name, colors } = useUser();
  const [newName, setNewName] = useState(name);

  const handleNameSubmit = () => {
    if (newName.trim()) {
      localStorage.setItem('userName', newName.trim());
      window.location.reload(); // Reload to update colors
      setShowNameDialog(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.gradient.from} ${colors.gradient.to}`}>
      {/* Name Input Dialog */}
      <Dialog 
        open={showNameDialog} 
        onClose={() => {
          if (newName.trim()) handleNameSubmit();
        }}
      >
        <div className="p-6">
          <h2 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>Change Your Name</h2>
          <TextField
            autoFocus
            fullWidth
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && newName.trim()) {
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
            disabled={!newName.trim()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3"
          >
            SAVE NAME
          </Button>
        </div>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Welcoming header - larger on desktop, comfortable on mobile */}
          <h1 className={`text-3xl md:text-5xl font-bold ${colors.text.primary} mb-4`}>
            Welcome,{' '}
            <button 
              onClick={() => setShowNameDialog(true)}
              className={`hover:${colors.text.secondary} transition-colors duration-200`}
            >
              {name}! 🎸
            </button>
          </h1>
          <p className={`text-lg md:text-xl ${colors.text.secondary} mb-6`}>
            Ready to start your guitar journey?
          </p>
          
          {/* Main navigation cards - stack on mobile, grid on larger screens */}
          <div className="flex flex-col gap-4 mt-8 md:grid md:grid-cols-2 lg:grid-cols-4">
            {/* Each card is full-width on mobile, grid on larger screens */}
            <button 
              onClick={() => navigate('/basics')}
              className={`bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-${colors.primary}-50 focus:outline-none focus:ring-2 
                         focus:ring-${colors.primary}-300 min-h-[120px]
                         flex flex-col items-center justify-center`}
            >
              <h2 className={`text-xl font-semibold ${colors.text.primary} mb-2`}>Basics</h2>
              <p className={colors.text.secondary}>Learn about your guitar and how to hold it</p>
            </button>

            <button 
              onClick={() => navigate('/chords')}
              className={`bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-${colors.primary}-50 focus:outline-none focus:ring-2 
                         focus:ring-${colors.primary}-300 min-h-[120px]
                         flex flex-col items-center justify-center`}
            >
              <h2 className={`text-xl font-semibold ${colors.text.primary} mb-2`}>All Chords</h2>
              <p className={colors.text.secondary}>Master guitar chords with interactive lessons</p>
            </button>

            <button 
              className={`bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-${colors.primary}-50 focus:outline-none focus:ring-2 
                         focus:ring-${colors.primary}-300 min-h-[120px]
                         flex flex-col items-center justify-center`}
              onClick={() => navigate('/practice')}
            >
              <h2 className={`text-xl font-semibold ${colors.text.primary} mb-2`}>Practice</h2>
              <p className={colors.text.secondary}>Track your progress and achievements</p>
            </button>

            <button 
              className={`bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-${colors.primary}-50 focus:outline-none focus:ring-2 
                         focus:ring-${colors.primary}-300 min-h-[120px]
                         flex flex-col items-center justify-center`}
              onClick={() => navigate('/resources')}
            >
              <h2 className={`text-xl font-semibold ${colors.text.primary} mb-2`}>Resources</h2>
              <p className={colors.text.secondary}>Helpful guides and tips</p>
            </button>
          </div>

          {/* Motivational quote - adjusted for mobile */}
          <div className="mt-8 md:mt-12 px-4">
            <p className={`text-base md:text-lg ${colors.text.secondary} italic`}>
              "Every expert was once a beginner. Let's take this journey one step at a time{['rojina', 'malecka', 'roji', 'rojina tamang'].includes(name.toLowerCase()) ? ' 💜' : ''}!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
