import React from 'react';
import { useUser } from '../../contexts/UserContext';

interface Props {
  onBack: () => void;
  onComplete: () => void;
}

const TuningTime: React.FC<Props> = ({ onBack, onComplete }) => {
  const { name, colors } = useUser();

  return (
    <div className={`min-h-screen bg-gradient-to-b ${colors.gradient.from} ${colors.gradient.to} py-6 px-4`}>
      <div className="max-w-lg mx-auto">
        {/* Back button */}
        <button 
          onClick={onBack}
          className={`mb-6 ${colors.text.primary} hover:${colors.text.secondary} flex items-center gap-2`}
        >
          <span className="text-2xl">←</span> Back to Lessons
        </button>

        {/* Header */}
        <h2 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>
          Tuning Time 🎵
        </h2>

        {/* Main content */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className={`text-xl font-semibold ${colors.text.primary} mb-4`}>
            Let's Tune Your Guitar!
          </h3>
          <div className={`space-y-4 ${colors.text.secondary}`}>
            <p>
              Hey {name}! Open your GuitarTuna app and follow these simple steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Open GuitarTuna on your phone</li>
              <li>Hold your phone near your guitar</li>
              <li>Pluck each string one at a time</li>
              <li>Follow the app's guidance to tune each string</li>
            </ol>
          </div>
        </div>

        {/* Complete Button */}
        <button
          onClick={onComplete}
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                   transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>My Guitar is Tuned!</span> ✓
        </button>
      </div>
    </div>
  );
};

export default TuningTime;
