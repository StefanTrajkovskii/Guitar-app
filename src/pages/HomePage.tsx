import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          {/* Welcoming header - larger on desktop, comfortable on mobile */}
          <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-4">
            Welcome, Malecka! 🎸
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
              className="bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-purple-50 focus:outline-none focus:ring-2 
                         focus:ring-purple-300 min-h-[120px]
                         flex flex-col items-center justify-center"
            >
              <h2 className="text-xl font-semibold text-purple-700 mb-2">First Chords</h2>
              <p className="text-gray-600 text-sm md:text-base">Start making music with easy chords</p>
            </button>

            <button 
              className="bg-white p-6 rounded-xl shadow-lg active:shadow-md 
                         transition-all duration-200 active:scale-98 
                         hover:bg-purple-50 focus:outline-none focus:ring-2 
                         focus:ring-purple-300 min-h-[120px]
                         flex flex-col items-center justify-center"
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
