import React from 'react';
import { useUser } from '../../contexts/UserContext';

interface Props {
  onBack: () => void;
  onComplete: () => void;
}

const HandPositions: React.FC<Props> = ({ onBack, onComplete }) => {
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
          Hand Positions 🤚
        </h2>
        <p className={`${colors.text.secondary} mb-6`}>
          Hey {name}! Let's learn how to position both hands correctly. This is super important
          for playing cleanly and comfortably!
        </p>

        {/* Main content */}
        <div className="space-y-6">
          {/* Fretting Hand */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
              <span className={`w-8 h-8 bg-${colors.primary}-100 rounded-full flex items-center justify-center ${colors.text.primary} font-bold`}>
                1
              </span>
              Fretting Hand (Left Hand)
            </h3>
            <div className="space-y-4">
              <p className={colors.text.secondary}>
                Your fretting hand is responsible for pressing the strings against the frets to create
                different notes. Think of your hand like a relaxed "C" shape.
              </p>
              <div className={`bg-${colors.primary}-50 p-4 rounded-lg`}>
                <h4 className={`font-medium ${colors.text.primary} mb-2`}>Key Points:</h4>
                <ul className={`list-disc pl-5 ${colors.text.secondary} space-y-2`}>
                  <li>Thumb rests on the back of the neck, roughly opposite your middle finger</li>
                  <li>Keep your wrist straight - avoid bending it</li>
                  <li>Fingers should be curved, like holding a small apple</li>
                  <li>Use your fingertips to press the strings, not the flat part of your fingers</li>
                  <li>Keep your fingers close to the frets for cleaner sound</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strumming Hand */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
              <span className={`w-8 h-8 bg-${colors.primary}-100 rounded-full flex items-center justify-center ${colors.text.primary} font-bold`}>
                2
              </span>
              Strumming Hand (Right Hand)
            </h3>
            <div className="space-y-4">
              <p className={colors.text.secondary}>
                Your strumming hand creates the sound by either strumming or picking the strings.
                Keep it relaxed and positioned over the sound hole.
              </p>
              <div className={`bg-${colors.primary}-50 p-4 rounded-lg`}>
                <h4 className={`font-medium ${colors.text.primary} mb-2`}>Key Points:</h4>
                <ul className={`list-disc pl-5 ${colors.text.secondary} space-y-2`}>
                  <li>Keep your wrist loose and relaxed</li>
                  <li>Position your hand between the sound hole and bridge</li>
                  <li>For strumming, use a loose wrist motion</li>
                  <li>When picking, keep your fingers gently curved</li>
                  <li>Don't rest your hand on the guitar body while playing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
              <span className={`w-8 h-8 bg-${colors.primary}-100 rounded-full flex items-center justify-center ${colors.text.primary} font-bold`}>
                3
              </span>
              Common Mistakes to Avoid
            </h3>
            <div className="space-y-4">
              <div className={`bg-${colors.primary}-50 p-4 rounded-lg`}>
                <ul className={`list-disc pl-5 ${colors.text.secondary} space-y-2`}>
                  <li>Wrapping your thumb over the top of the neck</li>
                  <li>Pressing strings with flat fingers instead of fingertips</li>
                  <li>Tensing up your hands while playing</li>
                  <li>Positioning your fretting hand too far from the frets</li>
                  <li>Strumming too hard or with a stiff wrist</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practice Exercise */}
          <div className={`bg-${colors.primary}-50 rounded-xl p-6 shadow-lg border border-${colors.primary}-100`}>
            <h3 className={`text-lg font-semibold ${colors.text.primary} mb-3`}>
              Practice Exercise 🎸
            </h3>
            <p className={`${colors.text.secondary} mb-4`}>
              Try this simple exercise to get comfortable with your hand positions:
            </p>
            <ol className={`list-decimal pl-5 ${colors.text.secondary} space-y-3`}>
              <li>
                Place your fretting hand in position without pressing any strings
              </li>
              <li>
                Check your thumb position on the back of the neck
              </li>
              <li>
                One by one, press each string with each finger, keeping them curved
              </li>
              <li>
                With your strumming hand, practice gentle down strums over the sound hole
              </li>
              <li>
                Focus on keeping both hands relaxed throughout the exercise
              </li>
            </ol>
          </div>

          {/* Complete Button */}
          <button
            onClick={onComplete}
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                     transition-colors duration-200 flex items-center justify-center gap-2 mt-6"
          >
            <span>I've Got My Hand Positions!</span> ✓
          </button>

          {/* Final Tip */}
          <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
            <h3 className={`text-lg font-semibold ${colors.text.primary} mb-2`}>
              Remember
            </h3>
            <p className={colors.text.secondary}>
              If your hands start feeling tense or tired, take a short break! Good technique takes time
              to develop, so be patient with yourself. The most important thing is to stay relaxed
              and keep practicing!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandPositions;
