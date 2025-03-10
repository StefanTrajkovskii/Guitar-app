import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, TextField, Button } from '@mui/material';
import { useUser } from '../contexts/UserContext';
import '../styles/animations.css';
import backgroundImage from '../assets/images/Background-guitar.jpg';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showNameDialog, setShowNameDialog] = useState(false);
  const { name, colors } = useUser();
  const [newName, setNewName] = useState(name);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showNameDialog && inputRef.current) {
      // Small timeout to ensure the dialog is fully rendered
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    }
  }, [showNameDialog]);

  const handleNameSubmit = () => {
    if (newName.trim()) {
      localStorage.setItem('userName', newName.trim());
      window.location.reload();
      setShowNameDialog(false);
    }
  };

  return (
    <div 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {/* Darker overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      
      {/* Name Input Dialog */}
      <Dialog 
        open={showNameDialog} 
        onClose={() => {
          if (newName.trim()) handleNameSubmit();
        }}
        TransitionProps={{
          onEntered: () => {
            inputRef.current?.focus();
            inputRef.current?.select();
          }
        }}
      >
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Change Your Name</h2>
          <TextField
            inputRef={inputRef}
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
            variant="outlined"
          />
          <Button
            variant="contained"
            fullWidth
            onClick={handleNameSubmit}
            disabled={!newName.trim()}
            className="py-3 text-lg"
          >
            SAVE NAME
          </Button>
        </div>
      </Dialog>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center">
          {/* Welcoming header with animation */}
          <div className={`opacity-0 ${mounted ? 'animate-fadeIn' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow-lg tracking-tight">
              Welcome,{' '}
              <button 
                onClick={() => setShowNameDialog(true)}
                className="hover:text-indigo-300 transition-colors duration-200"
              >
                {name}! 🎸
              </button>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 text-shadow-md font-light">
              Ready to start your guitar journey?
            </p>
          </div>
          
          {/* Main navigation cards with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              {
                title: 'Basics',
                description: 'Learn about your guitar and how to hold it',
                path: '/basics',
                delay: 0.4
              },
              {
                title: 'All Chords',
                description: 'Master guitar chords with interactive lessons',
                path: '/chords',
                delay: 0.6
              },
              {
                title: 'Practice',
                description: 'Track your progress and achievements',
                path: '/practice',
                delay: 0.8
              },
              {
                title: 'Resources',
                description: 'Helpful guides and tips',
                path: '/resources',
                delay: 1.0
              }
            ].map((item) => (
              <button 
                key={item.title}
                onClick={() => navigate(item.path)}
                className={`opacity-0 card-hover bg-white/95 backdrop-blur-md p-8 rounded-xl 
                          shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)]
                          focus:outline-none focus:ring-2 focus:ring-indigo-300
                          min-h-[180px] flex flex-col items-center justify-center
                          ${mounted ? 'animate-scaleIn' : ''}`}
                style={{ animationDelay: `${item.delay}s` }}
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-3 tracking-tight">{item.title}</h2>
                <p className="text-gray-600 text-lg font-light leading-relaxed">{item.description}</p>
              </button>
            ))}
          </div>

          {/* Motivational quote with animation */}
          <div 
            className={`mt-12 px-4 opacity-0 ${mounted ? 'animate-slideIn' : ''}`}
            style={{ animationDelay: '1.2s' }}
          >
            <p className="text-xl md:text-2xl text-white italic text-shadow-md font-light tracking-wide">
              "Every expert was once a beginner. Let's take this journey one step at a time{['rojina', 'malecka', 'roji', 'rojina tamang'].includes(name.toLowerCase()) ? ' 💜' : ''}!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
