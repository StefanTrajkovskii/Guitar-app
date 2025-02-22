import React from 'react';
import guitarDiagram from '../../assets/acoustic_guitar_anatomy.jpg';

interface Props {
  onBack: () => void;
  onComplete: () => void;
}

const GuitarAnatomy: React.FC<Props> = ({ onBack, onComplete }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 py-6 px-4">
      <div className="max-w-lg mx-auto">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="mb-6 text-purple-700 hover:text-purple-900 flex items-center gap-2"
        >
          <span className="text-2xl">←</span> Back to Lessons
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-purple-800 mb-4">
          Meet Your Guitar 🎸
        </h2>
        <p className="text-purple-600 mb-6">
          Hey Malecka! Let's learn about the different parts of your guitar.
          Take a good look at this diagram - these are the main parts you'll need to know!
        </p>

        {/* Guitar Image */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <img 
            src={guitarDiagram} 
            alt="Labeled Guitar Parts Diagram" 
            className="w-full h-auto"
          />
        </div>

        {/* Complete Button */}
        <button
          onClick={onComplete}
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                   transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <span>I've Learned the Parts!</span> ✓
        </button>

        {/* Study Tip */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            Quick Tip
          </h3>
          <p className="text-purple-600">
            Don't worry about memorizing all the parts right away. You'll become familiar 
            with them naturally as you progress through your guitar journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuitarAnatomy;
