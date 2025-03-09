import React, { useEffect } from 'react';
import { useUser } from '../../contexts/UserContext';

interface Props {
  onBack: () => void;
  onComplete: () => void;
}

const PerfectPosture: React.FC<Props> = ({ onBack, onComplete }) => {
  const { name, colors } = useUser();

  // Add ESC key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onBack();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [onBack]);

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
          Perfect Posture 🪑
        </h2>
        <p className={`${colors.text.secondary} mb-6`}>
          Hey {name}! Let's learn how to hold your guitar properly. Good posture will help you
          play comfortably and prevent any strain or tension.
        </p>

        {/* Main content sections */}
        <div className="space-y-6">
          {/* Sitting Position */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
              <span className={`w-8 h-8 bg-${colors.primary}-100 rounded-full flex items-center justify-center ${colors.text.primary} font-bold`}>
                1
              </span>
              Sitting Position
            </h3>
            <div className="space-y-4">
              <p className={colors.text.secondary}>
                Start with a comfortable chair that allows your feet to rest flat on the floor.
                Your back should be straight but relaxed - imagine a string pulling you gently up
                from the crown of your head.
              </p>
              <div className={`bg-${colors.primary}-50 p-4 rounded-lg`}>
                <h4 className={`font-medium ${colors.text.primary} mb-2`}>Quick Tips:</h4>
                <ul className={`list-disc pl-5 ${colors.text.secondary} space-y-2`}>
                  <li>Sit toward the front edge of your chair</li>
                  <li>Keep both feet flat on the floor, about shoulder-width apart</li>
                  <li>Relax your shoulders - no tension!</li>
                  <li>If needed, use a footstool under your right foot</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guitar Position */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
              <span className={`w-8 h-8 bg-${colors.primary}-100 rounded-full flex items-center justify-center ${colors.text.primary} font-bold`}>
                2
              </span>
              Guitar Position
            </h3>
            <div className="space-y-4">
              <p className={colors.text.secondary}>
                Your guitar should feel stable and comfortable against your body. The deepest curve
                of the guitar rests on your right thigh (if you're right-handed), and the neck
                should be angled slightly upward.
              </p>
              <div className={`bg-${colors.primary}-50 p-4 rounded-lg`}>
                <h4 className={`font-medium ${colors.text.primary} mb-2`}>Quick Tips:</h4>
                <ul className={`list-disc pl-5 ${colors.text.secondary} space-y-2`}>
                  <li>The guitar should rest against your chest</li>
                  <li>Keep the neck at about a 45-degree angle</li>
                  <li>Use a strap even when sitting - it helps maintain position</li>
                  <li>You should be able to look down and see the strings easily</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Hand Position */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className={`text-xl font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
              <span className={`w-8 h-8 bg-${colors.primary}-100 rounded-full flex items-center justify-center ${colors.text.primary} font-bold`}>
                3
              </span>
              Hand Position
            </h3>
            <div className="space-y-4">
              <p className={colors.text.secondary}>
                Think of your hands as being relaxed and natural. Your left hand (fretting hand)
                should be loose and flexible, while your right hand floats comfortably over the
                sound hole.
              </p>
              <div className={`bg-${colors.primary}-50 p-4 rounded-lg`}>
                <h4 className={`font-medium ${colors.text.primary} mb-2`}>Quick Tips:</h4>
                <ul className={`list-disc pl-5 ${colors.text.secondary} space-y-2`}>
                  <li>Left thumb rests behind the neck, not wrapped over</li>
                  <li>Keep your wrist straight, not bent</li>
                  <li>Curve your fingers like you're holding a small ball</li>
                  <li>Right hand should hover relaxed over the sound hole</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Section */}
        <div className={`mt-6 bg-${colors.primary}-50 rounded-xl p-6 shadow-lg border border-${colors.primary}-100`}>
          <h3 className={`text-lg font-semibold ${colors.text.primary} mb-3`}>
            Practice Exercise 🎸
          </h3>
          <p className={`${colors.text.secondary} mb-4`}>
            Try this simple exercise to check your posture:
          </p>
          <ol className={`list-decimal pl-5 ${colors.text.secondary} space-y-3`}>
            <li>
              Set up your position following the steps above
            </li>
            <li>
              Strum all strings gently with your right hand
            </li>
            <li>
              Without moving the guitar, let your arms fall to your sides
            </li>
            <li>
              Bring your hands back to position - the guitar should still be stable!
            </li>
          </ol>
        </div>

        {/* Complete Button */}
        <button
          onClick={onComplete}
          className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
                   transition-colors duration-200 flex items-center justify-center gap-2 mt-6"
        >
          <span>I've Got My Posture Right!</span> ✓
        </button>

        {/* Final Tip */}
        <div className="mt-6 bg-white rounded-xl p-6 shadow-lg">
          <h3 className={`text-lg font-semibold ${colors.text.primary} mb-2`}>
            Remember
          </h3>
          <p className={colors.text.secondary}>
            Good posture should feel natural and comfortable. If you feel any strain or tension,
            take a break and reset your position. Practice in front of a mirror to check your form!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PerfectPosture;
